import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../public/images/Logo-Purplehub-white.svg'

const Footer: React.FC = () => {
	return (
		<footer className="font-[family-name:var(--font-poppins)] text-white w-full bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950">
			<div className="max-w-screen-xl mx-auto py-16 px-8 flex flex-col md:flex-row">
				<div className="flex flex-col justify-between flex-1 lg:flex-row md:ml-6">
					<div className='flex justify-center md:justify-start'>
						<Image 
							// src="/images/Logo-Purplehub-white.svg" 
							src={Logo} 
							alt="Logo" 
							// width={96} 
							// height={96} 
							className='mx-4 lg:w-[180px]'
						/>
					</div>
					<div className="flex items-center justify-center space-x-6 flex-1 lg:justify-start lg:ml-6 md:justify-start">
						<div>
							<h2 className="font-[family-name:var(--font-marck-script)] text-center text-4xl font-bold mb-2">Asuncion&apos;s Purplehub</h2>
							<p className="text-base text-center md:text-left">Our sweetness, Your home</p>
							<div className="flex my-6 gap-6 items-center justify-center w-full md:justify-start lg:mb-0">
								<a href="#" className="text-white hover:text-purple-300">
									<FontAwesomeIcon icon={faFacebook} className="h-6 w-6 fa-2x"/>
								</a>
								<a href="#" className="text-white hover:text-purple-300 ">
									<FontAwesomeIcon icon={faInstagram} className="h-6 w-6 fa-2x"/>
								</a>
								<a href="#" className="text-white hover:text-purple-300">
									<FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 fa-2x"/>
								</a>
							</div>
						</div>
					</div>
				</div>
				
				<div className="flex flex-col justify-center items-center w-full gap-2 flex-1 md:flex-row "> 
					<ul className="flex flex-col justify-center items-center gap-2 flex-1">
						<li><a href="#" className="hover:underline">Product Care</a></li>
						<li><a href="#" className="hover:underline">Contact Us</a></li>
					</ul>
					<ul className="flex flex-col justify-start items-center gap-2 flex-1">
						<li><a href="#" className="hover:underline">Terms & Conditions</a></li>
						<li><a href="#" className="hover:underline">Privacy Notice</a></li>
						<li><a href="#" className="hover:underline">Join the Team</a></li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer