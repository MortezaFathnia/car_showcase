'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { ShowMoreProps } from '@/types';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

const ShowMore: FC<ShowMoreProps> = ({ pageNumber, isNext }) => {
  const router=useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };
  
  return(
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
};

export default ShowMore;
