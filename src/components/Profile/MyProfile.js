import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, User, Package, CreditCard, Home, HelpCircle, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import API from "../../services/api";
import EditProfile from "./EditProfile";
import MyOrders from "./MyOrders";

const MyProfile = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await API.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);

  const handleSidebarClick = (section) => setActiveSection(section);
  const handleCloseSection = () => setActiveSection("");

  const menuItems = t('myProfile.sidebar.menuItems', { returnObjects: true }).map(item => ({
    ...item,
    icon: item.label === t('myProfile.sidebar.menuItems[0].label') ? <Package size={18} /> :
          item.label === t('myProfile.sidebar.menuItems[3].label') ? <User size={18} /> :
          <CreditCard size={18} />
  }));

  const infoBoxes = t('myProfile.dashboard.infoBoxes', { returnObjects: true }).map(box => ({
    ...box,
    icon: box.title === t('myProfile.dashboard.infoBoxes[0].title') ? <Package size={24} /> :
          box.title === t('myProfile.dashboard.infoBoxes[3].title') ? <Home size={24} /> :
          box.title === t('myProfile.dashboard.infoBoxes[4].title') ? <User size={24} /> :
          box.title === t('myProfile.dashboard.infoBoxes[5].title') ? <HelpCircle size={24} /> :
          <CreditCard size={24} />
  }));

  const getInitials = () => {
    if (!profileData) return "U";
    if (profileData.firstName) return profileData.firstName[0];
    if (profileData.name) return profileData.name[0];
    return "U";
  };

  const getFullName = () => {
    if (!profileData) return "";
    if (profileData.firstName && profileData.lastName) {
      return `${profileData.firstName} ${profileData.lastName}`;
    }
    if (profileData.name) return profileData.name;
    return "";
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 shadow-md md:shadow-xl border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white rounded-tr-xl">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-white rounded-sm"></span>
            {t('myProfile.sidebar.overview')}
          </h2>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {menuItems.map((item, index) => (
            <SidebarButton
              key={index}
              label={item.label}
              icon={item.icon}
              isActive={activeSection === item.section}
              onClick={() => item.section && handleSidebarClick(item.section)}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
        {activeSection === "profile" && (
          <SectionWrapper onBack={handleCloseSection}>
            <EditProfile profileData={profileData} />
          </SectionWrapper>
        )}
        {activeSection === "orders" && (
          <SectionWrapper onBack={handleCloseSection}>
            <MyOrders />
          </SectionWrapper>
        )}

        {!activeSection && (
          <>
            {/* Overview Cards */}
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 flex-1"
              >
                {loading ? (
                  <div className="animate-pulse flex items-center gap-4">
                    <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-16 w-16"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </div>
                ) : profileData ? (
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-500 dark:bg-green-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold shadow">
                      {getInitials()}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold dark:text-white">
                        {getFullName()}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{profileData.email}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{profileData.contact}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">Failed to load profile</p>
                )}

                <button
                  className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors shadow-sm"
                  onClick={() => setActiveSection("profile")}
                >
                  {t('myProfile.dashboard.profileCard.editButton')}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-green-200 dark:border-green-800 flex-1 text-center"
              >
                <h2 className="text-xl font-semibold dark:text-white mb-2">
                  {t('myProfile.dashboard.premiumCard.title').split(" ")[0]}{" "}
                  <span className="text-green-500 dark:text-green-400 font-bold">
                    {t('myProfile.dashboard.premiumCard.title').split(" ")[1]}
                  </span>
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {t('myProfile.dashboard.premiumCard.subtitle')}
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-700 dark:text-gray-300">
                  {t('myProfile.dashboard.premiumCard.features', { returnObjects: true }).map((item, i) => (
                    <div key={i} className="text-center">
                      <p className="text-sm">{item.split(" ")[0]}</p>
                      <p className="text-xs">{item.split(" ").slice(1).join(" ")}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors shadow-sm">
                  {t('myProfile.dashboard.premiumCard.button')}
                </button>
              </motion.div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {infoBoxes.map((box, index) => (
                <InfoBox
                  key={index}
                  title={box.title}
                  subtitle={box.subtitle}
                  icon={box.icon}
                  onClick={() => box.section && handleSidebarClick(box.section)}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

const SidebarButton = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? "text-green-600 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900/30"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const SectionWrapper = ({ children, onBack }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
      >
        <ChevronLeft size={18} />
        {t('myProfile.sectionWrapper.backButton')}
      </button>
      {children}
    </motion.div>
  );
};

const InfoBox = ({ title, subtitle, icon, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-200 dark:border-gray-700"
    onClick={onClick}
  >
    <div className="text-green-500 dark:text-green-400 mb-3">
      {icon}
    </div>
    <h3 className="font-bold text-lg dark:text-white">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
  </motion.div>
);

export default MyProfile;