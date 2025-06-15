import { diff as DiffEditor } from "react-ace";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-monokai";
import "./Diff.css";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useContext } from "react";
import { EditorContext } from "@/contexts/EditorContext";

export default function AsmDiffView() {
	const { scale } = useContext(EditorContext);
	const editorTheme = useColorModeValue("kuroir", "monokai");
	const theme = useColorModeValue("light", "dark");

	return (
		<div className={theme}>
			<DiffEditor
				value={["mov rax, rbx\nmov [rax], rcx", "mov rax, rcx;\nmov [rax], rcx"]}
				theme={editorTheme}
				fontSize={scale}
				mode="assembly_x86"
				focus={false}
				showGutter={true}
				readOnly={true}
			/>
		</div>
	);
}
