import Link from 'next/link';



export default function Page() {

  return (
    <>
      Other

      <Link className='text-blue-500' href="/home">Home</Link>
      <Link className='text-blue-500' href="/">Base</Link>
    </>
  );
}
