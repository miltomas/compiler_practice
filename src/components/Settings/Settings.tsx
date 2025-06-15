import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { LuSettings } from "react-icons/lu";
import SettingsContent from "./SettingsContent";
import { useContext } from "react";
import { EditorContext } from "@/contexts/EditorContext";

export default function Settings() {
  const editorCtx = useContext(EditorContext);
  return (
    <Drawer.Root
      size={{ base: "full", md: "lg" }}
      onExitComplete={() => {
        localStorage.setItem("binds", editorCtx.bindings);
        localStorage.setItem("scale", editorCtx.scale.toString());
      }}
    >
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
