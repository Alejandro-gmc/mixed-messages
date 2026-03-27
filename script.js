// ===================
// HOROSCOPE GENERATOR
// ===================

// =================================
// ZODIAC CARDS DATABASE (ALL SIGNS)
// =================================

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


// =====================================================================
// RANDOM SENTENCES DATABASE PER CATEGORY (HEALTH, LOVE, WORK and MONEY)
// =====================================================================

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
"Healthy habits will feel easier today.",
"Your body will respond well to care.",
"Stretching will improve your mood.",
"You may discover a new wellness routine.",
"Consistency will bring noticeable improvements.",
"Your immune system will feel stronger.",
"Rest will be more beneficial than usual.",
"Mindfulness will help reduce tension.",
"You will feel motivated to make healthier choices.",
"Your energy levels will stabilize.",
"A calm environment will support your wellbeing.",
"You may feel the need to slow down.",
"Good sleep will enhance your clarity.",
"You will feel more in tune with your body.",
"A positive mindset will boost your health.",
"Gentle movement will help you feel grounded.",
"You may overcome a lingering discomfort.",
"Your resilience will be higher today.",
"Breathing exercises will help you refocus.",
"You will feel encouraged to break a bad habit.",
"Your body will appreciate a lighter routine.",
"You may feel unusually refreshed.",
"Healthy boundaries will protect your wellbeing.",
"You will find comfort in simple rituals.",
"Your stamina will gradually increase.",
"You may feel inspired to try a new sport.",
"Your mood will benefit from physical activity.",
"You will feel more balanced emotionally.",
"Small improvements will feel significant.",
"You may feel relief from recent tension.",
"Your focus will improve with proper rest.",
"You will feel more aligned with your goals.",
"Your body will respond well to nourishment.",
"You may feel compelled to detox your routine.",
"You will find strength in slowing down.",
"Your wellbeing will benefit from gratitude.",
"You may feel a renewed sense of vitality.",
"Your health will improve through patience."
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
"Honesty will deepen your bond.",
"You will feel appreciated by someone close.",
"A heartfelt conversation will bring clarity.",
"You may reconnect with someone meaningful.",
"Affection will feel more natural today.",
"Your intuition will guide your love life.",
"You will feel more confident expressing emotions.",
"A tender moment will brighten your day.",
"You may attract someone with similar values.",
"Patience will bring emotional harmony.",
"You will feel more connected than usual.",
"A romantic opportunity may surprise you.",
"You may resolve a lingering tension.",
"Your charm will be especially strong today.",
"You will feel supported by someone you care about.",
"A new phase in love may begin.",
"You may feel drawn to someone with authenticity.",
"Your heart will feel lighter today.",
"You will find comfort in vulnerability.",
"A meaningful gesture will touch you.",
"You may discover a shared passion.",
"Your relationship will feel more balanced.",
"You will feel inspired to show affection.",
"A moment of clarity will guide your choices.",
"You may attract positive attention.",
"Your emotional needs will feel clearer.",
"You will feel more open to connection.",
"A romantic idea may take shape.",
"You may feel unexpectedly adored.",
"Your love life will feel more hopeful.",
"You will feel encouraged to take a chance.",
"A deep conversation will strengthen trust.",
"You may feel closer to someone than before.",
"Your heart will feel more grounded.",
"You will appreciate someone with sincerity.",
"A new dynamic may emerge in your love life.",
"You may feel ready for a new beginning.",
"Your emotions will feel easier to express.",
"You will feel warmth from someone special."
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
"You may receive helpful feedback.",
"Your leadership will be appreciated.",
"You will feel motivated to improve.",
"An idea you have will gain support.",
"You may learn a valuable skill.",
"Your productivity will increase.",
"You will feel more organized today.",
"Collaboration will bring strong results.",
"You may impress someone influential.",
"Your confidence will grow at work.",
"You will find clarity in a complex task.",
"You may resolve a work related issue.",
"Your dedication will pay off.",
"You will feel inspired to innovate.",
"You may discover a new opportunity.",
"Your communication will be effective.",
"You will feel more in control of your tasks.",
"A breakthrough may occur unexpectedly.",
"You may feel proud of your progress.",
"Your work environment will feel supportive.",
"You will handle pressure with ease.",
"You may receive recognition for your ideas.",
"Your focus will be sharper than usual.",
"You will feel encouraged to take initiative.",
"A productive rhythm will emerge.",
"You may find a smarter way to work.",
"Your skills will feel more refined.",
"You will feel aligned with your goals.",
"A positive shift may occur at work.",
"You may feel motivated to reorganize.",
"Your determination will stand out.",
"You will adapt well to a new challenge.",
"You may feel inspired by a colleague.",
"Your work ethic will shine today.",
"You will feel more balanced professionally.",
"You may receive unexpected support.",
"Your ideas will resonate with others.",
"You will feel ready for the next step."
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
"Your financial discipline will pay off.",
"You will feel more secure about money.",
"A small expense may bring big value.",
"You may receive helpful financial guidance.",
"Your income may increase soon.",
"You will feel motivated to organize finances.",
"A financial opportunity may surprise you.",
"You may recover from a recent setback.",
"Your budgeting skills will improve.",
"You will feel more confident about spending.",
"A wise choice will benefit your future.",
"You may discover a new income source.",
"Your savings will grow steadily.",
"You will feel encouraged to invest.",
"A financial concern will ease.",
"You may negotiate successfully.",
"Your financial awareness will sharpen.",
"You will feel more in control of expenses.",
"A profitable idea may emerge.",
"You may avoid a costly mistake.",
"Your money habits will improve.",
"You will feel optimistic about finances.",
"A delayed payment may finally arrive.",
"You may receive a small reward.",
"Your financial intuition will be strong.",
"You will feel inspired to plan ahead.",
"A stable period is approaching.",
"You may find value in simplicity.",
"Your financial goals will feel achievable.",
"You will feel empowered to make changes.",
"A smart purchase will benefit you.",
"You may gain clarity about priorities.",
"Your resources will stretch further.",
"You will feel more responsible with money.",
"A financial door may open.",
"You may receive unexpected support.",
"Your patience will bring financial stability.",
"You will feel ready to improve your finances."
];


// ==========================
// RANDOM SENTENCES GENERATOR
// ==========================
// NB: Generates 4 random sentences for each sign and keeps them to show always the same 4
// sentences for the same signs.

const generated = {};

for (let sign in signs) {
  generated[sign] = {
    health: health[Math.floor(Math.random() * health.length)],
    love: love[Math.floor(Math.random() * love.length)],
    work: work[Math.floor(Math.random() * work.length)],
    money: money[Math.floor(Math.random() * money.length)]
  };
}


// ======================================================
// MAIN FUNCTION (ACTIONED BY onclick)
// ======================================================

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

    // Text label
    const text = document.createTextNode(color + " ");

    // Colored square
    const square = document.createElement("span");
    square.style.display = "inline-block";
    square.style.width = "15px";
    square.style.height = "15px";
    square.style.backgroundColor = color;
    square.style.marginRight = "8px";

    container.appendChild(text);
    container.appendChild(square);
  });

  // =========================
  // UPDATE SENTENCES
  // =========================

  document.getElementById("love-text").innerText = sentences.love;
  document.getElementById("work-text").innerText = sentences.work;
  document.getElementById("money-text").innerText = sentences.money;
  document.getElementById("health-text").innerText = sentences.health;
};
