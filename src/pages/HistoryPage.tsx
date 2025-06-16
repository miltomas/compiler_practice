import { PracticeContext, type Practice } from "@/contexts/PracticeContext";
import { Heading } from "@chakra-ui/react";
import { useContext } from "react";

export default function HistoryPage() {
  const { history } = useContext(PracticeContext);

  return (
    <div>
      {history.map((item: Practice, index: number) => (
        <Heading key={index}>skibidi</Heading>
      ))}
    </div>
  );
}
