import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from "./AppLink.module.scss"
import {FC, ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";


interface AppLinkProps extends LinkProps {
    className?: string
    children: ReactNode
    theme?: AppLinkTheme
}

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props
    return (
        <Link to={to}
              className={classNames(cls.AppLink, {}, [className, cls[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    );
};

