import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface NavbarProps {
    className?: string
}
export const Navbar = () => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>About</AppLink>
            </div>
        </div>
    );
};

