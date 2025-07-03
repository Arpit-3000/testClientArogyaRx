import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight, ShoppingCart, Plus, Minus, Star, Heart, Share2, AlertTriangle, Check } from 'lucide-react';
import API from '../../services/api';

const MedicineDetailsModal = ({ medicine, onClose }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  
  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Helper function to format composition
  const formatComposition = (composition) => {
    if (!composition) return t('common.notAvailable');
    if (typeof composition === 'string') return composition;
    
    const { activeIngredients = [], inactiveIngredients = [] } = composition;
    const active = activeIngredients.length > 0 ? `${t('medicines.activeIngredients')}: ${activeIngredients.join(', ')}` : '';
    const inactive = inactiveIngredients.length > 0 ? `${t('medicines.inactiveIngredients')}: ${inactiveIngredients.join(', ')}` : '';
    return [active, inactive].filter(Boolean).join(' • ');
  };

  // Helper function to format dosage
  const formatDosage = (dosage) => {
    if (!dosage) return t('common.notAvailable');
    if (typeof dosage === 'string') return dosage;
    
    const parts = [];
    if (dosage.form) parts.push(`${t('medicines.dosageForm')}: ${dosage.form}`);
    if (dosage.strength) parts.push(`${t('medicines.strength')}: ${dosage.strength}`);
    if (dosage.recommendedDosage) parts.push(`${t('medicines.recommendedDose')}: ${dosage.recommendedDosage}`);
    
    return parts.join(' • ');
  };

  const discountPercentage = medicine.pricing?.mrp && medicine.pricing?.discount
    ? Math.round((medicine.pricing.discount / medicine.pricing.mrp) * 100)
    : 0;

  const finalPrice = medicine.pricing?.mrp && medicine.pricing?.discount
    ? (medicine.pricing.mrp - medicine.pricing.discount).toFixed(2)
    : (medicine.pricing?.mrp || 0).toFixed(2);

  const handleAddToCart = async () => {
    const isLoggedIn = !!localStorage.getItem('accessToken');
    if (!isLoggedIn) {
      alert(t('auth.loginRequired'));
      return;
    }

    try {
      setIsAddingToCart(true);
      await API.post('/cart/add', {
        medicineId: medicine._id,
        quantity,
      });
      setShowAddedToCart(true);
      setTimeout(() => setShowAddedToCart(false), 2000);
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert(t('cart.addToCartError'));
    } finally {
      setIsAddingToCart(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === (medicine.images?.length - 1 || 0) ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? (medicine.images?.length - 1 || 0) : prev - 1
    );
  };

  const increaseQuantity = () => setQuantity(prev => Math.min(prev + 1, 10));
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div 
      className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50 flex justify-center items-start p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn shadow-xl dark:shadow-gray-800/50"
        aria-label={t('medicines.medicineDetails')}
        onClick={e => e.stopPropagation()}
      >
        {/* Header with language selector */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 border-b dark:border-gray-800">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {medicine.productName}
              </h2>
              <div className="flex">
                <button 
                  onClick={(e) => { e.stopPropagation(); changeLanguage('en'); }}
                  className={`px-2 py-1 text-xs rounded-l-md ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                >
                  EN
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); changeLanguage('hi'); }}
                  className={`px-2 py-1 text-xs rounded-r-md ${i18n.language === 'hi' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                >
                  HI
                </button>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={t('common.close')}
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="overflow-y-auto flex-1">
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Left Column - Images */}
              <div className="lg:col-span-1">
                <div className="relative bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center h-64 sm:h-80 mb-4">
                  {medicine.images?.length > 0 ? (
                    <>
                      <img
                        src={medicine.images[currentImageIndex]}
                        alt={medicine.productName}
                        className="max-h-full max-w-full object-contain"
                      />
                      {medicine.images.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-2 bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-600 rounded-full p-2 shadow-md transition-colors"
                            aria-label={t('common.previousImage')}
                          >
                            <ChevronLeft size={20} className="text-gray-800 dark:text-white" />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-2 bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-600 rounded-full p-2 shadow-md transition-colors"
                            aria-label={t('common.nextImage')}
                          >
                            <ChevronRight size={20} className="text-gray-800 dark:text-white" />
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="text-gray-400 dark:text-gray-500">{t('common.noImageAvailable')}</div>
                  )}
                </div>

                {/* Thumbnails */}
                {medicine.images?.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto py-2">
                    {medicine.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 border-2 rounded-md overflow-hidden transition-colors ${
                          currentImageIndex === idx 
                            ? 'border-blue-500 dark:border-blue-400' 
                            : 'border-transparent'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${t('common.thumbnail')} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column - Details */}
              <div className="lg:col-span-2">
                <div className="space-y-4 sm:space-y-6">
                  {/* Title and Brand */}
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{medicine.productName}</h1>
                    <p className="text-gray-500 dark:text-gray-400">{t('medicines.byBrand', { brand: medicine.brandName || t('medicines.generic') })}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mt-2">
                      <div className="flex text-amber-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={18} 
                            fill={star <= 4 ? 'currentColor' : 'none'} 
                            className="mr-0.5" 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                        ({t('common.reviewCount', { count: 42 })})
                      </span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {t('common.currencySymbol')}{finalPrice}
                      </span>
                      {discountPercentage > 0 && (
                        <>
                          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            {t('common.currencySymbol')}{medicine.pricing?.mrp?.toFixed(2)}
                          </span>
                          <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                            {t('products.discount', { discount: discountPercentage })}
                          </span>
                        </>
                      )}
                    </div>
                    {discountPercentage > 0 && (
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">
                        {t('common.saveAmount', { 
                          amount: medicine.pricing?.discount?.toFixed(2),
                          percentage: discountPercentage
                        })}
                      </p>
                    )}
                  </div>

                  {/* Key Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">{t('medicines.manufacturer')}</p>
                      <p className="font-medium dark:text-gray-200">{medicine.brandName || t('common.notAvailable')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">{t('common.category')}</p>
                      <p className="font-medium dark:text-gray-200 capitalize">{medicine.category?.toLowerCase() || t('common.general')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">{t('medicines.genericName')}</p>
                      <p className="font-medium dark:text-gray-200">{medicine.genericName || t('common.notAvailable')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">{t('medicines.prescription')}</p>
                      <p className="font-medium dark:text-gray-200">
                        {medicine.prescriptionRequired ? t('common.required') : t('common.notRequired')}
                      </p>
                    </div>
                  </div>

                  {/* Stock Status */}
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg flex items-start">
                    <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full mr-3">
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-400">{t('common.inStock')}</p>
                      {medicine.stock?.minQuantity > 0 && (
                        <p className="text-sm text-green-700 dark:text-green-300">
                          {t('common.minOrder', { quantity: medicine.stock.minQuantity })}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('common.quantity')}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border dark:border-gray-700 rounded-lg overflow-hidden">
                        <button 
                          onClick={decreaseQuantity}
                          className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          disabled={quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-medium dark:text-white">{quantity}</span>
                        <button 
                          onClick={increaseQuantity}
                          className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          disabled={quantity >= 10}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{t('common.maxQuantity', { max: 10 })}</span>
                    </div>
                  </div>

                  {/* Prescription Notice */}
                  {medicine.prescriptionRequired && (
                    <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 dark:border-amber-500 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <AlertTriangle className="h-5 w-5 text-amber-400 dark:text-amber-500" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-amber-700 dark:text-amber-400">
                            <span className="font-medium">{t('medicines.prescriptionRequired')}</span> - {t('medicines.prescriptionNotice')}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
                      disabled={isAddingToCart || showAddedToCart}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium text-white transition-colors ${
                        showAddedToCart 
                          ? 'bg-green-600 dark:bg-green-700' 
                          : 'bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800'
                      }`}
                    >
                      {showAddedToCart ? (
                        <>
                          <Check size={18} />
                          <span>{t('cart.addedToCart')}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={18} />
                          <span>{isAddingToCart ? t('common.adding') : t('medicines.addToCart')}</span>
                        </>
                      )}
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
                      className="p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      aria-label={isWishlisted ? t('medicines.removeFromWishlist') : t('medicines.addToWishlist')}
                    >
                      <Heart 
                        size={20} 
                        className={isWishlisted ? 'fill-red-500 text-red-500 dark:fill-red-400 dark:text-red-400' : 'text-gray-400 dark:text-gray-500'} 
                      />
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-4 border-t dark:border-gray-800">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">{t('common.productInfo')}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex flex-col sm:flex-row">
                        <span className="text-gray-500 dark:text-gray-400 w-32 flex-shrink-0">{t('medicines.composition')}</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {formatComposition(medicine.composition)}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <span className="text-gray-500 dark:text-gray-400 w-32 flex-shrink-0">{t('medicines.dosage')}</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {formatDosage(medicine.dosage)}
                        </span>
                      </div>
                      {medicine.packaging?.packSize && (
                        <div className="flex flex-col sm:flex-row">
                          <span className="text-gray-500 dark:text-gray-400 w-32 flex-shrink-0">{t('medicines.packSize')}</span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {medicine.packaging.packSize}
                            {medicine.packaging.expiryDate && (
                              <span className="text-red-500 dark:text-red-400 ml-2">
                                ({t('medicines.expiry')}: {new Date(medicine.packaging.expiryDate).toLocaleDateString()})
                              </span>
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* FAQs */}
                  {medicine.additionalFeatures?.faqs?.length > 0 && (
                    <div className="border-t dark:border-gray-800 pt-4">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-3">{t('common.faqs')}</h3>
                      <div className="space-y-4">
                        {medicine.additionalFeatures.faqs.map((faq, i) => (
                          <div key={i} className="border dark:border-gray-700 rounded-lg overflow-hidden">
                            <div className="p-3 bg-gray-50 dark:bg-gray-800">
                              <p className="font-medium text-gray-900 dark:text-white">{faq.question}</p>
                            </div>
                            <div className="p-3">
                              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Doctor's Advice */}
                  {medicine.additionalFeatures?.doctorAdvice && (
                    <div className="border-t dark:border-gray-800 pt-4">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-3">{t('common.doctorsAdvice')}</h3>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{medicine.additionalFeatures.doctorAdvice}</p>
                      </div>
                    </div>
                  )}

                  {/* Reviews */}
                  {medicine.additionalFeatures?.reviews?.length > 0 && (
                    <div className="border-t dark:border-gray-800 pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">{t('common.customerReviews')}</h3>
                        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                          {t('common.viewAll')}
                        </button>
                      </div>
                      <div className="space-y-4">
                        {medicine.additionalFeatures.reviews.slice(0, 3).map((review, i) => (
                          <div key={i} className="border dark:border-gray-700 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 font-medium">
                                {(review.user?.charAt(0) || 'U').toUpperCase()}
                              </div>
                              <div className="ml-3">
                                <p className="font-medium text-gray-900 dark:text-white">{review.user || t('common.anonymousUser')}</p>
                                <div className="flex items-center">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      size={14}
                                      className={`${
                                        star <= (review.rating || 4)
                                          ? 'text-amber-400 fill-amber-400' 
                                          : 'text-gray-300 dark:text-gray-600'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{review.comment}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                              {new Date(review.date).toLocaleDateString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailsModal;