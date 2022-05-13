const Header = () => {
  return (
    <div
      className="header header-fixed header-logo-center"
      style={{ transform: "translateX(0px)" }}
    >
      <a href="index.html" className="header-title">
        Covid cuestionario
      </a>
      <a href="#" data-back-button="" className="header-icon header-icon-1">
        <i className="fas fa-arrow-left" />
      </a>
      <a href="#" data-toggle-theme="" className="header-icon header-icon-4">
        <i className="fas fa-lightbulb" />
      </a>
    </div>
  );
};
export default Header;
