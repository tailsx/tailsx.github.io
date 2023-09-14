import { fetchGameData } from "@/app/api/utils/mahjong"
import Table from "@/app/components/shared/table"

export default async function MahjongGame(props) {
  const data = await fetchGameData(props.params.game)

  return (
    <main className="">
      <Table headers={data.players} data={data.rounds} />
    </main>
  )
}

function TableRounds(props) {
  const { data, headers } = props
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={`round-${i}`}>
            {row.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
