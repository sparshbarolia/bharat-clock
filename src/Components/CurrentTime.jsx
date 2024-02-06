import React, { useEffect, useState } from 'react'

function CurrentTime() {
  // const [count , setCount] = useState(0);
  const [time , setTime] = useState(new Date());

  useEffect( () => {
    //setInterval ek intervaId return krta h
    const intervalId = setInterval(() => {
        setTime(new Date());
        // console.log(intervalId)
        // console.log("I M IN");
    } , 1000);
    // console.log("I M OUT");

    // setInterval(() => {
    //   setCount(count+1);
    // },3000);

    return () => {
        clearInterval(intervalId);
    }
  } , [])

  return (
    <div>
      <p className='lead'>Time is: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default CurrentTime
