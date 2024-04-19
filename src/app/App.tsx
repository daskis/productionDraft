import {DetailedHTMLProps, HTMLAttributes} from "react";
import {classNames, useTheme} from "@shared/lib";

interface IAppProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const App = ({children}: IAppProps) => {
    const {theme} = useTheme();
    console.log(theme)
    return <div className={classNames('app', {}, [theme])}>{children}</div>;
};