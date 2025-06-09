import Link from 'next/link';
import Image from 'next/image';
import UserCard from '../User/UserCard';
// Components
// DataSet
import BoardData from '../../utils/BoardDataSet.json';

export default function board() {
  const BoardInfo = BoardData;
  //   console.log(BoardInfo[0].User);

  return (
    <div className='min-w-96 border border-black rounded-2xl p-4 mb-4'>
      {/* 게시물 카드 ~ */}
      <div className='flex justify-between items-center mb-2'>
        {/* user프로필 */}
        <UserCard items={BoardInfo[0].User} />
        <div>더보기</div>
      </div>
      {/* 게시물 사진 */}
      <div className='w-full'>
        <Image
          src='/boardImg.jpeg' // public 폴더 기준 경로
          alt='UserImg'
          width={500}
          height={500}
        />
      </div>
      {/* 게시물 관련 버튼 */}
      <div className='flex items-center justify-between my-2'>
        <div className='flex items-center'>
          <div className='pr-2'>いいね</div>
          <div className='pr-2'>コメント</div>
          <div className='pr-2'>共有</div>
        </div>
        <div className=''>保存</div>
      </div>
      {/* 좋아요　갯수 */}
      <div className='font-bold my-2'>
        <Link href={`/user$id`}>いいね！：</Link>
        <Link className='mr-3' href={`/user$id`}>
          {BoardInfo[0].User.LikeUserName}
        </Link>
        <Link className='' href={`/user$id`}>
          他
        </Link>
      </div>
      {/* 게시물 관련 글 */}
      <div className=' mr-3'>
        <Link className='font-bold mr-2' href={`/user$id`}>
          {BoardInfo[0].Board.CreateUser}
        </Link>
        <label>{BoardInfo[0].Board.contents}</label>
      </div>
      {/* 댓글 갯수 */}
      <div className='text-gray-500 mr-3'>
        <Link href={`/user$id`}>
          コメント{BoardInfo[0].Board.commentCnt}件をすべて見る
        </Link>
      </div>
      {/* 댓글 작성 */}
      <div className='text-gray-500 mr-3 w-full'>
        <input className='w-full' type='text' placeholder='コメントを追加...' />
      </div>
    </div>
  );
}
