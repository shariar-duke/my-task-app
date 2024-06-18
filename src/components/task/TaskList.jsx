import {FaStar} from "react-icons/fa"
export default function TaskList() {
  return (
    <div className="overflow-auto container mx-auto pb-[100px]">
        <table className="table-fixed overflow-auto xl:w-full">
            <thead>
                <tr className="text-white">
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description</th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[350px]"> Tags </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[100px]"> Priority </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[100px]"> Options </th>
                </tr>
            </thead>
            <tbody>
            <tr className="text-white border-b border-[#2E2443] [&>td]:text-center [&>td]:px-2  [&>td]:py-4">
                    <td>
                        <FaStar size={18} color="gray"/>
                    </td>
                    <td>A</td>

                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
                <tr className="text-white border-b border-[#2E2443] [&>td]:text-center [&>td]:px-2  [&>td]:py-4">
                    <td>
                        <FaStar size={18} color="gray"/>
                    </td>
                    <td>B</td>

                    <td>B</td>
                    <td>B</td>
                    <td>B</td>
                    <td>B</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
