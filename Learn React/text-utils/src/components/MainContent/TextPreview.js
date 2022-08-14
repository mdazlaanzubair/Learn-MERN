// npm package for react for copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextPreview({ previewText, keyWordsArray }) {
  // copied keyword holder
  const [copiedKeyword, setCopiedKeyword] = useState({
    word: "",
    status: false,
  });

  // Function 1 - to set copied word in state
  const copyKeyword = (copied_word) => {
    // setting state on click
    setCopiedKeyword({
      word: copied_word,
      status: true,
    });

    // reverting back state after delay
    setTimeout(() => {
      setCopiedKeyword({
        word: "",
        status: false,
      });
    }, 1000);
  };

  return (
    <>
      <div className="card bg-dark border-0 my-4">
        <div className="card-body p-0 text-light">
          <h5 className="card-title">Preview</h5>
          <p className="card-text">{previewText}</p>
        </div>
        <div className="card-footer border-0 bg-transparent p-0 my-3">
          <h5 className="d-flex justify-content-between align-items-center">
            <p className="pt-2">
              Keywords
              {keyWordsArray[0] !== "No keyword to display" ? (
                <sup>
                  <small>
                    <span className="badge bg-danger rounded-pill ms-2">
                      {keyWordsArray.length}
                    </span>
                  </small>
                </sup>
              ) : (
                ""
              )}
            </p>
            <CopyToClipboard text={keyWordsArray} onCopy={copyKeyword}>
              <button className="btn btn-sm btn-link text-decoration-none text-light fw-bolder shadow-none">
                {copiedKeyword.status === true ? "Copied!" : "Copy all"}
              </button>
            </CopyToClipboard>
          </h5>
          {keyWordsArray.map((key, index) => (
            <CopyToClipboard key={index} text={key} onCopy={copyKeyword}>
              <span className="keyword-badge badge rounded-pill p-2 m-1">
                {copiedKeyword.status === true && copiedKeyword.word === key
                  ? "Copied!"
                  : key}
              </span>
            </CopyToClipboard>
          ))}
        </div>
      </div>
    </>
  );
}

TextPreview.defaultProps = {
  previewText: "Nothing to preview.",
};

TextPreview.propTypes = {
  previewText: PropTypes.string,
};
