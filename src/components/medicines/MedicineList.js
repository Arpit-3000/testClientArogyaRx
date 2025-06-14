import { useState, useEffect } from 'react';
import API from '../../services/api';
import MedicineCard from '../medicines/MedicineCard';
import MedicineDetailsModal from './MedicineDetailsModal';


const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
 

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

  const handleAddToCart = async (medicine, quantity = 1) => {
    const isLoggedIn = !!localStorage.getItem('accessToken');
    if (!isLoggedIn) {
      alert('Please login to add items to your cart');
      return;
    }
  
    try {
      await API.post('/cart/add', {
        medicineId: medicine._id,
        quantity,
      });
      alert(`"${medicine.productName}" added to cart successfully!`);
      // Do NOT navigate here — let user click "Go to Cart"
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add item to cart. Please try again.');
    }
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
          onAddToCart={() => handleAddToCart(selectedMedicine)}
        />
      )}
    </div>
  );
};

export default MedicineList;
