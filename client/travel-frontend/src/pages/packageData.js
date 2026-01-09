import goa from "../assets/goa.png";
import manali from "../assets/manali.png";
import paris from "../assets/paris.png";
import bali from "../assets/bali.png";
import dubai from "../assets/dubai.png";
import kashmir from "../assets/kashmir.png";
import jaipur from "../assets/jaipur.png";
import kerala from "../assets/kerala.png";
import singapore from "../assets/singapore.png";
import thailand from "../assets/thailand.png";
import agra from "../assets/agra.png";
import maldives from "../assets/maldives.png";

const packageData = [
  {
    id: 1,
    place: "Goa",
    price: 15000,
    image: goa,
    duration: "3 Nights / 4 Days",
    dates: ["10 Feb 2026", "20 Feb 2026", "5 Mar 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival in Goa, hotel check-in & evening beach leisure" },
      { day: "Day 2", plan: "North Goa sightseeing – Baga, Calangute, Candolim, Fort Aguada" },
      { day: "Day 3", plan: "South Goa – Basilica of Bom Jesus, Miramar Beach, Mandovi cruise" },
      { day: "Day 4", plan: "Shopping at local markets & departure" },
    ],
  },

  {
    id: 2,
    place: "Manali",
    price: 18000,
    image: manali,
    duration: "4 Nights / 5 Days",
    dates: ["12 Feb 2026", "25 Feb 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival in Manali & Mall Road walk" },
      { day: "Day 2", plan: "Solang Valley – paragliding & adventure sports" },
      { day: "Day 3", plan: "Rohtang Pass – snow activities & sightseeing" },
      { day: "Day 4", plan: "Hadimba Temple, Manu Temple & Vashisht hot springs" },
      { day: "Day 5", plan: "Local shopping & departure" },
    ],
  },

  {
    id: 3,
    place: "Paris",
    price: 85000,
    image: paris,
    duration: "5 Nights / 6 Days",
    dates: ["1 Mar 2026", "10 Mar 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival in Paris & city orientation tour" },
      { day: "Day 2", plan: "Eiffel Tower & Seine River Cruise" },
      { day: "Day 3", plan: "Louvre Museum & Notre Dame Cathedral" },
      { day: "Day 4", plan: "Versailles Palace excursion" },
      { day: "Day 5", plan: "Shopping at Champs-Élysées" },
      { day: "Day 6", plan: "Departure" },
    ],
  },

  {
    id: 4,
    place: "Bali",
    price: 70000,
    image: bali,
    duration: "5 Nights / 6 Days",
    dates: ["5 Apr 2026", "20 Apr 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival & hotel check-in" },
      { day: "Day 2", plan: "Ubud temples & rice terraces" },
      { day: "Day 3", plan: "Water sports at Nusa Dua" },
      { day: "Day 4", plan: "Tanah Lot Temple & sunset views" },
      { day: "Day 5", plan: "Beach leisure & shopping" },
      { day: "Day 6", plan: "Departure" },
    ],
  },

  {
    id: 5,
    place: "Dubai",
    price: 65000,
    image: dubai,
    duration: "4 Nights / 5 Days",
    dates: ["10 May 2026", "25 May 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival & Marina walk" },
      { day: "Day 2", plan: "Burj Khalifa & Dubai Mall" },
      { day: "Day 3", plan: "Desert Safari with BBQ dinner" },
      { day: "Day 4", plan: "Palm Jumeirah & shopping" },
      { day: "Day 5", plan: "Departure" },
    ],
  },

  {
    id: 6,
    place: "Kashmir",
    price: 22000,
    image: kashmir,
    duration: "5 Nights / 6 Days",
    dates: ["15 Mar 2026", "30 Mar 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival & Shikara ride on Dal Lake" },
      { day: "Day 2", plan: "Gulmarg – snow activities" },
      { day: "Day 3", plan: "Pahalgam sightseeing" },
      { day: "Day 4", plan: "Sonmarg excursion" },
      { day: "Day 5", plan: "Local shopping" },
      { day: "Day 6", plan: "Departure" },
    ],
  },

  {
    id: 7,
    place: "Jaipur",
    price: 12000,
    image: jaipur,
    duration: "3 Nights / 4 Days",
    dates: ["10 Feb 2026", "22 Feb 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival & local markets" },
      { day: "Day 2", plan: "Amber Fort, Jal Mahal, City Palace" },
      { day: "Day 3", plan: "Hawa Mahal & cultural evening" },
      { day: "Day 4", plan: "Shopping & departure" },
    ],
  },

  {
    id: 8,
    place: "Kerala",
    price: 20000,
    image: kerala,
    duration: "5 Nights / 6 Days",
    dates: ["18 Feb 2026", "8 Mar 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival in Kochi & city tour" },
      { day: "Day 2", plan: "Munnar – tea gardens & waterfalls" },
      { day: "Day 3", plan: "Thekkady wildlife safari" },
      { day: "Day 4", plan: "Alleppey houseboat stay" },
      { day: "Day 5", plan: "Backwater cruise" },
      { day: "Day 6", plan: "Departure" },
    ],
  },

  {
    id: 9,
    place: "Singapore",
    price: 78000,
    image: singapore,
    duration: "4 Nights / 5 Days",
    dates: ["5 Jun 2026", "20 Jun 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival & Marina Bay Sands" },
      { day: "Day 2", plan: "Universal Studios" },
      { day: "Day 3", plan: "Gardens by the Bay & Sentosa" },
      { day: "Day 4", plan: "Shopping & leisure" },
      { day: "Day 5", plan: "Departure" },
    ],
  },

  {
    id: 10,
    place: "Thailand",
    price: 55000,
    image: thailand,
    duration: "5 Nights / 6 Days",
    dates: ["10 Jul 2026", "25 Jul 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival in Phuket" },
      { day: "Day 2", plan: "Phi Phi Islands tour" },
      { day: "Day 3", plan: "Krabi beach excursion" },
      { day: "Day 4", plan: "Thai cultural show" },
      { day: "Day 5", plan: "Shopping & leisure" },
      { day: "Day 6", plan: "Departure" },
    ],
  },

  {
    id: 11,
    place: "Agra",
    price: 9000,
    image: agra,
    duration: "2 Nights / 3 Days",
    dates: ["5 Feb 2026", "18 Feb 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival & Mehtab Bagh" },
      { day: "Day 2", plan: "Taj Mahal & Agra Fort" },
      { day: "Day 3", plan: "Shopping & departure" },
    ],
  },

  {
    id: 12,
    place: "Maldives",
    price: 95000,
    image: maldives,
    duration: "4 Nights / 5 Days",
    dates: ["15 Apr 2026", "30 Apr 2026"],
    itinerary: [
      { day: "Day 1", plan: "Arrival & resort check-in" },
      { day: "Day 2", plan: "Snorkeling & water sports" },
      { day: "Day 3", plan: "Island hopping" },
      { day: "Day 4", plan: "Sunset cruise & spa" },
      { day: "Day 5", plan: "Departure" },
    ],
  },
];

export default packageData;
