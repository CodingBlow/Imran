const services = [
  {
    id: 1,
    name: "Air Conditioner",
    code: 100,
    image:
      "https://images.pexels.com/photos/16592625/pexels-photo-16592625/free-photo-of-air-conditioner-in-a-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "1.0 TON": "₹2,000/month",
      "1.5 TON": "₹2,200/month",
      "2.0 TON": "₹2,500/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹2,000/month",
      "One Year (12 Months)": "₹2,000/month",
      "Rest of Season (Till Nov/Dec)": "₹2,000/month",
    },
    price: "1,800/month",
  },

  {
    id: 2,
    name: "Refrigerator",
    image:
      "https://www.pngmart.com/files/6/LG-Refrigerator-PNG-Background-Image.png",
    description: "Double Door Refrigerator, 250L Capacity, Energy Efficient.",
    variants: {
      Small: "₹1,200/month",
      Medium: "₹1,500/month",
      Large: "₹1,800/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,500/month",
      "One Year (12 Months)": "₹1,500/month",
      "Rest of Season (Till Nov/Dec)": "₹1,500/month",
    },
    price: "₹1,200/month",
    code: 104,
  },
  {
    id: 3,
    name: "Washing Machine",
    image:
      "https://www.pngmart.com/files/6/Washing-Machine-Download-PNG-Image.png",
    description: "Fully Automatic Washing Machine, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 102,
  },
  {
    id: 4,
    name: "Geyser",
    image: "https://www.pngmart.com/files/6/Geyser-PNG-File.png",
    description: "Instant Geyser, 3L Capacity, Energy Efficient.",
    variants: {
      Electric: "₹700/month",
      Gas: "₹800/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹800/month",
      "One Year (12 Months)": "₹800/month",
      "Rest of Season (Till Nov/Dec)": "₹800/month",
    },
    price: "₹700/month",
    code: 105,
  },
  {
    id: 5,
    name: "LED TV",
    image: "https://www.pngmart.com/files/7/LED-Television-PNG-Photo.png",
    description: "Smart LED TV, 43 inch, Full HD.",
    variants: {
      "32 inch": "₹900/month",
      "43 inch": "₹1,200/month",
      "50 inch": "₹1,500/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,200/month",
      "One Year (12 Months)": "₹1,200/month",
      "Rest of Season (Till Nov/Dec)": "₹1,200/month",
    },
    price: "₹900/month",
    code: 108,
  },
  {
    id: 6,
    name: "Room Heater",
    image: "https://www.pngmart.com/files/6/Space-Heater-PNG-Picture.png",
    description: "Portable Room Heater, Adjustable Temperature.",
    variants: {
      "Oil Filled": "₹700/month",
      "Fan Heater": "₹600/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹600/month",
      "One Year (12 Months)": "₹600/month",
      "Rest of Season (Till Nov/Dec)": "₹600/month",
    },
    price: "₹600/month",
    code: 107,
  },

  //  Repeating Cards
  // AC = 100,

  {
    id: 7,
    name: "Air Conditioner 1",
    code: 100,
    image:
      "https://www.pngmart.com/files/7/Air-Conditioner-PNG-Transparent-Picture.png",
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "1.0 TON": "₹2,000/month",
      "1.5 TON": "₹2,200/month",
      "2.0 TON": "₹2,500/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹2,000/month",
      "One Year (12 Months)": "₹2,000/month",
      "Rest of Season (Till Nov/Dec)": "₹2,000/month",
    },
    price: "1,800/month",
  },
  {
    id: 8,
    name: "Air Conditioner 2",
    code: 100,
    image: "https://www.pngmart.com/files/7/Air-Conditioner-PNG-HD.png",
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "1.0 TON": "₹2,000/month",
      "1.5 TON": "₹2,200/month",
      "2.0 TON": "₹2,500/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹2,000/month",
      "One Year (12 Months)": "₹2,000/month",
      "Rest of Season (Till Nov/Dec)": "₹2,000/month",
    },
    price: "1,800/month",
  },
  {
    id: 18,
    name: "Air Conditioner 3",
    code: 100,
    image: "https://www.pngmart.com/files/22/LG-PNG-Isolated-Photo.png",
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "1.0 TON": "₹2,000/month",
      "1.5 TON": "₹2,200/month",
      "2.0 TON": "₹2,500/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹2,000/month",
      "One Year (12 Months)": "₹2,000/month",
      "Rest of Season (Till Nov/Dec)": "₹2,000/month",
    },
    price: "1,800/month",
  },

  // Geyser code=105

  {
    id: 19,
    name: "Geyser 5",
    image:
      "https://www.pngmart.com/files/6/Electric-Geyser-PNG-Transparent-Picture.png",
    description: "Instant Geyser, 3L Capacity, Energy Efficient.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 105,
  },
  {
    id: 20,
    name: "Geyser 2",
    image: "https://www.pngmart.com/files/6/Electric-Geyser-PNG-HD.png",
    description: "Instant Geyser, 3L Capacity, Energy Efficient.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 105,
  },
  {
    id: 21,
    name: "Geyser-3",
    image: "https://www.pngmart.com/files/6/Geyser-PNG-Transparent-Image.png",
    description: "Instant Geyser, 3L Capacity, Energy Efficient.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 105,
  },
  //Washing machine = 102
  {
    id: 9,
    name: "Washing Machine 1",
    image:
      "https://www.pngmart.com/files/6/Washing-Machine-PNG-Transparent-Image.png",
    description: "Fully Automatic Washing Machine, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 102,
  },
  {
    id: 10,
    name: "Washing Machine 2",
    image:
      "https://www.pngmart.com/files/6/Washing-Machine-PNG-Background-Image.png",
    description: "Fully Automatic Washing Machine, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 102,
  },
  {
    id: 11,
    name: "Washing Machine 3",
    image: "https://www.pngmart.com/files/6/Washing-Machine-PNG-Photo.png",
    description: "Fully Automatic Washing Machine, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 102,
  },
  // RO Water code=103
  {
    id: 12,
    name: "RO Water Purifier 1",
    image:
      "https://www.pngmart.com/files/6/Water-Purifier-Transparent-Background.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 103,
  },
  {
    id: 16,
    name: "RO Water Purifier 2",
    image: "https://www.pngmart.com/files/6/Water-Purifier-PNG-Photos.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 103,
  },
  {
    id: 17,
    name: "RO Water Purifier 3",
    image: "https://www.pngmart.com/files/6/Kent-RO-Water-Purifier-PNG-HD.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 103,
  },
  // Refrigrator code=104
  {
    id: 13,
    name: "Refreigrator",
    image:
      "https://www.pngmart.com/files/6/LG-Refrigerator-Download-PNG-Image.png",
    description: "Double Door Refrigerator, 250L Capacity, Energy Efficient.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 104,
  },
  {
    id: 14,
    name: "Refreigrator 2",
    image: "https://www.pngmart.com/files/6/LG-Refrigerator-Background-PNG.png",
    description: "Double Door Refrigerator, 250L Capacity, Energy Efficient.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 104,
  },
  {
    id: 15,
    name: "Refreigrator-3",
    image:
      "https://www.pngmart.com/files/3/Single-Door-Refrigerator-PNG-Photos.png",
    description: "Double Door Refrigerator, 250L Capacity, Energy Efficient.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 104,
  },

  // Inverter code=106

  {
    id: 22,
    name: "Inverter",
    image: "https://www.pngmart.com/files/6/Inverter-PNG-Clipart.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 106,
  },
  {
    id: 23,
    name: "Inverter 2",
    image: "https://www.pngmart.com/files/7/Inverter-PNG-Picture.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 106,
  },
  {
    id: 24,
    name: "Inverter-3",
    image:
      "https://www.pngmart.com/files/6/Inverter-Transparent-Background.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 106,
  },
  // Construction code=109
  {
    id: 25,
    name: "Construction",
    image: "https://www.pngmart.com/files/21/3D-Printer-PNG-Isolated-HD.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 109,
  },
  {
    id: 26,
    name: "Construction 2",
    image:
      "https://www.pngmart.com/files/16/Measure-Centimeter-Tape-PNG-Image.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 109,
  },
  {
    id: 27,
    name: "Construction-3",
    image: "https://www.pngmart.com/files/16/Carpenter-Hammer-PNG-Image.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 109,
  },
  {
    id: 28,
    name: "Construction-4",
    image:
      "https://www.pngmart.com/files/15/Silhouette-Excavator-PNG-Transparent-HD-Photo.png",
    description: "Fully Automatic RO, 7 Kg Capacity.",
    variants: {
      "Top Load": "₹900/month",
      "Front Load": "₹1,000/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹1,000/month",
      "One Year (12 Months)": "₹1,000/month",
      "Rest of Season (Till Nov/Dec)": "₹1,000/month",
    },
    price: "₹900/month",
    code: 109,
  },
  // Room heater code=107
  {
    id: 29,
    name: "Room Heater 1",
    image: "https://www.pngmart.com/files/7/Micathermic-Heater-PNG-Image.png",
    description: "Portable Room Heater, Adjustable Temperature.",
    variants: {
      "Oil Filled": "₹700/month",
      "Fan Heater": "₹600/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹600/month",
      "One Year (12 Months)": "₹600/month",
      "Rest of Season (Till Nov/Dec)": "₹600/month",
    },
    price: "₹600/month",
    code: 107,
  },
  {
    id: 30,
    name: "Room Heater 2",
    image:
      "https://www.pngmart.com/files/6/Space-Heater-Transparent-Images-PNG.png",
    description: "Portable Room Heater, Adjustable Temperature.",
    variants: {
      "Oil Filled": "₹700/month",
      "Fan Heater": "₹600/month",
    },
    durations: {
      "Full Season (Till Nov/Dec)": "₹600/month",
      "One Year (12 Months)": "₹600/month",
      "Rest of Season (Till Nov/Dec)": "₹600/month",
    },
    price: "₹600/month",
    code: 107,
  },
];

export default services;
