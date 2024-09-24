import FloatingShape from "./components/FloatingShape";

export default function App() {
  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-br
    from-gray-900 via-purple-900 to-red-600 flex items-center justify-center relative overflow-hidden"
      >
        <FloatingShape />
      </div>
    </>
  );
}
