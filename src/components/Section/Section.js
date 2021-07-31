import PropTypes from "prop-types";
import S from "./Section.module.css";

const Section = ({ title, children }) => (
  <section className={S.feedback}>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
