import Hero from "@/components/Hero";
import '../lib/fontawesome';

const Home: React.FC = () => {
	return (
		<div className="font-[family-name:var(--font-poppins)] min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-center items-center">
      <Hero />
		</div>
	);
}

export default Home;