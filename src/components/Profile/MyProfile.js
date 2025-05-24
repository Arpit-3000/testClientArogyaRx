// src/components/MyProfile.js

import React from "react";

const MyProfile = () => {
  return (
   
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
            <span className="inline-block w-5 h-5 bg-blue-500 rounded-sm"></span>
            Overview
          </h2>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-gray-700">
          <button className="text-left hover:text-blue-600">My Orders</button>
          <button className="text-left hover:text-blue-600">My Payments</button>
          <button className="text-left hover:text-blue-600">My Wallet</button>
          <button className="text-left hover:text-blue-600">My Addresses</button>
          <button className="text-left hover:text-blue-600">My Profile</button>
          <button className="text-left text-red-500 font-medium">Logout</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Profile Info */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-yellow-100 p-6 rounded shadow-md flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">
                S
              </div>
              <div>
                <h2 className="text-lg font-semibold">Shivam</h2>
                <p className="text-sm">shivamkumar12345@gmail.com</p>
                <p className="text-sm">9876345674</p>
              </div>
            </div>
            <button className="w-full bg-yellow-400 text-white py-2 rounded font-medium hover:bg-yellow-500">
              EDIT PROFILE
            </button>
          </div>

          <div className="bg-yellow-50 p-6 rounded shadow-md flex-1 text-center">
            <h2 className="text-xl font-semibold mb-2">Arogya <span className="text-yellow-500 font-bold">RX</span></h2>
            <p className="text-sm text-gray-600 mb-4">Upgrade to the premium experience now</p>
            <div className="flex justify-around mb-4 text-xs text-gray-700">
              <div className="text-center">
                <p>🚚</p>
                <p>Free Shipping</p>
              </div>
              <div className="text-center">
                <p>⏰</p>
                <p>Early Access</p>
              </div>
              <div className="text-center">
                <p>🎁</p>
                <p>VIP Support</p>
              </div>
            </div>
            <button className="w-full bg-yellow-400 text-white py-2 rounded font-medium hover:bg-yellow-500">
              GET TRIBE MEMBERSHIP
            </button>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoBox title="My Orders" subtitle="View, Modify And Track Orders" icon="👕" />
          <InfoBox title="My Payments" subtitle="View And Modify Payment Methods" icon="💳" />
          <InfoBox title="My Wallet" subtitle="Wallet History And Redeemed Gift Cards" icon="👛" />
          <InfoBox title="My Addresses" subtitle="Edit, Add Or Remove Addresses" icon="📦" />
          <InfoBox title="My Profile" subtitle="Edit Info And Change Password" icon="👤" />
          <InfoBox title="Help & Support" subtitle="Reach Out To Us" icon="❓" />
        </div>
      </main>
    </div>
  );
};

const InfoBox = ({ title, subtitle, icon }) => (
  <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
    <div className="text-2xl mb-2">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </div>
);

export default MyProfile;
