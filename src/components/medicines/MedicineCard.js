import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/cartContext';

const MedicineCard = ({ medicine, onSeeMore }) => {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const isLoggedIn = !!localStorage.getItem('accessToken');

  const { cartItems, addToCart, handleQuantityChange, handleRemoveItem } = useCart();

  const discountPercentage =
    medicine.pricing?.mrp && medicine.pricing?.discount
      ? Math.round((medicine.pricing.discount / medicine.pricing.mrp) * 100)
      : 0;

  const finalPrice = medicine.pricing?.mrp && medicine.pricing?.discount
    ? medicine.pricing.mrp - medicine.pricing.discount
    : medicine.pricing?.mrp;

  // Sync quantity from cart
  useEffect(() => {
    const cartItem = cartItems.find(item => item.medicineId?._id === medicine._id);
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, [cartItems, medicine._id]);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      alert(t('auth.loginRequired'));
      return;
    }
    try {
      await addToCart(medicine._id, 1);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleIncrease = async (e) => {
    e.stopPropagation();
    await handleQuantityChange(medicine._id, 1);
  };

  const handleDecrease = async (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      await handleQuantityChange(medicine._id, -1);
    } else {
      await handleRemoveItem(medicine._id);
    }
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md dark:hover:shadow-gray-700/50 transition-all duration-200 cursor-pointer h-full flex flex-col"
      onClick={onSeeMore}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative bg-gray-50 dark:bg-gray-700 p-4 flex items-center justify-center h-40 sm:h-48">
        <img
          src={medicine.images?.[0] || '/medicine-placeholder.jpg'}
          alt={medicine.productName}
          className={`h-full w-auto object-contain transition-transform duration-200 ${isHovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        {medicine.prescriptionRequired && (
          <span className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">
            {t('medicines.prescriptionRequired')}
          </span>
        )}

        <h3 className="text-gray-900 dark:text-white font-medium text-sm mb-1 line-clamp-2 h-10">
          {medicine.productName}
        </h3>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {t('medicines.byBrand', { brand: medicine.brandName || t('medicines.generic') })}
        </p>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {t('common.currencySymbol')}{finalPrice?.toFixed(2)}
            </span>
            {discountPercentage > 0 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 line-through">
                {t('common.currencySymbol')}{medicine.pricing?.mrp?.toFixed(2)}
              </span>
            )}
          </div>

          {discountPercentage > 0 && (
            <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-2 sm:mb-3">
              {t('common.saveAmount', {
                amount: medicine.pricing?.discount?.toFixed(2),
                percentage: discountPercentage
              })}
            </div>
          )}

          {/* Add to Cart / Quantity Controls */}
          {quantity > 0 ? (
            <div className="flex items-center rounded-full border border-gray-500 px-2 py-1 w-max min-w-[100px]">
              {/* Minus button */}
              <button
                onClick={handleDecrease}
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-8 h-8"
              >
                <Minus size={16} />
              </button>

              {/* Quantity */}
              <span className="text-sm font-semibold text-white flex-1 text-center">
                {quantity}
              </span>

              {/* Plus button */}
              <button
                onClick={handleIncrease}
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-8 h-8"
              >
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 py-1.5 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
            >
              <ShoppingCart size={14} className="shrink-0" />
              <span>{t('medicines.addToCart')}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
