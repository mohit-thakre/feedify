import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    const navLinks = [
        {
          title: "Features",
          link: "/features"
        },
        {
          title: "Integration",
          link: "/integration"
        },
        {
          title: "Pricing",
          link: "/pricing"
        }
      ]
  return (
  
    <div className="w-full bg-slate-50 flex justify-between items-center   px-12 py-3 rounded-full bg-transparent border-[0.5px] border-gray-500">
      <div className=' font-bold text-3xl italic'>
        FeedIFY
      </div>
      <div className="flex space-x-6">
        {navLinks.map((item, idx) => (
          <Link
            href={item.link}
            className="group cursor-pointer relative hover:text-gray-400 duration-100 font-medium "
            key={idx}
          >
            {item.title}
            <span className="absolute right-1 inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-800 to-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-white group-hover:to-transparent h-px" />
          </Link>
        ))}
        {/* <span className="absolute right-1 inset-x-0 w-2/3 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-800 to-transparent  h-px" /> */}
      </div>
      <button className="border text-sm font-medium relative bg-[#3979da] border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Get Started</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
    </div>

  )
}

export default Navigation
