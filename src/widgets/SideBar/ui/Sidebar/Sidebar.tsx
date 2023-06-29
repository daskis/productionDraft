import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from "./Sidebar.module.scss"
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";
import BurgerIcon from "shared/assets/icons/burger.svg"
import {Button} from "shared/ui/Button/Button";
import {Theme, useTheme} from "app/providers/ThemeProvider";

interface SidebarProps {
    className?: string
}
export const Sidebar = (props : SidebarProps) => {
    const {
        className
    } = props
    const {theme} = useTheme()
    const onToggle = () => {
        setIsClose(prev => !prev)
    }


    const [isClose, setIsClose] = useState(false);
    return (
        <div className={classNames(cls.Sidebar, {[cls.closed]: isClose}, [className])}>
            <Button onClick={onToggle} className={cls.btn}>
                <BurgerIcon fill={theme === Theme.DARK ? "#000" : "#eee"}/>
            </Button>
            <div className={classNames(cls.switchers, {[cls.hide]: isClose}, [])}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>

        </div>
    );
};

