import { useState } from "react";
import "../styling/Regex.css"

export default function Regex() {

    const [regexInput, setRegexInput] = useState("");
    const [testString, setTestString] = useState("");
    const [matches, setMatches] = useState([]);

    const handleRegexChange = (e) => {
    const value = e.target.value;
        setRegexInput(value);
        updateMatches(value, testString);
    };

    const handleTestStringChange = (e) => {
        const value = e.target.value;
        setTestString(value);
        updateMatches(regexInput, value);
    };

    const updateMatches = (pattern, text) => {
        try {
        const regex = new RegExp(pattern, "g");
        const result = [...text.matchAll(regex)];
        setMatches(result);
        } catch {
        setMatches([]); // invalid regex
        }
    };

    const renderHighlightedText = () => {
        if (!regexInput) return testString;

        const regex = new RegExp(regexInput, "g");
        const parts = [];
        let lastIndex = 0;

        let match;
        while ((match = regex.exec(testString)) !== null) {
        parts.push(testString.slice(lastIndex, match.index));
        parts.push(
            <span className="regex-match" key={match.index}>
            {match[0]}
            </span>
        );
        lastIndex = match.index + match[0].length;

        // Avoid infinite loops for zero-length matches
        if (match.index === regex.lastIndex) regex.lastIndex++;
        }

        parts.push(testString.slice(lastIndex));
        return parts;
    };

    return (
        <div className='regex-content-wrapper'>
            <div className="regex-content-info-section">
                {'> quickly test and experiment with regular expressions in real time.'}
                <br />
                {'> enter your regex pattern - matches will be highlighted below.'}
                <br />
                <br />
                {"> "}
                <a className="cheatsheet-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet"
                    target="_blank"
                    rel="noopener noreferrer">
                    {"pattern cheatsheet"}
                </a>
            </div>
            <div className="regex-content-section">
                <div className="regex-panel">
                    <label>{'> '}regex:</label>
                    <input
                    type="text"
                    value={regexInput}
                    onChange={handleRegexChange}
                    placeholder="Enter regex pattern"
                    />

                    <label>{'> '}test string:</label>
                    <textarea spellCheck='false'
                    value={testString}
                    onChange={handleTestStringChange}
                    placeholder="Enter string"
                    />

                    <label>Matches:</label>
                    <div className="regex-output">{renderHighlightedText()}</div>
                </div>
            </div>
        </div>
    )
}