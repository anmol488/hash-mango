import Image from "next/image"
import { LogoutIcon} from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { logout } = useAuth()

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
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
                <p className="hidden lg:inline">Log Out</p>
                <LogoutIcon onClick={logout} className="h-6 w-6 cursor-pointer" />
        </div>
    </header>
  )
}

export default Header