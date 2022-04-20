import { useState } from "react";
import StoryButton from "./StoryButton/StoryButton";

export default function StoriesList() {
  const [hasSeen, setHasSeen] = useState(false);

  return (
    <div>
      <button onClick={() => setHasSeen(!hasSeen)}>
        Toggle
      </button>

      <StoryButton
        image="https://www.frontacademy.com.br/images/depoimentos/daniel.png"
        name="dani"
        hasSeen={hasSeen}
      />

      <StoryButton
        image="https://www.frontacademy.com.br/images/depoimentos/daniel.png"
        name="flavio"
      />

      <StoryButton
        image="https://www.frontacademy.com.br/images/depoimentos/daniel.png"
        name="daniel"
      />
    </div>
  );
}
