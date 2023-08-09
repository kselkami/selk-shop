import React, { useState } from 'react';

const Banner = () => {
  const [isShowing, setIsShowing] = useState(true);

  function toggleShow() {
    setIsShowing(false);
  }

  return (
    <section
      className={`relative w-full h-[2rem] bg-black flex items-center justify-center text-white ${
        isShowing ? '' : 'hidden'
      }`}
    >
      <span>Blah blah blah buy now for 50% off</span>
      <button
        onClick={toggleShow}
        className="absolute p-2 py-[1px] rounded-md bg-white text-black right-4 top-[50%] translate-y-[-50%]"
      >
        x
      </button>
    </section>
  );
};

export default Banner;
