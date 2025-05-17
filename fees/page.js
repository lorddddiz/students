"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const feeData = [
  { status: "Unpaid", feeType: "Tuition", amount: "₱ 2,500", dueDate: "2025-01-01", paid: false },
  { status: "Paid", feeType: "Library", amount: "₱ 2,500", dueDate: "2025-01-01", paid: true },
  { status: "Unpaid", feeType: "Tuition", amount: "₱ 2,500", dueDate: "2025-01-01", paid: false },
];

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    console.log("Signing out...");
    setShowMenu(false);
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar Container */}
      <div className="flex flex-col w-80">
        {/* Blue Sidebar (top) */}
        <div className="flex flex-col items-center bg-blue-600 p-5 shadow-md">
          <Image
            src="/sample.jpg"
            alt="Logo"
            width={100}
            height={200}
            className="rounded-full w-50 h-50 object-cover mb-4"
          />
          <h5 className="text-xl font-bold text-black mt-2 m-0">Jhon Doe</h5>
        </div>

        {/* Yellow Sidebar (below blue) */}
        <nav className="flex flex-col gap-11 bg-yellow-600 shadow-md text-center py-10">
          <a href="/faculty/dashboard" className="text-lg px-6 py-4 hover:bg-yellow-500">
            Dashboard
          </a>
          <a href="/faculty/section" className="text-lg px-6 py-4 font-bold bg-yellow-400 hover:bg-yellow-500">
            Section
          </a>
          <a href="/faculty/task" className="text-lg px-6 py-4 hover:bg-yellow-500">
            Task
          </a>
          <a href="/faculty/schedule" className="text-lg px-6 py-4 hover:bg-yellow-500">
            Schedule
          </a>
          <a href="/faculty/grades" className="text-lg px-6 py-4 hover:bg-yellow-500">
            Grades
          </a>
        </nav>
      </div>

      {/* Right Content Container */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="flex items-center justify-center relative">
          <h1 className="bg-yellow-500 w-full text-center text-4xl font-bold text-black py-20">
            FEES
          </h1>
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black focus:outline-none cursor-pointer"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li>
                    <a
                      href="/faculty/profile"
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faculty/settings"
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* Fee Table */}
        <main className="flex-1 p-10 pt-6">
          <div className="w-[90%] mx-auto">
            <table className="w-full text-sm text-left text-gray-700 shadow-md bg-white">
              <thead className="bg-gray-100 text-xs uppercase">
                <tr>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Fee Type</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Due Date</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((fee, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{fee.status}</td>
                    <td className="px-4 py-2">{fee.feeType}</td>
                    <td className="px-4 py-2">{fee.amount}</td>
                    <td className="px-4 py-2">{fee.dueDate}</td>
                    <td className="px-4 py-2">
                      {!fee.paid && (
                        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
                          Pay Now
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
