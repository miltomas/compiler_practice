import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import { EditorContext, type EditorBinds } from "./contexts/EditorContext";
import { Box } from "@chakra-ui/react";

function App() {
	const editorCtx = useContext(EditorContext);

	useEffect(() => {
		editorCtx.setBindings(localStorage.getItem("binds") as EditorBinds ?? "");
		editorCtx.setScale(Number(localStorage.getItem("scale")) ?? 14);
	}, []);

	return (
		<>
			<Box
				maxH={{
					base: "calc(100vh - 40px)",
				}}
				overflowY="auto"
				position="sticky"
			/>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
