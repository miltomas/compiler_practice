import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export type Practice = {
  highLevelCode: string;
  predictedCode: string;
  compilerOutput: string;
  changes: { adds: Number; removes: Number };
};

export type PracticeContextType = {
  history: Practice[];
  addPractice: (value: Practice) => void;
  setHistory: Dispatch<SetStateAction<Practice[]>>;
};

export const PracticeContext = createContext<PracticeContextType>(undefined!);

export default function PracticeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [practices, setPractices] = useState<Practice[]>([]);
  const addPractice = (value: Practice) =>
    setPractices((values) => [...values, value]);

  return (
    <PracticeContext.Provider
      value={{ history: practices, addPractice, setHistory: setPractices }}
    >
      {children}
    </PracticeContext.Provider>
  );
}
