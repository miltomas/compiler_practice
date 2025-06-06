import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider.tsx";
import { EditorProvider } from "./contexts/EditorContext.tsx";

createRoot(document.getElementById("root")!).render(
	<Provider>
		<EditorProvider>
			<StrictMode>
				<App />
			</StrictMode>
		</EditorProvider>
	</Provider>,
);
