import React from "react";

const Wave = () => {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 590"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="17%" y1="12%" x2="83%" y2="88%">
          <stop offset="5%" stopColor="#4848fa"></stop>
          <stop offset="95%" stopColor="#8342fa"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,600 C 0,600 0,200 0,200 C 113.77033492822966,180.60287081339712 227.54066985645932,161.20574162679424 312,147 C 396.4593301435407,132.79425837320576 451.6076555023924,123.77990430622012 542,126 C 632.3923444976076,128.22009569377988 758.0287081339712,141.67464114832535 858,172 C 957.9712918660288,202.32535885167465 1032.2775119617224,249.52153110047846 1125,257 C 1217.7224880382776,264.47846889952154 1328.8612440191387,232.23923444976077 1440,200 C 1440,200 1440,600 1440,300 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
        transform="rotate(-180 720 250)"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="17%" y1="12%" x2="83%" y2="88%">
          <stop offset="5%" stopColor="#4848fa"></stop>
          <stop offset="95%" stopColor="#8342fa"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,600 C 0,600 0,400 0,400 C 98.33492822966511,410.38277511961724 196.66985645933022,420.76555023923447 282,415 C 367.3301435406698,409.23444976076553 439.6555023923444,387.3205741626794 545,382 C 650.3444976076556,376.6794258373206 788.708133971292,387.9521531100478 880,402 C 971.291866028708,416.0478468899522 1015.511961722488,432.8708133971292 1101,433 C 1186.488038277512,433.1291866028708 1313.244019138756,416.56459330143537 1440,400 C 1440,400 1440,600 1440,1200 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
        transform="rotate(-180 720 300)"
      ></path>
    </svg>
  );
};

export default Wave;
