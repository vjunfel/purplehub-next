import Hero from "@/components/Hero";
import '../lib/fontawesome';
import SwiperComponent from "@/components/SwiperComponent";

const Home: React.FC = () => {
	return (
		<div className="font-[family-name:var(--font-poppins)] min-h-screen bg-slate-50 text-gray-900 flex flex-col justify-center items-center">
      <SwiperComponent />
			<Hero />

		</div>
	);
}

export default Home;