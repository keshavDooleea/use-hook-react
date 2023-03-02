import { createContext, use, useContext } from "react";

type ThemeContextType = "light" | "dark";
const ThemeContext = createContext<ThemeContextType>("dark");

export const Context = () => (
  <ThemeContext.Provider value={"dark"}>
    <Demo />
  </ThemeContext.Provider>
);

const Demo = () => {
  const theme = useContext(ThemeContext);

  if (true) {
    const t = use(ThemeContext);
    return <p>Use Hook theme is {t}</p>;
  }

  return <p>Default Theme is {theme}</p>;
};
