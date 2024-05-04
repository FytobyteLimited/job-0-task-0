
import { columns } from "@/components/custom/columns";
import { DataTable } from "@/components/custom/data-table";
import prismadb from "@/lib/prismadb";

interface pageProps {

}
async function getData() {
    const rows = await prismadb.row.findMany()
    return rows;
}
const TableComponent: React.FC<pageProps> = async () => {

    const data = await getData()

    return (
        <DataTable
            columns={columns} data={data}
        />
    )

}

export default TableComponent;