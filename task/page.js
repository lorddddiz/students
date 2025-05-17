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

    const [files, setFiles] = useState([null, null, null]);

    const handleFileChange = (index, event) => {
        const newFiles = [...files];
        newFiles[index] = event.target.files[0];
        setFiles(newFiles);
    };

    const handleSubmit = (index) => {
        if (files[index]) {
            alert(`File submitted for row ${index + 1}: ${files[index].name}`);
        } else {
            alert("No file selected.");
        }
    };

    const rows = [
        { status: "Pending", subject: "CC-102", task: "Essay", dueDate: "2025-01-01" },
        { status: "Pending", subject: "CC-102", task: "Essay", dueDate: "2025-01-01" },
        { status: "Pending", subject: "CC-102", task: "Essay", dueDate: "2025-01-01" },
    ];

    const courses = [
        { code: "CC-101", deadlines: "2" },
        { code: "CC-102", deadlines: "1" },
        { code: "CC-103" },
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

                    <div className="border rounded-lg shadow-md">
                        <div className="bg-yellow-400 font-bold text-center py-2 rounded-t-lg">SUBMISSION TABLE</div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead className="bg-yellow-200">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Status</th>
                                        <th className="border border-gray-300 px-4 py-2">Subject</th>
                                        <th className="border border-gray-300 px-4 py-2">Task</th>
                                        <th className="border border-gray-300 px-4 py-2">Due Date</th>
                                        <th className="border border-gray-300 px-4 py-2">Submit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index} className="text-center">
                                            <td className="border border-gray-300 px-4 py-2">{row.status}</td>
                                            <td className="border border-gray-300 px-4 py-2">{row.subject}</td>
                                            <td className="border border-gray-300 px-4 py-2">{row.task}</td>
                                            <td className="border border-gray-300 px-4 py-2">{row.dueDate}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <input
                                                    type="file"
                                                    onChange={(e) => handleFileChange(index, e)}
                                                    className="mb-2 block"
                                                />
                                                <button
                                                    onClick={() => handleSubmit(index)}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                                >
                                                    Submit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}