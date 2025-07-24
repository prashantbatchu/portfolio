import React from "react";

const Contact = () => {
  return (
    <section className="pt-20 pb-16 lg:pt-[120px] lg:pb-[90px] bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4 text-[#00df9a]">
          
          Contact Me
        </h2>
        <p className="text-base text-body-color dark:text-gray-400 mb-10">
          Feel free to reach out via any platform below 👇
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/prashanth-batchu-4a956a291/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition duration-300"
          >
            {/* <span className="material-symbols-outlined text-4xl text-[#00df9a] group-hover:scale-110 transition-transform">
              business_center
            </span> */}
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30" fill="#00df9a">
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
            </svg>
           

            <span className="mt-2 text-sm text-[#00df9a] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              LinkedIn
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/prasanth_bpk42/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24" fill="#00df9a">
                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
            <span className="mt-2 text-sm text-[#00df9a] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Instagram
            </span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/your-telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" fill="#00df9a">
                <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
            </svg>
            <span className="mt-2 text-sm text-[#00df9a] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Telegram
            </span>
          </a>
        </div>

        {/* Optional Email */}
        <div className="mt-10">
          <p className="text-sm text-gray-600 dark:text-gray-400">Or email me directly:</p>
          <a
            href="mailto:yourname@example.com"
            className="text-[#00df9a] hover:underline text-base"
          >
            prasanthbatchu6@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
