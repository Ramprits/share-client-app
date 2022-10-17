import { FC, Fragment } from "react";
import { LayoutProps } from "@pankod/refine-core";
import { Container } from "@pankod/refine-mantine";
import NavBar from "./Header";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <NavBar
        links={[
          {
            link: "/about",
            label: "Home",
          },
          {
            link: "/learn",
            label: "Features",
          },
          {
            link: "/pricing",
            label: "Pricing",
          },
        ]}
      />
      <Container size="md">{children}</Container>
    </Fragment>
  );
};
