import {createRoot} from "react-dom/client";
import App from "./App";
import {HashRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

const root = createRoot(document.getElementById("root"))



root.render(
    <HashRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </HashRouter>
)
