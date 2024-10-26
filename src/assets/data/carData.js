// import all images from assets/images directory
import img01 from "../../assets/all-images/AC.jpg"; // AC Rental
import img02 from "../../assets/all-images/AC.jpg"; // Room Oil Heater Rental
import img03 from "../../assets/all-images/WashingM.jpg"; // Electrician & Plumber Services
import img04 from "../../assets/all-images/RO.jpg"; // Inverter Rental & Service
import img05 from "../../assets/all-images/RO.jpg"; // Construction Equipment Rental
import img06 from "../../assets/all-images/RO.jpg"; // Refrigerator Rental
import img07 from "../../assets/all-images/RO.jpg"; // Geyser Rental
import img08 from "../../assets/all-images/RO.jpg"; // RO Water Purifier Rental
import img09 from "../../assets/all-images/RO.jpg"; // Washing Machine Rental
import img10 from "../../assets/all-images/RO.jpg"; // LED/Television Rental


const carData = [
  {
    id: 1,
    rating: 112,
    Name: "AC Rental",
    imgUrl: img01,
    Yprice: 650,
    Qprice: 50,
    description:
      "Rent high-quality air conditioning units for your comfort and convenience. Perfect for any occasion.",
  },
  {
    id: 2,
    rating: 102,
    Name: "Room Oil Heater Rental",
    imgUrl: img02,
    Yprice: 300,
    Qprice: 30,
    description:
      "Stay warm this winter with our efficient oil heater rentals. Ideal for rooms of any size.",
  },
  {
    id: 3,
    rating: 132,
    Name: "Electrician & Plumber Services",
    imgUrl: img03,
    Yprice: 50,
    Qprice: 20,
    description:
      "Reliable and professional electrician and plumber services at your disposal for any repairs.",
  },
  {
    id: 4,
    rating: 102,
    Name: "Inverter Rental & Service",
    imgUrl: img04,
    Yprice: 200,
    Qprice: 25,
    description:
      "Keep your power supply uninterrupted with our inverter rentals and servicing options.",
  },
  {
    id: 5,
    rating: 94,
    Name: "Construction Equipment Rental",
    imgUrl: img05,
    Yprice: 1000,
    Qprice: 150,
    description:
      "Wide range of construction equipment available for rent to assist your building projects.",
  },
  {
    id: 6,
    rating: 119,
    Name: "Refrigerator Rental",
    imgUrl: img06,
    Yprice: 400,
    Qprice: 60,
    description:
      "Rent refrigerators for your home or events. We offer various sizes to meet your needs.",
  },
  {
    id: 7,
    rating: 82,
    Name: "Geyser Rental",
    imgUrl: img07,
    Yprice: 300,
    Qprice: 40,
    description:
      "Enjoy hot water whenever you need it with our geyser rentals. Suitable for all types of households.",
  },
  {
    id: 8,
    rating: 52,
    Name: "RO Water Purifier Rental",
    imgUrl: img08,
    Yprice: 350,
    Qprice: 45,
    description:
      "Get safe drinking water with our RO water purifier rentals. Easy to install and maintain.",
  },
  {
    id: 9,
    rating: 120,
    Name: "Washing Machine Rental",
    imgUrl: img09,
    Yprice: 250,
    Qprice: 35,
    description:
      "Convenient washing machine rentals to keep your clothes fresh and clean without the hassle.",
  },
  {
    id: 10,
    rating: 75,
    Name: "LED/Television Rental",
    imgUrl: img10,
    Yprice: 600,
    Qprice: 70,
    description:
      "Enjoy your favorite shows and movies with our LED/television rentals. Various sizes available.",
  },
];

export default carData;
