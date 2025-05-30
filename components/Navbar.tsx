'use client'

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/products" }
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="tracking-[2px] text-xl font-bold text-blue-700">
            TOW Brasil
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex space-x-6">
            {links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-blue-700 transition ${
                  pathname === link.href ? 'font-semibold text-blue-900' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-6 h-6 focus:outline-none"
              aria-label="Abrir menu"
            > 
              <span className={`block absolute h-0.5 w-6 top-1 bg-gray-800 transform transition-all duration-700 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 top-2.5' : ''
                }`}
              />
              <span className={`block absolute h-0.5 top-[11px] bg-blue-900 transform transition-all ease-in-out ${
                  mobileMenuOpen ? 'w-0 opacity-0 duration-700' : 'w-5 top-[11px] duration-1400'
                }`}
              />
              <span className={`block absolute h-0.5 w-6 bottom-1 bg-gray-800 transform transition-all duration-700 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 bottom-3' : ''
                }`}
              />
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full md:hidden absolute left-0 top-16 bg-white border-t border-gray-200 shadow-sm"
              >
                <div className="px-2 py-4 space-y-2">
                  {links.map(link => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-4 py-2 rounded hover:bg-gray-100 ${
                        pathname === link.href ? 'font-semibold text-blue-900' : 'text-gray-700'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

export default Navbar