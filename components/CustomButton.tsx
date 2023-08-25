'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import { FC } from 'react';


const CustomButton: FC<CustomButtonProps> = ({title,containerStyles,handleClick,textStyles,rightItem,isDisabled}) => {
  return (
    <button 
    disabled={isDisabled} 
    type={'button'} 
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightItem &&(
        <div className='relative w-6 h-6'>
          <Image 
          src={rightItem}
          alt='right icon'
          fill
          className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
