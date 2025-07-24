import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-transparent dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
                 <div className="transform scale-150">
                  <DotLottieReact
                    src="https://lottie.host/415ed7c6-2b8d-4624-9c9a-e1f9ff8b8ec0/33h3rL6tlu.lottie"
                    loop
                    autoplay
                    speed={0.25}
                  />
                </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary p-2">
                  Hi,there I'm
                </span>
                <h2 className="mb-5 text-2xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-white p-2">
                  BATCHU PRASANTH
                </h2>
                <p className="mb-5 text-sm sm:text-base md:text-lg text-body-color dark:text-dark-6 p-2">
                    I’m a passionate and self-driven developer with strong skills in 
                    <span className="font-semibold text-[#00df9a]"> web development</span> With a strong foundation in the MERN stack, 
                    <span className="font-semibold text-[#00df9a]"> data structures and algorithms (DSA)</span>, and 
                    <span className="font-semibold text-[#00df9a]"> competitive programming</span>. I love solving problems and building clean, user-friendly websites. <br /><br />
                </p>
                <p className="mb-8 text-sm sm:text-base md:text-lg text-body-color dark:text-dark-6 p-2">
                 I also have experience designing with 
                    <span className="font-semibold text-[#00df9a]"> Canva</span> and 
                    <span className="font-semibold text-[#00df9a]"> Figma</span>, which helps me bring both function and aesthetic to my projects. Whether it's coding or designing, I’m always ready to explore, learn, and innovate!
                </p>
                <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center py-3 text-sm sm:text-base  font-medium text-center text-white border border-transparent rounded-md  bg-primary hover:text-zinc-400 p-2"
                >
                
                MY RESUME &nbsp;
                  <span className="material-symbols-rounded text-xl">
                        download
                    </span>
                </a>        

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;





// const About1 = () => {
//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center justify-center">
//       <h2 className="text-3xl md:text-4xl font-bold mb-6 underline underline-offset-8 text-[#00df9a]">
//         About Me
//       </h2>
//       <p className="max-w-3xl text-center text-sm md:text-base leading-relaxed">
//         Hi! I’m a passionate and self-driven developer with strong skills in 
//         <span className="font-semibold text-[#00df9a]"> web development</span>, 
//         <span className="font-semibold text-[#00df9a]"> data structures and algorithms (DSA)</span>, and 
//         <span className="font-semibold text-[#00df9a]"> competitive programming</span>. I love solving problems and building clean, user-friendly websites. <br /><br />
//         I also have experience designing with 
//         <span className="font-semibold text-[#00df9a]"> Canva</span> and 
//         <span className="font-semibold text-[#00df9a]"> Figma</span>, which helps me bring both function and aesthetic to my projects. Whether it's coding or designing, I’m always ready to explore, learn, and innovate!
//       </p>
//     </div>
//   );
// };

// export default About1;
   {/* <div className="flex items-center -mx-3 sm:-mx-4"> */}
                {/*
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                        
                  </div>
                </div> */}


                
                {/* <DotLottieReact
                  src="https://lottie.host/4d69359c-390e-47a8-b799-37d26fcc2a2e/Hwe6RHlMKa.lottie"
                  loop
                  autoplay

                /> */}