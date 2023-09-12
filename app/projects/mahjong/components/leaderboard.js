export default function Leaderboard() {
  return (
    <div className="">
      <h3 className="font-bold">Leaderboard</h3>
      <table className="table-auto border border-collapse max-w-[600px] mx-auto">
        <thead className="bg-secondary ">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody>
          <Leaderboard.TableRow data={[1, 2]} />
          <Leaderboard.TableRow data={[2, 2324324233]} />
          <Leaderboard.TableRow data={[3, 4]} />
        </tbody>
      </table>
    </div>
  )
}

Leaderboard.TableRow = function TableRow(props) {
  const { data } = props
  return (
    <tr className="border">
      {data.map((value, i) => {
        return <td key={i} className="py-2 px-4 text-right">{value}</td>
      })}
    </tr>
  )
}
