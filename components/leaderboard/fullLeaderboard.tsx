"use client"

import { CommunityRowProps } from "./communityRow"
import CommunityTable from "./communityTable"

export const mockCommunityRows: CommunityRowProps[] = Array.from({ length: 10 }).map((_, i) => ({
  pfp: "/../public/boo icon.png",
  serverName: `Mock Server ${i}`,
  completedBounties: Math.floor(Math.random() * 100),
  raffleTicketsSold: Math.floor(Math.random() * 100),
  totalPoints: Math.floor(Math.random() * 100),
}))


const FullLeaderboard = () => {
  const communityRows = mockCommunityRows.sort((a, b) => b.totalPoints - a.totalPoints)
  return (
    <CommunityTable communityRows={communityRows}/>
  )
}

export default FullLeaderboard


export const TopFiveLeaderboard = () => { 
  const communityRows = mockCommunityRows.sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 5)
  return (
    <CommunityTable communityRows={communityRows}/>
  )
}