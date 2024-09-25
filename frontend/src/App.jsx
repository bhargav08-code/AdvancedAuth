import FloatingShape from "./components/FloatingShape";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
export default function App() {
  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-br
    from-gray-900 via-purple-900 to-red-600 flex items-center justify-center relative overflow-hidden"
      >
        <FloatingShape
          color="bg-purple-500"
          size="w-64 h-64"
          top="-5%"
          left="10%"
          delay={0}
        />
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
        </Routes>
      </div>
    </>
  );
}
