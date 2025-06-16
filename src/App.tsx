import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import { EditorContext, type EditorBinds } from "./contexts/EditorContext";
import { Box } from "@chakra-ui/react";
import Sandbox from "./pages/Sandbox";

function App() {
	const editorCtx = useContext(EditorContext);

	useEffect(() => {
		editorCtx.setBindings((localStorage.getItem("binds") as EditorBinds) ?? "");
		editorCtx.setScale(Number(localStorage.getItem("scale")) ?? 14);
	}, []);

	return (
		<>
			<Header />
			<Box
				h="calc(100vh - 40px)"
				maxW="100vw"
				overflowY="auto"
				position="sticky"
			>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/sandbox" element={<Sandbox />} />
				</Routes>
			</Box>
		</>
	);
}

export default App;
