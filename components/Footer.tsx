import navLinks from "./ui/Nav"
import Link from "next/link";
export default function Footer() {
    const navLink = navLinks();
  return (
    <footer className=" text-zinc-500 dark:text-zinc-50 font-serif px-5 md:px-32">
        <ul className="flex flex-col gap-y-5 py-10 text-center border-t dark:border-t-gray-600">
            {navLink.map((link, index)=>
            <Link key={index} href={link.href}>{link.label}</Link>)}
        </ul>
        <ul className="flex flex-col gap-y-5 py-10 text-center border-t dark:border-t-gray-600 ">
            <a href="https://www.facebook.com/narvas.dave/">Facebook</a>
            <a href="https://www.instagram.com/k_d_b_n_/">Instagram</a>
            <a href="https://www.linkedin.com/in/kristian-dave-narvas-859995269/">LinkedIn</a>
            <a href="https://github.com/Narvaskristian084">Github</a>
        </ul>
        <div className="text-center border-t dark:border-t-gray-600 text-zinc-500 dark:text-zinc-50 font-serif p-3 ">
        <h1>Copyright © {new Date().getFullYear()} - Kristian Dave Narvas</h1>

        </div>
    </footer>
  )
}
