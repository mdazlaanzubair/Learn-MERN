import PropTypes from "prop-types";

export default function TextPreview({ previewText }) {
  return (
    <>
      <div className="card bg-dark border-0 my-4">
        <div className="card-body p-0 text-light">
          <h5 className="card-title">Preview</h5>
          <p className="card-text">{previewText}</p>
        </div>
      </div>
    </>
  );
}

TextPreview.defaultProps = {
  previewText: "No Text",
};

TextPreview.propTypes = {
  previewText: PropTypes.string,
};
