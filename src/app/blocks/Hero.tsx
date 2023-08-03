import Logo from "./Logo";
import Search from "./Search";
import Categories from "./Categories";
const Hero = () => {
  return (
    <div className=" h-[40vh] bg-red-50 flex items-center justify-center">
      <div className="max-w-3xl flex items-center flex-col gap-10">
        <Logo />
        <Search />
        <Categories categories={pngCategories} />
      </div>
    </div>
  );
};
export default Hero;

const pngCategories = [
  "Animals",
  "Nature",
  "Foods",
  "Sports",
  "Technology",
  "Abstract",
  "Travel",
  "Music",
  "Art",
  "Fashion",
];
