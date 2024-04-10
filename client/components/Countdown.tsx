import {usestate} from 'react'

interface CountdownProps {
  targetDate:Date;
}

function countdown() {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    left timeLeft = {}

    if (difference > 0){
      timeleft = {
        day: Math.floor(difference /(1000 * 60 * 60 * 24))
        hours: Math.floor((difference /(1000 * 60 * 60)) % 24)
      }
    }
  }


}


//  Boston if i understand the purpose check this may be if not u gonna teach me tommorow what to do


// This component takes a targetDate prop representing the 
// date and time to count down to. It calculates the time difference between 
// the current date and targetDate, and updates every second to reflect the remaining time.


// import React, { useState, useEffect } from 'react';


// interface CountdownProps {
//   targetDate:Date;
// }

// function countdown() {
//   const calculateTimeLeft = () => {

//     const difference = +targetDate - +new Date();
//     left timeLeft = {}

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timerComponents.push(
//       <span>
//         {timeLeft[interval]} {interval}{' '}
//       </span>
//     );
//   });

//   return (
//     <div>
//       {timerComponents.length ? (
//         timerComponents
//       ) : (
//         <span>Countdown complete!</span>
//       )}
//     </div>
//   );
// };

// export default Countdown;