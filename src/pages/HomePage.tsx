import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	IconButton,
	Stack,
	Steps,
} from "@chakra-ui/react";
import { AiFillAppstore } from "react-icons/ai";
import { LuArrowRightToLine, LuCodesandbox } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function HomePage() {
	const steps = [
		{
			title: "Welcome!",
			description:
				"Welcome to Compiler Practice! You can predict compiler emmitted assembly and better your understanding of low level concepts.",
		},
		{
			title: "Practice",
			description:
				"You're given high level C code and write corresponding x86 assembly code.",
		},
		{
			title: "Assesment",
			description:
				"Your code is assesed to real compiler output, you're given feedback and statistics.",
		},
		{
			title: "Sandbox",
			description:
				"This is a sandbox. No statistics are provided, you're just goofing around.",
			icon: <LuCodesandbox />,
		},
	];

	return (
		<Flex w="100vw" h="100vh" justify="center" align="center">
			<Steps.Root
				orientation="vertical"
				height="60vh"
				defaultStep={1}
				count={steps.length}
				w="30vw"
			>
				<Steps.List>
					{steps.map((step, index) => (
						<Steps.Item
							key={index}
							index={index}
							title={step.title}
							data-state="open"
							_open={{
								animation: "fade-in 300ms ease-out",
							}}
						>
							<Steps.Indicator />
							<Steps.Title>{step.title}</Steps.Title>
							<Steps.Separator />
						</Steps.Item>
					))}
				</Steps.List>

				<Stack>
					{steps.map((step, index) => (
						<Steps.Content
							key={index}
							index={index}
							data-state="open"
							_open={{
								animation: "fade-in 900ms ease-out",
							}}
						>
							{step.icon && <IconButton size="xl" mb="10px">{step.icon}</IconButton>}
							<Box maxW="500px" fontSize="xl">
								{step.description}
							</Box>
						</Steps.Content>
					))}
					<Steps.CompletedContent>
						<Heading size="3xl">All steps are complete!</Heading>
						<Link to="/sandbox">
							<Button
								data-state="open"
								_open={{
									animation: "slide-from-bottom 900ms ease-in-out",
								}}
							>
								<LuArrowRightToLine />
								Write some assembly!
							</Button>
						</Link>
					</Steps.CompletedContent>

					<ButtonGroup size="sm" variant="outline">
						<Steps.PrevTrigger asChild>
							<Button>Prev</Button>
						</Steps.PrevTrigger>
						<Steps.NextTrigger asChild>
							<Button>Next</Button>
						</Steps.NextTrigger>
					</ButtonGroup>
				</Stack>
			</Steps.Root>
		</Flex>
	);
}
