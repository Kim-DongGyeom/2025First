import Link from 'next/link';

type navItem = {
  href: string;
  name: string;
};

interface Props {
  items: Array<navItem>;
}

export default function HeaderNav({ items }: Props) {
  return (
    <div className='flex w-1/2'>
      {/* logo */}
      <div className='flex items-center space-x-8'>
        <Link href='/' className='text-xl font-bold'>
          board
        </Link>
      </div>
      {/* Navigation Bar */}
      <nav className='flex items-center ml-10'>
        <ul className='flex font-bold'>
          {items.map((item, idx) => (
            <li key={item.name + idx}>
              <Link href={item.href} className='mx-5'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
