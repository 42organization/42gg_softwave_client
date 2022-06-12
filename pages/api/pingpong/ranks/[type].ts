// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RankData } from '../../../../types/rankTypes';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RankData>
) {
  const obj = {
    rankList: [
      {
        rank: 1,
        userId: 'daekim1',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 2,
        userId: 'daekim2',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 3,
        userId: 'daekim3',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 4,
        userId: 'daekim4',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 5,
        userId: 'daekim5',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 6,
        userId: 'daekim6',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 7,
        userId: 'daekim7',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 8,
        userId: 'daekim8',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 9,
        userId: 'daekim9',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 10,
        userId: 'daekim10',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 11,
        userId: 'daekim11',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 12,
        userId: 'daekim12',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 13,
        userId: 'daekim13',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 14,
        userId: 'daekim14',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 15,
        userId: 'daekim15',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 16,
        userId: 'daekim16',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 17,
        userId: 'daekim17',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 18,
        userId: 'daekim18',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 19,
        userId: 'daekim19',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 20,
        userId: 'daekim20',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 21,
        userId: 'daekim21',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 22,
        userId: 'daekim22',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 23,
        userId: 'daekim23',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 24,
        userId: 'daekim24',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 25,
        userId: 'daekim25',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 26,
        userId: 'daekim26',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 27,
        userId: 'daekim27',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 28,
        userId: 'daekim28',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 29,
        userId: 'daekim29',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 30,
        userId: 'daekim30',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 31,
        userId: 'daekim31',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 32,
        userId: 'daekim32',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 33,
        userId: 'daekim33',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 34,
        userId: 'daekim34',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 35,
        userId: 'daekim35',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 36,
        userId: 'daekim36',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 37,
        userId: 'daekim37',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 38,
        userId: 'daekim38',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
      {
        rank: 39,
        userId: 'daekim39',
        ppp: 100,
        statusMessage: '프론트엔드 팀 최고',
        winRate: 1,
      },
      {
        rank: 40,
        userId: 'daekim40',
        ppp: 90,
        statusMessage: '백엔드 팀도 최고',
        winRate: 1,
      },
    ],
  };
  res.status(200).json(obj);
}