'use client';
import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import { FC, useState } from 'react';
import { CustomButton } from '.';

interface CarCardProps {
  car: CarProps;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <div className='car-card__content-title'>
          {make} {model}
        </div>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>/day</span>
      </p>
      <div className='relative w-full my-3 h-40 object-contain'>
        <Image
          src='/hero.png'
          alt='car  model'
          fill
          priority
          className='object-contain'
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/steering-wheel.svg'
              alt='steering wheel'
              width={20}
              height={20}
            />
            <p className='text-[14px]'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' alt='tire' width={20} height={20} />
            <p className='text-[14px]'>{drive.toLocaleUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' alt='gas' width={20} height={20} />
            <p className='text-[14px]'>{city_mpg} MPG</p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightItem='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
