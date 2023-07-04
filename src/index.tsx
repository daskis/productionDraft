import {createRoot} from "react-dom/client";
import App from "./app/App";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

const root = createRoot(document.getElementById("root"));


import "shared/config/i18n/i18n";

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);
