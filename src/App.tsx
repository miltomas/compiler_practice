import "./App.css";
import Editor from "@/components/Editor";
import { EditorContext } from "@/contexts/EditorContext";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";

function App() {
	const ctx = useContext(EditorContext);
	return (
		<>
			<Button
				onClick={() => ctx.setBindings((mode) => (mode == "" ? "vim" : ""))}
			>
				switch binds
			</Button>
			<Editor
				onChange={() => console.log("fkdsjlf")}
				mode="assembly_x86"
				name="skibidi"
			/>
		</>
	);
}

export default App;
