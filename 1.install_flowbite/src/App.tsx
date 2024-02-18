import { Avatar } from "flowbite-react";

// tailwindcss
// text-3xl: font-size: 1.875rem;
// font-bold: font-weight: 700;
// mt-10: margin-top: 2.5rem;
// text-center: text-align: center;
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">Hello world!</h1>
      <Avatar placeholderInitials="JD" size="lg" className="mt-10" />
    </>
  );
}

export default App;
