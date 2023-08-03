import Hero from "./blocks/Hero";
import Masonary from "./blocks/Masonary";
export default function Home() {
  return (
    <main>
      <Hero />
      <div>
        <h2 className="font-semibold text-2xl text-center py-10">
          Transparent background png images for designers
        </h2>
        <Masonary />
      </div>
    </main>
  );
}
