import { MarketingLayout } from "@/layouts";
import { Counter } from "@/components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const HomePage = () => {
  return (
    <MarketingLayout>
      <div className="flex flex-col gap-16 justify-center items-center">
        <h1 className="text-6xl text-center leading-relaxed">
          React Starter <br />
          Powered by Vite 🚀
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>Feature Lists</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc">
              <li className="mb-2">
                <a
                  href="https://vitejs.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Vite
                </a>{" "}
                - The next generation build tool for the web
              </li>
              <li className="mb-2">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  React 19
                </a>{" "}
                - A powerful JavaScript library for building user interfaces
              </li>
              <li className="mb-2">
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Tailwind CSS
                </a>{" "}
                - A utility-first CSS framework for building custom designs
              </li>
              <li className="mb-2">
                <a
                  href="https://reactrouter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  React Router
                </a>{" "}
                - Declarative routing for React.js
              </li>
              <li className="mb-2">
                <a
                  href="https://prettier.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Prettier
                </a>{" "}
                - Formatting code on the go
              </li>
              <li className="mb-2">
                <a
                  href="https://eslint.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  ESLint
                </a>{" "}
                - Pluggable JavaScript linter
              </li>
              <li className="mb-2">
                <a
                  href="https://typicode.github.io/husky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Husky
                </a>{" "}
                - Modern native Git hooks made easy
              </li>
              <li>
                <a
                  href="https://react.dev/learn/react-compiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  React Compiler
                </a>{" "}
                - Gone are the days of useMemo and useCallback
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <h3>
              Authored by{" "}
              <a
                href="https://github.com/Akshay-Priyadarshi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Akshay Priyadarshi
              </a>{" "}
              with ❤️ from India
            </h3>
          </CardFooter>
        </Card>
        <Counter />
      </div>
    </MarketingLayout>
  );
};
