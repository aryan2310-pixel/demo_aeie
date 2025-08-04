import React from "react";
import { motion } from "motion/react";

export const Clubs: React.FC = () => {
  const clubs = [
    {
      id: 1,
      name: "ISA Club",
      img: "/path-to-isa-club-image.jpg", // Replace with your image path
      link: "https://example.com/isa", // Replace with real link
    },
    {
      id: 2,
      name: "IETE Club",
      img: "/path-to-iete-club-image.jpg", // Replace with your image path
      link: "https://example.com/iete", // Replace with real link
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-950 text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Our Clubs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl w-full">
        {clubs.map((club) => (
          <motion.a
            key={club.id}
            href={club.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-pink-400 transition-colors"
          >
            <img
              src={club.img}
              alt={club.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center bg-black/30">
              <h2 className="text-xl font-semibold">{club.name}</h2>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
