import '@/styles/loading.css';

const LoadingSpinner = () => {
  return (
    <div className='container'>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
    </div>
  );
};

export default LoadingSpinner;
