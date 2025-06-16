import PracticeScreen from "@/components/PracticeScreen";
import { PracticeContext, type Practice } from "@/contexts/PracticeContext";
import { useContext, useEffect } from "react";

export default function Sandbox() {
  const { history, addPractice } = useContext(PracticeContext);

  const onSubmitEventHandler = (value: Practice) => {
    addPractice(value);
  };

  useEffect(
    () => localStorage.setItem("history", JSON.stringify(history)),
    [history],
  );

  return <PracticeScreen onSubmit={onSubmitEventHandler} />;
}
