export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Mission", href: "#mission" },
  { label: "Videos", href: "#videos" },
  { label: "Stories", href: "#stories" },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact", href: "#contact" },
];

export const differenceItems = [
  {
    icon: "warranty",
    title: "5-Year Structural Warranty",
    text: "Built with long-term value in mind.",
  },
  {
    icon: "sizes",
    title: "Three screener sizes",
    text: "56 Mini, 68 Pro, and 78 Grizzly.",
  },
  {
    icon: "portability",
    title: "Compact and portable",
    text: "Easy to move, stage, and use on real jobsites.",
  },
  {
    icon: "feedback",
    title: "Contractor feedback",
    text: "Designed from real-world operator input.",
  },
  {
    icon: "roi",
    title: "High resale value and ROI",
    text: "A practical equipment investment for working crews.",
  },
];
export type ProductVideo = {
  id: string;
  title: string;
};

export type DesiteProduct = {
  name: string;
  detailVariant?: string;
  description?: string[];
  imageAlt?: string;
  images: string[];
  proscreenHighlights?: {
    label: string;
    value: string;
  }[];
  videos?: ProductVideo[];
  materials?: string[];
  features?: string[];
  specs?: string;
  capacity?: string;
  equipment?: string;
  applications?: string;
  specSheet?: string;
};

export const products: DesiteProduct[] = [
  {
    name: "68V Vibratory Mini Screener",
    description: ["Designed for mini equipment with limited lift capacity, the ProScreen 68V is a compact vibratory screener built for practical material screening and recycling."],
    detailVariant: "DeSite ProScreen",
    imageAlt: "DeSite 68 ProScreen screener product photo",
    images: [
      "/images/68/2.png",
      "/images/68/ACTION1.png",
      "/images/68/ACTION3.png",
      "/images/68/ACTION.jpg",
      "/images/68/IMG.webp",
      "/images/68/Screenshot1.png",
      "/images/68/Screenshot2.png",
      "/images/68/image1.png",
      "/images/68/image.png",
    ],
    proscreenHighlights: [
      {
        label: "Weight",
        value: "725 kg",
      },
      {
        label: "Bucket Width",
        value: "Up to 1.7 meters",
      },
      {
        label: "Feed Height",
        value: "1.8 meters",
      },
      {
        label: "Mesh Range",
        value: "3 mm to 100 mm",
      },
      {
        label: "Warranty",
        value: "5 Year Structure Warranty",
      },
    ],
    videos: [
      {
        id: "1079537676",
        title: "68 Pro Screen Full Overview",
      },
      {
        id: "1129558957",
        title: "DeSite ProScreen 68V product demo video 2",
      },
      {
        id: "892970062",
        title: "DeSite ProScreen 68V product demo video 3",
      },
      {
        id: "892925987",
        title: "DeSite ProScreen 68V product demo video 4",
      },
    ],
    materials: [
      "Soils",
      "Sand",
      "Gravels",
      "Compost",
      "Erosion Rock",
    ],
    features: [
    "220 Volt single phase (3600rpm) Vibratory System",
    "45 to 25 degree tilting screen deck",
    "Coil over spring suspension system",
    "Bucket and fork transport pockets",
    "Hot dip zinc coating finish",
  ],

  },
   {
    name: "SLG 78 Grizzly RB",
    description: ["DeSite’s spring suspension grizzly makes it the best compact grizzly screener on the market. Designed for compact equipment the screen deck feed height is under 2.4 meters "," The 78 Grizzly with riser box weighs in at 750kg and comes with fork pockets built into the screeners structure for easy onsite transport. "," Backed by our 5 Year Structure Warranty you can count on the SLG 78 Grizzly to be rugged built equipment."],
    detailVariant: "DeSite Grizzly",
    imageAlt: "SLG 78 Grizzly RB screener product photo",
    images: [],
    proscreenHighlights: [
      {
        label: "Weight",
        value: "",
      },
      {
        label: "Bucket Width",
        value: "",
      },
      {
        label: "Feed Height",
        value: "",
      },
      {
        label: "Mesh Range",
        value: "50 mm to 100 mm",
      },
      {
        label: "Warranty",
        value: "5 Year Structure Warranty",
      },
    ],
    videos: [],
    materials: [
      "Dirt",
      "Gravels",
      "Erosion Rock",
    ],
    features: [
    "Self cleaning spring suspension system",
    "Quick disconnect riser box",
    "4 inch nylon tiedown straps",
    "Side tensioning mesh system",
    "Available mesh sizes 50, 75, and 100mm",
  ],

  },
  {
    name: "SLG 78 Grizzly",
    description: ["Product overview and detailed model information will be added soon."],
    detailVariant: "DeSite Grizzly",
    imageAlt: "SLG 78 Grizzly screener product photo",
    images: [
      "/images/78grizzly/2.jpg",
      "/images/78grizzly/Default.JPG",
      "/images/78grizzly/FOTOINACTION1.jpg",
      "/images/78grizzly/FOTOINACTION2.jpg",
      "/images/78grizzly/FOTOINACTION.jpg",
      "/images/78grizzly/IMG3946.jpg",
      "/images/78grizzly/PRODUCTIMAGE.jpg",
      "/images/78grizzly/image000004.jpg",
      "/images/78grizzly/image000005.jpg",
      "/images/78grizzly/image00007.jpg",
    ],
    proscreenHighlights: [
      {
        label: "Weight",
        value: "",
      },
      {
        label: "Bucket Width",
        value: "",
      },
      {
        label: "Feed Height",
        value: "",
      },
      {
        label: "Mesh Range",
        value: "",
      },
      {
        label: "Warranty",
        value: "5 Year Structure Warranty",
      },
      
    ],
    videos: [
       {
        id: "1090497018",
        title: "SLG 78 Spring Loaded Grizzly Screening Sand",
      },
      {
        id: "1001990400",
        title: "SLG 78 Spring Loaded Grizzly Screening Gravel",
      },
      {
        id: "1123779281",
        title: "78 GRIZZLY",
      },
       {
        id: "1003281077",
        title: "SLG 78 Spring Loaded Grizzly Screening Overview",
      },
    ],
    materials: [
      "coming soon"
    ],
    features: [
    "coming soon"
  ],

  },
  {
    name: "SLG 56 Mini",
    description: ["Product overview and detailed model information will be added soon."],
    detailVariant: "DeSite Grizzly",
    imageAlt: "SLG 56 Mini screener product photo",
    images: [
     "/images/56/PRODUCTIMAGE.png",
      "/images/56/IMG3.jpg",
      "/images/56/image3.png",
      "/images/56/RUBBERSCREENDECKSKIRTS.jpg",
      "/images/56/image2.png",
      "/images/56/PNG0.png",
      "/images/56/image1.png",
      "/images/56/CSPRINGSUSPENSION.jpg",
      "/images/56/IMG4.jpg",
      "/images/56/HITCHTUBE.jpg",
      "/images/56/WHEELS.jpg",
      "/images/56/PRODUCTIMAGE2.jpg",
      "/images/56/image.png",
    ],
    proscreenHighlights: [
      {
        label: "Weight",
        value: "",
      },
      {
        label: "Bucket Width",
        value: "",
      },
      {
        label: "Feed Height",
        value: "",
      },
      {
        label: "Mesh Range",
        value: "",
      },
      {
        label: "Warranty",
        value: "5 Year Structure Warranty",
      },
    ],
    videos: [
      {
        id: "1006286529",
        title: "SLG 56 Towable Spring Loaded Grizzly | Overview",
      },
      {
        id: "1125998905",
        title: "SLG 56 Towable Spring Loaded Grizzly Testimonial",
      },
      {
        id: "970371995",
        title: "DESITE SLG - 56 MINI",
      },
      {
        id: "970809028",
        title: "SLG 56 Towable Spring Loaded Grizzly | Disconnect Hitch System",
      },
    ],
    materials: [
      "coming soon"
    ],
    features: [
    "coming soon"
  ],

  },
 {
    name: "SLG 48 Mini",
    description: ["Product overview and detailed model information will be added soon."],
    detailVariant: "DeSite Grizzly",
    imageAlt: "SLG 48 Mini screener product photo",
    images: [
      "/images/48/48.webp",
      "/images/48/48image.webp",
      "/images/48/48Suspension.webp",
      "/images/48/wheels.webp",
      "/images/48/48InAction1.webp",
      "/images/48/48InAction2.webp",
      "/images/48/48InAction3.webp",
      "/images/48/48InAction4.webp",
      
    ],
    proscreenHighlights: [
      {
        label: "Weight",
        value: "",
      },
      {
        label: "Bucket Width",
        value: "",
      },
      {
        label: "Feed Height",
        value: "",
      },
      {
        label: "Mesh Range",
        value: "",
      },
      {
        label: "Warranty",
        value: "5 Year Structure Warranty",
      },
    ],
    videos: [
      {
        id: "945966711",
        title: "DESITE SLG - 48 MINI",
      },
    ],
    materials: [
      "coming soon"
    ],
    features: [
    "coming soon"
  ],

  },

];

export const videos = [
  {
    title: "Product Demos",
    thumbnail: "/assets/desite/videos/product-demo-thumbnail.jpg",
    description: "Placeholder demo video showing setup, screening, and material output.",
    embed: "YouTube or Vimeo link placeholder",
  },
  {
    title: "Customer Jobsites and Testimonials",
    thumbnail: "/assets/desite/videos/customer-jobsite-thumbnail.jpg",
    description: "Placeholder customer jobsite footage with real working conditions.",
    embed: "YouTube or Vimeo link placeholder",
  },
  {
    title: "Before and After Material Results",
    thumbnail: "/assets/desite/videos/before-after-thumbnail.jpg",
    description: "Placeholder comparison of raw material and screened finished material.",
    embed: "YouTube or Vimeo link placeholder",
  },
  {
    title: "Behind the Scenes Field Testing",
    thumbnail: "/assets/desite/videos/behind-scenes-thumbnail.jpg",
    supportImage: "/assets/desite/videos/brad-customer-field-testing.jpg",
    description: "Placeholder field-testing footage with Brad speaking with customers.",
    embed: "YouTube or Vimeo link placeholder",
  },
];

export const customerStories = [
  {
    name: "Lin",
    location: "Location placeholder",
    machine: "Machine purchased placeholder",
    photo: "/assets/desite/customers/lin-customer-photo.jpg",
    jobsite: "/assets/desite/customers/lin-jobsite-photo.jpg",
    quote:
      "Placeholder customer testimonial about production, reliability and return on investment.",
  },
  {
    name: "Dan",
    location: "Location placeholder",
    machine: "Machine purchased placeholder",
    photo: "/assets/desite/customers/dan-customer-photo.jpg",
    jobsite: "/assets/desite/customers/dan-jobsite-photo.jpg",
    quote:
      "Placeholder customer testimonial about production, reliability and return on investment.",
  },
  {
    name: "Kelly",
    location: "Location placeholder",
    machine: "Machine purchased placeholder",
    photo: "/assets/desite/customers/kelly-customer-photo.jpg",
    jobsite: "/assets/desite/customers/kelly-jobsite-photo.jpg",
    quote:
      "Placeholder customer testimonial about production, reliability and return on investment.",
  },
  {
    name: "Rob",
    location: "Location placeholder",
    machine: "Machine purchased placeholder",
    photo: "/assets/desite/customers/rob-customer-photo.jpg",
    jobsite: "/assets/desite/customers/rob-jobsite-photo.jpg",
    quote:
      "Placeholder customer testimonial about production, reliability and return on investment.",
  },
];

export const socialProof = [
  {
    title: "Facebook Views",
    path: "/assets/desite/social/facebook-views.jpg",
    text: "Screenshot placeholder for Facebook reach and video views.",
  },
  {
    title: "Instagram Views",
    path: "/assets/desite/social/instagram-views.jpg",
    text: "Screenshot placeholder for Instagram engagement.",
  },
  {
    title: "YouTube Views",
    path: "/assets/desite/social/youtube-views.jpg",
    text: "Screenshot placeholder focused on YouTube video views.",
  },
];

export const featuredTestimonials = [
  "Placeholder review about dependable performance and fast setup.",
  "Placeholder review about lower hauling costs and better use of material.",
  "Placeholder review about service, resale value, and production gains.",
];

export const loadoutImages = [
  "/assets/desite/loadouts/loadout-1.jpg",
  "/assets/desite/loadouts/loadout-2.jpg",
  "/assets/desite/loadouts/loadout-3.jpg",
  "/assets/desite/loadouts/loadout-4.jpg",
];

export const downloadAssets = [
  {
    name: "Logos PNG and SVG",
    description: "Download DeSite logo files for media and dealer use.",
    fileType: "ZIP",
    href: "/downloads/desite-logo-pack.zip",
  },
  {
    name: "Product Photos",
    description: "Placeholder folder for real product images.",
    fileType: "ZIP",
    href: "/downloads/desite-product-photos.zip",
  },
  {
    name: "Lifestyle Photos",
    description: "Placeholder folder for real jobsite and customer images.",
    fileType: "ZIP",
    href: "/downloads/desite-lifestyle-photos.zip",
  },
  {
    name: "Spec Sheets",
    description: "Download product spec sheets in one place.",
    fileType: "ZIP",
    href: "/downloads/desite-spec-sheets.zip",
  },
  {
    name: "Videos and B-roll",
    description: "Placeholder package for demos, b-roll, and field footage.",
    fileType: "ZIP",
    href: "/downloads/desite-broll.zip",
  },
  {
    name: "Brand Guidelines",
    description: "Placeholder PDF for DeSite brand rules and media use.",
    fileType: "PDF",
    href: "/downloads/desite-brand-guidelines.pdf",
  },
];
