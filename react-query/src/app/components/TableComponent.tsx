import { IoFilter } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

function TableComponent() {
  const vendors = [
    {
      id: 1,
      name: "Blox Pvt Ltd",
      performance: "Excellent",
      description: "Delivered all projects on time with high quality.",
      lastChecked: "2025-10-20",
      status: "Active",
    },
    {
      id: 2,
      name: "TechCore Solutions",
      performance: "Good",
      description: "Consistent performer, slight delay in recent work.",
      lastChecked: "2025-10-22",
      status: "Active",
    },
    {
      id: 3,
      name: "NextEdge Labs",
      performance: "Average",
      description: "Requires supervision; mid-level productivity.",
      lastChecked: "2025-10-19",
      status: "Under Review",
    },
    {
      id: 4,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
    {
      id: 7,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
    {
      id: 10,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
    {
      id: 11,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
    {
      id: 12,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
    {
      id: 13,
      name: "Zenify Global",
      performance: "Poor",
      description: "Missed multiple deadlines and quality checks.",
      lastChecked: "2025-10-17",
      status: "Inactive",
    },
  ];

  return (
    <div className="mt-8 border border-gray-300 rounded-4xl">
      {/* Header */}
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-4 flex-wrap">
  {/* Search + Filters */}
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-8 gap-2 w-full md:w-auto">
    {/* 🔹 Make search bar longer using col-span */}
    <input
      type="text"
      className="bg-white p-2 border border-gray-300 rounded-md placeholder:text-black col-span-1 sm:col-span-3 md:col-span-4 w-full"
      placeholder="Search"
    />

    <select className="border p-2 rounded-md col-span-1 sm:col-span-1 md:col-span-2 w-full">
      <option>Male</option>
    </select>

    <select className="border p-2 rounded-md col-span-1 sm:col-span-1 md:col-span-2 w-full">
      <option>Car</option>
    </select>
  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
    <button className="flex items-center justify-center gap-2 border border-gray-400 rounded-3xl px-4 py-2 hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto">
      <IoFilter /> Filter
    </button>

    <button className="flex items-center justify-center gap-2 bg-blue-500 text-white rounded-3xl px-4 py-2 hover:bg-blue-600 transition-all duration-300 w-full sm:w-auto">
      <FaPlus /> Add Customer
    </button>
  </div>
    </div>



      <div className="border border-b-gray-200"></div>
      {/* Table */}

      <div className="p-5">
        <div className="border overflow-auto border-gray-300 rounded-lg shadow-sm-5">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-700 sticky top-0">
              <tr>
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Company Name</th>
                <th className="p-3">Performance</th>
                <th className="p-3">Description</th>
                <th className="p-3">Last Checked</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="h-[calc(100vh-485px)] overflow-auto">
          <table className="w-full text-left">
            <tbody className="overflow-auto h-25">
              {vendors.map((vendor) => (
                <tr
                  key={vendor.id}
                  className="border-t hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 font-medium">{vendor.name}</td>
                  <td className="p-3">{vendor.performance}</td>
                  <td className="p-3 text-sm text-gray-600">
                    {vendor.description}
                  </td>
                  <td className="p-3 text-sm">{vendor.lastChecked}</td>
                  <td
                    className={`p-3 font-semibold ${
                      vendor.status === "Active"
                        ? "text-green-600"
                        : vendor.status === "Under Review"
                        ? "text-yellow-600"
                        : "text-red-500"
                    }`}
                  >
                    {vendor.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
