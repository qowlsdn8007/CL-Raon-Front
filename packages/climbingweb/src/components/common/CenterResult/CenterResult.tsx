import React from 'react';
import StarIcon from 'climbingweb/src/assets/icon/ic_12_rate_black.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CenterResultSkeleton } from '../skeleton/CenterResultSkeleton';

export interface CenterProps {
  id: string;
  name: string;
  thumbnailUrl: string;
  reviewRank: number;
}

/**
 * search page 에서 암장 썸네일과 별점, 이름을 표시 해주는 컴포넌트
 * 해당 컴포넌트를 클릭하면, 암장 소개 페이지로 넘어간다.
 */
const CenterResult = ({ id, name, thumbnailUrl, reviewRank }: CenterProps) => {
  const router = useRouter();

  //컴포넌트 터치 핸들링 함수
  const handleGoToCenterDetail = () => {
    router.push(`/center/${id}`);
  };

  if (!(id && name && thumbnailUrl)) {
    return <CenterResultSkeleton />;
  }

  return (
    <div
      onClick={handleGoToCenterDetail}
      className="relative min-w-[152px] min-h-[120px] bg-transparent "
    >
      <div className="flex items-center justify-between m-1 px-2 py-0.5 z-10 gap-1 absolute bg-yellow-500 rounded-full text-xs font-bold">
        <StarIcon />
        {Math.floor(reviewRank * 10) / 10}
      </div>
      <Image
        className="rounded-xl"
        src={thumbnailUrl}
        alt={'centerImage'}
        layout="fill"
      />
      <div className="mx-0.5 my-0.5 px-1 py-0.5 right-0 bottom-0 absolute bg-purple-500 text-white rounded-full text-[8px] leading-[14px] font-bold">
        {name}
      </div>
    </div>
  );
};

export default CenterResult;
