import { FC, Fragment } from "react";
import { LayoutProps } from "@pankod/refine-core";
import { Container } from "@pankod/refine-mantine";
import { HeaderMegaMenu } from "./Header/HeaderMegaMenu";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <HeaderMegaMenu />
      <Container size="md">{children}</Container>
    </Fragment>
  );
};
