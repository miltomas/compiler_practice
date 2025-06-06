import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider.tsx";
import { EditorProvider } from "./contexts/EditorContext.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
	<Provider>
		<EditorProvider>
			<BrowserRouter>
				<StrictMode>
					<App />
				</StrictMode>
			</BrowserRouter>
		</EditorProvider>
	</Provider>,
);
