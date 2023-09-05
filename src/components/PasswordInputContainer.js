import "./PasswordInputContainer.css";
const PasswordInputContainer = ({ passwordInput }) => {
  return (
    <div className="input3">
      <img className="icon3" alt="" src="/icon.svg" />
      <div className="input-value4">••••••••••••</div>
      <div className="label5">Forgot Password?</div>
      <img className="base-icon1" alt="" src="/base.svg" />
      <div className="label6">{passwordInput}</div>
    </div>
  );
};

export default PasswordInputContainer;
