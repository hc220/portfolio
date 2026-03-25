import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="text-center px-6">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
          Portfolio
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Under Maintenance{dots}
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          I'm currently working on something amazing 🚀 My portfolio is getting
          a fresh new look. Stay tuned!
        </p>

        {/* Button */}
        <Button
          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl text-lg transition"
          onClick={() => (window.location.href = "harshil220205@gmail.com")}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Index;
