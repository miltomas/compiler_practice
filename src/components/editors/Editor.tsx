import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/keybinding-vim";
import { useContext } from "react";
import { EditorContext } from "@/contexts/EditorContext";
import { useColorModeValue } from "@/components/ui/color-mode";
import EditorView from "./EditorView";

interface EditorProps {
	onChange?: (value: string, event: any) => void;
	mode: string;
	value?: string;
	name?: string;
	readonly?: boolean;
	placeholder?: string;
}

export default function Editor(props: EditorProps) {
	const { bindings, scale } = useContext(EditorContext);

	const theme = useColorModeValue("kuroir", "monokai");

	return (
		<EditorView>
			<AceEditor
				mode={props.mode}
				value={props.value}
				name={props.name}
				readOnly={props.readonly}
				placeholder={props.placeholder}
				onChange={props.onChange}
				theme={theme}
				fontSize={scale}
				keyboardHandler={bindings}
				editorProps={{ $blockScrolling: true }}
				enableLiveAutocompletion={true}
				width="100%"
				height="100%"
			/>
		</EditorView>
	);
}
