import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
	return (
		<>
		<Header />
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
		</>
	);
}

export default App;
