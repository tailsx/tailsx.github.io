export default function Table(props) {
  const { title, headers, data } = props
  return (
    <div className="">
      <h3 className="font-bold">{title}</h3>
      <table className="table-auto border border-collapse max-w-[600px] mx-auto">
        <thead className="bg-secondary ">
          <tr>
            {headers.map((header) => (
              <th key={header} className="py-2 px-4 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <Table.TableRow key={`row-${i}`} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.TableRow = function TableRow(props) {
  const { data } = props
  return (
    <tr className="border">
      {data.map((value, i) => {
        return (
          <td key={i} className="py-2 px-4 text-right">
            {value}
          </td>
        )
      })}
    </tr>
  )
}
