import Hero from "@/components/Hero";
import '../lib/fontawesome';
import SwiperComponent from "@/components/SwiperComponent";
import Celebrate from "@/components/Celebrate";
import BestSeller from "@/components/BestSeller";

const Home: React.FC = () => {
	return (
		<div className="font-[family-name:var(--font-poppins)] min-h-screen w-full bg-slate-50 text-gray-900 flex flex-col justify-center items-center">
      <SwiperComponent />
			<Hero />
			<BestSeller />
			<Celebrate />
		</div>
	);
}

export default Home;