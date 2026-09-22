import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { MATH_LEVELS } from "../src/data/math-levels.js";
import { resolveMathArt } from "../src/data/assets.js";

const expected = [
  {
    title: "Long or Round",
    bins: ["long", "round"],
    names: true,
    items: [["Pencil", "long"], ["Ball", "round"], ["Ruler", "long"], ["Orange", "round"], ["Stick", "long"], ["Plate", "round"], ["Candle", "long"], ["Coin", "round"], ["Straight rope", "long"], ["Bangle", "round"]],
  },
  {
    title: "Long or Round Pictures",
    bins: ["long", "round"],
    names: false,
    items: [["Pencil", "long"], ["Ball", "round"], ["Candle", "long"], ["Orange", "round"], ["Ruler", "long"], ["Plate", "round"], ["Stick", "long"], ["Coin", "round"], ["Straight rope", "long"], ["Bangle", "round"]],
  },
  {
    title: "Ball-like or Box-like",
    bins: ["ball", "box"],
    names: true,
    items: [["Football", "ball"], ["Orange", "ball"], ["Clay ball", "ball"], ["Marble", "ball"], ["Round toy ball", "ball"], ["Matchbox", "box"], ["Book", "box"], ["Pencil box", "box"], ["Cardboard box", "box"], ["Empty food box", "box"]],
  },
  {
    title: "Cap-like or Glass-like",
    bins: ["cap", "glass"],
    names: true,
    items: [["Birthday cap", "cap"], ["Funnel", "cap"], ["Paper cone", "cap"], ["Toy cone", "cap"], ["Cone-shaped party hat", "cap"], ["Drinking glass", "glass"], ["Water bottle", "glass"], ["Tall jar", "glass"], ["Cylindrical container", "glass"], ["Tall can", "glass"]],
  },
  {
    title: "Shape Family Mix",
    bins: ["ball", "glass", "box"],
    names: true,
    items: [["Football", "ball"], ["Orange", "ball"], ["Clay ball", "ball"], ["Drinking glass", "glass"], ["Water bottle", "glass"], ["Tall can", "glass"], ["Matchbox", "box"], ["Book", "box"], ["Pencil box", "box"], ["Cardboard box", "box"]],
  },
  {
    title: "Roll or Slide",
    bins: ["rolls", "slides"],
    names: true,
    items: [["Ball", "rolls"], ["Book", "slides"], ["Orange", "rolls"], ["Matchbox", "slides"], ["Marble", "rolls"], ["Notebook", "slides"], ["Clay ball", "rolls"], ["Pencil box", "slides"], ["Round toy ball", "rolls"], ["Flat cardboard box", "slides"]],
  },
  {
    title: "Roll or Slide Pictures",
    bins: ["rolls", "slides"],
    names: false,
    items: [["Ball", "rolls"], ["Book", "slides"], ["Orange", "rolls"], ["Matchbox", "slides"], ["Marble", "rolls"], ["Notebook", "slides"], ["Clay ball", "rolls"], ["Pencil box", "slides"], ["Round toy", "rolls"], ["Flat box", "slides"]],
  },
  {
    title: "Roll, Slide or Both",
    bins: ["rolls", "slides", "both"],
    names: true,
    items: [["Ball", "rolls"], ["Orange", "rolls"], ["Marble", "rolls"], ["Book", "slides"], ["Matchbox", "slides"], ["Pencil box", "slides"], ["Water bottle", "both"], ["Tin can", "both"], ["Toy cylinder", "both"], ["Cylindrical container", "both"]],
  },
  {
    title: "Motion Master",
    bins: ["rolls", "slides", "both"],
    names: false,
    items: [["Football", "rolls"], ["Orange", "rolls"], ["Clay ball", "rolls"], ["Book", "slides"], ["Matchbox", "slides"], ["Cardboard box", "slides"], ["Water bottle", "both"], ["Tin can", "both"], ["Toy cylinder", "both"], ["Cylindrical jar", "both"]],
  },
];

const same = (left, right) => JSON.stringify(left) === JSON.stringify(right);
const projectRoot = new URL("../", import.meta.url);
if (MATH_LEVELS.length !== expected.length) throw new Error(`Expected ${expected.length} levels, found ${MATH_LEVELS.length}.`);

for (const [index, level] of MATH_LEVELS.entries()) {
  const spec = expected[index];
  const actualBins = level.bins.map(({ id }) => id);
  const actualItems = level.items.map(({ name, answer }) => [name, answer]);
  if (level.title !== spec.title) throw new Error(`Level ${index + 1}: title mismatch.`);
  if (level.showNames !== spec.names) throw new Error(`Level ${index + 1}: name-label setting mismatch.`);
  if (!same(actualBins, spec.bins)) throw new Error(`Level ${index + 1}: bin order mismatch.`);
  if (!same(actualItems, spec.items)) throw new Error(`Level ${index + 1}: item or answer mismatch.`);

  for (const entry of [...level.items, ...level.bins]) {
    const assetUrl = resolveMathArt(entry.art, entry.assetSet);
    await access(fileURLToPath(new URL(assetUrl, projectRoot)));
  }
}

const assetFor = (levelNumber, itemName) => {
  const entry = MATH_LEVELS[levelNumber - 1].items.find(({ name }) => name === itemName);
  return resolveMathArt(entry.art, entry.assetSet);
};

if (!/coin(?:%20|\s).*\.png$/i.test(assetFor(1, "Coin"))) throw new Error("Coin is not connected to the coin artwork.");
if (!/stick\.svg$/i.test(assetFor(1, "Stick"))) throw new Error("Stick is not connected to the stick artwork.");
if (!/toy(?:%20|\s)cylinder/i.test(assetFor(8, "Toy cylinder"))) throw new Error("Toy cylinder artwork mismatch.");
if (!/cylindrical(?:%20|\s)container/i.test(assetFor(8, "Cylindrical container"))) throw new Error("Cylindrical container artwork mismatch.");

console.log(`Validated ${MATH_LEVELS.length} levels, ${MATH_LEVELS.reduce((total, level) => total + level.items.length, 0)} item mappings, and all referenced art files.`);
