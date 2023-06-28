import {createRoot} from "react-dom/client";
import App from "./app/App";
import {HashRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

const root = createRoot(document.getElementById("root"))



root.render(
    <HashRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </HashRouter>
)
