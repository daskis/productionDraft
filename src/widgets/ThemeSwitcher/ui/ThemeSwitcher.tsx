import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import SunIcon from "shared/assets/icons/sun-icon.svg";
import MoonIcon from "shared/assets/icons/moon-icon.svg";
interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (

        <Button onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <MoonIcon/> : <SunIcon fill={"#fff"}/>}
        </Button>

    );
};

