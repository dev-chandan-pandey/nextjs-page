// // src/components/StudentMarksForm.js
// import { useState } from "react";
// import "../styles/globals.css";
// const StudentMarksForm = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       {/* Header */}
//       <h1 className="text-2xl font-bold mb-6">Master for student marks</h1>

//       {/* Form Fields */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
//         {/* College Field */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1" htmlFor="college">
//             College <span className="text-red-500">*</span>
//           </label>
//           <select id="college" className="form-select">
//             <option value="">Select College</option>
//             <option value="college1">College 1</option>
//             <option value="college2">College 2</option>
//           </select>
//         </div>

//         {/* Course Field */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1" htmlFor="course">
//             Course <span className="text-red-500">*</span>
//           </label>
//           <select id="course" className="form-select">
//             <option value="">Select Course</option>
//             <option value="course1">Course 1</option>
//             <option value="course2">Course 2</option>
//           </select>
//         </div>

//         {/* Semester Field */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1" htmlFor="semester">
//             Semester <span className="text-red-500">*</span>
//           </label>
//           <select id="semester" className="form-select">
//             <option value="">Select Semester</option>
//             <option value="semester1">Semester 1</option>
//             <option value="semester2">Semester 2</option>
//           </select>
//         </div>

//         {/* Exam Type Field */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1" htmlFor="examType">
//             Exam Type <span className="text-red-500">*</span>
//           </label>
//           <select id="examType" className="form-select">
//             <option value="">Select Exam Type</option>
//             <option value="midterm">Midterm</option>
//             <option value="final">Final</option>
//           </select>
//         </div>

//         {/* Academic Year Field */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1" htmlFor="academicYear">
//             Academic Year <span className="text-red-500">*</span>
//           </label>
//           <select id="academicYear" className="form-select">
//             <option value="">Select academic year</option>
//             <option value="2024-2025">2024-2025</option>
//             <option value="2023-2024">2023-2024</option>
//           </select>
//         </div>

//         {/* Exam Month Field */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1" htmlFor="examMonth">
//             Exam Month
//           </label>
//           <select id="examMonth" className="form-select">
//             <option value="">Select Exam Month</option>
//             <option value="january">January</option>
//             <option value="february">February</option>
//           </select>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
//           Upload existing marks
//         </button>
//         <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
//           Upload bulk photos
//         </button>
//       </div>

//       {/* Download Button */}
//       <button className="flex items-center gap-2 bg-yellow-500 text-white py-2 px-4 mb-6 rounded hover:bg-yellow-600">
//         ⬇ Download Marksheet
//       </button>

//       {/* Search and Table */}
//       <div className="border border-gray-300 p-4 rounded-lg mt-4">
//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search 0 records..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full mb-4 p-2 border border-gray-300 rounded"
//         />

//         {/* Table */}
//         <table className="w-full text-left border-collapse mb-4">
//           <thead>
//             <tr>
//               <th className="border-b p-2">
//                 <input type="checkbox" />
//               </th>
//               <th className="border-b p-2">PRN No.</th>
//               <th className="border-b p-2">Full Name</th>
//               <th className="border-b p-2">Roll Number</th>
//               <th className="border-b p-2">Academic Year</th>
//               <th className="border-b p-2">College Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Placeholder for empty state */}
//             <tr>
//               <td colSpan="6" className="p-4 text-center text-gray-500">
//                 No records found.
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex justify-between items-center">
//           <span>Showing page 0 of 0 pages</span>
//           <div className="flex items-center gap-2">
//             <select className="form-select w-16">
//               <option>10</option>
//               <option>20</option>
//               <option>30</option>
//             </select>
//             <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded" disabled>
//               Previous
//             </button>
//             <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded" disabled>
//               Next
//             </button>
//           </div>
//         </div>

//         {/* Download Single Marksheet Button */}
//         <button
//           className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
//           disabled
//         >
//           Download Single Marksheet
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StudentMarksForm;
// src/components/StudentMarksForm.tsx
import { useState } from "react";

const StudentMarksForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Master for Student Marks</h1>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* College Field */}
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="college">
            College <span className="text-red-500">*</span>
          </label>
          <select id="college" className="form-select p-2 border rounded border-gray-300">
            <option value="">Select College</option>
            <option value="college1">College 1</option>
            <option value="college2">College 2</option>
          </select>
        </div>

        {/* Course Field */}
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="course">
            Course <span className="text-red-500">*</span>
          </label>
          <select id="course" className="form-select p-2 border rounded border-gray-300">
            <option value="">Select Course</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
          </select>
        </div>

        {/* Semester Field */}
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="semester">
            Semester <span className="text-red-500">*</span>
          </label>
          <select id="semester" className="form-select p-2 border rounded border-gray-300">
            <option value="">Select Semester</option>
            <option value="semester1">Semester 1</option>
            <option value="semester2">Semester 2</option>
          </select>
        </div>

        {/* Exam Type Field */}
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="examType">
            Exam Type <span className="text-red-500">*</span>
          </label>
          <select id="examType" className="form-select p-2 border rounded border-gray-300">
            <option value="">Select Exam Type</option>
            <option value="midterm">Midterm</option>
            <option value="final">Final</option>
          </select>
        </div>

        {/* Academic Year Field */}
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="academicYear">
            Academic Year <span className="text-red-500">*</span>
          </label>
          <select id="academicYear" className="form-select p-2 border rounded border-gray-300">
            <option value="">Select academic year</option>
            <option value="2024-2025">2024-2025</option>
            <option value="2023-2024">2023-2024</option>
          </select>
        </div>

        {/* Exam Month Field */}
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="examMonth">
            Exam Month
          </label>
          <select id="examMonth" className="form-select p-2 border rounded border-gray-300">
            <option value="">Select Exam Month</option>
            <option value="january">January</option>
            <option value="february">February</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
          Upload Existing Marks
        </button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
          Upload Bulk Photos
        </button>
      </div>

      {/* Download Button */}
      <button className="flex items-center gap-2 bg-yellow-500 text-white py-2 px-4 mb-6 rounded hover:bg-yellow-600 transition">
        ⬇ Download Marksheet
      </button>

      {/* Search and Table */}
      <div className="border border-gray-300 p-4 rounded-lg mt-4 bg-white">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search 0 records..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        {/* Table */}
        <table className="w-full text-left border-collapse mb-4">
          <thead>
            <tr>
              <th className="border-b p-2">
                <input type="checkbox" />
              </th>
              <th className="border-b p-2">PRN No.</th>
              <th className="border-b p-2">Full Name</th>
              <th className="border-b p-2">Roll Number</th>
              <th className="border-b p-2">Academic Year</th>
              <th className="border-b p-2">College Name</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for empty state */}
            <tr>
              <td colSpan={6} className="p-4 text-center text-gray-500">
                No records found.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <span>Showing page 0 of 0 pages</span>
          <div className="flex items-center gap-2">
            <select className="form-select w-16 border rounded border-gray-300 p-2">
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
            <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded" disabled>
              Previous
            </button>
            <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded" disabled>
              Next
            </button>
          </div>
        </div>

        {/* Download Single Marksheet Button */}
        <button
          className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
          disabled
        >
          Download Single Marksheet
        </button>
      </div>
    </div>
  );
};

export default StudentMarksForm;
