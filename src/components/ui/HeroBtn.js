'use client';
import Link from "next/link";

function HeroBtn({children,text,url}) {
  return (
    <Link href={url} className="inline-flex items-center justify-center p-2 sm:px-4 font-sans font-semibold min-w-max  shadow-lg rounded-xl w-full md:w-1/2 lg:w-4/5 hover:opacity-75 transition-opacity duration-700 gap-3 bg-blue-500/75 text-neutral-300/90">
        <span className="text-inherit">{text}</span>
        {children}
    </Link>
  )
}

export default HeroBtn