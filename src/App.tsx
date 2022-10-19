import "./i18n";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import { notificationProvider, ReadyPage } from "@pankod/refine-mantine";

import { Home } from "pages";
import { axiosInstance } from "utils/axios.config";
import { authProvider } from "utils/authProvider";
import constants from "utils/constants";
import { AuthPage } from "pages/auth";
import { Layout } from "components/Layout";

function App(): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      Layout={Layout}
      authProvider={authProvider}
      ReadyPage={ReadyPage}
      LoginPage={AuthPage}
      DashboardPage={Home}
      dataProvider={dataProvider(constants.REST_API_URL, axiosInstance)}
      notificationProvider={notificationProvider}
      resources={[
        {
          name: "home",
          list: Home,
        },
      ]}
    />
  );
}

export default App;
