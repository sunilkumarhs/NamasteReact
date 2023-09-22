import picture from "../../images/icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={picture} alt="logo" />
      </div>
      <div className="title">
        <h1 id="heading" className="heading">
          React Food Dilivery App
        </h1>
      </div>
      <div className="NavItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
