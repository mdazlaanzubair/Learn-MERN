import { useState } from "react";

export default function TextActions({
  inputText,
  previewText,
  setPreviewText,
}) {
  let word_arr;

  const [vowelsCount, setVowelsCount] = useState(0);
  const [helpingVerbsCount, setHelpingVerbsCount] = useState(0);

  // text analyzer function
  const analyzeText = () => {
    word_arr = previewText.toLowerCase().split(" ");

    // counting vowels
    countVowels(previewText.toLowerCase());

    // counting helping verbs
    countHelpingVerbs(word_arr);
  };

  // vowels counter function
  function countVowels(charArray) {
    let counter = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let char of charArray) {
      if (vowels.includes(char)) {
        counter++;
      }
    }
    setVowelsCount(counter);
  }

  // helping verbs counter function
  function countHelpingVerbs(wordArray) {
    let counter = 0;
    const vowels = ["is", "am", "are", "was", "were"];
    for (let char of wordArray) {
      if (vowels.includes(char)) {
        counter++;
      }
    }
    setHelpingVerbsCount(counter);
  }

  const caseChanger = (e) => {
    switch (e.target.value) {
      case "upper":
        setPreviewText(previewText.toUpperCase());
        break;
      case "lower":
        setPreviewText(previewText.toLowerCase());
        break;
      default:
        setPreviewText(inputText);
        break;
    }
  };

  return (
    <>
      <h5 className="text-light">Action Center</h5>
      <hr className="border-secondary" />
      <h5>Vowels: {vowelsCount}</h5>
      <h5>Helping Verbs: {helpingVerbsCount}</h5>

      <div className="d-grid gap-2">
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => {
            analyzeText();
          }}
        >
          Analyze Text
        </button>
      </div>
      <hr className="border-secondary" />

      <h5>Case Changer</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          name="textCase"
          value="original"
          onChange={caseChanger}
          type="radio"
          id="original"
          checked={inputText === previewText ? "checked" : ""}
        />
        <label className="form-check-label" htmlFor="original">
          Original Text
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          name="textCase"
          value="upper"
          onChange={caseChanger}
          type="radio"
          id="uppercase"
        />
        <label className="form-check-label" htmlFor="uppercase">
          Convert to Uppercase
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          name="textCase"
          value="lower"
          onChange={caseChanger}
          type="radio"
          id="lowercase"
        />
        <label className="form-check-label" htmlFor="lowercase">
          Convert to Lowercase
        </label>
      </div>
    </>
  );
}
