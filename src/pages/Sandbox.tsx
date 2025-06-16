import Editor from "@/components/editors/Editor";
import { Heading, HStack, Stack } from "@chakra-ui/react";

export default function Sandbox() {
	return (
		<HStack w="100%" h="100%" p="20px" gap="20px">
			<Stack w="100%" h="100%">
				<Heading>C code</Heading>
				<Editor
					onChange={() => console.log("lol")}
					mode="c_cpp"
					name="c"
					key="c"
				/>
			</Stack>
			<Stack w="100%" h="100%">
				<Heading>x86 Assembly</Heading>
				<Editor
					onChange={() => console.log("lol")}
					mode="assembly_x86"
					name="asm"
					key="asm"
				/>
			</Stack>
		</HStack>
	);
}
