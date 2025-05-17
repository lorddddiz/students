"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalText, setModalText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState("");
  const handleSignOut = () => {
    console.log("Signing out...");
    setShowMenu(false);
    router.push("/");
  };

  const courses = [
    { code: "CC-104", deadlines: 1 },
    { code: "CC-103" },
    { code: "GE-09" },
    { code: "GE-12" },
    { code: "IT-102", deadlines: 1 },
    { code: "GE-07", deadlines: 1 }, 
  ]; 

  const progressData = [
    { code: "CC-104", project: "71%" },
    { code: "CC-103", project: "68%" },
    { code: "GE-09", project: "85%" },
    { code: "GE-12", project: "75%" },
    { code: "GE-12", project: "91%" },
    { code: "GE-12", project: "93%" },
    { code: "GE-12", project: "69%" },
    { code: "GE-12", project: "73%" },
  ];

  const scheduleData = [
    { code: "CC-104", date: "1/23/25", time: "8:00am - 12:00pm", room: "207" },
    { code: "CC-103", date: "1/23/25", time: "1:00pm - 5:30pm", room: "207" },
    { code: "GE-09", date: "1/23/25", time: "5:30pm - 8:30pm", room: "207" },
    { code: "IT-PF102", date: "1/24/25", time: "7:00am - 12:30pm", room: "Lab 1" },
    { code: "IT-CHD1", date: "1/24/25", time: "1:00pm - 5:30pm", room: "Lab 3" },
    { code: "CC-069", date: "1/24/25", time: "5:00pm - 8:30pm", room: "201" },
    { code: "IT-TY1", date: "1/24/25", time: "3:00pm - 8:30pm", room: "207" },
    { code: "IT-ED1", date: "1/24/25", time: "12:00pm - 5:30pm", room: "Lab 2" }
  ];

  

  return (
    <div className="bg-white m-0 min-h-screen">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {modalType === "confirm" ? (
          <>
            <h2 className="text-xl font-bold mb-4 text-black">Confirmation</h2>
            <p className="mb-4 text-black">{confirmMessage}</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (confirmAction) {
                    confirmAction();
                  }
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4 text-black">
              {editingId ? `Edit ${modalType}` : `Add ${modalType}`}
            </h2>
            <textarea
              className="w-full p-2 border rounded mb-4 text-black"
              value={modalText}
              onChange={(e) => setModalText(e.target.value)}
              placeholder={`Enter ${modalType} text`}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
              >
                {editingId ? "Save" : "Add"}
              </button>
            </div>
          </>
        )}
      </div>
        </div>
      )}
      <div className="flex flex-row items-start relative">
      <div className="flex flex-col items-center bg-blue-600 p-5 shadow-md w-80 h-70">
          <Image
            src="/sample.jpg"
            alt="Logo"
            width={100}
            height={200}
            className="rounded-full w-50 h-50 object-cover mb-4"
          />
          <h5 className="text-xl font-bold text-white mt-2 m-0">Jhon Doe</h5>
        </div>
        <header className="flex-1 flex items-center justify-center relative">
          <h1 className="bg-yellow-500 w-5/5 text-center text-4xl font-bold text-black p-10.5 py-20">
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
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
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

        <div className="p-6 space-y-10 bg-white w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-yellow-400 rounded-xl shadow-md p-4 flex flex-col items-center text-center">
                <div className="bg-white text-black px-4 py-1 rounded-full font-semibold mb-2">{course.code}</div>
                <button className="text-blue-800 font-medium">View Course</button>
                <button className="text-blue-800 font-medium">
                  View deadlines{course.deadlines ? ` (${course.deadlines})` : ""}
                </button>
              </div>
            ))}
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg shadow-md">
              <div className="bg-yellow-400 font-bold text-center py-2 rounded-t-lg">SUBJECT PROGRESS</div>
              <div className="max-h-64 overflow-y-scroll pr-2">
                <table className="w-full text-left text-sm text-black">
                  <thead className="bg-gray-100 sticky top-0">
                    <tr>
                      <th className="py-2 px-4">CODE</th>
                      <th className="py-2 px-4">PROJECT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {progressData.map((row, idx) => (
                      <tr key={idx}>
                        <td className="py-2 px-4">{row.code}</td>
                        <td className="py-2 px-4">{row.project}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          
            <div className="border rounded-lg shadow-md">
              <div className="bg-yellow-400 font-bold text-center py-2 rounded-t-lg">UPCOMING CLASS</div>
              <div className="max-h-64 overflow-y-scroll pr-2">
                <table className="w-full text-left text-sm text-black">
                  <thead className="bg-gray-100 sticky top-0">
                    <tr>
                      <th className="py-2 px-4">CODE</th>
                      <th className="py-2 px-4">DATE</th>
                      <th className="py-2 px-4">TIME</th>
                      <th className="py-2 px-4">ROOM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.map((row, idx) => (
                      <tr key={idx}>
                        <td className="py-2 px-4">{row.code}</td>
                        <td className="py-2 px-4">{row.date}</td>
                        <td className="py-2 px-4">{row.time}</td>
                        <td className="py-2 px-4">{row.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}