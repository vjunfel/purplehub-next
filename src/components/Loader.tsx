import React from 'react';

const Loader = () => {
	return (
		<div className="bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950 text-white px-4 lg:p-0">
			<div className="pt-[80px] lg:pt-[160px] w-full max-w-screen-xl mx-auto min-h-screen flex justify-start items-center flex-col ">
				<h2 className="my-10 text-3xl ">Loading...</h2>
			</div>
		</div>
	);
};

export default Loader;
