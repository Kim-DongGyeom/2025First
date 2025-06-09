export default function HeaderSearch() {
  return (
    // <div className='flex items-center w-1/2 '>
    //   <input
    //     className='border border-black pl-3 p-1 rounded-3xl w-full'
    //     type='text'
    //     placeholder={'キーワードを入力してください!'}
    //   />
    // </div>
    <div className='flex justify-end w-1/2 mg-auto'>
      <input
        className='border border-black pl-3 p-1 rounded-3xl w-64'
        type='text'
        placeholder='キーワードを入力してください!'
      />
    </div>
  );
}
