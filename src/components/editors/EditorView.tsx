import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function EditorView({children}: { children: ReactNode }) {
	return (
		<Box overflow="hidden" width="100%" height="100%" borderRadius="8px">
			{children}
		</Box>
	);
}
