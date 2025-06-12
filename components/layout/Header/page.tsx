// Components
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';

// dataSet
import HeaderDataSet from '../../../utils/Header/HeaderDataSet.json';
import UserIcon from '../../User/UserIcon';

export default function Header() {
  const item = {
    UserImgURL: '/boardImg1.jpeg',
    id: 0,
  };

  return (
    <div className='px-20 flex justify-end mt-5 mb-8 w-full'>
      <HeaderNav items={HeaderDataSet} />
      <div className='flex justify-end  w-1/4 mg-auto'>
        <HeaderSearch />
        <div className='px-2'>
          <UserIcon item={item} />
        </div>
        <div className='flex items-center'>img</div>
      </div>
    </div>
  );
}
