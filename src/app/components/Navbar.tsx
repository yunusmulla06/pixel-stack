"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../public/Logo.svg";

export default function Navbar() {
    const pathname = usePathname();

    const Navlist = [
        { 
            item: "Home", 
            link: "/" 
        },
        { 
            item: "About",
            link: "/about" 
        },
        { 
            item: "Services",
            link: "/services" 
        },
        { 
            item: "Portfolio",
            link: "/portfolio" 
        },
        { 
            item: "Blog",
            link: "/blog" 
        },
        { 
            item: "Contact",
            link: "/contact" 
        },
    ];

    return (
        <nav className="container mx-auto px-4">
            <div className="flex justify-between items-center h-18 relative z-20">
                <Link href='/'>
                    <Image src={Logo} alt="pixel-stack"/>
                </Link>
                <div className="flex justify-between gap-4">
                    {Navlist.map((navItem, index) => {
                        const isActive = pathname === navItem.link;
                        return (
                            <Link
                                key={index}
                                href={navItem.link}
                                className={`text-lg transition-all duration-300 ${isActive
                                        ? "text-[#00E5FF] underline underline-offset-6 transition-all duration-300"
                                        : "hover:text-[#00E5FF]"
                                    }`}
                            >
                                {navItem.item}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
