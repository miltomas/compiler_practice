import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import Editor from "./editors/Editor";
import { useRef, useState } from "react";

export type PracticeScreenProps = {
	onUpload: () => void;
};

async function postToGodbolt(
	compiler: string,
	payload: { source: string; options: string },
) {
	const url = `https://godbolt.org/api/compiler/${compiler}/compile`;

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
		}

		const data = await response.text();
		console.log("Response:", data);

		return data;
	} catch (err) {
		console.error("Error during fetch:", err);
		throw err;
	}
}

export default function PracticeScreen() {
	const highLevelCode = useRef("");
	const predictedCode = useRef("");

	const [fetching, setFetching] = useState(false);

	return (
		<Stack w="100%" h="100%" align="center" p="10px">
			<Flex
				flexDirection={{ base: "column", md: "row" }}
				w="100%"
				h="100%"
				gap="10px"
			>
				<Stack w="100%" h="100%">
					<Heading>Practice code</Heading>
					<Editor
						onChange={(value) => (highLevelCode.current = value)}
						mode="c_cpp"
					/>
				</Stack>
				<Stack w="100%" h="100%">
					<Heading>Assembly</Heading>
					<Editor
						onChange={(value) => (predictedCode.current = value)}
						value={predictedCode.current}
						mode="assembly_x86"
					/>
				</Stack>
			</Flex>
			<Button
				w={{ base: "100%", md: "40%" }}
				onClick={async () => {
					setFetching(true);

					const asm = await postToGodbolt("g95", {
						source: highLevelCode.current,
						options: "",
					});
					predictedCode.current = asm;

					setFetching(false);
				}}
				loading={fetching}
			>
				Upload
			</Button>
		</Stack>
	);
}
