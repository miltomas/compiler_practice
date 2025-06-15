import {
	Flex,
	HStack,
	Button,
	StackSeparator,
	Heading,
	ButtonGroup,
	Box,
	useBreakpointValue,
	Menu,
	Portal,
	IconButton,
	Drawer,
	CloseButton,
} from "@chakra-ui/react";
import { LuHouse, LuInfo, LuList, LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom";
import { ColorModeButton } from "./ui/color-mode";
import SettingsContent from "./SettingsContent";

function Settings() {
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

function Hamburger() {
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<IconButton boxSize={9}>
					<LuList />
				</IconButton>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						<Menu.Item value="home" asChild>
							<Link to="/">
								<Button variant="plain">
									<LuHouse /> Home
								</Button>
							</Link>
						</Menu.Item>
						<Menu.Item value="about">
							<Link to="/about">
								<Button variant="plain">
									<LuInfo /> About
								</Button>
							</Link>
						</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
}
function Header() {
	const isSmall = useBreakpointValue({ base: true, md: false });

	return (
		<Box shadow="sm" position="sticky" top={0} w="100%" bg="bg.muted">
			<Flex justify="space-between" align="center">
				<Link to="/">
					<Heading ml={1} size="2xl" fontWeight="bold">
						Compiler Practice
					</Heading>
				</Link>

				<HStack separator={<StackSeparator />}>
					<ButtonGroup>
						<ColorModeButton size="sm" />
						<Settings />
					</ButtonGroup>
					{isSmall ? (
						<Hamburger />
					) : (
						<ButtonGroup size="sm" variant="plain">
							<Link to="/">
								<Button>
									<LuHouse /> Home
								</Button>
							</Link>
							<Link to="/about">
								<Button>
									<LuInfo /> About
								</Button>
							</Link>
						</ButtonGroup>
					)}
				</HStack>
			</Flex>
		</Box>
	);
}

export default Header;
