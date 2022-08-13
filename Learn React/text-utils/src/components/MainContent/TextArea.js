import PropTypes from "prop-types";

export default function TextArea({ inputText, setInputText, setPreviewText }) {
  const updateText = (e) => {
    const text_area_val = e.target.value;
    setInputText(text_area_val);
    setPreviewText(text_area_val);
  };

  return (
    <>
      <textarea
        type="email"
        className="form-control bg-dark text-light text-area"
        id="textInput"
        placeholder="Dump your text here..."
        value={inputText === "No Text" ? "" : inputText}
        rows="7"
        onChange={updateText}
      ></textarea>
      {inputText === "No Text" ? (
        ""
      ) : (
        <p className="text-light list-group-item d-flex justify-content-between align-items-center px-1 my-2">
          <span>Word(s): {inputText.split(" ").length}</span>
          <span>Character(s): {inputText.trim().length}</span>
          <span>
            {(inputText.split(" ").length / 250).toFixed() > 0
              ? `Almost ${(
                  inputText.split(" ").length / 250
                ).toFixed()} min read`
              : "Less than a min read"}
          </span>
        </p>
      )}
    </>
  );
}

TextArea.defaultProps = {
  inputText: "No Text",
};

TextArea.propTypes = {
  inputText: PropTypes.string,
};
