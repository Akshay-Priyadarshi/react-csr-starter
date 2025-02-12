import { Link } from "react-router";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import LogoLight from "@/assets/logo-light.svg?react";
import LogoDark from "@/assets/logo-dark.svg?react";
import { useTheme } from "@/providers";

export const MarketingHeader = () => {
  const { themeClass } = useTheme();
  return (
    <nav className="flex justify-between items-center my-16">
      <div>
        <Link to="/">
          {themeClass === "light" ? (
            <LogoDark className="size-8" />
          ) : (
            <LogoLight className="size-8" />
          )}
        </Link>
      </div>
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
