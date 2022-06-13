// Text converter
// From Latin to Cyrilic

const textConvert = (type, text) => {
  const conversionMap = {
    a: "a",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    gj: "ѓ",
    e: "е",
    zh: "ж",
    z: "з",
    dz: "ѕ",
    i: "и",
    j: "ј",
    k: "к",
    l: "л",
    lj: "љ",
    m: "м",
    n: "н",
    nj: "њ",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    kj: "ќ",
    u: "у",
    f: "ф",
    h: "х",
    c: "ц",
    ch: "ч",
    dzh: "џ",
    sh: "ш",
  };

  for (let c in conversionMap) {
    let regex;
    switch (type) {
      case "cyr2lat":
        regex = new RegExp(`${conversionMap[c]}`, "g"); // /џ/g
        //regex = new RegExp(`ж`, 'g'); // /џ/g
        text = text.replace(regex, c);
        break;
      case "lat2cyr":
        regex = new RegExp(`${c}`, "g");
        text = text.replace(regex, conversionMap[c]);
        break;
    }
  }
  return text;
};

const textStats = (text) => {
  if (typeof text !== "string") return;

  let out = {
    letters: 0,
    words: 0,
    sentences: 0,
    greaterThan5: 0,
    leserThan5: 0,
    equalTo5: 0,
  };

  out.letters = text.length;
  out.words = text.split(" ").length;
  out.sentences = text.split(".").length;

  let words = text.split(" ");

  for (let w of words) {
    if (w.length === 5) out.equalTo5++;
    if (w.length > 5) out.greaterThan5++;
    if (w.length < 5) out.leserThan5++;
  }

  return out;
};

module.exports = {
  textConvert,
  textStats,
};
