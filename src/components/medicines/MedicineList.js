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

  const handleAddToCart = (medicine) => {
    // Placeholder logic; integrate with cart context or backend if needed
    console.log('Added to cart:', medicine.productName);
    alert(`"${medicine.productName}" added to cart`);
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
