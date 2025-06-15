import { createContext, useState, type ReactNode } from "react";

export type EditorBinds = "" | "vim";

export type EditorContextType = {
	bindings: EditorBinds;
	setBindings: React.Dispatch<React.SetStateAction<EditorBinds>>;
	scale: number;
	setScale: React.Dispatch<React.SetStateAction<number>>;
};

export const EditorContext = createContext<EditorContextType>(undefined!);

type EditorProviderProps = {
	children: ReactNode;
};

export function EditorProvider({ children }: EditorProviderProps) {
	const [mode, setMode] = useState<EditorBinds>("");
	const [scale, setScale] = useState<number>(14);

	const context = {
		bindings: mode,
		setBindings: setMode,
		scale: scale,
		setScale: setScale,
	};

	return (
		<EditorContext.Provider value={context}>{children}</EditorContext.Provider>
	);
}
