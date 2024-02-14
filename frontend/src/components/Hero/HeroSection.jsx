import React, {useState, useEffect} from "react";
import moment from "moment";

const HeroSection = () => {
    const [countdown, setCountdown] = useState({
        days: '00',
        hours : '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
      const endDate = moment('2024-02-13').add(30, 'days');
      
      const intervalId = setInterval(() => {
        const now = moment();
        const duration = moment.duration(endDate.diff(now));
  
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
  
        setCountdown({
            days,
            hours ,
            minutes,
            seconds
        });
        if (duration.asMilliseconds() <= 0) {
          clearInterval(intervalId);
          setCountdown('Countdown expired!');
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    <>
    <div
  className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left bg-cover bg-center"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)"
  }}
>
  <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75" />
  <main className="px-8 sm:px-24 z-10 md:w-2/3">
    <div className="">
      <p className="m-3 mb-3 text-gray-200 sm:mt-5 sm:max-w-xl md:mt-5 text-xs font-medium">
        City Shop Presents
      </p>
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:leading-none md:text-5xl">
        Winter Sale
        <br />
        <span className="text-yellow-600">25% Discount</span>
      </h2>
      <div className="mt-5 sm:mt-8 sm:flex justify-start">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-light rounded-full text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow transition duration-150 ease-in-out md:py-4 md:text-md md:px-10"
          >
            <span>Shop Now</span>
          </a>
        </div>
      </div>
    </div>
  </main>
  <div className="z-10 text-white text-center flex items-center justify-center w-full">
    <div className="flex items-end justify-center">
      <div className="m-2 sm:m-5">
        <span className="text-yellow-600 font-bold text-xl sm:text-5xl">
         {countdown.days}
        </span>
        <p>Days</p>
      </div>
      <div className="m-2 sm:m-5">
        <span className="text-yellow-600 font-bold text-xl sm:text-5xl">
          {countdown.hours}
        </span>
        <p>Hours</p>
      </div>
      <div className="m-2 sm:m-5">
        <span className="text-yellow-600 font-bold text-xl sm:text-5xl">
          {countdown.minutes}
        </span>
        <p>Minutes</p>
      </div>
      <div className="m-2 sm:m-5">
        <span className="text-yellow-600 font-bold text-xl sm:text-5xl">
          {countdown.seconds}
        </span>
        <p>Seconds</p>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default HeroSection;
