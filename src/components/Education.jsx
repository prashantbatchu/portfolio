import React from "react";

const Education = () => {
  return (
    <section className="overflow-hidden pt-12 pb-4 lg:pt-[120px] lg:pb-[90px] bg-transparent">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark dark:text-white  mb-4 text-[#00df9a]">
            
            
            {/* <span className="material-symbols-outlined text-[#00df9a]">school</span> */}
            <span className="material-symbols-outlined " style={{ fontSize: "31px", color: "#00df9a" }}>
                school
            </span>{ " "}
            Education 

          </h2>
          <p className="text-sm sm:text-base md:text-lg text-body-color dark:text-gray-400 items-center ">
            My academic journey so far
          </p>
        </div>

        <div className="space-y-8">
          {/* College */}

           <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 w-[75%] mx-auto">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg sm:text-xl  font-semibold text-dark dark:text-white">
                  B.Tech in Computer Science and Technology
                </h3>
                <p className="text-sm sm:text-base text-[#00df9a]">Indian Institute of Engineering Science and Technology , Shibpur - West Bengal</p>
              </div>
              <p className="text-sm sm:text-base font-medium  text-gray-500 dark:text-gray-300">CGPA: 9.07 (Till 4th Sem)</p>
            </div>
            <p className="text-sm sm:text-base text-body-color dark:text-gray-400 mt-1">
              2023 – 2027
            </p>
          </div>

          {/* Intermediate */}
          
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 w-[75%] mx-auto">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg sm:text-xl  font-semibold text-dark dark:text-white">
                  Senior Secondary Education (Class XII)
                </h3>
                <p className="text-sm sm:text-base text-[#00df9a]">Bhashyam Junior College ,Guntur - Andhra Pradesh </p>
              </div>
              <p className="text-sm sm:text-base font-medium  text-gray-500 dark:text-gray-300">Percentage: 96.6%</p>
            </div>
            <p className="text-sm sm:text-base text-body-color dark:text-gray-400 mt-1">
              2021 – 2023
            </p>
          </div>

          {/* School */}

          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 w-[75%] mx-auto">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark dark:text-white">
                  Secondary Education (Class X)
                </h3>
                <p className="text-sm sm:text-base text-[#00df9a]">Bhashyam High School ,RCPM - Andhra Pradesh </p>
              </div>
              <p className="text-sm sm:text-base font-medium  text-gray-500 dark:text-gray-300">Percentage: 96.17%</p>
            </div>
            <p className="text-sm sm:text-base text-body-color dark:text-gray-400 mt-1">
              2020 – 2021
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
