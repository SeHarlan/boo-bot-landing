import Image from "next/image";
import { FC, ReactNode } from "react";

export interface CommunityRowProps { 
  pfp: string;
  serverName: string;
  completedBounties: number;
  raffleTicketsSold: number;
  totalPoints: number;
}

const CommunityRow: FC<CommunityRowProps> = ({
  pfp,
  serverName,
  completedBounties,
  raffleTicketsSold,
  totalPoints,
}) => {
  return (
    <>
      <CommunityCell>
        <img src={pfp} alt={`${serverName} profile picture`}
          className="
          flex-shrink-0
          w-16 h-16 rounded-full bg-neutral-800
          "
        />
      </CommunityCell>
      <CommunityCell>
        <h3 className="text-xl font-bold">{serverName}</h3>
      </CommunityCell>
      <CommunityCell>
        <p className="text-center">{completedBounties}</p>
      </CommunityCell>
      <CommunityCell>
        <p className="text-center">{raffleTicketsSold}</p>
      </CommunityCell>
      <CommunityCell>
        <p className="text-center text-themeSkyBlue font-bold text-xl">{totalPoints}</p>
      </CommunityCell>
    </>
  )
}

export default CommunityRow

const CommunityCell: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="border-y border-themeWhite/20 border-collapse py-4 px-4 flex items-center justify-center flex-shrink-0">
    {children}
  </div>
)