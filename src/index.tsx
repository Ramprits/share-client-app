import ReactDOM from "react-dom";
import {
  MantineProvider,
  createEmotionCache,
  NotificationsProvider,
} from "@pankod/refine-mantine";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./styles/index.css";

const myCache = createEmotionCache({ key: "share" });

ReactDOM.render(
  <MantineProvider
    emotionCache={myCache}
    withGlobalStyles
    withCSSVariables
    withNormalizeCSS
  >
    <NotificationsProvider position="top-right">
      <App />
    </NotificationsProvider>
  </MantineProvider>,
  document.getElementById("root")
);

reportWebVitals();
