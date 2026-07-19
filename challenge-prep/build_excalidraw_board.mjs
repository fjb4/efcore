import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = dirname(fileURLToPath(import.meta.url));
const BOARD_WIDTH = 1600;
const BOARD_HEIGHT = 900;

const colors = {
  ink: "#212529",
  gray: "#495057",
  grayFill: "#f1f3f5",
  blue: "#1971c2",
  blueFill: "#e7f5ff",
  amber: "#e67700",
  amberFill: "#fff4e6",
  green: "#2b8a3e",
  greenFill: "#ebfbee",
  white: "#ffffff",
};

let elementCounter = 0;
const elements = [];
const svg = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="${BOARD_WIDTH}" height="${BOARD_HEIGHT}" viewBox="0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}">`,
  `<rect width="${BOARD_WIDTH}" height="${BOARD_HEIGHT}" fill="${colors.white}"/>`,
  `<style>
    text { font-family: Arial, Helvetica, sans-serif; fill: ${colors.ink}; }
    .heading { font-weight: 700; letter-spacing: 0.4px; }
    .small { font-size: 16px; }
  </style>`,
];

function nextIdentity(prefix) {
  elementCounter += 1;
  return {
    id: `${prefix}-${elementCounter}`,
    seed: 1000 + elementCounter * 97,
    versionNonce: 5000 + elementCounter * 193,
    index: `a${String(elementCounter).padStart(3, "0")}`,
  };
}

function common(prefix, x, y, width, height, locked) {
  return {
    ...nextIdentity(prefix),
    x,
    y,
    width,
    height,
    angle: 0,
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    groupIds: [],
    frameId: null,
    roundness: { type: 3 },
    version: 1,
    isDeleted: false,
    boundElements: null,
    updated: 1784476800000,
    link: null,
    locked,
  };
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function rect({
  x,
  y,
  width,
  height,
  stroke = colors.gray,
  fill = colors.white,
  locked = true,
  strokeWidth = 2,
  radius = 14,
}) {
  const element = {
    ...common("rect", x, y, width, height, locked),
    type: "rectangle",
    strokeColor: stroke,
    backgroundColor: fill,
    fillStyle: "solid",
    strokeWidth,
  };
  elements.push(element);
  svg.push(
    `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`,
  );
  return element.id;
}

function text({
  x,
  y,
  value,
  fontSize = 22,
  color = colors.ink,
  locked = true,
  align = "left",
  weight = 400,
  lineHeight = 1.25,
  width,
}) {
  const lines = value.split("\n");
  const calculatedWidth = width ?? Math.max(...lines.map((line) => line.length)) * fontSize * 0.58;
  const calculatedHeight = lines.length * fontSize * lineHeight;
  elements.push({
    ...common("text", x, y, calculatedWidth, calculatedHeight, locked),
    type: "text",
    strokeColor: color,
    backgroundColor: "transparent",
    fillStyle: "solid",
    strokeWidth: 1,
    roundness: null,
    text: value,
    fontSize,
    fontFamily: 2,
    textAlign: align,
    verticalAlign: "top",
    containerId: null,
    originalText: value,
    autoResize: true,
    lineHeight,
  });

  const anchor = align === "center" ? "middle" : "start";
  const svgX = align === "center" ? x + calculatedWidth / 2 : x;
  const className = weight >= 600 ? ` class="heading"` : "";
  lines.forEach((line, index) => {
    svg.push(
      `<text${className} x="${svgX}" y="${y + fontSize + index * fontSize * lineHeight}" font-size="${fontSize}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}">${escapeXml(line)}</text>`,
    );
  });
}

function line({
  x,
  y,
  points,
  stroke = colors.gray,
  width = 2,
  endArrowhead = "arrow",
  locked = true,
}) {
  const xs = points.map(([px]) => px);
  const ys = points.map(([, py]) => py);
  elements.push({
    ...common("arrow", x, y, Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys), locked),
    type: "arrow",
    strokeColor: stroke,
    backgroundColor: "transparent",
    fillStyle: "solid",
    strokeWidth: width,
    roundness: { type: 2 },
    points,
    lastCommittedPoint: null,
    startBinding: null,
    endBinding: null,
    startArrowhead: null,
    endArrowhead,
    elbowed: false,
  });

  const absolutePoints = points.map(([px, py]) => `${x + px},${y + py}`).join(" ");
  svg.push(
    `<defs><marker id="arrow-${elementCounter}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="${stroke}"/></marker></defs>`,
    `<polyline points="${absolutePoints}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"${endArrowhead ? ` marker-end="url(#arrow-${elementCounter})"` : ""}/>`,
  );
}

// Canvas boundary and concise header.
const canvasBoundaryId = rect({
  x: 10,
  y: 10,
  width: BOARD_WIDTH - 20,
  height: BOARD_HEIGHT - 20,
  stroke: "#ced4da",
  fill: colors.white,
  locked: true,
  strokeWidth: 2,
  radius: 18,
});
text({
  x: 48,
  y: 34,
  value: "ACME ONBOARDING PILOT",
  fontSize: 32,
  weight: 700,
});
text({
  x: 48,
  y: 76,
  value: "42 -> 14 days   |   quality cannot fall   |   renewal in ~90 days",
  fontSize: 21,
  color: colors.gray,
});
text({
  x: 48,
  y: 128,
  value: "LIVE DECISIONS",
  fontSize: 24,
  weight: 700,
});

const decisionCardWidth = 742;
const decisionCardHeight = 174;
const decisionCards = [
  {
    x: 48,
    y: 168,
    title: "RENEWAL PROOF",
    prompt: "What must Priya see?",
    stroke: colors.blue,
    fill: colors.blueFill,
  },
  {
    x: 810,
    y: 168,
    title: "PILOT CHANGE",
    prompt: "What assumption or blocker changes the plan?",
    stroke: colors.amber,
    fill: colors.amberFill,
  },
  {
    x: 48,
    y: 362,
    title: "OWNER",
    prompt: "Who owns the weekly artifact?",
    stroke: colors.green,
    fill: colors.greenFill,
  },
  {
    x: 810,
    y: 362,
    title: "NEXT MOVE",
    prompt: "What evidence bar and expansion target?",
    stroke: colors.green,
    fill: colors.greenFill,
  },
];

decisionCards.forEach((card) => {
  rect({
    x: card.x,
    y: card.y,
    width: decisionCardWidth,
    height: decisionCardHeight,
    stroke: card.stroke,
    fill: colors.white,
    radius: 14,
  });
  text({
    x: card.x + 20,
    y: card.y + 15,
    value: card.title,
    fontSize: 20,
    color: card.stroke,
    weight: 700,
  });
  text({
    x: card.x + 20,
    y: card.y + 52,
    value: card.prompt,
    fontSize: 21,
    color: colors.gray,
  });
  rect({
    x: card.x + 20,
    y: card.y + 92,
    width: decisionCardWidth - 40,
    height: 60,
    stroke: card.stroke,
    fill: card.fill,
    radius: 10,
  });
  text({
    x: card.x + 38,
    y: card.y + 105,
    value: "[type live]",
    fontSize: 23,
    color: card.stroke,
    locked: false,
  });
});

// Minimal customer-owned operating loop.
text({
  x: 48,
  y: 574,
  value: "THE CUSTOMER-OWNED LOOP",
  fontSize: 24,
  weight: 700,
});

const nodeY = 622;
const nodeWidth = 248;
const nodeHeight = 86;
const nodeXs = [48, 366, 684, 1002, 1320];
const nodes = [
  ["RAVI", "scope"],
  ["JOINER + MAYA", "plan -> approve -> build"],
  ["NINA", "review"],
  ["MARCUS", "CI + deploy"],
  ["DAVID -> PRIYA", "own -> scale"],
];

nodes.forEach(([label, detail], index) => {
  const fill = index === 1 ? colors.blueFill : colors.grayFill;
  const stroke = index === 1 ? colors.blue : colors.gray;
  rect({ x: nodeXs[index], y: nodeY, width: nodeWidth, height: nodeHeight, stroke, fill });
  text({
    x: nodeXs[index],
    y: nodeY + 12,
    value: label,
    fontSize: 18,
    color: stroke,
    weight: 700,
    align: "center",
    width: nodeWidth,
  });
  text({
    x: nodeXs[index],
    y: nodeY + 47,
    value: detail,
    fontSize: 17,
    align: "center",
    width: nodeWidth,
  });
  if (index < nodes.length - 1) {
    line({
      x: nodeXs[index] + nodeWidth + 10,
      y: nodeY + nodeHeight / 2,
      points: [[0, 0], [52, 0]],
      stroke: colors.gray,
    });
  }
});

// Metrics remain anchors, not a readout table.
text({
  x: 48,
  y: 758,
  value: "MEASURE",
  fontSize: 20,
  weight: 700,
});
text({
  x: 215,
  y: 754,
  value: "Ramp time - David",
  fontSize: 20,
  color: colors.gray,
});
text({
  x: 675,
  y: 754,
  value: "PR rework - Nina",
  fontSize: 20,
  color: colors.gray,
});
text({
  x: 1085,
  y: 754,
  value: "Design to deploy - Ravi + Marcus",
  fontSize: 20,
  color: colors.gray,
});

line({
  x: 48,
  y: 812,
  points: [[0, 0], [1504, 0]],
  stroke: "#ced4da",
  width: 1,
  endArrowhead: null,
});
text({
  x: 48,
  y: 832,
  value: "BLUE confirmed   |   AMBER changed / risk   |   GREEN owner / action",
  fontSize: 16,
  color: colors.gray,
});
text({
  x: 865,
  y: 832,
  value: "Claims: observed | historical | proxy | hypothesis | missing",
  fontSize: 16,
  color: colors.gray,
});

svg.push("</svg>");

// Keep the native board fully editable. Lock only the outer canvas boundary so it cannot be
// accidentally moved while the rest of the prepared rectangles, text, arrows, and live fields
// remain selectable and editable in Excalidraw.
for (const element of elements) {
  element.locked = element.id === canvasBoundaryId;
}

const excalidrawDocument = {
  type: "excalidraw",
  version: 2,
  source: "https://excalidraw.com",
  elements,
  appState: {
    gridSize: null,
    gridStep: 5,
    gridModeEnabled: false,
    viewBackgroundColor: colors.white,
    currentItemFontFamily: 2,
    currentItemStrokeColor: colors.ink,
    currentItemBackgroundColor: "transparent",
    currentItemFillStyle: "solid",
    currentItemStrokeWidth: 2,
    currentItemStrokeStyle: "solid",
    currentItemRoughness: 1,
    currentItemOpacity: 100,
    currentItemRoundness: "round",
    scrollX: 0,
    scrollY: 0,
    zoom: { value: 1 },
  },
  files: {},
};

writeFileSync(
  join(outputDirectory, "ACME_WORKING_SESSION_BOARD.excalidraw"),
  `${JSON.stringify(excalidrawDocument, null, 2)}\n`,
);
writeFileSync(
  join(outputDirectory, "ACME_WORKING_SESSION_BOARD.svg"),
  `${svg.join("\n")}\n`,
);
