import React from "react";
import { Container } from "./index.util";

const SectionContainer = ({ children, className, maxWidth }) => {
  return (
    <section className={`py-3 w-full border-b relative ${className}`}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
};

export default SectionContainer;
