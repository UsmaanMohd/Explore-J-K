export const placesData = [
  {
    _id: "1",
    name: 'Dal Lake',
    tagline: 'The Crown Jewel of Srinagar',
    rating: 4.8,
    description: "Srinagar's iconic jewel — a vast shimmering lake covering 18 sq km, dotted with houseboats and shikaras. The lake is framed by the majestic Zabarwan mountain range and offers spectacular reflection of the peaks in its calm waters. Floating gardens, known as 'Rad', yield vegetables like tomatoes and cucumbers.",
    region: 'Kashmir Valley',
    bestSeason: ['Spring', 'Summer'],
    distanceFromSrinagar: '0 km (In City)',
    travelTime: '15 mins',
    temperature: '10°C to 25°C',
    network: 'Excellent (Jio, Airtel 5G)',
    whyVisit: [
      'Experience living on water in a traditional carved wooden houseboat.',
      'Shop for authentic Kashmiri crafts at the vibrant early morning floating markets.',
      'Witness stunning sunset colors reflecting off the Zabarwan mountains on a Shikara ride.'
    ],
    budgetTiers: { budget: 1500, mid: 4000, luxury: 15000 },
    images: [
      'https://loremflickr.com/1200/800/lake,shikara,kashmir?lock=11',
      'https://loremflickr.com/1200/800/houseboat,water?lock=12',
      'https://loremflickr.com/1200/800/lake,sunset,mountain?lock=13',
      'https://loremflickr.com/1200/800/shikara,kashmir?lock=14'
    ],
    activities: ['Houseboat stays', 'Shikara rides', 'Floating market'],
    nearbyPlacesRaw: ['Mughal Gardens', 'Shankaracharya Temple'],
    nearbyPlacesCards: [
      { name: 'Mughal Gardens', distance: '5 km', desc: 'Terraced lawns and fountains.', image: 'https://loremflickr.com/400/300/garden,kashmir?lock=101' },
      { name: 'Shankaracharya Temple', distance: '8 km', desc: 'Ancient hilltop temple.', image: 'https://loremflickr.com/400/300/temple,hill?lock=102' }
    ],
    altitude: '1,585m',
    type: 'Lake',
    coordinates: { lat: 34.1085, lng: 74.8721 }
  },
  {
    _id: "2",
    name: 'Gulmarg',
    tagline: 'The Ultimate Snow Paradise',
    rating: 4.9,
    description: "The 'Meadow of Flowers' transforms into Asia's finest ski resort each winter. Heavily carpeted in snow, it holds the record for massive snowfall offering epic powder snow for snowboarding and skiing. The Gulmarg Gondola is one of the highest cable cars globally, lifting you above the breathtaking snow-capped pine forests.",
    region: 'Kashmir Valley',
    bestSeason: ['Winter', 'Summer'],
    distanceFromSrinagar: '50 km',
    travelTime: '1.5 Hours',
    temperature: '-4°C to 15°C',
    network: 'Good (Airtel, Jio)',
    whyVisit: [
      'Ride the Gulmarg Gondola, the highest cable car in Asia offering views of Nanga Parbat.',
      'World-class powdery slopes perfect for extreme skiing and snowboarding.',
      'Surrounded by majestic towering pine trees creating a mystical winter wonderland.'
    ],
    budgetTiers: { budget: 2500, mid: 6000, luxury: 25000 },
    images: [
      'https://loremflickr.com/1200/800/snow,ski,mountain?lock=21',
      'https://loremflickr.com/1200/800/winter,pine,forest?lock=22',
      'https://loremflickr.com/1200/800/snow,landscape?lock=23',
      'https://loremflickr.com/1200/800/gondola,snow?lock=24'
    ],
    activities: ['Skiing', 'Gondola ride', 'Golf course'],
    nearbyPlacesRaw: ['Tangmarg', 'Khilanmarg'],
    nearbyPlacesCards: [
      { name: 'Tangmarg', distance: '13 km', desc: 'Pine-scented picturesque stopover.', image: 'https://loremflickr.com/400/300/pine,road?lock=103' },
      { name: 'Khilanmarg', distance: '6 km', desc: 'Short trek for panoramic Himalayan views.', image: 'https://loremflickr.com/400/300/mountain,view?lock=104' }
    ],
    altitude: '2,650m',
    type: 'Hill Station',
    coordinates: { lat: 34.0484, lng: 74.3805 }
  },
  {
    _id: "3",
    name: 'Pahalgam',
    tagline: 'The Valley of Shepherds',
    rating: 4.8,
    description: "The 'Valley of Shepherds' sits at the confluence of the Lidder and Sheshnag rivers. It is blanketed by dense alpine and coniferous forests! Trek through the majestic green valleys to see untouched glacial lakes.",
    region: 'Kashmir Valley',
    bestSeason: ['Summer'],
    distanceFromSrinagar: '90 km',
    travelTime: '2.5 Hours',
    temperature: '5°C to 20°C',
    network: 'Moderate (Jio works best)',
    whyVisit: [
      'It acts as the primary base camp for the holy Amarnath Yatra pilgrimage.',
      'Explore untouched glacial lakes like Tulian Lake via scenic trekking routes.',
      'Lidder river offers thrilling white-water rafting and excellent trout fishing.'
    ],
    budgetTiers: { budget: 2000, mid: 4500, luxury: 15000 },
    images: [
      'https://loremflickr.com/1200/800/valley,forest,river?lock=31',
      'https://loremflickr.com/1200/800/pine,trees,mountain?lock=32',
      'https://loremflickr.com/1200/800/meadow,kashmir?lock=33'
    ],
    activities: ['Amarnath base', 'Trekking', 'Horse riding'],
    nearbyPlacesRaw: ['Betaab Valley', 'Aru Valley'],
    nearbyPlacesCards: [
      { name: 'Betaab Valley', distance: '7 km', desc: 'Cinematic valley of Bollywood fame.', image: 'https://loremflickr.com/400/300/green,valley?lock=105' },
      { name: 'Aru Valley', distance: '12 km', desc: 'Remote meadows and trekking hub.', image: 'https://loremflickr.com/400/300/meadow,horse?lock=106' }
    ],
    altitude: '2,130m',
    type: 'Valley',
    coordinates: { lat: 34.0150, lng: 75.3268 }
  },
  {
    _id: "4",
    name: 'Sonmarg',
    tagline: 'The Meadow of Gold',
    rating: 4.7,
    description: "The 'Meadow of Gold' marks the gateway to Ladakh. Surrounded by glaciers like the massive Thajiwas Glacier where you can literally slide on snow even in peak summer! Lush grasslands give way to towering snowy peaks.",
    region: 'Kashmir Valley',
    bestSeason: ['Summer'],
    distanceFromSrinagar: '80 km',
    travelTime: '2.5 Hours',
    temperature: '0°C to 18°C',
    network: 'Poor (BSNL/Jio limited)',
    whyVisit: [
      'Spectacular views of massive glaciers immediately accessible from the town.',
      'Serves as the vital starting point for the legendary drive into Ladakh.',
      'Features high-altitude trekking routes to the Great Lakes of Kashmir.'
    ],
    budgetTiers: { budget: 2000, mid: 5000, luxury: 12000 },
    images: [
      'https://loremflickr.com/1200/800/glacier,mountain?lock=41',
      'https://loremflickr.com/1200/800/snow,peaks,gold?lock=42',
      'https://loremflickr.com/1200/800/valley,river?lock=43'
    ],
    activities: ['Thajiwas Glacier', 'Trekking', 'Pony rides'],
    nearbyPlacesRaw: ['Zoji La Pass', 'Baltal'],
    nearbyPlacesCards: [
      { name: 'Zoji La Pass', distance: '24 km', desc: 'Thrilling high-altitude mountain pass.', image: 'https://loremflickr.com/400/300/road,mountain?lock=107' },
      { name: 'Baltal', distance: '15 km', desc: 'Alternative base camp for Amarnath.', image: 'https://loremflickr.com/400/300/camp,tent?lock=108' }
    ],
    altitude: '2,740m',
    type: 'Valley',
    coordinates: { lat: 34.3023, lng: 75.2936 }
  },
  {
    _id: "5",
    name: 'Pangong Lake',
    tagline: 'The Surreal Salt Lake',
    rating: 4.9,
    description: "An extraordinary 134 km long lake straddling India and China. Famous for its ever-changing shades of deep blue, cyan, and teal. It freezes completely in winters despite containing saline water.",
    region: 'Ladakh',
    bestSeason: ['Summer'],
    distanceFromSrinagar: '600+ km',
    travelTime: '2 Days via Leh',
    temperature: '-10°C to 15°C',
    network: 'Very Poor (BSNL only at points)',
    whyVisit: [
      'Witness unbelievable color shifting properties of the water under the sun.',
      'Epic camping experiences right on the shores of the vast lake.',
      'Astrophotography paradise with zero light pollution.'
    ],
    budgetTiers: { budget: 3000, mid: 6000, luxury: 15000 },
    images: [
      'https://loremflickr.com/1200/800/blue,lake,mountain?lock=51',
      'https://loremflickr.com/1200/800/himalayas,water?lock=52',
      'https://loremflickr.com/1200/800/camping,lake?lock=53'
    ],
    activities: ['Camping', 'Photography', 'Stargazing'],
    nearbyPlacesRaw: ['Spangmik', 'Leh'],
    nearbyPlacesCards: [
      { name: 'Spangmik', distance: '0 km', desc: 'Lakeside settlement.', image: 'https://loremflickr.com/400/300/village,himalayas?lock=109' }
    ],
    altitude: '4,350m',
    type: 'Lake',
    coordinates: { lat: 33.7291, lng: 78.8967 }
  },
  {
    _id: "6",
    name: 'Leh',
    tagline: 'The Heart of Ladakh',
    rating: 4.8,
    description: "The ancient capital of the Ladakh kingdom, ringed by mountains. Known for its monasteries and distinct culture. An oasis of green fields surrounded by bare, rugged desert mountains.",
    region: 'Ladakh',
    bestSeason: ['Summer'],
    distanceFromSrinagar: '420 km',
    travelTime: '10-12 Hours',
    temperature: '5°C to 25°C',
    network: 'Good (Airtel, Jio postpaid)',
    whyVisit: [
      'Immerse in incredibly preserved ancient Buddhist monasteries.',
      'Experience the unique fusion of high-altitude desert and alpine lakes.',
      'A haven for adventure bikers traversing the highest motorable roads.'
    ],
    budgetTiers: { budget: 1500, mid: 3500, luxury: 10000 },
    images: [
      'https://loremflickr.com/1200/800/leh,ladakh,mountain?lock=61',
      'https://loremflickr.com/1200/800/monastery,himalayas?lock=62',
      'https://loremflickr.com/1200/800/desert,mountain?lock=63'
    ],
    activities: ['Monastery visits', 'Biking', 'Cafes'],
    nearbyPlacesRaw: ['Shanti Stupa', 'Leh Palace', 'Khardung La'],
    nearbyPlacesCards: [
      { name: 'Shanti Stupa', distance: '5 km', desc: 'White-domed sunset viewpoint.', image: 'https://loremflickr.com/400/300/stupa,sunset?lock=111' },
      { name: 'Khardung La', distance: '39 km', desc: 'Highest motorable pass.', image: 'https://loremflickr.com/400/300/mountain,pass?lock=112' }
    ],
    altitude: '3,524m',
    type: 'City',
    coordinates: { lat: 34.1526, lng: 77.5771 }
  },
  {
    _id: "7",
    name: 'Mata Vaishno Devi (Katra)',
    tagline: 'The Divine Pilgrimage',
    rating: 4.9,
    description: "One of India's holiest and most revered Hindu shrines. Located in the majestic Trikuta Hills of the Katra region, pilgrims trek approx 12-14 km offering prayers to the 'Mata Rani'.",
    region: 'Jammu Region',
    bestSeason: ['All Year'],
    distanceFromSrinagar: '250 km',
    travelTime: '7 Hours',
    temperature: '10°C to 30°C',
    network: 'Excellent',
    whyVisit: [
      'Seek spiritual blessings at one of India’s most powerful divine temples.',
      'Experience the incredible energy of millions of devoted pilgrims.',
      'Trek through scenic hills with fully paved pathways and modern amenities.'
    ],
    budgetTiers: { budget: 1000, mid: 2500, luxury: 8000 },
    images: [
      'https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/12/Best-Time-To-Visit-Mata-Vaishno-Devi-Temple-696x425.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/Vaishno_Devi_Bhawan.jpg',
      'https://loremflickr.com/1200/800/hindu,temple,mountain?lock=71',
      'https://loremflickr.com/1200/800/pilgrimage,himalayas?lock=72'
    ],
    activities: ['Pilgrimage', 'Trekking', 'Helicopter service'],
    nearbyPlacesRaw: ['Katra Base Camp', 'Bhairavnath Temple'],
    nearbyPlacesCards: [
      { name: 'Bhairavnath Temple', distance: '2 km (up)', desc: 'Final stop of the pilgrimage.', image: 'https://loremflickr.com/400/300/temple,snow?lock=113' }
    ],
    altitude: '1,560m',
    type: 'Shrine',
    coordinates: { lat: 33.0287, lng: 74.9482 }
  },
  {
    _id: "8",
    name: 'Betaab Valley',
    tagline: 'Cinematic Perfection',
    rating: 4.7,
    description: "Named after a famous Bollywood blockbuster, this jaw-dropping valley is lined with towering Deodar trees and a crystal-clear stream. Ideal for camping and witnessing true Kashmiri beauty away from city noise.",
    region: 'Kashmir Valley',
    bestSeason: ['Summer'],
    distanceFromSrinagar: '97 km',
    travelTime: '2.8 Hours',
    temperature: '8°C to 22°C',
    network: 'Moderate',
    whyVisit: [
      'Lush green meadows perfect for family picnics and photography.',
      'The pristine Lidder river flows brilliantly through the valley center.',
      'Surrounded by untouched snow-covered mountain peaks.'
    ],
    budgetTiers: { budget: 1000, mid: 2500, luxury: 6000 },
    images: [
      'https://loremflickr.com/1200/800/river,valley,kashmir?lock=81',
      'https://loremflickr.com/1200/800/meadow,pine?lock=82'
    ],
    activities: ['Picnic', 'Photography', 'Nature Walk'],
    nearbyPlacesRaw: ['Pahalgam', 'Chandanwari'],
    nearbyPlacesCards: [
      { name: 'Pahalgam', distance: '7 km', desc: 'Main valley hub.', image: 'https://loremflickr.com/400/300/green,valley?lock=114' }
    ],
    altitude: '2,393m',
    type: 'Valley',
    coordinates: { lat: 34.0203, lng: 75.3524 }
  },
  {
    _id: "9",
    name: 'Patnitop & Nathatop',
    tagline: 'The Pine Covered Plateau',
    rating: 4.6,
    description: "A scenic plateau surrounded by pine and deodar forests. Offers excellent views of the Chenab basin and the Pir Panjal range. In winters, the slopes become a hotspot for snow games, while summers offer unparalleled paragliding at Nathatop.",
    region: 'Jammu Region',
    bestSeason: ['Winter', 'Summer'],
    distanceFromSrinagar: '180 km',
    travelTime: '5 Hours',
    temperature: '0°C to 25°C',
    network: 'Good',
    whyVisit: [
      'One of the best spots for paragliding at Nathatop with deep valley views.',
      'Perfect peaceful weekend getaway nestled within dense pine forests.',
      'Gondola rides available connecting nearby viewpoints.'
    ],
    budgetTiers: { budget: 1500, mid: 3000, luxury: 8000 },
    images: [
      'https://loremflickr.com/1200/800/pine,forest,snow?lock=91',
      'https://loremflickr.com/1200/800/mountain,view,paragliding?lock=92'
    ],
    activities: ['Paragliding', 'Camping', 'Trekking'],
    nearbyPlacesRaw: ['Sanasar', 'Mantalai'],
    nearbyPlacesCards: [
      { name: 'Sanasar', distance: '20 km', desc: 'Mini Gulmarg, great for golf.', image: 'https://loremflickr.com/400/300/golf,mountain?lock=115' }
    ],
    altitude: '2,024m',
    type: 'Hill Station',
    coordinates: { lat: 33.0858, lng: 75.3262 }
  },
  {
    _id: "10",
    name: 'Wular Lake & Manasbal',
    tagline: 'Asia’s Largest Freshwater Reserves',
    rating: 4.5,
    description: "Wular Lake is one of the largest fresh water lakes in Asia, while Manasbal is famous for its lotus blossoms. These hidden gems are incredibly peaceful, crowd-free, and an absolute paradise for photography.",
    region: 'Kashmir Valley',
    bestSeason: ['Summer'],
    distanceFromSrinagar: '45 km',
    travelTime: '1.5 Hours',
    temperature: '10°C to 28°C',
    network: 'Good',
    whyVisit: [
      'Observe magnificent flocks of migratory birds in completely untamed habitats.',
      'Marvel at vast fields of blooming pink lotus flowers at Manasbal.',
      'Enjoy complete silence and tranquility, completely off the beaten tourist path.'
    ],
    budgetTiers: { budget: 1000, mid: 2500, luxury: 5000 },
    images: [
      'https://loremflickr.com/1200/800/lake,birds,kashmir?lock=101',
      'https://loremflickr.com/1200/800/lotus,lake?lock=102'
    ],
    activities: ['Photography', 'Bird Watching', 'Boating'],
    nearbyPlacesRaw: ['Bandipora', 'Safapora'],
    nearbyPlacesCards: [
      { name: 'Bandipora', distance: '12 km', desc: 'Town flanking the grand lake.', image: 'https://loremflickr.com/400/300/village,water?lock=116' }
    ],
    altitude: '1,580m',
    type: 'Lake',
    coordinates: { lat: 34.3644, lng: 74.6094 }
  },
  {
    _id: "11",
    name: 'Doodhpathri',
    tagline: 'Mini Switzerland of India',
    rating: 4.7,
    description: "The 'Valley of Milk' is a breathtakingly pristine bowl-shaped valley, heavily underrated and isolated. It boasts endless green meadows dotted with daisies and crystal-clear mountain streams.",
    region: 'Kashmir Valley',
    bestSeason: ['Summer'],
    distanceFromSrinagar: '42 km',
    travelTime: '1.5 Hours',
    temperature: '5°C to 22°C',
    network: 'Poor',
    whyVisit: [
      'Walk on endless velvet green meadows completely undisturbed by city life.',
      'Camp right beside pristine streams offering the freshest mountain water.',
      'One of the most photogenic locations matching European alpine landscapes.'
    ],
    budgetTiers: { budget: 1000, mid: 2000, luxury: 4000 },
    images: [
      'https://loremflickr.com/1200/800/switzerland,meadow,kashmir?lock=111',
      'https://loremflickr.com/1200/800/green,valley,stream?lock=112'
    ],
    activities: ['Camping', 'Pony Rides', 'Nature Walk'],
    nearbyPlacesRaw: ['Yusmarg'],
    nearbyPlacesCards: [
      { name: 'Yusmarg', distance: '25 km', desc: 'Another gorgeous hidden meadow base.', image: 'https://loremflickr.com/400/300/pine,meadow?lock=117' }
    ],
    altitude: '2,730m',
    type: 'Valley',
    coordinates: { lat: 33.8643, lng: 74.5623 }
  }
];
