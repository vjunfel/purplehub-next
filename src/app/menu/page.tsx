"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MenuCard from "@/components/MenuCard";
import { menuData } from "@/constants";

function MenuPage() {
	const router = useRouter();

	return (
		<div className="font-[family-name:var(--font-poppins)] pt-[80px] lg:pt-[160px] w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950">
			<h2 className="my-10 text-4xl lg:text-5xl text-white">Our Products</h2>

			<div className="flex md:flex-row flex-col items-center justify-evenly gap-2 md:gap-12 mb-12 w-full max-w-screen-2xl text-gray-100 lg:p-4 rounded-lg">
				<div className="flex flex-col gap-2">
					<p>
						<span className="text-green-600">✔</span> ORGANIC UBE farmed
						by local farmers
					</p>
					<p>
						<span className="text-green-600">✔</span> NO added
						preservatives
					</p>
					<p>
						<span className="text-green-600">✔</span> PREMIUM quality
						ingredients
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<p>
						<span className="text-green-600">✔</span> HAND-GRATED Ube for
						perfect texture
					</p>
					<p>
						<span className="text-green-600">✔</span> FRESHLY baked
						everyday
					</p>
					<p>
						<span className="text-green-600">✔</span> Made with lots of
						LOVE <span className="text-red-700"> ♥ </span>
					</p>
				</div>
			</div>

			<div className="w-full max-w-screen-2xl px-4 md:px-6 lg:px-10">
				<ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 pb-16">
					{menuData.map((item, index) => (
						<li
							key={index}
							className="relative bg-white py-2 border overflow-hidden w-full h-[440px] flex flex-col items-center justify-between mb-8 rounded-xl group cursor-pointer"
							onClick={() => router.push(`/menu/${item.slug}`)}
						>
							{item.category === "new" && (
								<span className="absolute top-8 right-10 transform translate-x-1/2 -translate-y-1/2 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
									New
								</span>
							)}
							{item.category === "best-seller" && (
								<span className="absolute top-8 right-14 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
									Best-seller
								</span>
							)}

							<div className="relative overflow-hidden w-full h-full">
								<MenuCard
									src={item.imgSrc || "/images/img-not-found.jpg"}
									alt={item.alt}
									width={300}
									height={300}
									className="transition-opacity duration-200 group-hover:opacity-60 w-full h-full object-cover flex items-center justify-center"
								/>
							</div>

							<div className="flex flex-col items-end justify-start h-36 p-4">
								<h3 className="w-full text-2xl text-start mb-2">
									{item.name}
								</h3>
								<p className="text-md">{item.description}</p>
							</div>

							<div className="w-full absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100 bg-purple-600 bg-opacity-50 text-white text-xl z-20">
								View More
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default MenuPage;
