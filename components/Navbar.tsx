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
    <div className="h-16 bg-layer px-3 md:px-4 flex justify-between items-center shadow-md shadow-layerLight">
      <div className="text-2xl font-bold text-highlight">
        <Link href="/">
          Gophers
        </Link>
      </div>

      <ul className="flex text-second">
        {session && navItems.map(({ title, link }) => (
          <Link key={link} href={link} className="mx-6 duration-100">
            <li key={link} className="hover:border-b-highlight border-b border-layer h-16 flex justify-center items-center text-lg p-2">
              {title}
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex">
        {!session ? (
          <Link href="/auth/login">
            <Button className="bg-gradient-to-r from-layer to-layerLight w-[180px] py-2 text-[20px] rounded-lg text-second border border-layerLight   hover:text-highlight duration-100">Login</Button>
          </Link>
        ) : (
          <Button className="bg-gradient-to-r from-layer to-layerLight w-[180px] py-2 text-[20px] rounded-lg text-second border border-layerLight hover:text-highlight duration-100">Sign out</Button>
        )}
      </div>
    </div>
  );
}

