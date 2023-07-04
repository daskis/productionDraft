import {classNames} from "shared/lib/helpers/classNames/classNames";
import  "./Loader.scss";


interface LoaderProps {
    className?: string
}

export const Loader = (props: LoaderProps) => {
    const {
        className
    } = props;
    return (
        <div className={classNames("lds-roller", {}, [])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

