import { EditorContext, type EditorBinds } from "@/contexts/EditorContext";
import {
  Accordion,
  Heading,
  HStack,
  RadioGroup,
  Slider,
  Span,
  type RadioGroupValueChangeDetails,
} from "@chakra-ui/react";
import { useContext } from "react";

function EditorBindsRadio() {
  const editorCtx = useContext(EditorContext);

  const binds = [
    { label: "Normal", value: "" },
    { label: "Vim", value: "vim" },
  ];

  return (
    <RadioGroup.Root
      value={editorCtx.bindings}
      onValueChange={(e: RadioGroupValueChangeDetails) =>
        editorCtx.setBindings(e.value as EditorBinds)
      }
    >
      <HStack gap="6">
        {binds.map((item) => (
          <RadioGroup.Item key={item.value} value={item.value}>
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemIndicator />
            <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </HStack>
    </RadioGroup.Root>
  );
}

function EditorScaleSlider() {
  const editorCtx = useContext(EditorContext);

  return (
    <Slider.Root
      minW="200px"
      maxW="200px"
      value={[editorCtx.scale]}
      onValueChange={(e) => editorCtx.setScale(e.value[0])}
    >
	<HStack>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
	  <Slider.ValueText />
	</HStack>
    </Slider.Root>
  );
}
export default function SettingsContent() {
  const settings = [
    {
      title: "Appearance",
      body: (
        <>
          <Heading>Editor scale</Heading>
          <EditorScaleSlider />
        </>
      ),
    },
    {
      title: "Accesibility",
      body: (
        <>
          <Heading>Editor binds</Heading>
          <EditorBindsRadio />
        </>
      ),
    },
  ];

  return (
    <Accordion.Root multiple defaultValue={settings.map((s) => s.title)}>
      {settings.map((item) => (
        <Accordion.Item value={item.title}>
          <Accordion.ItemTrigger>
            <Span flex="1">{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.body}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
