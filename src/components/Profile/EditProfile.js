import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import API from "../../services/api";
import { toast } from "react-hot-toast";

const EditProfile = ({ profileData }) => {
  const { t } = useTranslation();
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "India"
    }
  });

  const [originalProfile, setOriginalProfile] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (profileData) {
      const { firstName, lastName, email, contact, dob, gender, address } = profileData;
      const data = {
        firstName,
        lastName,
        email,
        phone: contact,
        dob: dob?.split("T")[0] || "",
        gender,
        address: {
          street: address?.street || "",
          city: address?.city || "",
          state: address?.state || "",
          postalCode: address?.postalCode || "",
          country: address?.country || "India"
        }
      };
      setProfile(data);
      setOriginalProfile(data);
    }
  }, [profileData]);

  useEffect(() => {
    if (!originalProfile) return;
    const changed = JSON.stringify(profile) !== JSON.stringify(originalProfile);
    setIsChanged(changed);
  }, [profile, originalProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value
      }
    }));
  };

  const handleGenderSelect = (gender) => {
    setProfile((prev) => ({ ...prev, gender }));
  };

  const handleSave = async () => {
    if (!isChanged) return;
    
    setIsLoading(true);
    try {
      const payload = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        dob: profile.dob,
        email: profile.email,
        contact: profile.phone,
        gender: profile.gender,
        address: {
          street: profile.address.street,
          city: profile.address.city,
          state: profile.address.state,
          postalCode: profile.address.postalCode,
          country: profile.address.country
        }
      };

      await API.put("/profile/", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success(t("edt.editProfile.notifications.success"));
      setOriginalProfile(profile);
      setIsChanged(false);
    } catch (err) {
      console.error(err);
      toast.error(t("edt.editProfile.notifications.error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-md shadow-md w-full max-w-4xl mx-auto mt-4 sm:mt-6 transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("edt.editProfile.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            {t("edt.editProfile.fields.firstName")} *
          </label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            {t("edt.editProfile.fields.lastName")}
          </label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          {t("edt.editProfile.fields.email")} *
        </label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          required
        />
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">
          {t("edt.editProfile.sections.address")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              {t("edt.editProfile.fields.street")}
            </label>
            <input
              type="text"
              name="street"
              value={profile.address.street}
              onChange={handleAddressChange}
              className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              {t("edt.editProfile.fields.city")}
            </label>
            <input
              type="text"
              name="city"
              value={profile.address.city}
              onChange={handleAddressChange}
              className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              {t("edt.editProfile.fields.state")}
            </label>
            <input
              type="text"
              name="state"
              value={profile.address.state}
              onChange={handleAddressChange}
              className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              {t("edt.editProfile.fields.postalCode")}
            </label>
            <input
              type="text"
              name="postalCode"
              value={profile.address.postalCode}
              onChange={handleAddressChange}
              className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              {t("edt.editProfile.fields.country")}
            </label>
            <input
              type="text"
              name="country"
              value={profile.address.country}
              onChange={handleAddressChange}
              className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            {t("edt.editProfile.fields.phone")} *
          </label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            required
          />
        </div>
        <button
          type="button"
          className="text-blue-500 dark:text-blue-400 font-semibold sm:mt-6 py-2 sm:py-0"
          onClick={() => toast(t("edt.editProfile.notifications.changePhone"))}
        >
          {t("edt.editProfile.buttons.change")}
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          {t("edt.editProfile.fields.dob")}
        </label>
        <input
          type="date"
          name="dob"
          value={profile.dob}
          onChange={handleChange}
          className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {t("edt.editProfile.description.dob")}
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          {t("edt.editProfile.fields.gender")}
        </label>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {["Male", "Female", "Other"].map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => handleGenderSelect(g)}
              className={`border dark:border-gray-600 rounded px-3 sm:px-4 py-2 text-sm sm:text-base ${
                profile.gender === g
                  ? "bg-yellow-500 dark:bg-yellow-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              }`}
            >
              {t(`edt.editProfile.gender.${g.toLowerCase()}`)}
            </button>
          ))}
        </div>
      </div>

      <button
        className={`font-semibold px-6 py-2 rounded transition w-full sm:w-auto text-center ${
          isChanged
            ? "bg-yellow-500 dark:bg-yellow-600 text-white hover:bg-yellow-600 dark:hover:bg-yellow-700"
            : "bg-gray-300 dark:bg-gray-600 text-white cursor-not-allowed"
        }`}
        disabled={!isChanged || isLoading}
        onClick={handleSave}
      >
        {isLoading ? t("edt.editProfile.buttons.saving") : t("edt.editProfile.buttons.save")}
      </button>
    </div>
  );
};

export default EditProfile;