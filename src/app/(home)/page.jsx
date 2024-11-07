import Hero from "./contents/Hero";
import FindVet from "./contents/FindVet";
import JoinVet from "./contents/JoinVet";
import Streamline from "./contents/Streamline";
import Blog from "@/components/Blog";
import Stories from "./contents/Stories";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <FindVet />
      <JoinVet />
      <Streamline />
      <Blog />
      <Stories />
    </div>
  );
};

export default Home;