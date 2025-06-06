import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/keybinding-vim";
import { useContext } from "react";
import { EditorContext } from "@/contexts/EditorContext";

interface EditorProps {
	onChange: (value: string, event: any) => void;
	mode: string;
	name: string;
}

export default function Editor(props: EditorProps) {
	const { bindings } = useContext(EditorContext);
	console.log(bindings);
	return (
		<AceEditor
			mode={props.mode}
			theme="monokai"
			onChange={props.onChange}
			name={props.name}
			editorProps={{ $blockScrolling: true }}
			keyboardHandler={bindings}
		/>
	);
}
