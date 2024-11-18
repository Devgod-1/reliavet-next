import Hero from "./contents/Hero";

export default async function layout({ children }) {
  return (
    <div className="min-h-[100vh]">
      <Hero />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
