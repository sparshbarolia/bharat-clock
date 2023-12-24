import React, { useEffect, useState } from 'react'

function CurrentTime() {

  const [time , setTime] = useState(new Date());

  useEffect( () => {
    //setInterval ek intervaId return krta h
    const intervalId = setInterval(() => {
        setTime(new Date());
        // console.log(intervalId)
    } , 1000);

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
