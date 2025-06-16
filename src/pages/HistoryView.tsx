import AsmDiffView from "@/components/editors/AsmDiffEditor";
import Editor from "@/components/editors/Editor";
import type { Practice } from "@/contexts/PracticeContext";
import { Card, Heading, HStack } from "@chakra-ui/react";
import { useLocation } from "react-router";

interface LocationState {
	practice: Practice;
}
export default function HistoryView() {
	const location = useLocation();
	const { practice } = location.state as LocationState;

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
				<HStack w="100%" h="100%">
					<Editor mode="c_cpp" value={practice.highLevelCode} readonly />
					<AsmDiffView
						value={[practice.predictedCode, practice.compilerOutput]}
					/>
				</HStack>
			</Card.Body>
		</Card.Root>
	);
}
