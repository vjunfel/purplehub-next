import React from "react";
import Image from "next/image";
import { aboutData } from "@/constants";

const AboutPage: React.FC = () => {
	return (
		<div className="font-[family-name:var(--font-poppins)] bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950 text-white px-4 lg:p-0">
			<div className="pt-[80px] lg:pt-[160px] w-full max-w-screen-xl mx-auto min-h-screen flex justify-center items-center flex-col ">
				<h2 className="my-10 text-4xl lg:text-5xl">Our History</h2>

				<div className="flex flex-col md:flex-row gap-16 w-full h-full py-10 lg:pb-32 md:px-16 rounded-3xl md:items-start ">
					<div className="flex-1 flex  justify-center items-center">
						<Image
							src="/images/about-pic.jpg"
							alt="cake"
							width={400}
							height={400}
							className='object-fill rounded-xl'
						/>
					</div>

					<div className="flex flex-col flex-1 gap-10">
						{aboutData.map((item, index) => (
							<div
								key={index}
								className="flex flex-col gap-10"
							>
								<p className="text-md lg:text-lg">
									{item.description.paragraph.par1}
								</p>
								<p className="text-md lg:text-lg">
									{item.description.paragraph.par2}
								</p>
								<div className="text-md lg:text-lg">
									{item.description.paragraph.par3.sub}

									<ol className="text-md mt-5">
										{item.description.paragraph.par3.items.map(
											(item, index) => (
												<li key={index}>{item}</li>
											)
										)}
									</ol>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
