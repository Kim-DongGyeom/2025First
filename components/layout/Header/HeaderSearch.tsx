export default function HeaderSearch() {
  return (
    <div className='flex justify-end w-1/4 mg-auto'>
      <input
        className='border border-black pl-3 p-1 rounded-3xl w-64'
        type='text'
        placeholder='キーワードを入力してください!'
      />
    </div>
  );
}
