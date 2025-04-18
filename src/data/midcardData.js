// data/Midcarddata.js
import medicineImage from '../assets/b1.png';
import labTestImage from '../assets/b2.png';
import doctorsImage from '../assets/b3.png';
import recordsImage from '../assets/b4.png';


const midcardData = [
    {
      title: "Medicines",
      // 2. USE the imported variable for imageUrl
      imageUrl: medicineImage,
      description: "Essentials at your doorstep",
    },
    {
      title: "Lab Tests",
      imageUrl: labTestImage,
      description: "Sample pickup at your home",
    },
    {
      title: "Doctors",
      imageUrl: doctorsImage,
      description: "Confirmed appointments",
    },
    {
      title: "Add Health Records",
      imageUrl: recordsImage,
      description: "Connect within 60 secs",
    },
    // ... other card data objects
  ];
  
  export default midcardData;
