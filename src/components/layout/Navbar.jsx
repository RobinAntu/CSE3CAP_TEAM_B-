import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";

export default function Navbar() {
  const activeClassName = "text-primary font-semibold";
  const inactiveClassName = "text-text-muted hover:text-text-offset";

  return (
    <header className="bg-surface border-b border-border sticky top-0 z-20">
      <nav className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-8">
          <NavLink to="/dashboard">
            <Logo />
          </NavLink>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <NavLink to="/dashboard" className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Home</NavLink>
            <NavLink to="/schedule" className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Schedule</NavLink>
            <NavLink to="/progress" className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Progress</NavLink>
            <NavLink to="/settings" className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Settings</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
