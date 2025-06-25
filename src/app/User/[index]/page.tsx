type Props = {
  params: {
    index: string;
  };
};

export default function UserPage({ params }: Props) {
  const { index } = params;

  return (
    <div>
      <h1>User Page</h1>
      {/* <p>User Index: {index}</p> */}
    </div>
  );
}
