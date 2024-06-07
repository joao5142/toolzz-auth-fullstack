import AppBanner from "@/_components/partials/AppBanner";
import Container from "./_components/Container";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <AppBanner />
      <div>{children}</div>
    </Container>
  );
}
