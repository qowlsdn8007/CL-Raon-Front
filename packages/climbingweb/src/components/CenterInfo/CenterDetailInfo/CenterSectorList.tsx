import { SectorInfoResponse } from 'climbingweb/types/response/center';
import React from 'react';

interface CenterSectorListProps {
  sectorInfoList: SectorInfoResponse[];
}

const CenterSectorList = ({ sectorInfoList }: CenterSectorListProps) => (
  <div className="flex flex-col gap-2 mt-[36px]">
    <h2 className="font-semibold text-sm">섹터 정보</h2>
    <ul>
      {sectorInfoList.map((value) => (
        <li
          className={'flex gap-2 justify-between items-center'}
          key={`sectorInfoList_${value.id}`}
        >
          <span>{value.name}</span>
          <span>{`${value.start} ${value.start && value.end ? '~' : ''} ${
            value.end
          }`}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default CenterSectorList;
