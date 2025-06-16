import { PracticeContext, type Practice } from "@/contexts/PracticeContext";
import { Card, EmptyState, Heading, HStack, VStack } from "@chakra-ui/react";
import { useContext } from "react";

export default function HistoryPage() {
  const { history } = useContext(PracticeContext);

  return (
    <>
      {history.length > 0 ? (
        history.map((item: Practice, index: number) => (
          <Card.Root size="md">
            <Card.Header>
              <Heading size="md">Practice {index}</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
				<HStack gap="80px">
				<span>
					{"Adds: " + item.changes.adds.toString()}
				</span>
				<span>
					{"Removes: " + item.changes.removes.toString()}
				</span>
				</HStack>
            </Card.Body>
          </Card.Root>
        ))
      ) : (
        <EmptyState.Root size="lg">
          <EmptyState.Content>
            <EmptyState.Indicator></EmptyState.Indicator>
            <VStack textAlign="center">
              <EmptyState.Title>Your history is empty</EmptyState.Title>
              <EmptyState.Description>Do some work</EmptyState.Description>
            </VStack>
          </EmptyState.Content>
        </EmptyState.Root>
      )}
    </>
  );
}
