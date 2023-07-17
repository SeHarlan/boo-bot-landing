import { FC } from "react";
import CommunityRow, { CommunityRowProps } from "./communityRow";

const CommunityTable: FC<{ communityRows: CommunityRowProps[] }> = ({ communityRows }) => { 
  return (
    <div className="grid grid-cols-[auto_auto_1fr_1fr_1fr] min-w-[40rem]
     ">
      <div />
      <div />
      <p className="text-center text-xl py-4">Bounties Completed</p>
      <p className="text-center text-xl py-4">Raffle Tickets Sold</p>
      <p className="text-center text-xl py-4 text-themeSkyBlue font-bold">Total Points</p>
      {communityRows.map((rowProps, index) => <CommunityRow key={"community-row-"+index} {...rowProps} />)}
    </div>
  )
}

export default CommunityTable