"use client"

import { useMemo } from "react"

import { CommunityRowProps } from "./communityRow"
import CommunityTable from "./communityTable"

export const mockCommunityRows: CommunityRowProps[] = Array.from({ length: 10 }).map((_, i) => ({
  pfp: "/boo icon.png",
  serverName: `Mock Server ${i}`,
  completedBounties: i + 20,
  raffleTicketsSold: i * 20,
  totalPoints: i + 20 + i * 20,
}))


const FullLeaderboard = () => {
  const communityRows = useMemo(() => mockCommunityRows.sort((a, b) => b.totalPoints - a.totalPoints), [])
  return (
    <CommunityTable communityRows={communityRows}/>
  )
}

export default FullLeaderboard


export const TopFiveLeaderboard = () => { 
  const communityRows = useMemo(() => mockCommunityRows.sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 5),[])
  return (
    <CommunityTable communityRows={communityRows}/>
  )
}