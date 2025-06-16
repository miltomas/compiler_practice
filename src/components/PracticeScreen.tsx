import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import Editor from "./editors/Editor";
import { useRef } from "react";

export type PracticeScreenProps = {
	onUpload: () => void;
};

export default function PracticeScreen() {

	const highLevelCode = useRef("");
	const predictedCode = useRef("");

	return (
		<Stack w="100%" h="100%" align="center" p="10px">
			<Flex flexDirection={{ base: "column" , md: "row" }} w="100%" h="100%" gap="10px">
				<Stack w="100%" h="100%">
					<Heading>Practice code</Heading>
					<Editor
						onChange={(value) => highLevelCode.current = value}
						mode="c_cpp"
						name="c"
						key="c"
					/>
				</Stack>
				<Stack w="100%" h="100%">
					<Heading>Assembly</Heading>
					<Editor
						onChange={(value) => predictedCode.current = value}
						mode="assembly_x86"
						name="asm"
						key="asm"
					/>
				</Stack>
			</Flex>
			<Button w={{ base: "100%", md: "40%" }}
			/*onClick={() => fetch()}*/>
				Upload
			</Button>
		</Stack>
	);
}
