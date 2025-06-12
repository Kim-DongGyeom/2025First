'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Components

// DataSet

export default function board() {
  const item = {
    UserImgURL: '/boardImg1.jpeg',
    UserName: 'LikeUserName',
    id: 0,
  };
  const [test, SetTest] = useState<boolean>(false);
  const onClick = {
    Click: () => {
      SetTest(!test);
      console.log(test);
    },
  };

  return (
    <div className='flex items-center justify-between border-2 p-3 rounded-2xl mb-3 w-full'>
      {/* BoardCreate Btn */}
      {/* User IMG */}
      <div className='flex items-center'>
        <div className='border rounded-full overflow-hidden mr-2 w-12 h-12 relative'>
          <Link href={`/user/${item.id}`}>
            <Image
              className='object-cover'
              src={item.UserImgURL}
              alt='UserImg'
              fill
            />
          </Link>
        </div>
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
