import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useContent } from "../context/ContentContext.jsx";
import "../styling/Navbar.css";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { setDisplayedContentFlag } = useContent();

  const originalText = "DevTools";
  const [displayText, setDisplayText] = useState(originalText);

  const makeGlitchedText = (text) => {
    return text
      .split("")
      .map((char) => {
        if (Math.random() < 0.5) {
          // random printable ASCII (33 = !, 126 = ~)
          return String.fromCharCode(
            Math.floor(Math.random() * (126 - 33) + 33)
          );
        }
        return char;
      })
      .join("");
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      let step = 0;

      const runGlitch = () => {
        if (step < 3) {
          setDisplayText(makeGlitchedText(originalText));
          step++;
          setTimeout(runGlitch, 75); // next variation after 0.5s
        } else {
          // return to original after final glitch
          setTimeout(() => {
            setDisplayText(originalText);
          }, 75);
        }
      };

      runGlitch();
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <div className="navbar-tab" onClick={() => setDisplayedContentFlag("regex")}>
          regex
        </div>
        <div className="navbar-tab" onClick={() => setDisplayedContentFlag("diff")}>
          diff check
        </div>
      </div>
      <div className="navbar-middle">
        <h1>{displayText}</h1>
      </div>
      <div className="navbar-right">
        <button className="navbar-toggle-theme-button" onClick={toggleTheme}>
          {darkMode ? "light mode" : "dark mode"}
        </button>
      </div>
    </div>
  );
}
