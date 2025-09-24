import { useTheme } from "../context/ThemeContext.jsx";
import { useContent } from "../context/ContentContext.jsx";
import "../styling/Navbar.css"

export default function Navbar() {

    const { darkMode, toggleTheme } = useTheme();
    const { setDisplayedContentFlag } = useContent();

    return (
        <div className='navbar-wrapper'>
            <div className="navbar-left">
                <div className="navbar-tab" onClick={() => setDisplayedContentFlag("regex")}>
                    regex
                </div>
                <div className="navbar-tab" onClick={() => setDisplayedContentFlag("diff")}>
                    diff check
                </div>
            </div>
            <div className="navbar-middle">
                <h1>DevTools</h1>
            </div>
            <div className="navbar-right">
                <button className="navbar-toggle-theme-button" onClick={toggleTheme}>
                    {darkMode ? "light mode" : "dark mode"}
                </button>
            </div>
        </div>
    )
}