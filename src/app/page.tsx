import Hero from "@/components/Hero";
import '../lib/fontawesome';

function Home() {
	return (
		<main className="font-[family-name:var(--font-poppins)] min-h-screen bg-gray-100 text-gray-900 xl:px-40 md:px-10 px-5">
      <Hero />
		</main>
	);
}

export default Home;