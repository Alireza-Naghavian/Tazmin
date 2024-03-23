import React from 'react'

function Home_slogans() {
  return (
//desktop section


    // mobile section 
    <div className="block md:hidden  mt-8  space-y-8 text-right child:flex child:flex-col 
    child:gap-y-2 child:bg-gray_base/20 child:px-4 
    child:py-4  child:rounded-3xl">
        <div className="shrink-0 child:mx-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 41 40"
            width="40"
            height="40"
          >
            <circle
              cx="12.5"
              cy="12.354"
              r="12"
              fill="#007E46"
              opacity="0.3"
            ></circle>
            <g
              stroke="#101828"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              clipPath="url(#employers_svg__a)"
            >
              <path d="m21.5 38.765 2-8h2l2 8"></path>
              <path d="m21.319 26.848-8.734 4.78A4 4 0 0 0 10.5 35.14v3.625h28V35.14a4 4 0 0 0-2.085-3.512l-8.734-4.78"></path>
              <path d="M16.5 16.765a8 8 0 0 1 16 0c0 6-3.582 11-8 11s-8-5-8-11Z"></path>
              <path d="M16.538 15.977c1.169.5 2.52.788 3.962.788 2.621 0 4.941-.95 6.4-2.411 1.277 1.46 3.306 2.41 5.6 2.41"></path>
            </g>
            <defs>
              <clipPatp id="employers_svg__a">
                <path fill="#fff" d="M8.5 7.765h32v32h-32z"></path>
              </clipPatp>
            </defs>
          </svg>
          <span className="lg:text-base lg:leading-8 m-0 text-black_base font-DanaMedium ">
            سهولت در استفاده
          </span>
        </div>
        <div className="shrink-0 child:mx-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 41 41"
            width="40"
            height="40"
          >
            <circle
              cx="12.5"
              cy="12.764"
              r="12"
              fill="#007E46"
              opacity="0.3"
            ></circle>
            <g
              stroke="#101828"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              clipPath="url(#freelancers_svg__a)"
            >
              <path d="M33.5 37.764h6v-5.438a2 2 0 0 0-1.515-1.94l-5.833-1.459a1 1 0 0 1-.747-.829l-.412-2.88a6 6 0 0 0 3.507-5.454v-2.748a6.166 6.166 0 0 0-5.815-6.252 5.977 5.977 0 0 0-3.185.8M28.049 32.35l-4.925-1.408a1 1 0 0 1-.716-.82l-.415-2.905s3.726.281 5.507-1.453a10.23 10.23 0 0 1-2-6.738 6.185 6.185 0 0 0-5.761-6.257 6 6 0 0 0-6.239 5.995 10.452 10.452 0 0 1-2 7c1.781 1.734 5.507 1.453 5.507 1.453l-.415 2.905a1 1 0 0 1-.716.82l-4.925 1.408A2 2 0 0 0 9.5 34.273v3.491h20v-3.49a2 2 0 0 0-1.451-1.924Z"></path>
            </g>
            <defs>
              <clipPath id="freelancers_svg__a">
                <path fill="#fff" d="M8.5 8.764h32v32h-32z"></path>
              </clipPath>
            </defs>
          </svg>
          <span className="lg:text-base lg:leading-8 m-0 text-black_base font-DanaMedium">
            تعامل پویا
          </span>
        </div>
        <div className="shrink-0 child:mx-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 41 41"
            width="40"
            height="40"
          >
            <circle
              cx="12.5"
              cy="12.764"
              r="12"
              fill="#007E46"
              opacity="0.3"
            ></circle>
            <g
              stroke="#101828"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              clipPath="url(#projects_svg__a)"
            >
              <path d="M13.5 25.764v-16h22v16M39.5 29.764h-10v3h-10v-3h-10v10h30v-10Z"></path>
              <path d="m19.5 19.764 3 3 7-7"></path>
            </g>
            <defs>
              <clipPath id="projects_svg__a">
                <path fill="#fff" d="M8.5 8.764h32v32h-32z"></path>
              </clipPath>
            </defs>
          </svg>
          <span className="lg:text-base lg:leading-8 m-0 text-black_base font-DanaMedium ">
            دریافت آنی وجه
          </span>
        </div>
      </div>
  )
}

export default Home_slogans