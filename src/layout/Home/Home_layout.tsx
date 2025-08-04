import react, { useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { motion } from "motion/react";

export function Homelayout(): react.JSX.Element {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  // A small helper wrapper for hover animation
  const NavItem = ({
    to,
    label,
    tabIndex,
    underlineWidth,
  }: {
    to: string;
    label: string;
    tabIndex: number;
    underlineWidth: string;
  }) => (
    <motion.div
      whileHover={{ scale: 1.2 }} // Zoom in on hover
      whileTap={{ scale: 0.95 }} // Slight shrink on click
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Link
        to={to}
        className="relative font-mono [&.active]:text-teal-500"
        onClick={() => handleTabClick(tabIndex)}
      >
        {label}
        {selectedTab === tabIndex && (
          <motion.div
            className={`absolute h-0.5 ${underlineWidth} bg-gray-900 rounded-full`}
            layoutId="underline"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </Link>
    </motion.div>
  );

  return (
    <div>
      <div className="flex justify-around fixed top-0 left-0 right-0 z-50 py-6 px-8 bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-blue-900/80 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-start">
          <span>HIT AEIE</span>
        </div>
        <div className="flex gap-4 text-gray-400">
          <NavItem to="/" label="Home" tabIndex={1} underlineWidth="w-9" />
          <NavItem to="/Events" label="Events" tabIndex={2} underlineWidth="w-13" />
          <NavItem to="/Study" label="Study" tabIndex={3} underlineWidth="w-9" />
          <NavItem to="/AboutUs" label="About" tabIndex={4} underlineWidth="w-10" />
          <NavItem to="/contectUs" label="Contact us" tabIndex={5} underlineWidth="w-23" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
