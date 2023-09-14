import { fetchGameData } from "@/app/api/utils/mahjong"
import Table from "@/app/components/shared/table"

export default async function MahjongGame(props) {
  const data = await fetchGameData(decodeURI(props.params.game))

  return (
    <main className="">
      <Table headers={data.players} data={data.rounds} />
    </main>
  )
}