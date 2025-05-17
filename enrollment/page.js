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

  const courses = [
    {
      id: "CC104",
      title: "Title",
      instructor: "John Doe",
      deadlines: ["Deadline 1", "Deadline 2"],
    },
    {
      id: "CC104",
      title: "Title",
      instructor: "John Doe",
      deadlines: ["Deadline 1", "Deadline 2"],
    },
    {
      id: "CC104",
      title: "Title",
      instructor: "John Doe",
      deadlines: ["Deadline 1", "Deadline 2"],
    },
    {
      id: "CC104",
      title: "Title",
      instructor: "John Doe",
      deadlines: ["Deadline 1", "Deadline 2"],
    },
  ];

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleClose = () => setSelectedCourse(null);
  const handleDropCourse = () => alert("Course dropped.");

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

        <div className="bg-white min-h-screen p-2 flex-1">
          <table className="w-full border border-blue-600 mb-6">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Instructor</th>
                <th className="border px-4 py-2">Upcoming Deadlines</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              {courses.map((course, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{course.id}</td>
                  <td className="border px-4 py-2">{course.title}</td>
                  <td className="border px-4 py-2">{course.instructor}</td>
                  <td className="border px-4 py-2">{course.deadlines.length}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      onClick={() => handleViewCourse(course)}
                    >
                      View Course
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> 

          {selectedCourse && (
            <div className="border border-blue-400 p-4 rounded text-black">
              <h3 className="font-bold text-lg mb-1">Course Title</h3>
              <p className="mb-2">Course description</p>
              <p className="font-bold mb-1">Upcoming Deadlines:</p>
              {selectedCourse.deadlines.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
              <div className="mt-4 flex gap-2"> 
                <button
                  onClick={handleDropCourse}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Drop Course
                </button>
                <button
                  onClick={handleClose}
                  className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}