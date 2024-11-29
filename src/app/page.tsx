import Hero from "@/components/Hero";
import '../lib/fontawesome';

const Home: React.FC = () => {
	return (
		<main className="font-[family-name:var(--font-poppins)] min-h-screen bg-gray-50 text-gray-900 xl:px-40 md:px-10 px-5">
      <Hero />
		</main>
	);
}

export default Home;