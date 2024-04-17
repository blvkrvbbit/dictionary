type ErrProps = {
  error: string;
};

const Err = ({ error }: ErrProps) => (
  <div className='error bg-red-600 text-white border-2 px-4 py-8 mt-8 text-center'>
    <p className='font-bold text-xl'>{error}</p>
  </div>
);

export default Err;
