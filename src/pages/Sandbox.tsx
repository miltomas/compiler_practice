import PracticeScreen from "@/components/PracticeScreen";

export default function Sandbox() {
  return (
    <PracticeScreen onSubmit={(value) => console.log(value)}/>
  );
}
