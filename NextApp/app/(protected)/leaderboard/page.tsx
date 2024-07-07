// 'use client';
// import { useSession } from 'next-auth/react';

import Card from '@/components/custom/Card';
import LeaderBoardList from '@/components/custom/LeaderBoardList';
import TopFive from '@/components/custom/TopFive';

export default function leaderboard() {
  // const session = useSession();
  return (
    <div className={'flex gap-5 items-center justify-center'}>
      <Card>
        <LeaderBoardList></LeaderBoardList>
      </Card>
      <Card>
        <TopFive></TopFive>
      </Card>
    </div>
  );
}
