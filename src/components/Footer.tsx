import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
  return (
    <footer className="font-[family-name:var(--font-poppins)] bg-purple-800 text-white w-full">
      <div className="max-w-screen-xl mx-auto py-16 px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Image 
              src="/images/Logo-Purplehub-white.svg" 
              alt="Logo" 
              width={96} 
              height={96} 
              className="mr-4"
            />
            <div className="text-left">
              <h2 className="font-[family-name:var(--font-marck-script)] text-4xl font-bold mb-5">Asuncion&apos;s Purplehub</h2>
              <p className="text-base">Baked with premium ingredients with just the right sweetness</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray-300 ">
                  <FontAwesomeIcon icon={faFacebook} className="h-6 w-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-300 ">
                  <FontAwesomeIcon icon={faInstagram} className="h-6 w-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6"/>
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-16">
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="hover:underline">Product Care</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Notice</a></li>
              <li><a href="#" className="hover:underline">Join the Team</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer