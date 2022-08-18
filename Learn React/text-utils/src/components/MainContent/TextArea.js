// npm package for extracting keywords
import keyword_extractor from "keyword-extractor";
import PropTypes from "prop-types";

// destructuring props
export default function TextArea({
  inputText,
  keyWordsArray,
  setInputText,
  setPreviewText,
  setTextDetails,
  setKeyWordsArray,
  setKeyWordsFrequency,
}) {
  // Function 1 - Analyze text
  const textAnalyzer = (e) => {
    const text_area_val = e.target.value;

    // setting states of input text and preview text
    setInputText(text_area_val);
    setPreviewText(text_area_val);

    // extracting keywords from input text and their frequency or occurrence
    setKeyWordsArray(extractKeywords(text_area_val));

    // calculating the frequency if the keywords are fetched
    if (keyWordsArray.length > 0) {
      keyWordsFrequency(text_area_val);
    }

    // Counting vowels, words chars, sentences, paragraphs and setting in textDetails object
    setTextDetails({
      words: {
        label: "Words",
        value: countWords(text_area_val),
      },
      chars: {
        label: "Characters",
        value: countChars(text_area_val),
      },
      vowels: {
        label: "Vowels",
        value: countVowels(text_area_val),
      },
      sentences: {
        label: "Sentences",
        value: countSentences(text_area_val),
      },
      para: {
        label: "Paragraphs",
        value: countParas(text_area_val),
      },
      readTime: {
        label: "Estimated reading time",
        value: countReadTime(text_area_val) + " mins",
      },
    });
  };

  // Function 2 - Count vowels in a string
  const countVowels = (textString) => {
    // converting string to lowercase for precise results
    textString = textString.toLowerCase();

    // setting initial counter
    let counter = 0;

    // vowels string
    const vowels = "aeiou";

    // looping through the textString argument
    for (let i = 0; i < textString.length; i++) {
      // pulling out character from string
      const char = textString[i];
      // indexOf will return value of -1 for all characters other than vowels
      // if value is higher than -1, its a vowels - increment the counter
      if (vowels.indexOf(char) > -1) {
        counter++;
      }
    }

    // returning counted vowels
    return counter;
  };

  // Function 3 - Count words in a string
  const countWords = (textString) => {
    // counting words in a string
    const words = textString.split(" ").length;

    // returning counted words
    return words;
  };

  // Function 4 - Count chars in a string
  const countChars = (textString) => {
    // counting chars in a string
    const chars = textString.split(" ").join("").length;

    // returning counted words
    return chars;
  };

  // Function 5 - Count sentences in a string
  const countSentences = (textString) => {
    // counting sentences in a string
    const sentences = textString
      .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
      .split("|").length;

    // returning counted words
    return sentences;
  };

  // Function 6 - Count paras in a string
  const countParas = (textString) => {
    // counting paras in a string
    const paras = textString.split(/\r\n|\r|\n/).length;

    // returning counted words
    return paras;
  };

  // Function 7 - Count readTime in a string
  const countReadTime = (textString) => {
    // counting words in a string
    const words = textString.split(" ").length;

    // counting dividing no. of words with the estimated reading time i.e 225 word per minute
    const readTime = Math.ceil(words / 225);

    // returning counted words
    return readTime;
  };

  // Function 8 - Returns an array of keywords from a string by removing stop-words
  const extractKeywords = (textString) => {
    // getting list of keywords
    const keywords = keyword_extractor.extract(textString, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false,
    });

    // removing duplicates from keywords array
    let uniqueKeywords = [];
    keywords.forEach((keyword) => {
      // if uniqueKeywords does not contain keyword
      if (!uniqueKeywords.includes(keyword)) {
        uniqueKeywords.push(keyword);
      }
    });

    // returning array of unique keyword
    return uniqueKeywords;
  };

  // Function 9 - Returns object of keyword frequency
  const keyWordsFrequency = (textString) => {
    // creating array from inputText
    const originalArray = textString.toLowerCase().split(" ");

    const keywordFrequencyArray = [];

    // looping through keywords array and counting occurrence of every keyword
    for (let i = 0; i < keyWordsArray.length; i++) {
      const keyword = keyWordsArray[i];

      // filtering out the words matches the keyword and putting in the array
      // length of that array will be the frequency of tht keyword
      let keywordCount = originalArray.filter((elem) => {
        return keyword === elem ? keyword : "";
      }).length;

      // pushing frequency object in the array
      if (keywordCount > 1) {
        keywordFrequencyArray.push({
          word: keyword,
          frequency: keywordCount,
        });
      }
    }

    // setting value of frequency array
    setKeyWordsFrequency(keywordFrequencyArray);
  };

  return (
    <>
      <textarea
        type="text"
        className="form-control bg-dark text-light text-area"
        id="textInput"
        placeholder="Dump your text here..."
        value={inputText === "No Text" ? "" : inputText}
        rows="7"
        onInput={(e) => {
          textAnalyzer(e);
        }}
      ></textarea>
    </>
  );
}

TextArea.defaultProps = {
  inputText: "No Text",
};

TextArea.propTypes = {
  inputText: PropTypes.string,
};
