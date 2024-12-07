import React, { useRef, useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Building2, LogIn, Plus, Menu, X, LogOut, User, UserRound, Info,
          Bell, Database, Lock, WalletCards, Coins, FlipHorizontal } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { toast } from "sonner";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false); // Define the state for zoom level
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const isAuthPage = ["/login", "/register", "/forgot-password"].includes(
    location.pathname
  );

  const { user, isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out");
    navigate("/");
    setIsProfileOpen(false);
    setIsMenuOpen(false);
  };

  const handleProfile = () => {
    navigate("/profile");
    setIsProfileOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsProfileOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setIsProfileOpen(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    const handleZoom = () => {
      const zoomLevel = window.devicePixelRatio || 1;
      setIsZoomed(zoomLevel >= 1.25);
    };

    window.addEventListener('resize', handleZoom);
    handleZoom(); // Initial check

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleZoom);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className={`sticky top-0 z-50 bg-white shadow-md transition-top duration-300 ease-in-out ${isZoomed ? 'bottom-0' : ''}`} >
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-2 py-2">
          <nav className="relative">
            <div className="flex items-center justify-between gap-4">
              {/* Logo - Always visible */}
              <Link
                to="/"
                className="flex items-center gap-1 group shrink-0 py-1"
              >
                <div className="bg-white shadow-md rounded-xl p-1.5 group-hover:shadow-lg transition-shadow duration-200">
                  <Building2 className="h-6 w-6 sm:h-7 sm:w-7 text-indigo-600 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h1
                  className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 
                  bg-clip-text text-transparent"
                >
                  PG Hunt
                </h1>
              </Link>

              {/* Desktop navigation */}
              {!isAuthPage && (
                <div className="hidden lg:flex items-center gap-4">
                  {isAuthenticated ? (
                    <>
                      {/* Compare between two pg */}
                      <button
                      
                        className="flex items-center gap-1 px-4 py-3 rounded-lg hover:bg-gray-100
                          transition-colors duration-200"
                      >
                        <FlipHorizontal w-1 h-1/>
                        Compare
                      </button>
                      {/* Help and Earn Button */}
                      <Link
                        to="/help-and-earn"
                        className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-gray-100
                          transition-colors duration-200"
                      >
                        <Coins className="w-4 h-8 "/>
                        Refer and Earn
                      </Link>

                      {/* User Profile */}
                      <div className="relative" ref={dropdownRef}>
                        <button
                          onClick={() => setIsProfileOpen(!isProfileOpen)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100
                          transition-colors duration-200"
                        >
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                            <User className="w-5 h-5 text-indigo-600" />
                          </div>
                          <span className="font-medium">{user?.name}</span>
                        </button>

                        {/* Menu buttons */}
                        {isProfileOpen && (
                          <div
                            // onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1
                          border border-gray-100 animate-fade-in"
                          >
                            {/* Notification Button */}
                            <button
                              onClick={() => navigate("/notifications")}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50
                            flex items-center gap-2"
                            >
                              <Bell className="w-4 h-4" />
                              Notification
                            </button>
                            {/* Profile Button*/}
                            <button
                              onClick={handleProfile}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50
                              flex items-center gap-2"
                            >
                              <UserRound className="w-4 h-4" />
                              Profile
                            </button>
                            {/* Data & Pravicy */}
                            <button
                              // onClick={handleData}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50
                                flex items-center gap-2"
                            >
                              <Database className="w-4 h-4" />
                              Data & Pravicy
                            </button>
                            {/* Security */}
                            <button
                              // onClick={handleSecurity}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50
                                flex items-center gap-2"
                            >
                              <Lock className="w-4 h-4" />
                              Security
                            </button>
                            {/* Subscription */}
                            <button
                              // onClick={handlePayments}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50
                                flex items-center gap-2"
                            >
                              <WalletCards className="w-4 h-4" />
                              Payments
                            </button>
                            {/* Help Center */}
                            <button
                              // onClick={handleProfile}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50
                                flex items-center gap-2"
                            >
                              <Info className="w-4 h-4" />
                              Help Center
                            </button>
                            {/* Sign out Button */}
                            <button
                              onClick={handleLogout}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50
                                flex items-center gap-2"
                            >
                              <LogOut className="w-4 h-4" />
                              Sign out
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="btn-secondary flex items-center gap-2"
                      >
                        <LogIn className="w-4 h-4" />
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="btn-primary flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        List Your PG
                      </Link>
                    </>
                  )}
                </div>
              )}

              {/* Mobile buttons */}
              {!isAuthPage && (
                <div className="flex lg:hidden items-center gap-2">
                  {isAuthenticated ? (
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md 
                        transition-all duration-200"
                      aria-label="Toggle menu"
                    >
                      {isMenuOpen ? (
                        <X className="w-6 h-6 text-gray-600" />
                      ) : (
                        <Menu className="w-6 h-6 text-gray-600" />
                      )}
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white shadow-sm
                          hover:shadow-md transition-all duration-200 text-gray-700 font-medium"
                      >
                        <LogIn className="w-5 h-5" />
                        <span className="text-sm">Login</span>
                      </Link>
                      <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md 
                          transition-all duration-200"
                        aria-label="Toggle menu"
                      >
                        {isMenuOpen ? (
                          <X className="w-6 h-6 text-gray-600" />
                        ) : (
                          <Menu className="w-6 h-6 text-gray-600" />
                        )}
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile navigation dropdown */}
            {!isAuthPage && (
              <div
                ref={mobileMenuRef}
                className={`lg:hidden absolute right-0 left-30 top-full mt-4 transform transition-all duration-300 ease-in-out origin-top ${
                  isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="p-3">
                    {isAuthenticated ? (
                      <>
                        <div className="px-3 py-2 mb-2">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                              <User className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                              <p className="font-medium">{user?.name}</p>
                              <p className="text-sm text-gray-500">
                                {user?.email}
                              </p>
                            </div>
                          </div>
                        </div>
                        <>
                          {/* Profile Button */}
                          <button
                            onClick={() => {
                              handleProfile();
                            }}
                            className="w-full btn-secondary flex items-center px-11 gap-2 "
                          >
                            <UserRound className="w-4 h-4" />
                            Proflie
                          </button>
                          {/* Data & Pravicy */}
                          <button
                            // onClick={handleData}
                            className="w-full btn-secondary flex items-center px-11 gap-2"
                          >
                            <Database className="w-4 h-4" />
                            Data & Pravicy
                          </button>
                          {/* Security */}
                          <button
                            // onClick={handleSecurity}
                            className="w-full btn-secondary flex items-center px-11 gap-2"
                          >
                            <Lock className="w-4 h-4" />
                            Security
                          </button>
                          {/* Subscription */}
                          <button
                            // onClick={handlePayments}
                            className="w-full btn-secondary flex items-center px-11 gap-2"
                          >
                            <WalletCards className="w-4 h-4" />
                            Payments
                          </button>
                          {/* Help Center */}
                          <button
                            // onClick={handleHelp}
                            className="w-full btn-secondary flex items-center px-11 gap-2"
                          >
                            <Info className="w-4 h-4" />
                            Help Center
                          </button>
                          {/* Sign out */}
                          <button
                            onClick={() => {
                              handleLogout();
                              setIsMenuOpen(false);
                            }}
                            className="w-full btn-secondary flex items-center px-11 gap-2 "
                          >
                            <LogOut className="w-4 h-4" />
                            Sign out
                          </button>
                        </>
                      </>
                    ) : (
                      <Link
                        to="/register"
                        className="btn-primary w-full flex items-center justify-center gap-2 py-2.5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Plus className="w-4 h-4" />
                        List Your PG
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
