import Promo from "../contents/Promo";
import RecentArticles from "../contents/RecentArticles";
import Blog from "./contents/Blog";

export default function page() {
  return (
    <div>
      <Blog />
      <RecentArticles className="bg-transparent shadow-none" />
      <Promo />
    </div>
  );
}
