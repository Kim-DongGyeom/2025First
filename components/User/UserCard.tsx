import Link from 'next/link';
import Image from 'next/image';

type UserItem = {
  UserImgURL: string;
  LikeUserName: string;
  id: number;
};

interface Props {
  items: UserItem;
}

export default function UserCard({ items }: Props) {
  return (
    <div className='flex items-center'>
      {/* User IMG */}
      <div className='border rounded-full items-center  mr-2'>
        <Link href={`/user/${items.id}`}>
          <Image
            className='rounded-full'
            src={items.UserImgURL}
            alt='UserImg'
            width={40}
            height={40}
          />
        </Link>
      </div>
      {/* User Name */}
      <Link href={`/user/${items.id}`}>{items.LikeUserName}</Link>
    </div>
  );
}
