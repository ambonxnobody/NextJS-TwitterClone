import './../globals.css'

import { FaHome, FaSearch, FaBell, FaEnvelope } from 'react-icons/fa'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="w-full h-full relative lg:flex lg:justify-center">
        <div className="lg:w-[600px] h-screen border-x border-[rgb(47,51,54)]">
            {children}
        </div>
        <nav className="lg:hidden fixed bottom-0 w-full flex justify-evenly items-center py-3">
            <FaHome />
            <FaSearch />
            <FaBell />
            <FaEnvelope />
        </nav>
      </div>
  )
}
