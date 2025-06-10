'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Components

// DataSet

export default function board() {
  const item = {
    id: 0,
    url: '/boardImg1.jpeg',
  };
  const [test, SetTest] = useState<boolean>(false);
  const onClick = {
    Click: () => {
      SetTest(!test);
      console.log(test);
    },
  };
  return (
    <div className='flex items-center justify-between border p-3 rounded-2xl mb-3 w-full'>
      {/* BoardCreate Btn */}
      {/* UserImg */}
      <div className='border-2 rounded-full mr-3'>
        <Link href={`/user/${item.id}`}>
          <Image
            className='rounded-full'
            src={item.url}
            alt='UserImg'
            width={40}
            height={40}
          />
        </Link>
      </div>
      {/* インプット */}
      <div
        className='border p-4 w-full rounded-2xl cursor-pointer flex justify-between'
        onClick={onClick.Click}
      >
        <div className=' text-gray-500'>
          <label>글작성 버튼</label>
        </div>
        <div>img</div>
      </div>
    </div>
  );
}
