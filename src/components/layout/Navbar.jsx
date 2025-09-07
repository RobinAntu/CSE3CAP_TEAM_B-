import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../ui/Input";
import IconButton from "../ui/IconButton";
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
            <NavLink to="/wizard/1" className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Wizard</NavLink>
            <NavLink to="/settings" className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Settings</NavLink>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input type="search" placeholder="Search..." className="input w-48 pl-9" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-text-muted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <IconButton aria-label="notifications">
            <svg className="h-6 w-6 text-text-muted hover:text-text-offset" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </IconButton>
          <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
            <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
