import { Icon } from '@iconify/react/dist/iconify.js';

const PlayButton = () => (
  <button className='bg-gray-200 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer'>
    <Icon icon='mdi:play' className='text-4xl text-purple-500' />
  </button>
);

export default PlayButton;
