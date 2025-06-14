import Editor from "@/components/Editor";
import { EditorContext } from "@/contexts/EditorContext";
import { Button, Flex, HStack } from "@chakra-ui/react";
import { useContext } from "react";

export default function HomePage() {
	const ctx = useContext(EditorContext);
	return (
		<>
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
			</Flex>
		</>
	);
}
