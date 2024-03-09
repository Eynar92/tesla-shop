import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="flex justify-center gap-4 w-full text-xs mb-10">
            <Link
                href="/"
            >
                <span className={`${titleFont.className} antialiased font-bold`}>Teslo </span>
                <span>| shop </span>
                <span>©{new Date().getFullYear()}</span>
            </Link>

            <Link
                href="/"
            >
                Privacidad y Condiciones
            </Link>

            <Link
                href="/"
            >
                Ubicación
            </Link>
        </div>
    )
}
