import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider.tsx";
import { EditorProvider } from "./contexts/EditorContext.tsx";
import { HashRouter } from "react-router";
import PracticeProvider from "./contexts/PracticeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <PracticeProvider>
      <EditorProvider>
        <HashRouter>
          <StrictMode>
            <App />
          </StrictMode>
        </HashRouter>
      </EditorProvider>
    </PracticeProvider>
  </Provider>,
);
