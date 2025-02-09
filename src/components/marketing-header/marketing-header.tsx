import { Link } from "react-router";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";

export const MarketingHeader = () => {
  return (
    <nav className="flex justify-between items-center my-16">
      <div>LOGO</div>
      <ul className="flex items-center space-x-8">
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <Button>LogIn</Button>
        <Button>SignUp</Button>
        <ThemeToggle />
      </ul>
    </nav>
  );
};
