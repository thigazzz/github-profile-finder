import {BiSearch} from 'react-icons/bi'

export const SearchButton = ({
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      data-testid="search-button-component"
      className="w-full h-full bg-green-700 rounded-md hover:bg-green-800 flex justify-center items-center"
    >
      <BiSearch data-testid='icon-search' className='text-white text-xl font-bold'/>
    </button>
  );
};
