import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
      { id: 1, text: 'ABOUT ME', href: '#about' },
      { id: 2, text: 'EDUCATION', href: '#education' },
      { id: 3, text: 'PROJECTS', href: '#projects' },
      { id: 4, text: 'ACHIEVEMENTS', href: '#achievements' },
      { id: 5, text: 'CONTACT', href: '#contact' },
  ];
  

  


  return (
    <div className='bg-transparent flex justify-center items-center h-16 max-w-[1240px] mx-auto px-4  text-white text-[13px] '>
 
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4  rounded-xl m-2 cursor-pointer hover:scale-105 hover:font-bold transition-all duration-300'
          >
            <a href={item.href} 
            onClick={() => setActiveSection(item.href)}
              className={
                activeSection === item.href
                  ? 'font-bold text-[#00df9a]'
                  : ''
              }
              >
              {item.text}

            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div 
        onClick={handleNav} 
        className="block md:hidden cursor-pointer z-50 absolute top-4 right-4"
      >
        {nav ? (
          <div className="bg-black rounded-full p-2">
            <AiOutlineClose size={15} color="white" />
          </div>
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>


      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-40'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            // className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            className='p-4  rounded-xl m-2 cursor-pointer hover:scale-105 hover:font-bold transition-all duration-300'

          >
            <a href={item.href}
               onClick={() => {
                setActiveSection(item.href);
                setNav(false);
              }}
              className={
                activeSection === item.href
                  ? 'font-bold text-[#00df9a]'
                  : ''
              }
              >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;






// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [activeSection, setActiveSection] = useState('#about');

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const navItems = [
//     { id: 1, text: 'ABOUT ME', href: '#about' },
//     { id: 2, text: 'EDUCATION', href: '#education' },
//     { id: 3, text: 'PROJECTS', href: '#projects' },
//     { id: 4, text: 'ACHIEVEMENTS', href: '#achievements' },
//     { id: 5, text: 'CONTACT', href: '#contact' },
//   ];

//   return (
//     <div className='fixed w-full top-0 left-0 z-50 bg-black bg-opacity-70'>
//       <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-16 text-white text-sm'>

//         {/* Desktop Navigation */}
//         <ul className='hidden md:flex gap-2'>
//           {navItems.map((item) => (
//             <li
//               key={item.id}
//               className='p-2 rounded-xl cursor-pointer hover:scale-105 hover:font-bold transition-all duration-300'
//             >
//               <a
//                 href={item.href}
//                 onClick={() => setActiveSection(item.href)}
//                 className={
//                   activeSection === item.href
//                     ? 'font-bold text-[#00df9a]'
//                     : ''
//                 }
//               >
//                 {item.text}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Icon */}
//         <div onClick={handleNav} className='md:hidden cursor-pointer z-50'>
//           {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`md:hidden fixed top-0 left-0 w-3/5 h-full bg-[#000300] text-white p-6 pt-20 transition-transform duration-300 ease-in-out z-40 ${
//           nav ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <ul>
//           {navItems.map((item) => (
//             <li
//               key={item.id}
//               className='py-4 border-b border-gray-700 text-lg font-medium'
//             >
//               <a
//                 href={item.href}
//                 onClick={() => {
//                   setActiveSection(item.href);
//                   setNav(false);
//                 }}
//                 className={
//                   activeSection === item.href
//                     ? 'font-bold text-[#00df9a]'
//                     : ''
//                 }
//               >
//                 {item.text}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
