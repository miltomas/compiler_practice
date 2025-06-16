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
} from "@chakra-ui/react";
import { LuCodesandbox, LuHistory, LuHouse, LuList } from "react-icons/lu";
import { Link } from "react-router-dom";
import { ColorModeButton } from "./ui/color-mode";
import Settings from "./Settings/Settings";

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
            <Menu.Item value="sandbox">
              <Link to="/sandbox">
                <Button variant="plain">
                  <LuCodesandbox /> Sandbox
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item value="history">
              <Link to="/history">
                <Button variant="plain">
                  <LuHistory /> History
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
              <Link to="/sandbox">
                <Button>
                  <LuCodesandbox /> Sandbox
                </Button>
              </Link>
              <Link to="/history">
                <Button variant="plain">
                  <LuHistory /> History
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
