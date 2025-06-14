import React, { useState, useEffect } from "react";
import EditProfile from "./EditProfile";
import MyOrders from "./MyOrders";
import MyAddresses from "./MyAddresses";
import { motion } from "framer-motion";
import API from "../../services/api";


const MyProfile = () => {
  const [activeSection, setActiveSection] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await API.get("/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        alert("Failed to load profile info.");
      }
    };
  
    fetchProfile();
  }, []);
  

  const handleSidebarClick = (section) => setActiveSection(section);
  const handleCloseSection = () => setActiveSection("");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-xl border-r border-gray-200">
        <div className="p-6 border-b bg-gradient-to-r from-green-500 to-green-600 text-white rounded-tr-2xl">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-white rounded-sm"></span>
            Overview
          </h2>
        </div>
        <nav className="flex flex-col gap-3 p-5 text-gray-700 font-medium">
          <SidebarButton
            label="My Orders"
            isActive={activeSection === "orders"}
            onClick={() => handleSidebarClick("orders")}
          />
          <SidebarButton label="My Payments" />
          <SidebarButton label="My Wallet" />
          <SidebarButton
            label="My Addresses"
            isActive={activeSection === "addresses"}
            onClick={() => handleSidebarClick("addresses")}
          />
          <SidebarButton
            label="My Profile"
            isActive={activeSection === "profile"}
            onClick={() => handleSidebarClick("profile")}
          />
          <button className="text-left text-red-500 font-semibold hover:underline">Logout</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        {activeSection === "profile" && (
          <SectionWrapper onBack={handleCloseSection}>
            <EditProfile />
          </SectionWrapper>
        )}
        {activeSection === "orders" && (
          <SectionWrapper onBack={handleCloseSection}>
            <MyOrders />
          </SectionWrapper>
        )}
        {activeSection === "addresses" && (
          <SectionWrapper onBack={handleCloseSection}>
            <MyAddresses />
          </SectionWrapper>
        )}

        {!activeSection && (
          <>
            {/* Overview Cards */}
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-green-100 p-6 rounded-2xl shadow-md flex-1"
              >
               {userProfile ? (
  <div className="flex items-center gap-4 mb-4">
    <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold shadow">
      {userProfile.firstName?.[0] || "U"}
    </div>
    <div>
      <h2 className="text-lg font-bold">
        {userProfile.firstName} {userProfile.lastName}
      </h2>
      <p className="text-sm">{userProfile.email}</p>
      <p className="text-sm">{userProfile.contact}</p>
    </div>
  </div>
) : (
  <p className="text-sm text-gray-500">Loading profile...</p>
)}

                <button
                  className="w-full bg-green-400 text-white py-2 rounded-md font-medium hover:bg-green-500 transition"
                  onClick={() => setActiveSection("profile")}
                >
                  EDIT PROFILE
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-gray-100 p-6 rounded-2xl shadow-md flex-1 text-center border border-green-200"
              >
                <h2 className="text-xl font-semibold mb-2">
                  Arogya <span className="text-green-500 font-bold">RX</span>
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Upgrade to the premium experience now
                </p>
                <div className="flex justify-around mb-4 text-xs text-gray-700">
                  {["🚚 Free Shipping", "⏰ Early Access", "🎁 VIP Support"].map((item, i) => (
                    <div key={i} className="text-center">
                      <p>{item.split(" ")[0]}</p>
                      <p>{item.split(" ").slice(1).join(" ")}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-green-400 text-white py-2 rounded-md font-semibold hover:bg-green-500 transition">
                  GET TRIBE MEMBERSHIP
                </button>
              </motion.div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
              <InfoBox
                title="My Orders"
                subtitle="View, Modify And Track Orders"
                icon="📦"
                onClick={() => setActiveSection("orders")}
              />
              <InfoBox
                title="My Payments"
                subtitle="View And Modify Payment Methods"
                icon="💳"
              />
              <InfoBox
                title="My Wallet"
                subtitle="Wallet History And Redeemed Gift Cards"
                icon="👛"
              />
              <InfoBox
                title="My Addresses"
                subtitle="Edit, Add Or Remove Addresses"
                icon="🏠"
                onClick={() => setActiveSection("addresses")}
              />
              <InfoBox
                title="My Profile"
                subtitle="Edit Info And Change Password"
                icon="👤"
                onClick={() => setActiveSection("profile")}
              />
              <InfoBox
                title="Help & Support"
                subtitle="Reach Out To Us"
                icon="❓"
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

// Sidebar Button Component
const SidebarButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`text-left px-2 py-1 rounded transition ${
      isActive
        ? "text-green-600 font-bold bg-blue-100"
        : "hover:text-green-600 hover:bg-blue-50"
    }`}
  >
    {label}
  </button>
);

// Section Wrapper with Back Button
const SectionWrapper = ({ children, onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
    <button
      onClick={onBack}
      className="mt-6 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
    >
      ← Back to Dashboard
    </button>
  </motion.div>
);

// InfoBox Component
const InfoBox = ({ title, subtitle, icon, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white p-5 rounded-xl shadow hover:shadow-lg  hover:shadow-green-100 transition cursor-pointer border border-gray-100"
    onClick={onClick}
  >
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </motion.div>
);

export default MyProfile;
