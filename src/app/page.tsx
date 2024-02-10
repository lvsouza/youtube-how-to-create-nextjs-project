import Link from 'next/link';

export default function Page() {
  return (
    <main>
      Base

      <Link className='text-blue-500' href="/home">Home</Link>
      <Link className='text-blue-500' href="/other">Other</Link>
    </main>
  );
}
