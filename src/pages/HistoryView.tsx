import AsmDiffView from "@/components/editors/AsmDiffEditor";
import Editor from "@/components/editors/Editor";
import type { Practice } from "@/contexts/PracticeContext";
import { Card, Flex, Heading, HStack, useBreakpointValue } from "@chakra-ui/react";
import { useLocation } from "react-router";

interface LocationState {
	practice: Practice;
}
export default function HistoryView() {
	const location = useLocation();
	const { practice } = location.state as LocationState;

	const orientation = useBreakpointValue({ base: "below", md: "beside" });

	return (
		<Card.Root size="lg" w="100%" h="100%">
			<Card.Header>
				<Heading size="md">Practice</Heading>
			</Card.Header>
			<Card.Body color="fg.info" gap="10px">
				<Card.Root size="sm">
					<Card.Header>
						<Heading size="md">Statistics</Heading>
					</Card.Header>
					<Card.Body color="fg.muted">
						<span>{"Adds: " + practice.changes.adds}</span>
						<span>{"Removes: " + practice.changes.removes}</span>
					</Card.Body>
				</Card.Root>
				<HStack justify="space-between"><Heading>{"Input"}</Heading><Heading>{"Output diff"}</Heading></HStack>
				<Flex direction={{ base: "column", md: "row" }} w="100%" h="100%" gap="5px">
					<Editor mode="c_cpp" value={practice.highLevelCode} readonly />
					<AsmDiffView
						value={[practice.predictedCode, practice.compilerOutput]}
						orientation={orientation}
					/>
				</Flex>
			</Card.Body>
		</Card.Root>
	);
}
