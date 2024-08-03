import { BlogList } from "./components/templates/BlogList";
import { CategoryList } from "./components/templates/CategoryList";
import { ExploreProducts } from "./components/templates/ExploreProducts";
import { Features } from "./components/templates/Features";
import { Hero } from "./components/templates/Hero";
import { NewsLetter } from "./components/templates/NewsLetter";
import { Footer } from "./layout/home/Footer";
import { Header } from "./layout/home/Header";

export default function App() {
  return (
    <div className="transition-colors duration-300 ease-out dark:bg-black-3 dark:text-light-100">
      <Header />
      <Hero />
      <main className="container mt-[104px] space-y-[104px] md:mt-28 md:space-y-28 2xl:mt-36 2xl:space-y-36">
        <CategoryList />
        <ExploreProducts />
        <Features />

        {/* Reviews */}

        <BlogList />

        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}
