import "./Styles.css";
import { useTheme } from "../ThemeContext"; // import context

const Switch = () => {
  const { theme, toggleTheme } = useTheme(); // use context: variables and/or functions from context file
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={ toggleTheme }
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
