import React from 'react';
import Image from 'next/image';
import HeaderIcons from './HeaderIcons';
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid';




export default function Header() {
  return <div>
        <div className='bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>

            <div className='flex'>
            <HeaderIcons Icon={HomeIcon} title="HOME"/>
            <HeaderIcons Icon={UserIcon} title="ACCOUNT"/>
            <HeaderIcons Icon={PhoneIcon} title="CONTACT"/>
            <HeaderIcons Icon={InformationCircleIcon} title="ABOUT"/>

             </div>
                 <Image src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" 
                 width={100} 
                 height={100}
                 className="cursor-pointer active:brightness-110"
                 />

             
      </div>

        </div>
}