import StoryButton from "./StoryButton/StoryButton";

export default function StoriesList() {
  return (
    <div>
      <StoryButton
        image="https://www.frontacademy.com.br/images/depoimentos/daniel.png"
        name="dani"
        hasSeen
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
