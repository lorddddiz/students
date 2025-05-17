"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSignOut = () => {
    console.log("Signing out...");
    setShowMenu(false);
    router.push("/");
  };

const feeData = [
  { status: "Unpaid", feeType: "Tuition", amount: "₱ 2,500", dueDate: "2025-01-01", paid: false },
  { status: "Paid", feeType: "Library", amount: "₱ 2,500", dueDate: "2025-01-01", paid: true },
  { status: "Unpaid", feeType: "Tuition", amount: "₱ 2,500", dueDate: "2025-01-01", paid: false },
];

  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-row items-start relative">
      <div className="flex flex-col items-center bg-blue-600 p-5 shadow-md w-80 h-70">
           <Image
                      src="/sample.jpg"
                      alt="Logo"
                      width={100}
                      height={200}
                      className="rounded-full w-50 h-50 object-cover mb-4"
                    />
          <h5 className="text-xl font-bold text-white">Jhon Doe</h5>
        </div>
        <header className="flex-1 flex items-center justify-center relative">
          <h1 className="bg-yellow-500 w-full text-center text-4xl font-bold text-black py-15">
            Student Dashboard
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
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 ">
                <ul className="py-2">
                  <li>
                    <a
                      href="/students/profile"
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
      </div>

      <main className="flex flex-row justify-center items-start">
        <nav className="w-80 flex flex-col gap-8 bg-yellow-600 shadow-md text-center">
          <a href="/students/dashboard" className="text-lg font-medium bg-yellow-400 py-10 hover:bg-yellow-500">Dashboard</a>
          <a href="/students/enrollment" className="text-lg py-10 hover:bg-yellow-500">Enrollment</a>
          <a href="/students/course" className="text-lg py-10 hover:bg-yellow-500">Courses</a>
          <a href="/students/task" className="text-lg py-10 hover:bg-yellow-500">Tasks</a>
          <a href="/students/grades" className="text-lg py-10 hover:bg-yellow-500">Grades</a>
          <a href="/students/fees" className="text-lg py-10 hover:bg-yellow-500">Fees</a>
          <a href="/students/announcement" className="text-lg py-10 hover:bg-yellow-500">Announcement</a>
        </nav>

        <div className="w-[80%] mx-auto">
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
                    <td className="pcx-4 py-2">{fee.amount}</td>
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
  );

}