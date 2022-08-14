export default function TextDetails({
  inputText,
  textDetails,
  previewText,
  setPreviewText,
  keyWordsFrequency,
}) {
  // options for change case
  const textCases = ["original", "upper", "lower"];

  const changeTextCase = (e) => {
    // changing preview text case conditionally
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
      <p>Change Text Cases</p>
      <div className="inlineForm">
        {textCases.map((key, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input bg-secondary border-0"
              type="radio"
              onChange={changeTextCase}
              name="text-cases"
              id={key}
              /* conditionally changing radio buttons value */
              value={key === "upper" ? key : key === "lower" ? key : "default"}
            />
            <label className="form-check-label" htmlFor={key}>
              {/* conditionally changing radio buttons label */}
              {key === "upper"
                ? "Upper"
                : key === "lower"
                ? "Lower"
                : "Original"}
            </label>
          </div>
        ))}
      </div>
      <hr className="border-secondary" />
      <h5 className="text-light">Details</h5>
      <hr className="border-secondary" />
      <ul className="list-group">
        {Object.keys(textDetails).map((detail, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light p-0 border-0"
          >
            {textDetails[detail].label}
            <span className="badge bg-secondary rounded-pill">
              {textDetails[detail].value}
            </span>
          </li>
        ))}
      </ul>
      <hr className="border-secondary" />
      <h5 className="text-light">Keywords Frequency</h5>

      <ul className="list-group">
        {Object.keys(keyWordsFrequency).map((key, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light p-0 border-0"
          >
            {keyWordsFrequency[key].word}
            <span className="badge bg-secondary rounded-pill">
              {keyWordsFrequency[key].frequency}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
