import { useEffect, useState } from 'react';

const HeaderCenter = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = dateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className='font-poppins items-center justify-between px-3 bg-violet-600 border-none flex rounded-b-2xl text-center text-white'>
      <div className='text-lg font-semibold'>Welcome Back</div>
      <div className='text-sm '>
        {formattedDate} — {formattedTime}
      </div>
    </div>
  );
};

export default HeaderCenter;
