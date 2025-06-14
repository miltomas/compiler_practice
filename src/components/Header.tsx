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
} from '@chakra-ui/react';
import {
	LuHouse,
	LuInfo,
	LuList,
} from 'react-icons/lu';
import { Link } from 'react-router-dom';

function Header() {
	const isSmall = useBreakpointValue({ base: true, md: false });

	return (
		<Box
			p="2"
			boxShadow="md"
			position="sticky"
			top={0}
			w="100%"
			bg="bg.muted">
			<Flex justify="space-between" align="center" gap="2">
				<Link to="/">
					<Heading
						size={{ base: 'xs', sm: 'lg', md: 'xl'}}
						fontWeight="bold"
						mt="-1">
						Compiler Practice
					</Heading>
				</Link>

				<HStack separator={<StackSeparator />}>
					{isSmall ? (
						<Menu.Root>
							<Menu.Trigger asChild>
								<IconButton boxSize={{ base: '6', sm: '9' }}>
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
					) : (
						<ButtonGroup size={{ md: 'lg', lg: 'md' }}>
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
