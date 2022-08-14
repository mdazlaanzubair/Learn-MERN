import { useState } from "react";
import TextArea from "./TextArea";
import TextPreview from "./TextPreview";
import TextDetails from "./TextDetails";

export default function MainContent() {
  //  setting states of the application
  const [inputText, setInputText] = useState();
  const [previewText, setPreviewText] = useState();
  const [keyWordsArray, setKeyWordsArray] = useState([
    "No keyword to display",
  ]);
  const [textDetails, setTextDetails] = useState({
    words: {
      label: "Words",
      value: 0,
    },
    chars: {
      label: "Characters",
      value: 0,
    },
    vowels: {
      label: "Vowels",
      value: 0,
    },
    sentences: {
      label: "Sentences",
      value: 0,
    },
    para: {
      label: "Paragraphs",
      value: 0,
    },
    readTime: {
      label: "Estimated reading time",
      value: 0,
    },
  });

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <TextArea
              inputText={inputText}
              setInputText={setInputText}
              setPreviewText={setPreviewText}
              setTextDetails={setTextDetails}
              setKeyWordsArray={setKeyWordsArray}
            />

            <TextPreview
              previewText={previewText}
              keyWordsArray={keyWordsArray}
            />
          </div>
          <div className="col-md-3">
            <TextDetails
              inputText={inputText}
              textDetails={textDetails}
              previewText={previewText}
              setPreviewText={setPreviewText}
            />
          </div>
        </div>
      </div>
    </>
  );
}
