"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks =[
    {name:"Home" , href : "/"},
    {name:"About" , href : "/about"},
    {name:"Experties" , href : "/expertise"},
    {name:"Projects" , href : "/projects"},
    {name:"Contact" , href : "/contact"},
]

export default function navBar(){
    const pathName = usePathname();
    return(
        <nav>
           { navLinks.map((link)=>{
                const isActive = link.href === "/"? pathName==="/": pathName.startsWith(link.href);
})}
        </nav>
    )
}

