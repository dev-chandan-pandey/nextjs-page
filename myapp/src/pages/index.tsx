// src/pages/index.js
// import "../styles/globals.css";
// src/pages/index.tsx
import StudentMarksForm from '../components/StudentMarksForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentMarksForm/>
    </div>
  );
}
