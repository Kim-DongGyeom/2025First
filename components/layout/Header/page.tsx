// Components
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';

// dataSet
import HeaderDataSet from '../../../utils/Header/HeaderDataSet.json';

export default function Header() {
  return (
    <div className='px-20 flex justify-end mt-5 mb-8 w-full'>
      <HeaderNav items={HeaderDataSet} />
      {/* <div className='flex-1'> </div> */}
      <HeaderSearch />
    </div>
  );
}
