import Link from 'next/link';
import Image from 'next/image';
import UserIcon from './UserIcon';

type UserItem = {
  UserImgURL: string;
  UserName: string;
  id: number;
};

interface Props {
  items: UserItem;
}

export default function UserCard({ items }: Props) {
  return (
    <div className='flex items-center'>
      {/* User Icon */}
      <UserIcon item={items} />
      {/* User Name */}
      <Link href={`/User/${items.id}`}>{items.UserName}</Link>
    </div>
  );
}
