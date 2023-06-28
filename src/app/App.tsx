import React, {Suspense} from 'react';
import './styles/index.scss';
import {Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";




const App = () => {


    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <button onClick={toggleTheme}>change theme</button>
                <Routes>
                    <Route path="" index={true} element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>

        </div>

    );
};

export default App;
