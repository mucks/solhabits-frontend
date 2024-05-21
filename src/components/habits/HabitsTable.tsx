export const HabitsTable = ({ rows }) => {
    const sortedRows = rows.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime()).map((data) => {
        return <tr key={data.id}>
            <td>{data.habit}</td>
            <td>{data.dueDate.toISOString().substring(0, 10)}</td>
            <td>{data.status}</td>
        </tr>
    })
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Habit</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedRows}
                </tbody>
            </table>
        </div>


    );
}