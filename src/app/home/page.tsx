import Link from 'next/link';



export default function Page() {

  return (
    <>
      Home

      <Link className='text-blue-500' href="/other">Other</Link>
      <Link className='text-blue-500' href="/">Base</Link>
    </>
  );
}
