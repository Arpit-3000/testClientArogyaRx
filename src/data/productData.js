// 1. Import images from your local assets folder
// Adjust paths and filenames as needed
import medicineImage from '../assets/medicineimages/b1.png'; // Example path
import healthcareImage from '../assets/medicineimages/listimage3.png';
import labtestsImage from '../assets/medicineimages/l3.png';
import healthblogsImage from '../assets/medicineimages/s1.png';
import plusImage from '../assets/medicineimages/b1.png';
import offersImage from '../assets/medicineimages/s2.png';
import valuestoreImage from '../assets/medicineimages/b1.png';

const productData = [
    {
      title: 'Medicine',
      discount: 'UPTO 50% OFF',
      image: medicineImage, // Use imported variable
    },
    {
      title: 'Healthcare',
      discount: 'UPTO 60% OFF',
      image: healthcareImage, // Use imported variable
    },
    {
      title: 'Lab Tests',
      discount: 'UPTO 70% OFF',
      image: labtestsImage, // Use imported variable
    },
     {
      title: 'Health Blogs',
      discount: '',
      image: healthblogsImage, // Use imported variable
    },
    {
      title: 'PLUS',
      discount: 'SAVE 5% EXTRA',
      image: plusImage, // Use imported variable
    },
    {
      title: 'Offers',
      discount: '',
      image: offersImage, // Use imported variable
    },
    {
       title: 'Value Store',
      discount: 'UPTO 50% OFF',
      image: valuestoreImage, // Use imported variable
    }
  ];

  export default productData;
  