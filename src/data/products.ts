export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  detailedDescription: string;
  image: string;       // legacy single image
  images?: string[];   // exactly 4 images (equal size)
  specifications: {
    label: string;
    value: string;
  }[];
  sizeRanges: string[];
  priceRange: string;
  features: string[];
}

// Helper: generate equal-size square images (makes thumbs uniform).
const sq = (seed: string, size = 900) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${size}/${size}`;

export const products: Product[] = [
  {
    id: "1",
    name: "Cutting Wheel Premium",
    category: "Abrasives",
    brand: "Tyrolit",
    description: "High-performance cutting wheels for metal fabrication and industrial applications",
    detailedDescription:
      "Premium grade cutting wheels designed for heavy-duty industrial applications. Manufactured with superior abrasive materials for consistent performance and extended tool life. Ideal for cutting steel, stainless steel, and other ferrous metals.",
    image: sq("tyrolit-cut-1"), // main can be any; gallery provides 4 equal squares
    images: [
      sq("tyrolit-cut-1"),
      sq("tyrolit-cut-2"),
      sq("tyrolit-cut-3"),
      sq("tyrolit-cut-4"),
    ],
    specifications: [
      { label: "Material", value: "Aluminum Oxide" },
      { label: "Max RPM", value: "15,200" },
      { label: "Thickness", value: "3.0mm" },
      { label: "Bore Size", value: "22.23mm" },
      { label: "Grade", value: "Industrial Premium" },
      { label: "Application", value: "Metal Cutting" },
    ],
    sizeRanges: ["100mm", "115mm", "125mm", "150mm", "180mm", "230mm"],
    priceRange: "₹45 - ₹280",
    features: [
      "High cutting speed and efficiency",
      "Minimal heat generation",
      "Long operational life",
      "Consistent performance",
      "Low vibration operation",
    ],
  },

  {
    id: "2",
    name: "Pneumatic Cylinder Double Acting",
    category: "Pneumatics",
    brand: "SMC",
    description: "Industrial-grade pneumatic cylinders with precise control and durability",
    detailedDescription:
      "Double-acting pneumatic cylinders engineered for precision and reliability in automated industrial systems. Features corrosion-resistant materials and precision-machined components for smooth operation and long service life.",
    image: sq("smc-cylinder-1"),
    images: [
      sq("smc-cylinder-1"),
      sq("smc-cylinder-2"),
      sq("smc-cylinder-3"),
      sq("smc-cylinder-4"),
    ],
    specifications: [
      { label: "Bore Size", value: "32mm - 100mm" },
      { label: "Stroke Length", value: "25mm - 500mm" },
      { label: "Operating Pressure", value: "0.1 - 1.0 MPa" },
      { label: "Temperature Range", value: "-10°C to +60°C" },
      { label: "Seal Material", value: "NBR/Polyurethane" },
      { label: "Body Material", value: "Aluminum Alloy" },
    ],
    sizeRanges: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm"],
    priceRange: "₹1,200 - ₹8,500",
    features: [
      "Double-acting design",
      "Adjustable cushioning",
      "Magnetic piston option",
      "Corrosion-resistant finish",
      "Easy maintenance",
    ],
  },

  {
    id: "3",
    name: "Grinding Disc Depressed Center",
    category: "Abrasives",
    brand: "Tyrolit",
    description: "Professional grinding discs for surface finishing and material removal",
    detailedDescription:
      "Depressed center grinding discs manufactured to the highest standards for aggressive material removal and surface preparation.",
    image: sq("tyrolit-grind-1"),
    images: [
      sq("tyrolit-grind-1"),
      sq("tyrolit-grind-2"),
      sq("tyrolit-grind-3"),
      sq("tyrolit-grind-4"),
    ],
    specifications: [
      { label: "Abrasive Type", value: "Zirconia Alumina" },
      { label: "Max RPM", value: "13,300" },
      { label: "Thickness", value: "6.0mm" },
      { label: "Bore Size", value: "22.23mm" },
      { label: "Grit Size", value: "24 / 36 / 60" },
      { label: "Shape", value: "Type 27 Depressed" },
    ],
    sizeRanges: ["100mm", "115mm", "125mm", "150mm", "180mm"],
    priceRange: "₹55 - ₹350",
    features: [
      "Fast stock removal",
      "Excellent durability",
      "Low noise operation",
      "Heat resistant bond",
      "Multi-material compatible",
    ],
  },

  {
    id: "4",
    name: "Air Compressor Unit Portable",
    category: "Pneumatics",
    brand: "SMC",
    description: "Reliable air compression systems for industrial automation",
    detailedDescription:
      "Portable industrial air compressor designed for demanding applications. Features oil-free operation, low maintenance requirements, and consistent air delivery.",
    image: sq("smc-compressor-1"),
    images: [
      sq("smc-compressor-1"),
      sq("smc-compressor-2"),
      sq("smc-compressor-3"),
      sq("smc-compressor-4"),
    ],
    specifications: [
      { label: "Motor Power", value: "2.5 HP" },
      { label: "Tank Capacity", value: "50 Liters" },
      { label: "Max Pressure", value: "8 bar (116 PSI)" },
      { label: "Air Delivery", value: "250 L/min" },
      { label: "Power Supply", value: "230V/50Hz" },
      { label: "Noise Level", value: "78 dB" },
    ],
    sizeRanges: ["25L", "50L", "100L", "150L", "200L"],
    priceRange: "₹18,000 - ₹85,000",
    features: [
      "Oil-free operation",
      "Thermal overload protection",
      "Pressure gauge included",
      "Quick connect fittings",
      "Portable design with wheels",
    ],
  },

  {
    id: "5",
    name: "Diamond Cutting Disc Professional",
    category: "Cutting Tools",
    brand: "Perfect",
    description: "Professional diamond-tipped cutting discs for precision work",
    detailedDescription:
      "Super abrasive diamond cutting discs engineered for cutting hard materials including concrete, granite, marble, and ceramics.",
    image: sq("perfect-diamond-1"),
    images: [
      sq("perfect-diamond-1"),
      sq("perfect-diamond-2"),
      sq("perfect-diamond-3"),
      sq("perfect-diamond-4"),
    ],
    specifications: [
      { label: "Diamond Grade", value: "Premium Industrial" },
      { label: "Segment Height", value: "10mm" },
      { label: "Bore Size", value: "22.23mm" },
      { label: "Max RPM", value: "12,200" },
      { label: "Application", value: "Concrete/Stone" },
      { label: "Wet/Dry Use", value: "Both" },
    ],
    sizeRanges: ["115mm", "125mm", "150mm", "180mm", "230mm", "300mm"],
    priceRange: "₹850 - ₹4,500",
    features: [
      "Laser welded segments",
      "Fast cutting speed",
      "Long blade life",
      "Minimal chipping",
      "Reduced dust generation",
    ],
  },

  {
    id: "6",
    name: "Polishing Pads Complete Set",
    category: "Polishing",
    brand: "Apidor",
    description: "Complete polishing pad set for various surface finishes",
    detailedDescription:
      "Professional grade polishing pads designed for achieving mirror finishes on metal, stone, and composite surfaces.",
    image: sq("apidor-polish-1"),
    images: [
      sq("apidor-polish-1"),
      sq("apidor-polish-2"),
      sq("apidor-polish-3"),
      sq("apidor-polish-4"),
    ],
    specifications: [
      { label: "Pad Type", value: "Hook & Loop" },
      { label: "Backing Material", value: "Velcro" },
      { label: "Foam Density", value: "Medium/Soft/Fine" },
      { label: "Diameter", value: "100mm - 180mm" },
      { label: "Max RPM", value: "6,000" },
      { label: "Material", value: "Polyurethane Foam" },
    ],
    sizeRanges: ["100mm", "125mm", "150mm", "180mm"],
    priceRange: "₹180 - ₹650",
    features: [
      "Multi-stage polishing",
      "Heat resistant",
      "Easy pad changes",
      "Compatible with all grinders",
      "Washable and reusable",
    ],
  },

  {
    id: "7",
    name: "Flap Disc Conical Type",
    category: "Abrasives",
    brand: "Tyrolit",
    description: "High-quality flap discs for metal finishing applications",
    detailedDescription:
      "Conical flap discs providing aggressive grinding action with a smooth finish.",
    image: sq("tyrolit-flap-1"),
    images: [
      sq("tyrolit-flap-1"),
      sq("tyrolit-flap-2"),
      sq("tyrolit-flap-3"),
      sq("tyrolit-flap-4"),
    ],
    specifications: [
      { label: "Abrasive", value: "Zirconia" },
      { label: "Grit Range", value: "40 - 120" },
      { label: "Max RPM", value: "13,300" },
      { label: "Bore", value: "22.23mm" },
      { label: "Shape", value: "Type 29 Conical" },
      { label: "Backing", value: "Fiberglass" },
    ],
    sizeRanges: ["100mm", "115mm", "125mm", "150mm", "180mm"],
    priceRange: "₹95 - ₹420",
    features: [
      "Cool cutting action",
      "Long service life",
      "Consistent finish",
      "Flexible design",
      "Low vibration",
    ],
  },

  {
    id: "8",
    name: "Pneumatic Solenoid Valve 5/2 Way",
    category: "Pneumatics",
    brand: "Janatics",
    description: "Precision pneumatic valves for automated systems",
    detailedDescription:
      "5/2 way solenoid valve designed for controlling double-acting pneumatic cylinders.",
    image: sq("janatics-valve-1"),
    images: [
      sq("janatics-valve-1"),
      sq("janatics-valve-2"),
      sq("janatics-valve-3"),
      sq("janatics-valve-4"),
    ],
    specifications: [
      { label: "Port Size", value: "1/8\" to 1/2\"" },
      { label: "Voltage", value: "24V DC / 230V AC" },
      { label: "Max Pressure", value: "10 bar" },
      { label: "Flow Rate", value: "600 - 2400 L/min" },
      { label: "Response Time", value: "15ms" },
      { label: "Protection", value: "IP65" },
    ],
    sizeRanges: ["1/8\"", "1/4\"", "3/8\"", "1/2\""],
    priceRange: "₹1,800 - ₹6,500",
    features: [
      "Manual override option",
      "LED status indicator",
      "Low power consumption",
      "Explosion-proof options",
      "Easy installation",
    ],
  },
];
