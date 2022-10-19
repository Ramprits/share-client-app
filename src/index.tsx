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
    theme={{
      colors: {
        brand: [
          "#F0BBDD",
          "#ED9BCF",
          "#EC7CC3",
          "#ED5DB8",
          "#F13EAF",
          "#F71FA7",
          "#FF00A1",
          "#E00890",
          "#C50E82",
          "#AD1374",
        ],
      },
      primaryColor: "brand",
    }}
  >
    <NotificationsProvider position="top-right">
      <App />
    </NotificationsProvider>
  </MantineProvider>,
  document.getElementById("root")
);

reportWebVitals();
