import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const session = true;

  const navItems = [
    { title: 'Home', link: '/home' },
    { title: 'About', link: '/about' },
    { title: 'Services', link: '/services' },
    { title: 'Contact', link: '/contact' },
  ];

  return (
    <div className="h-16 bg-layer px-3 md:px-4 flex justify-between items-center shadow-sm shadow-input">
      <div className="text-2xl font-bold text-first">
        <Link href="/">
          Gophers
        </Link>
      </div>

      <ul className="flex sm:gap-7 text-second">
        {session && navItems.map(({ title, link }) => (
          <li key={link}>
            <Link href={link} className="hover:text-secondDark hover:bg-layerLight p-2 px-6 rounded-lg duration-100">{title}</Link>
          </li>
        ))}
      </ul>

      <div className="flex">
        {!session ? (
          <Link href="/auth/login">
            <Button className="bg-layerLight text-second w-[150px] border hover:bg-layer hover:border-layerLight">Login</Button>
          </Link>
        ) : (
          <Button className="bg-layerLight text-second w-[150px] border border-layer hover:bg-layer hover:border-layerLight hover:text-second">Sign out</Button>
        )}
      </div>
    </div>
  );
}

