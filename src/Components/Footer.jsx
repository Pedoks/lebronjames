import React from 'react'
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { FiPhone } from 'react-icons/fi'
import lakersLogo from '../assets/lakerslogo.png'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#552583] to-[#2d1155] text-[#FDB927] border-t-4 border-[#FDB927]">
      <div className="max-w-screen-xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img src={lakersLogo} alt="Lakers Logo" className="w-16 h-16 mr-3" />
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FDB927] to-[#f8d56a]">
                DADDY LEBRON
              </h2>
            </div>
            <p className="text-center md:text-left text-[#FDB927]/80">
              The official fan hub for everything Lebron James. 
              Purple and Gold forever.
            </p> 
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-white">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Schedule</a></li>
              <li><a href="#" className="hover:text-white transition">Tickets</a></li>
              <li><a href="#" className="hover:text-white transition">Team Roster</a></li>
              <li><a href="#" className="hover:text-white transition">Stats</a></li>
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-white">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <IoMdMail className="mr-2" />
                <span>contactledaddy@lebron.com</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-2" />
                <span>(310) 426-6000</span>
              </div>
              <address className="not-italic">
                Crypto.com Arena<br />
                1111 S. Figueroa Street<br />
                Los Angeles, CA 90015
              </address>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-white">FOLLOW US</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-[#FDB927] text-[#552583] p-2 rounded-full hover:bg-white transition transform hover:scale-110">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="bg-[#FDB927] text-[#552583] p-2 rounded-full hover:bg-white transition transform hover:scale-110">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-[#FDB927] text-[#552583] p-2 rounded-full hover:bg-white transition transform hover:scale-110">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="bg-[#FDB927] text-[#552583] p-2 rounded-full hover:bg-white transition transform hover:scale-110">
                <FaYoutube size={18} />
              </a>
            </div>
            <p className="text-sm text-[#FDB927]/60">
              © {new Date().getFullYear()} Lebron Hub. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#FDB927]/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-sm hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition">Cookie Policy</a>
          </div>
          <div className="text-sm text-[#FDB927]/60">
            Not affiliated with the NBA or Los Angeles Lakers organization.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer