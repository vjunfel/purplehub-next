'use client';

import Link from 'next/link'
import { X } from 'lucide-react';
import { useState } from 'react';

interface MobileMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsOpen }) => {
	const [activeMenu, setActiveMenu] = useState<string | null>('home');
	
	const clickHandler = () => {
		setIsOpen(active => !active)
	}
	
	const homeHandler = () => {
		setActiveMenu("home")
	}
	
	const menuHandler = () => {
		setActiveMenu("menu")
	}
	
	const aboutHandler = () => {
		setActiveMenu("about")
	}
	
	const storeHandler = () => {
		setActiveMenu("stores")
	}
	
	const contactHandler = () => {
		setActiveMenu("contact")
	}
	
	return (
		<div className='absolute top-0 right-0 flex flex-col justify-start bg-white min-w-64 max-w-[500px] min-h-screen shadow'>
			
			<div className='w-full items-end'>
				<X onClick={clickHandler} className=' w-8 h-8 cursor-pointer items-end justify-end m-8'/>
			</div>
			
			<ul className= "flex flex-col text-gray-900  justify-between w-full">
				<Link href="/" className='w-full'onClick={homeHandler}>
					<li className={activeMenu === 'home' 
						? 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-transparent'
					}>
						Home
					</li>
				</Link>
				
				<Link href="/menu" className='w-full' onClick={menuHandler}>
					<li className={activeMenu === 'menu'
						? 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-transparent'
					}>
						Menu
					</li>
				</Link>
				
				<Link href="/about" className='w-full' onClick={aboutHandler}>
					<li className={activeMenu === 'about'
						? 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-transparent'
					}>
						About
					</li>
				</Link>
				
				<Link href="/stores" className='w-full' onClick={storeHandler}>
					<li className={activeMenu === 'stores'
						? 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-transparent'
					}>
						Our Stores
					</li>
				</Link>
			
				<Link href="/contact" className='w-full' onClick={contactHandler}>
					<li className={activeMenu === 'contact'
						? 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-700 active:text-white border-l-8 border-transparent'
					}>
						Contact
					</li>
				</Link>
			
			</ul>
		</div>
	)
}

export default MobileMenu