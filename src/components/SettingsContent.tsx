import { EditorContext } from "@/contexts/EditorContext";
import { Button, Slider } from "@chakra-ui/react";
import { useContext } from "react";

export default function SettingsContent() {
  const ctx = useContext(EditorContext);
  return (
    <>
      <Button
        onClick={() => ctx.setBindings((mode) => (mode === "" ? "vim" : ""))}
      >
        switch binds
      </Button>
      <Slider.Root
        minW="200px"
        maxW="200px"
        value={[ctx.scale]}
        onValueChange={(e) => ctx.setScale(e.value[0])}
      >
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
    </>
  );
}
