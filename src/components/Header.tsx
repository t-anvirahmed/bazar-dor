import Marquee from "./Marquee";
import Navbar from "./Navbar";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="bg-green-50">
      <Navbar />
      <NavLinks />
      <Marquee />
    </div>
  );
};

export default Header;
