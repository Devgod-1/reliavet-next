import Hero from "./contents/Hero";
import Pets from "./contents/Pets";
import Reliavet from "./contents/Reliavet";
import Story from "./contents/Story";

export default function page() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Story />
      <Pets />
      <Reliavet />
    </div>
  );
}
