import Editor from "@/components/Editor";
import AsmDiffEditor from "@/components/AsmDiffEditor";
import { EditorContext } from "@/contexts/EditorContext";
import { Button, Flex, HStack, Slider } from "@chakra-ui/react";
import { useContext } from "react";

export default function HomePage() {
  const ctx = useContext(EditorContext);

  return (
    <>
      <AsmDiffEditor />
      <Flex justify="space-around">
        <HStack>
          <Editor
            onChange={() => console.log("fkdsjlf")}
            mode="c_cpp"
            name="skibidi1"
          />
          <Editor
            onChange={() => console.log("fkdsjlf")}
            mode="assembly_x86"
            name="skibidi"
          />
        </HStack>
      </Flex>
      <Flex justify="center">
        <Button>Forfeit</Button>
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
      </Flex>
    </>
  );
}
