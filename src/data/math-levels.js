const item = (name, art, answer) => ({ name, art, answer });

const shapeIcons = {
  long: "pencil",
  round: "ball",
  ball: "football",
  box: "matchbox",
  cap: "cap",
  glass: "glass",
  rolls: "ball",
  slides: "book",
  both: "bottle",
};

const bins = (entries) => entries.map(([id, label]) => ({ id, label, art: shapeIcons[id] }));

const LEVELS = [
  {
    title: "Long or Round",
    sortingFocus: "Basic identification",
    objective: "Sort familiar objects based on whether they are clearly long or round.",
    learningFocus: "Recognise clear examples of long and round objects.",
    instruction: "Sort each object: long or round?",
    showNames: true,
    bins: bins([["long", "Long"], ["round", "Round"]]),
    items: [
      item("Pencil", "pencil", "long"), item("Ball", "ball", "round"), item("Ruler", "ruler", "long"), item("Orange", "orange", "round"), item("Stick", "stick", "long"),
      item("Plate", "plate", "round"), item("Candle", "candle", "long"), item("Coin", "coin", "round"), item("Straight rope", "rope", "long"), item("Bangle", "bangle", "round"),
    ],
  },
  {
    title: "Long or Round Pictures",
    sortingFocus: "Same concept without names",
    objective: "Apply the Long or Round classification without object names.",
    learningFocus: "Recognise long and round objects from pictures alone.",
    instruction: "Look carefully. Is it long or round?",
    showNames: false,
    bins: bins([["long", "Long"], ["round", "Round"]]),
    items: [
      item("Pencil", "pencil", "long"), item("Ball", "ball", "round"), item("Candle", "candle", "long"), item("Orange", "orange", "round"), item("Ruler", "ruler", "long"),
      item("Plate", "plate", "round"), item("Stick", "stick", "long"), item("Coin", "coin", "round"), item("Straight rope", "rope", "long"), item("Bangle", "bangle", "round"),
    ],
  },
  {
    title: "Ball-like or Box-like",
    sortingFocus: "Shape similarity",
    objective: "Sort objects according to which familiar shape they most closely resemble.",
    learningFocus: "Understand that different real objects may share a similar overall shape.",
    instruction: "Which shape family does it look like?",
    showNames: true,
    bins: bins([["ball", "Ball-like"], ["box", "Box-like"]]),
    items: [
      item("Football", "ball", "ball"), item("Orange", "orange", "ball"), item("Clay ball", "marble", "ball"), item("Marble", "marble", "ball"), item("Round toy ball", "ball", "ball"),
      item("Matchbox", "matchbox", "box"), item("Book", "book", "box"), item("Pencil box", "pencilbox", "box"), item("Cardboard box", "matchbox", "box"), item("Empty food box", "pencilbox", "box"),
    ],
  },
  {
    title: "Cap-like or Glass-like",
    sortingFocus: "Shape similarity",
    objective: "Identify objects that resemble a birthday cap or a glass.",
    learningFocus: "Compare objects by their overall visible form rather than by colour or purpose.",
    instruction: "Match the object to its shape family.",
    showNames: true,
    bins: bins([["cap", "Cap-like"], ["glass", "Glass-like"]]),
    items: [
      item("Birthday cap", "cap", "cap"), item("Funnel", "cap", "cap"), item("Paper cone", "cap", "cap"), item("Toy cone", "cap", "cap"), item("Cone-shaped party hat", "cap", "cap"),
      item("Drinking glass", "glass", "glass"), item("Water bottle", "bottle", "glass"), item("Tall jar", "glass", "glass"), item("Cylindrical container", "can", "glass"), item("Tall can", "can", "glass"),
    ],
  },
  {
    title: "Shape Family Mix",
    sortingFocus: "Mixed shape recognition",
    objective: "Classify objects when three different shape families are visible at the same time.",
    learningFocus: "Discriminate between multiple familiar shape families.",
    instruction: "Choose the matching shape family.",
    showNames: true,
    bins: bins([["ball", "Ball-like"], ["glass", "Glass-like"], ["box", "Box-like"]]),
    items: [
      item("Football", "ball", "ball"), item("Orange", "orange", "ball"), item("Clay ball", "marble", "ball"), item("Drinking glass", "glass", "glass"), item("Water bottle", "bottle", "glass"),
      item("Tall can", "can", "glass"), item("Matchbox", "matchbox", "box"), item("Book", "book", "box"), item("Pencil box", "pencilbox", "box"), item("Cardboard box", "matchbox", "box"),
    ],
  },
  {
    title: "Roll or Slide",
    sortingFocus: "Basic movement prediction",
    objective: "Predict whether familiar objects will roll or slide on a surface.",
    learningFocus: "Connect the shape of an object with how it moves.",
    instruction: "What will it do on a surface?",
    showNames: true,
    bins: bins([["rolls", "Rolls"], ["slides", "Slides"]]),
    items: [
      item("Ball", "ball", "rolls"), item("Book", "book", "slides"), item("Orange", "orange", "rolls"), item("Matchbox", "matchbox", "slides"), item("Marble", "marble", "rolls"),
      item("Notebook", "book", "slides"), item("Clay ball", "marble", "rolls"), item("Pencil box", "pencilbox", "slides"), item("Round toy ball", "ball", "rolls"), item("Flat cardboard box", "matchbox", "slides"),
    ],
  },
  {
    title: "Roll or Slide Pictures",
    sortingFocus: "Movement using image only",
    objective: "Predict movement using only the object's image.",
    learningFocus: "Strengthen visual understanding of curved and flat surfaces.",
    instruction: "Look at the picture. Does it roll or slide?",
    showNames: false,
    bins: bins([["rolls", "Rolls"], ["slides", "Slides"]]),
    items: [
      item("Ball", "ball", "rolls"), item("Book", "book", "slides"), item("Orange", "orange", "rolls"), item("Matchbox", "matchbox", "slides"), item("Marble", "marble", "rolls"),
      item("Notebook", "book", "slides"), item("Clay ball", "marble", "rolls"), item("Pencil box", "pencilbox", "slides"), item("Round toy", "ball", "rolls"), item("Flat box", "matchbox", "slides"),
    ],
  },
  {
    title: "Roll, Slide or Both",
    sortingFocus: "Full chapter concept",
    objective: "Decide whether each object rolls, slides, or can do both.",
    learningFocus: "Connect curved and flat surfaces with rolling, sliding, or both movements.",
    instruction: "Can it roll, slide, or do both?",
    showNames: true,
    bins: bins([["rolls", "Rolls"], ["slides", "Slides"], ["both", "Both"]]),
    items: [
      item("Ball", "ball", "rolls"), item("Orange", "orange", "rolls"), item("Marble", "marble", "rolls"), item("Book", "book", "slides"), item("Matchbox", "matchbox", "slides"),
      item("Pencil box", "pencilbox", "slides"), item("Water bottle", "bottle", "both"), item("Tin can", "can", "both"), item("Toy cylinder", "can", "both"), item("Cylindrical container", "bottle", "both"),
    ],
  },
  {
    title: "Motion Master",
    sortingFocus: "Final image-only application",
    objective: "Classify objects as Rolls, Slides, or Both using images only.",
    learningFocus: "Apply the entire chapter's shape-and-motion understanding independently.",
    instruction: "Use everything you know about movement!",
    showNames: false,
    bins: bins([["rolls", "Rolls"], ["slides", "Slides"], ["both", "Both"]]),
    items: [
      item("Football", "ball", "rolls"), item("Orange", "orange", "rolls"), item("Clay ball", "marble", "rolls"), item("Book", "book", "slides"), item("Matchbox", "matchbox", "slides"),
      item("Cardboard box", "matchbox", "slides"), item("Water bottle", "bottle", "both"), item("Tin can", "can", "both"), item("Toy cylinder", "can", "both"), item("Cylindrical jar", "bottle", "both"),
    ],
  },
];

const exactArt = {
  level3: { Football: "football", "Clay ball": "clayball", "Round toy ball": "roundtoy", "Cardboard box": "cardboard", "Empty food box": "foodbox" },
  level4: { "Birthday cap": "birthdaycap", Funnel: "funnel", "Paper cone": "papercone", "Toy cone": "toycone", "Cone-shaped party hat": "partyhat", "Drinking glass": "glass", "Water bottle": "bottle", "Tall jar": "jar", "Cylindrical container": "cylinder", "Tall can": "can" },
  level5: { Football: "football", "Clay ball": "clayball", "Cardboard box": "cardboard" },
  level6: { "Clay ball": "clayball", "Round toy ball": "roundtoy", "Flat cardboard box": "flatbox" },
  level7: { "Clay ball": "clayball", "Round toy": "roundtoy", "Flat box": "flatbox" },
  level8: { Ball: "football", Football: "football", "Toy cylinder": "cylinder", "Cylindrical container": "cylindrical" },
  level9: { Football: "football", "Clay ball": "clayball", "Cardboard box": "cardboard", "Toy cylinder": "cylinder", "Cylindrical jar": "cylindrical" },
};

const levelTuning = [
  { goal: 15, occupancyStart: 2, occupancyTarget: 5, occupancyRampAt: 3, intro: "Drag the pencil to LONG and the ball to ROUND." },
  { goal: 15, occupancyStart: 2, occupancyTarget: 5, occupancyRampAt: 2, intro: "Look at each picture. The name tags are gone!", streakBonus: true },
  { goal: 16, occupancyStart: 2, occupancyTarget: 5, occupancyRampAt: 2, intro: "Different objects can belong to the same shape family." },
  { goal: 16, occupancyStart: 2, occupancyTarget: 5, occupancyRampAt: 2, intro: "Compare the whole shape, not its color or use." },
  { goal: 18, occupancyStart: 2, occupancyTarget: 5, occupancyRampAt: 2, intro: "Three shape families are ready. Choose carefully.", trioBonus: true },
  { goal: 16, occupancyStart: 2, occupancyTarget: 5, occupancyRampAt: 2, intro: "Round surfaces roll. Flat surfaces slide." },
  { goal: 16, occupancyStart: 2, occupancyTarget: 5, occupancyRampAt: 2, intro: "Picture challenge: decide without name tags.", streakBonus: true },
  { goal: 18, occupancyStart: 2, occupancyTarget: 5, occupancyRampAt: 2, intro: "A cylinder can roll on its side and slide on its flat end.", bothBonus: true },
  { goal: 20, occupancyStart: 3, occupancyTarget: 5, occupancyRampAt: 0, intro: "Motion Master: sort every picture independently." },
];

function buildTutorial(level, tuning, levelIndex) {
  const representatives = level.bins
    .map((bin) => level.items.find((candidate) => candidate.answer === bin.id))
    .filter(Boolean);
  const demonstration = representatives[0] ?? level.items[0];
  const interactive = representatives.find((candidate) => candidate.name !== demonstration?.name)
    ?? level.items.find((candidate) => candidate.name !== demonstration?.name)
    ?? demonstration;

  return {
    concept: level.title,
    intro: `${level.title}?`,
    mandatory: levelIndex === 0,
    steps: [
      { type: "concept", instruction: `${level.title}?` },
      {
        type: "demonstration",
        objectName: demonstration.name,
        instruction: `${demonstration.name} → ${level.bins.find((bin) => bin.id === demonstration.answer)?.label ?? demonstration.answer}`,
      },
      {
        type: "interactive",
        objectName: interactive.name,
        instruction: `Sort the ${interactive.name}!`,
        allowHints: true,
      },
      { type: "completion", instruction: "You're ready!" },
    ],
  };
}

// Every item carries its source art set.  Rendering stays reusable while the
// assets follow the supplied Grade 1 Maths folder structure for Levels 1–9.
export const MATH_LEVELS = LEVELS.map((level, index) => ({
  ...level,
  ...levelTuning[index],
  tutorial: buildTutorial(level, levelTuning[index], index),
  assetSet: `level${index + 1}`,
  requiredCorrectPerItem: 2,
  bins: level.bins.map((entry) => ({
    ...entry,
    art: index >= 7 && entry.id === "rolls" ? "football" : entry.art,
    assetSet: `level${index + 1}`,
  })),
  items: level.items.map((entry) => ({
    ...entry,
    art: exactArt[`level${index + 1}`]?.[entry.name] ?? entry.art,
    assetSet: `level${index + 1}`,
  })),
}));

export const getLevel = (index) => MATH_LEVELS[index];
