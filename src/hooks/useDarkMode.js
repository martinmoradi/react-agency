import { useEffect, useState } from "react";

const useDarkMode = () => {
  const getUserMedia = () => {
    if (localStorage.theme) {
      return localStorage.theme;
    }
    const userMedia = matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
    return "light"
  };

  const [theme, setTheme] = useState(getUserMedia());

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
