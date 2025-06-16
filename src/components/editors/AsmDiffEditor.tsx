import { diff as DiffEditor } from "react-ace";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-monokai";
import "./Diff.css";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useContext } from "react";
import { EditorContext } from "@/contexts/EditorContext";
import EditorView from "./EditorView";

export type AsmDiffViewProps = {
	orientation?: string;
	value: string[];
};

export default function AsmDiffView(props: AsmDiffViewProps) {
	const { scale } = useContext(EditorContext);
	const editorTheme = useColorModeValue("kuroir", "monokai");
	const theme = useColorModeValue("light", "dark");

	return (
		<div className={theme} style={{ width: "100%", height: "100%" }}>
			<EditorView>
				<DiffEditor
					orientation={props.orientation}
					value={props.value}
					theme={editorTheme}
					fontSize={scale}
					mode="assembly_x86"
					focus={false}
					showGutter={true}
					readOnly={true}
					width="100%"
					height="100%"
				/>
			</EditorView>
		</div>
	);
};
