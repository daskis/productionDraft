import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            Main
        </>
    );
};

export default MainPage;