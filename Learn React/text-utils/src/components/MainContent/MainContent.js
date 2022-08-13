import { useState } from "react";
import TextArea from "./TextArea";
import TextPreview from "./TextPreview";
import TextActions from "./TextActions";

export default function MainContent() {
  //  setting states of the application
  const [inputText, setInputText] = useState();
  const [previewText, setPreviewText] = useState();

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <TextActions
              inputText={inputText}
              previewText={previewText}
              setPreviewText={setPreviewText}
            />
          </div>
          <div className="col-md-9">
            <TextArea
              inputText={inputText}
              setInputText={setInputText}
              setPreviewText={setPreviewText}
            />
            <TextPreview previewText={previewText} />
          </div>
        </div>
      </div>
    </>
  );
}
