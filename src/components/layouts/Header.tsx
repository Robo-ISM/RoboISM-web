"use client";

// import { useState } from "react";
import Link from "next/link";

export default function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Achievements", path: "/achievements" },
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/#contact" }
  ];

  return (
    <header>
      <Link href="/">
        <img src="/images/logo-dark.png" alt="RoboISM Logo" className="header__logo" />
      </Link>

      <div className="menu">
        <ul className="menu__nav">
          {navLinks.map((link) => (
            <li key={link.name} className="menu__nav-item">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="menu__hamburger">
          <span className="menu__hamburger-line"></span>
          <span className="menu__hamburger-line"></span>
        </div>
      </div>
      <div className="mobile-menu">
        <ul className="mobile-menu__nav">
          {navLinks.map((link) => (
            <li className="mobile-menu__nav-item">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}













































// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Achievements", path: "/achievements" },
//     { name: "Projects", path: "/projects" },
//     { name: "Events", path: "/events" },
//     { name: "Contact", path: "/#contact" }
//   ];

//   return (
//     <header className="sticky top-0 bg-white border-b border-black/10 z-10">
//       <div className="flex items-center justify-between px-[1rem] py-[1.2rem] md:px-[max(2.4rem,calc(50%-600px+2.4rem))]">
//         <Link href="/">
//           <img src="/images/logodark.png" alt="RoboISM Logo" className="w-[80px] opacity-80" />
//         </Link>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden flex flex-col justify-between w-[25px] h-[10px] bg-transparent border-none cursor-pointer p-0"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <span className="w-full h-[3px] bg-[#707070] block"></span>
//           <span className="w-[60%] h-[3px] bg-[#707070] block ml-auto"></span>
//         </button>

//         {/* Desktop nav */}
//         <nav className="hidden md:block">
//           <ul className="flex m-0 p-0 list-none">
//             {navLinks.map((link) => (
//               <li key={link.name} className="ml-6">
//                 <Link
//                   href={link.path}
//                   className="font-normal text-charcoal no-underline relative group pb-1"
//                 >
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-charcoal transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Mobile nav */}
//       {menuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full min-h-screen bg-white">
//           <ul className="flex flex-col m-0 p-0 list-none pt-4">
//             {navLinks.map((link) => (
//               <li key={link.name} className="w-full border-b border-black/10 last:border-none text-center">
//                 <Link
//                   href={link.path}
//                   className="block font-normal text-[1.1em] text-charcoal no-underline p-[0.75rem]"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }
