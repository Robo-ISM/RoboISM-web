import Link from "next/link";
import { FaFacebookSquare, FaYoutube, FaInstagram, FaLinkedin, FaGithubSquare, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="">
      <div className="footer__items">
        <Link href="/" className="footer__logo">
          <img src="/images/logo.png" alt="RoboISM Logo" />
        </Link>

        <div className="menu">
          <ul className="menu__nav">
            {['Home', 'Achievements', 'About', 'Events', 'Alumni', 'Gallery'].map((item) => (
              <li className="menu__nav-item">
                <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}</ul>
        </div>

        {/* Contact Info */}
        <div className="contact">
          <div className="contact__heading">
            Contact Us
          </div>
          <div className="contact__contacts">
            <a href="mailto:robotics_club@iitism.ac.in" className="contact__email-contact">
              <FaEnvelope />
              robotics_club@iitism.ac.in
            </a>
            <a href="https://www.google.com/maps/place/Indian+Institute+of+Technology+(Indian+School+of+Mines)+Dhanbad/@23.8142953,86.4411807,15z/data=!4m5!3m4!1s0x0:0x122cb1d133a89995!8m2!3d23.8142953!4d86.4411807"
              className="contact__location-contact">
              <FaMapMarkerAlt />
              IIT (ISM) Dhanbad
            </a>
          </div>
          <div className="contact__socials">
            <a href="https://www.facebook.com/roboism/">
              <FaFacebookSquare />
            </a>
            <a href="https://www.youtube.com/@roboism">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/robo__ism/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/roboism/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/RoboISM">
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; RoboISM {new Date().getFullYear()} &nbsp;&nbsp;&nbsp; | &nbsp; &nbsp; &nbsp; Made by RoboISM Members
      </div>
    </footer>
  );
}













































// import Link from "next/link";
// import { FaFacebookSquare, FaYoutube, FaInstagram, FaLinkedin, FaGithubSquare, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer id="contact" className="bg-[#3f3f3f] text-white pt-[1.8rem] px-[1.4rem] md:px-[max(2.4rem,calc(50%-600px))] pb-0 mt-[2rem]">
//       <div className="footer__items flex flex-col md:flex-row md:items-baseline md:justify-between pb-8">

//         {/* Logo */}
//         <div className="footer__logo mb-[2.6rem] md:mb-0 text-center md:text-left md:w-[30%] md:min-w-[220px]">
//           <Link href="/">
//             <img
//               src="/images/logo.png"
//               alt="RoboISM Logo"
//               className="w-[60%] min-w-[190px] max-w-[260px] md:w-[200px] mx-auto md:mx-0"
//             />
//           </Link>
//         </div>

//         {/* Links */}
//         <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
//           {['Home', 'Achievements', 'About', 'Events', 'Alumni', 'Gallery'].map((item) => (
//             <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="font-heading text-[1.25rem] tracking-[0.05rem] text-white no-underline hover:text-accent mb-2">
//               {item}
//             </Link>
//           ))}
//         </div>

//         {/* Contact Info */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <h3 className="font-heading text-[1.25rem] mb-4">Contact Us</h3>

//           <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6">
//             <a
//               href="mailto:robotics_club@iitism.ac.in"
//               className="flex items-center text-white no-underline hover:text-accent"
//             >
//               <FaEnvelope className="mr-2" /> robotics_club@iitism.ac.in
//             </a>

//             <a
//               href="https://www.google.com/maps/place/Indian+Institute+of+Technology+(Indian+School+of+Mines)+Dhanbad/@23.8142953,86.4411807,15z/data=!4m5!3m4!1s0x0:0x122cb1d133a89995!8m2!3d23.8142953!4d86.4411807"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-white no-underline hover:text-accent"
//             >
//               <FaMapMarkerAlt className="mr-2" /> IIT (ISM) Dhanbad
//             </a>
//           </div>

//           <div className="flex flex-row justify-center md:justify-start">
//             <a href="https://www.facebook.com/roboism/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent mr-[0.6rem] text-[1.35rem]">
//               <FaFacebookSquare />
//             </a>
//             <a href="https://www.youtube.com/@roboism" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent mr-[0.6rem] text-[1.35rem]">
//               <FaYoutube />
//             </a>
//             <a href="https://www.instagram.com/robo__ism/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent mr-[0.6rem] text-[1.35rem]">
//               <FaInstagram />
//             </a>
//             <a href="https://www.linkedin.com/company/roboism/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent mr-[0.6rem] text-[1.35rem]">
//               <FaLinkedin />
//             </a>
//             <a href="https://github.com/RoboISM" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent mr-[0.6rem] text-[1.35rem]">
//               <FaGithubSquare />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="text-center font-heading text-[1.2rem] opacity-60 py-[0.6rem] border-t border-white/10">
//         &copy; RoboISM {new Date().getFullYear()} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Made by RoboISM Members
//       </div>
//     </footer>
//   );
// }
