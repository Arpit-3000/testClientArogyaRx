import { useState, useEffect } from 'react';
import API from '../../services/api';
import MedicineCard from '../medicines/MedicineCard';
import MedicineDetailsModal from './MedicineDetailsModal';
import { useNavigate } from 'react-router-dom';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicines = async () => {
      setLoading(true);
      try {
        const res = await API.get('/medicines/dashboard');
        setMedicines(res.data);
      } catch (err) {
        console.error('Error fetching medicines:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedicines();
  }, []);

  const handleAddToCart = (medicine) => {
    // Check if user is logged in
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('Please login to add items to your cart');
      return;
    }
    
    // If logged in, navigate to cart or add to cart
    // Here you have two options:
    
    // Option 1: Navigate directly to cart
    navigate('/cart');
    
    // Option 2: Add to cart first, then navigate (requires API implementation)
    /*
    try {
      await API.post('/cart/add', { medicineId: medicine._id });
      navigate('/cart');
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add item to cart');
    }
    */
    
    // For now, using Option 1 with a success message
    alert(`"${medicine.productName}" added to cart. Redirecting to cart page...`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Medicine Catalog</h1>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines.map((medicine) => (
            <MedicineCard
              key={medicine._id}
              medicine={medicine}
              onSeeMore={() => setSelectedMedicine(medicine)}
              onAddToCart={() => handleAddToCart(medicine)}
            />
          ))}
        </div>
      )}

      {selectedMedicine && (
        <MedicineDetailsModal
          medicine={selectedMedicine}
          onClose={() => setSelectedMedicine(null)}
        />
      )}
    </div>
  );
};

export default MedicineList;