import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";

const navItems = [
  { to: "/", label: "Dashboard", icon: "📊" },
  { to: "/shloks", label: "Shloks", icon: "📜" },
  { to: "/analytics", label: "Analytics", icon: "📈" },
];

export default function Sidebar() {
  const email = auth.currentUser?.email || "admin@vitagita.com";

  return (
    <aside
      className="w-64 bg-vitaBlue-900 text-white h-screen sticky top-0 flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(7,31,50,0.85), rgba(7,31,50,0.85)), url('/assets/splash/splash_home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div className="px-4 py-4 border-b border-vitaBlue-800">
        <h1 className="text-lg font-bold text-vitaGold">VitaGita</h1>
      </div>

      {/* Main Navigation */}
      <nav className="mt-2 space-y-1 flex-1 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link sidebar-link-active"
                : "sidebar-link"
            }
          >
            <span className="mr-2">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}

        {/* Legal Section */}
        <div className="mt-6 pt-4 border-t border-vitaBlue-800">
          <p className="px-2 mb-2 text-xs uppercase tracking-wide text-white/60">
            Legal
          </p>

          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link sidebar-link-active"
                : "sidebar-link"
            }
          >
            <span className="mr-2">🔒</span>
            <span>Privacy Policy</span>
          </NavLink>

          <NavLink
            to="/terms-and-conditions"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link sidebar-link-active"
                : "sidebar-link"
            }
          >
            <span className="mr-2">📄</span>
            <span>Terms & Conditions</span>
          </NavLink>
        </div>
      </nav>

      {/* Footer / Admin Info */}
      <div className="px-4 py-4 border-t border-vitaBlue-800 text-sm">
        <div className="text-white/80">Admin:</div>
        <div className="truncate text-white/90">{email}</div>

        <a
          className="mt-3 inline-flex items-center gap-2 text-white/90 hover:text-white"
          href="/login"
        >
          <span>↩ Logout</span>
        </a>
      </div>
    </aside>
  );
}
