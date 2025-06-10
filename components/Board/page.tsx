// Components

// DataSet
import BoardData from '../../utils/BoardDataSet.json';
import BoardCard from './BoardCard';
import BoardCreate from './BoardCreate';

export default function board() {
  const BoardInfo = BoardData;
  console.log(BoardInfo);

  return (
    <div className=''>
      <BoardCreate />
      <BoardCard />
    </div>
  );
}
