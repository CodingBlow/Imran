const services = [
  {
    id: 1,
    name: "Air Conditioner",
    code: 100,
    image:
      "https://images.pexels.com/photos/16592625/pexels-photo-16592625/free-photo-of-air-conditioner-in-a-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "0.75 TON": "₹1,800/month",
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
      "https://images.pexels.com/photos/4046365/pexels-photo-4046365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code : 100,
  },
  {
    id: 3,
    name: "Washing Machine",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    image:
      "https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code: 102,
  },
  {
    id: 5,
    name: "LED TV",
    image:
      "https://images.pexels.com/photos/5117340/pexels-photo-5117340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code: 102,
  },
  {
    id: 6,
    name: "Room Heater",
    image:
      "https://images.pexels.com/photos/5582777/pexels-photo-5582777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code: 102,
  },

  //  Repeating Cards
  // AC = 100,

  {
    id: 7,
    name: "Air Conditioner",
    code: 100,
    image:
      "https://images.pexels.com/photos/16592625/pexels-photo-16592625/free-photo-of-air-conditioner-in-a-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "0.75 TON": "₹1,800/month",
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
    name: "Air Conditioner",
    code: 100,
    image:
      "https://images.pexels.com/photos/16592625/pexels-photo-16592625/free-photo-of-air-conditioner-in-a-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "0.75 TON": "₹1,800/month",
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
    name: "Air Conditioner",
    code: 100,
    image:
      "https://images.pexels.com/photos/16592625/pexels-photo-16592625/free-photo-of-air-conditioner-in-a-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "0.75 TON": "₹1,800/month",
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
  //Washing machine = 102
  {
    id: 9,
    name: "Washing Machine",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    name: "Washing Machine",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    name: "Washing Machine",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    name: "RO Water Purifier",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    name: "RO Water Purifier",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    name: "RO Water Purifier",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code: 104,
  },
  {
    id: 14,
    name: "Refreigrator 2",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code: 104,
  },
  {
    id: 15,
    name: "Refreigrator-3",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code: 104,
  },
  // Geyser code=101 
  {
    id: 19,
    name: "Geyser",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code: 101,
  },
  {
    id: 20,
    name: "Geyser 2",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code: 101,
  },
  {
    id: 21,
    name: "Geyser-3",
    image:
      "https://images.pexels.com/photos/1591981/pexels-photo-1591981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    code: 101,
  },
];

export default services;
