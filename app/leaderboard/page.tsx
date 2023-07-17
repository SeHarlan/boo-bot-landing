import FullLeaderboard from "@/components/leaderboard/fullLeaderboard";

export default function Leaderboard() {
  return (
    <div className="standardContainer py-20 h-screen relative">
      <h1 className="text-5xl text-center py-14">Community Leaderboard</h1>
      <div className="overflow-x-auto">
        <FullLeaderboard />
      </div>

    </div>
  )
}