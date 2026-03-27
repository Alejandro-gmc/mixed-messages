const signs = {

  aries: {
    name: "ARIES",
    description: "The Courageous Ram",
    type: "Fire, Cardinal",
    chart: "As the first sign, Aries begins the zodiac with bold, impulsive energy. This placement in a chart marks a need for action, independence, and a pioneering spirit.",
    numbers: [1, 9, 10, 18, 22],
    colors: ["red"]
  },

  taurus: {
    name: "TAURUS",
    description: "The Determined Bull",
    type: "Earth, Fixed",
    chart: "This sign provides grounded stability and persistence. A Taurus placement in a chart indicates a need for reliability, comfort, and a 'slow and steady' approach to growth.",
    numbers: [2, 6, 11, 20, 29],
    colors: ["green"]
  },

  gemini: {
    name: "GEMINI",
    description: "The Charming Twins",
    type: "Air, Mutable",
    chart: "Symbolized by the Twins, Gemini brings duality and curiosity. It represents the chart's intellectual adaptability, where communication, learning, and quick-witted exchanges are prioritized.",
    numbers: [3, 5, 12, 23, 31],
    colors: ["yellow"]
  },

  cancer: {
    name: "CANCER",
    description: "The Nurturing Crab",
    type: "Water, Cardinal",
    chart: "This sign is the emotional initiator, focused on protection and loyalty. In a chart, Cancer placements show where a person is most intuitive, nurturing, and sensitive to their surroundings.",
    numbers: [2, 7, 11, 16, 20, 25],
    colors: ["white", "silver"]
  },

  leo: {
    name: "LEO",
    description: "The Majestic Lion",
    type: "Fire, Fixed",
    chart: "Represented by the Lion, Leo is characterized by radiant, dramatic, and creative energy. A Leo placement points to where one seeks to shine, lead, and express their unique identity with confidence.",
    numbers: [1, 4, 10, 13, 19, 22],
    colors: ["gold", "yellow"]
  },

  virgo: {
    name: "VIRGO",
    description: "The Analytical Maiden",
    type: "Earth, Mutable",
    chart: "Virgo is the analytical perfectionist of the zodiac. In a chart, it signifies a need for order, practical service, and a meticulous approach to refining the physical world.",
    numbers: [5, 14, 23, 32, 41, 50],
    colors: ["beige", "brown"]
  },

  libra: {
    name: "LIBRA",
    description: "The Harmonious Scales",
    type: "Air, Cardinal",
    chart: "Known as the 'harmonious diplomat,' Libra initiates through social connection and balance. These placements highlight a desire for justice, partnership, and aesthetic harmony.",
    numbers: [6, 7, 15, 24, 33],
    colors: ["pink"]
  },

  scorpio: {
    name: "SCORPIO",
    description: "The Intense Scorpion",
    type: "Water, Fixed",
    chart: "Scorpio brings intense, magnetic, and transformative energy. It indicates where a chart holds deep emotional reserves, a quest for authenticity, and powerful intuition.",
    numbers: [8, 9, 18, 27, 36],
    colors: ["black", "darkred"]
  },

  sagittarius: {
    name: "SAGITTARIUS",
    description: "The Adventurous Archer",
    type: "Fire, Mutable",
    chart: "This sign seeks expansion through adventure and wisdom. Sagittarius placements in a chart represent a need for freedom, honesty, and the constant pursuit of a 'higher truth'.",
    numbers: [3, 9, 12, 21, 30],
    colors: ["purple"]
  },

  capricorn: {
    name: "CAPRICORN",
    description: "The Ambitious Sea-Goat",
    type: "Earth, Cardinal",
    chart: "Representing the 'sea goat,' Capricorn is disciplined and action-oriented toward long-term goals. In a chart, it shows where one is most responsible, ambitious, and firm in their standards.",
    numbers: [4, 8, 17, 26, 35],
    colors: ["gray"]
  },

  aquarius: {
    name: "AQUARIUS",
    description: "The Visionary Water-Bearer",
    type: "Air, Fixed",
    chart: "Often seen as the humanitarian rebel, Aquarius values innovation and social vision. It marks where a chart-holder is most likely to defy norms and seek intellectual independence.",
    numbers: [1, 7, 8, 17, 26],
    colors: ["lightblue"]
  },

  pisces: {
    name: "PISCES",
    description: "The Dreamy Fish",
    type: "Water, Mutable",
    chart: "The final sign is the dreamer, characterized by empathy and fluid boundaries. Pisces placements indicate where a person is most imaginative, compassionate, and spiritually connected.",
    numbers: [3, 7, 11, 19, 28],
    colors: ["seagreen", "aqua"]
  }
};


const health = [
  "A small change in routine will boost your wellbeing.",
  "Focus on mental as well as physical wellbeing.",
  "Take time to rest and recover.",
  "You will feel energized today.",
  "Exercise will bring positive results.",
  "Stay hydrated and mindful of your diet.",
  "Listen to your body and avoid overexertion.",
  "A minor issue may arise but it will pass quickly.",
  "Balance is key to maintaining your health.",
  "Stress could affect you so try to relax.",
  "Fresh air will clear your mind.",
  "Healthy habits will feel easier today."
];

const love = [
  "Be open about your feelings.",
  "A past connection may reappear.",
  "Love will grow with patience.",
  "Communication will strengthen your relationship.",
  "Take time to understand your partner.",
  "Enjoy the small moments together.",
  "A romantic surprise may come your way.",
  "Trust is essential today.",
  "New connections are on the horizon.",
  "A misunderstanding could arise so stay calm.",
  "You may feel a spark with someone unexpected.",
  "Honesty will deepen your bond."
];

const work = [
  "Opportunities for growth will appear.",
  "Innovation will bring rewards.",
  "Stay focused on your goals.",
  "Your efforts will be recognized.",
  "A challenge will test your skills.",
  "Patience will help you succeed.",
  "Avoid distractions to stay productive.",
  "Be cautious with decisions today.",
  "Teamwork will lead to success.",
  "A new project may begin.",
  "Your creativity will shine at work.",
  "You may receive helpful feedback."
];

const money = [
  "Think long term about finances.",
  "Unexpected expenses may arise.",
  "Opportunities to earn more will appear.",
  "Avoid unnecessary spending.",
  "Savings will bring peace of mind.",
  "Financial gains are possible.",
  "Plan your budget carefully.",
  "Seek advice before major decisions.",
  "A smart investment could pay off.",
  "Be cautious with large purchases.",
  "You may find a new way to save.",
  "Your financial discipline will pay off."
];


function getRandomUniqueIndices(length) {
  const indices = Array.from({ length: length }, (_, i) => i);
  const result = [];
  for (let i = 0; i < length; i++) {
    const randIdx = Math.floor(Math.random() * indices.length);
    result.push(indices[randIdx]);
    indices.splice(randIdx, 1);
  }
  return result;
}

const signNames = Object.keys(signs);
const healthIndices = getRandomUniqueIndices(health.length);
const loveIndices = getRandomUniqueIndices(love.length);
const workIndices = getRandomUniqueIndices(work.length);
const moneyIndices = getRandomUniqueIndices(money.length);

const generated = {};
for (let i = 0; i < signNames.length; i++) {
  const sign = signNames[i];
  generated[sign] = {
    health: health[healthIndices[i]],
    love: love[loveIndices[i]],
    work: work[workIndices[i]],
    money: money[moneyIndices[i]]
  };
}


function showSign(sign) {

  const data = signs[sign];
  const sentences = generated[sign];

  // Ensure the reading section is visible once a sign is selected
  const readingSection = document.getElementById("reading");
  if (readingSection) {
    readingSection.style.display = "block";
  }

  // =========================
  // UPDATE CARD CONTENT
  // =========================

  document.getElementById("sign-name").innerText = data.name;
  document.getElementById("sign-description").innerText = data.description;
  document.getElementById("sign-type").innerText = data.type;
  document.getElementById("sign-chart").innerText = data.chart;

  // Lucky color/s Comes in this line, but it's got its special generator below, as
  // it's not only text, but also the coloured boxes, what is displayed.

  document.getElementById("lucky-numbers").innerText =
    data.numbers.join(", ");

  // LUCKY COLORS GENERATOR
  const container = document.getElementById("lucky-colors");
  container.innerHTML = "";

  data.colors.forEach(color => {
    const item = document.createElement("span");
    item.className = "reading__lucky-color-item";

    // Text label
    const label = document.createElement("span");
    label.className = "reading__lucky-color-label";
    label.innerText = color;

    // Colored square
    const square = document.createElement("span");
    square.className = "reading__lucky-color-swatch";
    square.style.backgroundColor = color;

    item.appendChild(label);
    item.appendChild(square);
    container.appendChild(item);
  });

  // =========================
  // UPDATE SENTENCES
  // =========================

  document.getElementById("love-text").innerText = sentences.love;
  document.getElementById("work-text").innerText = sentences.work;
  document.getElementById("money-text").innerText = sentences.money;
  document.getElementById("health-text").innerText = sentences.health;
};
