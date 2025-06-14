import { diff as DiffEditor } from 'react-ace';
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-monokai";
import "./Diff.css";
import { useColorModeValue } from './ui/color-mode';

export default function AsmDiffView() {

	const theme = useColorModeValue("kuroir", "monokai");

	return (
		<DiffEditor 
			value={["Ahoj\nnashle", "nashle"]}
			theme={theme}
			mode="assembly_x86"
			focus={false}
			showGutter={true}
			readOnly={true}
		/>
	);
}
