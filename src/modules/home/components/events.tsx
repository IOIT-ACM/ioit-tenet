export const Events = () => {
  return (
    <div className='z-50 flex min-h-screen items-center justify-center border border-black bg-gray-200 px-5'>
      <div className='grid w-full max-w-[1200px] grid-cols-3 items-center gap-7'>
        {/* T-E-N-E-T */}
        <div className='grid h-full items-start gap-2'>
          <div className='grid items-start gap-2'>
            <div className='h-20 rounded-xl bg-gray-400/70'>T</div>
            <div className='h-20 rounded-xl bg-gray-400/70'>E</div>
            <div className='h-20 rounded-xl bg-gray-400/70'>N</div>
            <div className='h-20 rounded-xl bg-gray-400/70'>E</div>
            <div className='h-20 rounded-xl bg-gray-400/70'>T</div>
          </div>
        </div>

        {/* Main card */}
        <div className='h-[600px] rounded-3xl border-2 border-black bg-gray-400'></div>

        <div className='h-56 rounded-xl bg-gray-400/70'>Technology</div>
        {/* <div className='h-56 rounded-xl bg-gray-400/70'>Enterprunership</div> */}
        {/* <div className='h-56 rounded-xl bg-gray-400/70'>Negotiations</div> */}
        {/* <div className='h-56 rounded-xl bg-gray-400/70'>E-Sports</div> */}
        {/* <div className='h-56 rounded-xl bg-gray-400/70'>Trends</div> */}
      </div>
    </div>
  );
};
