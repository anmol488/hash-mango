import Image from "next/image"
import { BellIcon, SearchIcon } from "@heroicons/react/solid"
import { UserIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useEffect, useState } from "react"

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="https://res.cloudinary.com/dcqjb4hp2/image/upload/v1668720100/logo-final_ssgkni.png"
          width={200}
          height={200}
          alt=""
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
            <SearchIcon className="hidden h-6 w-6 sm:inline" />
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6" />
            <Link href="/account">
                <UserIcon className="h-6 w-6" />
            </Link>
        </div>
    </header>
  )
}

export default Header