// Wedding Details Configuration for Safwan & Amina

export const weddingData = {
  // Couple Names
  groom: {
    fullName: "Safwan Kakkarakandy",
    shortName: "Safwan",
    father: "Mr. Noushad P",
    mother: "Mrs. Fousiya K",
    parents: "Son of Mr. Noushad P & Mrs. Fousiya K",
    residenceName: "Foujas",
    address: "Foujas, J.T Road, Thalassery, Saidarpally",
    city: "Thalassery",
  },
  bride: {
    fullName: "Amina Nafas",
    shortName: "Amina",
    father: "Mr. Mohammed Nafas RM",
    mother: "Mrs. Shabana Nafas",
    parents: "Daughter of Mr. Mohammed Nafas RM & Mrs. Shabana Nafas",
    residenceName: "AAMI",
    address: "AAMI, Saidarpally, Behind Marble India, Thalassery",
    city: "Thalassery",
  },
  initials: "S ♡ A",

  // Countdown target (Nikkah: Dec 26, 2026 04:30 PM IST)
  eventDateISO: "2026-12-26T16:30:00+05:30",

  // Date details
  dateFormatted: {
    day: "26 & 27",
    dayNikkah: "26",
    dayReception: "27",
    month: "DEC",
    monthFull: "DECEMBER",
    year: "2026",
    weekday: "SAT & SUN",
    timeBadge: "DEC 2026",
    fullDateString: "26th & 27th December 2026",
  },

  // Events
  events: [
    {
      id: "nikkah",
      title: "Nikkah Ceremony",
      date: "Saturday, 26 December 2026",
      time: "04:30 PM",
      venue: "(FOUJAS)",
      address: "J.T ROAD, SAIDARPALLY, THALASSERY",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Foujas%2C+J.T+Road%2C+Thalassery%2C+Saidarpally",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikkah:+Safwan+%26+Amina&dates=20261226T110000Z/20261226T140000Z&details=You+are+warmly+invited+to+celebrate+the+Nikkah+of+Safwan+Kakkarakandy+%26+Amina+Nafas.&location=Foujas,+J.T+Road,+Thalassery,+Saidarpally",
    },
    {
      id: "reception",
      title: "Wedding Reception",
      date: "Sunday, 27 December 2026",
      time: "12:00 PM – 03:00 PM",
      venue: "(FOUJAS)",
      address: "J.T ROAD, SAIDARPALLY, THALASSERY",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Foujas%2C+J.T+Road%2C+Thalassery%2C+Saidarpally",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception:+Safwan+%26+Amina&dates=20261227T063000Z/20261227T093000Z&details=You+are+warmly+invited+to+celebrate+the+Wedding+Reception+of+Safwan+Kakkarakandy+%26+Amina+Nafas.&location=Foujas,+J.T+Road,+Thalassery,+Saidarpally",
    },
  ],

  // Addresses
  addresses: {
    groom: {
      title: "Groom's Residence",
      name: "(FOUJAS)",
      details: "J.T ROAD, SAIDARPALLY, THALASSERY",
      mapQuery: "Foujas, J.T Road, Thalassery, Saidarpally",
    },
    bride: {
      title: "Bride's Residence",
      name: "AAMI",
      details: "Saidarpally, Behind Marble India, Thalassery",
      mapQuery: "Saidarpally, Thalassery",
    },
  },

  // Contact Numbers
  contacts: [
    { label: "Phone", number: "9074852853", display: "+91 90748 52853" },
    { label: "Phone", number: "8089270055", display: "+91 80892 70055" },
  ],

  // Venue summary for hero/envelope
  venueSummary: {
    name: "(FOUJAS)",
    cityLine: "J.T ROAD, SAIDARPALLY, THALASSERY",
    shortVenue: "(FOUJAS), THALASSERY",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Foujas%2C+J.T+Road%2C+Thalassery%2C+Saidarpally",
  },

  // Media
  media: {
    couplePhoto: "/assets/couple.jpg",
    petalImage: "/assets/petal.png",
    waxSealImage: "/assets/seal.png",
    audioTrack: "/audio/wedding-invitation.mp3",
  },

  // Sacred Verse
  sacredCovenant: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    english: "“And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them, and He placed between you affection and mercy.”",
    source: "— Surah Ar-Rum (30:21)",
  },

  // Closing Dua
  closingDua: {
    arabic: "بَارَكَ ٱللَّٰهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    english: "“May Allah bless you both, shower His blessings upon you, and unite you in goodness.”",
    subtext: "Your presence and prayers will make our celebration truly blessed.",
  },

  // Initial wishes
  initialWishes: [
    {
      id: "w1",
      guest_name: "Family & Well-Wishers",
      message: "May Allah bless Safwan and Amina with endless happiness, love, harmony, and barakah in their married life. Baarakallaahu lakuma!",
    },
    {
      id: "w2",
      guest_name: "Friends & Dear Ones",
      message: "Heartiest congratulations to dearest Safwan & Amina on your Nikkah! Wishing you both a beautiful journey together.",
    },
  ],
};
