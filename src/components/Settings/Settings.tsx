import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { LuSettings } from "react-icons/lu";
import SettingsContent from "./SettingsContent";

export default function Settings() {
	return (
		<Drawer.Root size={{ base: "full", md: "lg" }}>
			<Drawer.Trigger asChild>
				<Button variant="ghost">
					<LuSettings />
				</Button>
			</Drawer.Trigger>
			<Portal>
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title>Settings</Drawer.Title>
						</Drawer.Header>
						<Drawer.Body>
							<SettingsContent />
						</Drawer.Body>
						<Drawer.CloseTrigger asChild>
							<CloseButton size="sm" />
						</Drawer.CloseTrigger>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
}


