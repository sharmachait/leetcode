'use client';

import { Button } from '@/components/ui/button';
import logout from '@/actions/logout';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export function NavBar({ pages }: { pages: { name: string; link: string }[] }) {
  const session = useSession();
  const pathname = usePathname();
  const highlight =
    'bg-gray-800 p-2 shadow rounded-2xl shadow-gray-700 text-primary-foreground shadow';
  const option =
    'p-2 bg-white text-black shadow rounded-2xl shadow-gray-700 hover:bg-primary/90 hover:text-white hover:shadow-none';
  return (
    <div
      className={
        'w-full h-18 p-2 mb-2 bg-white flex items-center justify-between shadow-md shadow-gray-700'
      }
    >
      <div className={'ml-10 flex items-center gap-10'}>
        <Image
          src={`/static/images/logo.jpg`}
          alt={''}
          width="50"
          height="50"
        />

        <div className={'font-semibold text-2xl'}>Leetcode</div>
      </div>
      <div className={'flex items-center justify-between gap-5 font-semibold'}>
        {pages.map((page) => (
          <Link
            href={page.link}
            className={pathname == page.link ? highlight : option}
          >
            {page.name}
          </Link>
        ))}
        {/*<Link*/}
        {/*  href={'/about'}*/}
        {/*  className={pathname == '/about' ? highlight : option}*/}
        {/*>*/}
        {/*  About*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  href={'/dashboard'}*/}
        {/*  className={pathname == '/dashboard' ? highlight : option}*/}
        {/*>*/}
        {/*  Dashboard*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  href={'/problems'}*/}
        {/*  className={pathname == '/problems' ? highlight : option}*/}
        {/*>*/}
        {/*  Problems*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  href={'/contest'}*/}
        {/*  className={pathname == '/contest' ? highlight : option}*/}
        {/*>*/}
        {/*  Contests*/}
        {/*</Link>*/}
      </div>
      <div className={'flex items-center mr-10'}>
        <div className={'font-semibold mr-10'}>{session.data?.user.name}</div>
        <Button
          className={'shadow shadow-gray-700'}
          variant={'defaultInverse'}
          type={'submit'}
          onClick={async () => {
            await logout();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
