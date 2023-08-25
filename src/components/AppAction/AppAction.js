import { useState } from "react";
import Container from "../Container/Container";
import LinkRequestSection from "../LinkRequestSection/LinkRequestSection";
import LinkResponseSection from "../LinkResponseSection/LinkResponseSection";

export default function AppAction() {
  const [inputValue, setInputValue] = useState("");
  const [finalLink, setFinalLink] = useState("");

  return (
    <Container>
      <LinkRequestSection
        setFinalLink={setFinalLink}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <LinkResponseSection finalLink={finalLink} />
    </Container>
  );
}
