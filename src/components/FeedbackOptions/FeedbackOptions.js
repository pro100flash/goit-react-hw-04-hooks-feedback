import PropTypes from "prop-types";
import S from "./FeedbackOption.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option) => (
      <button
        key={option}
        className={S.btn}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
