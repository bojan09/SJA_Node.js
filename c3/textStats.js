const textStats = (text) => {
  if (typeof text !== "string") return;

  let output = {
    letters: 0,
    words: 0,
    sentences: 0,
    graterThan5: 0,
    lesserThan5: 0,
    equalTo5: 0,
  };

  output.letters = text.length;
  output.words = text.split(" ").length;
  output.sentences = text.split(".").length;

  let words = text.split(" ");

  for (let w of words) {
    if (w.length === 5) output.equalTo5++;
    if (w.length > 5) output.graterThan5++;
    if (w.length < 5) output.lesserThan5++;
  }

  return output;
};
