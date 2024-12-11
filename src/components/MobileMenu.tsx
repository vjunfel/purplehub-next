'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

interface MobileMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsOpen }) => {
	const pathname = usePathname();
	
	return (
		<div className='absolute top-0 right-0 flex flex-col justify-start bg-white min-w-64 max-w-[500px] min-h-screen shadow'>
			<div className='w-full flex items-center justify-start px-10 py-6'>
				<X onClick={() => setIsOpen(active => !active)} className=' w-6 h-6 cursor-pointer items-end justify-end active:bg-purple-100 rounded-full'/>
			</div>
			
			<ul className= "flex flex-col text-gray-900  justify-between w-full">
				<Link href="/" className='w-full'onClick={() => setIsOpen(active => !active)}>
					<li className={pathname === '/' 
						? 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-transparent'
					}>
						Home
					</li>
				</Link>
				
				<Link href="/menu" className='w-full' onClick={() => setIsOpen(active => !active)}>
					<li className={pathname === '/menu' 
						? 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-transparent'
					}>
						Menu
					</li>
				</Link>
				
				<Link href="/about" className='w-full' onClick={() => setIsOpen(active => !active)}>
					<li className={pathname === '/about' 
						? 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-transparent'
					}>
						About
					</li>
				</Link>
				
				<Link href="/stores" className='w-full' onClick={() => setIsOpen(active => !active)}>
					<li className={pathname === '/stores' 
						? 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-transparent'
					}>
						Our Stores
					</li>
				</Link>
			
				<Link href="/contact" className='w-full' onClick={() => setIsOpen(active => !active)}>
					<li className={pathname === '/contact' 
						? 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-purple-500 bg-purple-100' 
						: 'px-10 py-8 h-full w-full active:bg-purple-500 active:text-white border-l-8 border-transparent'
					}>
						Contact
					</li>
				</Link>
			
			</ul>
		</div>
	)
}

export default MobileMenu