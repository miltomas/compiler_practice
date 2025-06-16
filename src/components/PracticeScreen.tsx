import {
  Button,
  Flex,
  Heading,
  Stack,
  Dialog,
  Portal,
  CloseButton,
  HStack,
  EmptyState,
} from "@chakra-ui/react";
import Editor from "./editors/Editor";
import { useRef, useState } from "react";
import AsmDiffView from "./editors/AsmDiffEditor";

export type Practice = {
	highLevelCode: string;
	predictedCode: string;
	compilerOutput: string;
}

export type PracticeScreenProps = {
  onSubmit?: (value: Practice) => void;
  code?: string;
};

async function postToGodbolt(
  compiler: string,
  payload: { source: string; options: string },
) {
  const url = `https://godbolt.org/api/compiler/${compiler}/compile`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    const data = await response.text();
    console.log("Response:", data);

    return data;
  } catch (err) {
    console.error("Error during fetch:", err);
    throw err;
  }
}

function format(input: string) {
  return input.replace(/[ \t]+/g, ' ').replace(/^\s*[\r\n]/gm, '');
}

export default function PracticeScreen(props: PracticeScreenProps) {
  const highLevelCode = useRef("");
  const predictedCode = useRef("");
  const compilerOutput = useRef("");

  const [isCodeValid, setIsCodeValid] = useState(true);
  const [fetching, setFetching] = useState(false);

  const onUploadEventHandler = async () => {
    setFetching(true);

    const isValid = highLevelCode.current.trim() !== "";
    setIsCodeValid(isValid);

    if (isValid) {
      const asm = await postToGodbolt("g95", {
        source: highLevelCode.current,
        options: "",
      });
      compilerOutput.current = format(asm.replace("# Compilation provided by Compiler Explorer at https://godbolt.org/", ""));
    }

    setFetching(false);
  };

  return (
    <Stack w="100%" h="100%" align="center" p="10px">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        w="100%"
        h="100%"
        gap="10px"
      >
        <Stack w="100%" h="100%">
          <Heading>Practice code</Heading>
          <Editor
            onChange={(value) => (highLevelCode.current = value)}
			value={props.code}
			readonly={!!props.code}
            mode="c_cpp"
            placeholder="Insert code to be compiled"
          />
        </Stack>
        <Stack w="100%" h="100%">
          <Heading>Assembly</Heading>
          <Editor
            onChange={(value) => (predictedCode.current = format(value))}
            mode="assembly_x86"
            placeholder="Predict compiler output"
          />
        </Stack>
      </Flex>
      <Dialog.Root lazyMount size="cover">
        <Dialog.Trigger asChild>
          <Button
            w={{ base: "100%", md: "40%" }}
            onClick={onUploadEventHandler}
            loading={fetching}
          >
            Upload
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Results</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Flex w="100%" h="100%" justify="center" align="center">
                  <HStack justify="center" align="center" w="100%" h="100%">
                    {isCodeValid ? (
                      <AsmDiffView
                        value={[predictedCode.current, compilerOutput.current]}
                      />
                    ) : (
                      <EmptyState.Root size="sm">
                        <EmptyState.Content>
                          <EmptyState.Indicator>
                            No code submitted
                          </EmptyState.Indicator>
                        </EmptyState.Content>
                      </EmptyState.Root>
                    )}
                  </HStack>
                </Flex>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                {isCodeValid && <Button>Save</Button>}
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Stack>
  );
}
