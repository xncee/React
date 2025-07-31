
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';
import styles from '../App.module.css'

export default function ThemeSwitcher() {
    const { toggleTheme, isDark } = useTheme();

    return (
        <div>
            <button
                className={styles.themeButton}
                onClick={toggleTheme}
            >
                {isDark? <MdOutlineLightMode size={36} /> : <MdOutlineDarkMode size={36} />}
            </button>
        </div>
    );
}