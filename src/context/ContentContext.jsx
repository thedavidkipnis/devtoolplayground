/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";

import Regex from "../components/Regex";
import DiffCheck from "../components/DiffCheck";
import Menu from "../components/Menu";

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [displayedContent, setDisplayedContent] = useState(<Regex />);
  const [displayedContentFlag, setDisplayedContentFlag] = useState("regex");

  useEffect(() => {
    switch (displayedContentFlag) {
      case "regex":
        setDisplayedContent(<Regex />);
        break;
      case "diff":
        setDisplayedContent(<DiffCheck />);
        break;
      case "menu":
        setDisplayedContent(<Menu />);
        break;
    }
  }, [displayedContentFlag]);

  return (
    <ContentContext.Provider
      value={{
        displayedContent,
        setDisplayedContent,
        displayedContentFlag,
        setDisplayedContentFlag,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}