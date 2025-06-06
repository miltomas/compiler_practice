import "./App.css";
import Editor from "@/components/Editor";

function App() {
	return (
		<Editor
			onChange={() => console.log("fkdsjlf")}
			mode="assembly_x86"
			name="skibidi"
		/>
	);
}

export default App;
