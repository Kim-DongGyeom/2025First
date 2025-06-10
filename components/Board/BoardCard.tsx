import Link from 'next/link';
import Image from 'next/image';
import UserCard from '../User/UserCard';
// Components
// DataSet
import BoardData from '../../utils/BoardDataSet.json';

export default function board() {
  const BoardInfo = BoardData;
  console.log('Boardcard: ', BoardInfo);

  BoardInfo.map((data, index) => {
    console.log(index, ':', data);
    // console.log(data.User.id);
  });

  return (
    <div className=''>
      {BoardInfo.map((data, index) => (
        <div className='min-w-96 border-2 rounded-2xl p-4 px-5 mb-4'>
          {/* 게시물 카드 ~ */}
          <div className='flex justify-between items-center mb-2'>
            {/* user프로필 */}
            <UserCard items={data.User} />
            <div>詳細</div>
          </div>
          {/* 게시물 사진 */}
          <div className='w-full'>
            <Image
              src={data.Board.BoardImgURL}
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
              {data.User.LikeUserName}
            </Link>
            <Link className='' href={`/user$id`}>
              他
            </Link>
          </div>
          {/* 게시물 관련 글 */}
          <div className=' mr-3'>
            <Link className='font-bold mr-2' href={`/user$id`}>
              {data.Board.CreateUser}
            </Link>
            <label>{data.Board.contents}</label>
          </div>
          {/* 댓글 갯수 */}
          <div className='text-gray-500 mr-3'>
            <Link href={`/user$id`}>
              コメント{data.Board.commentCnt}件をすべて見る
            </Link>
          </div>
          {/* 댓글 작성 */}
          <div className='text-gray-500 mr-3 w-full'>
            <input
              className='w-full'
              type='text'
              placeholder='コメントを追加...'
            />
          </div>
        </div>
      ))}
    </div>
  );
}
