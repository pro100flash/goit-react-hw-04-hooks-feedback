import PropTypes from "prop-types";
import S from "./Notification.module.css";

const Notification = ({ message }) => (
  <p className={S.notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
