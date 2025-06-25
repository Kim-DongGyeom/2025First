import Link from 'next/link';
import Image from 'next/image';

type UserItem = {
  UserImgURL: string;
  id: number;
};

interface Props {
  item: UserItem;
}

export default function UserIcon({ item }: Props) {
  return (
    <div className='flex items-center'>
      {/* User IMG */}
      <div className='border rounded-full overflow-hidden mr-2 w-12 h-12 min-w-[48px] relative'>
        <Link href={`/User/${item.id}`}>
          <Image
            className='object-cover'
            src={item.UserImgURL}
            alt='UserImg'
            fill
          />
        </Link>
      </div>
    </div>
  );
}
