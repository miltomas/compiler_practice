import Editor from "@/components/Editor";
import AsmDiffEditor from "@/components/AsmDiffEditor";
import { Button, Flex, HStack, Slider } from "@chakra-ui/react";

export default function HomePage() {
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
      </Flex>
    </>
  );
}
