import { createContext, useState, type ReactNode } from "react";

export type Mode = "" | "vim";

export type EditorContextType = {
	bindings: Mode;
	setBindings: React.Dispatch<React.SetStateAction<Mode>>;
};

export const EditorContext = createContext<EditorContextType>(undefined!);

type EditorProviderProps = {
	children: ReactNode;
};

export function EditorProvider({ children }: EditorProviderProps) {
	const [mode, setMode] = useState<Mode>("");

	return (
		<EditorContext.Provider value={{ bindings: mode, setBindings: setMode }}>
			{children}
		</EditorContext.Provider>
	);
}
