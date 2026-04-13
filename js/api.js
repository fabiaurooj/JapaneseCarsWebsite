// Sample car data (in production, this would come from a database)
const carsData = [
    {
        id: 1,
        brand: 'Toyota',
        model: 'Land Cruiser 300',
        year: 2024,
        price: 89500,
        mileage: 6800,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        color: 'Black',
        interior: 'Beige Leather',
        engine: '3.5L Twin-Turbo V6',
        horsepower: 409,
        featured: true,
        image: 'images/cars/toyota-lc300-front.jpg',
        galleryImages: [
            'images/cars/toyota-lc300-front.jpg',
            'images/cars/toyota-lc300-rear.jpg',
            'images/cars/toyota-lc300-interior-wide.jpg',
            'images/cars/toyota-lc300-interior-cockpit.jpg'
        ],
        description: 'Premium Toyota Land Cruiser 300 with powerful twin-turbo performance, iconic road presence, and spacious luxury cabin for family and long-distance travel.',
        features: ['Multi-Terrain Capability', '360 Camera', 'Executive 7-Seater Cabin', 'Adaptive Cruise Control', 'Premium JBL Audio']
    },
    {
        id: 2,
        brand: 'BMW',
        model: 'i7',
        year: 2023,
        price: 124500,
        mileage: 8400,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Electric',
        color: 'Mineral White',
        interior: 'Light Grey Leather',
        engine: 'Dual Electric Motor',
        horsepower: 536,
        featured: true,
        image: 'images/cars/bmw-i7-front.avif',
        galleryImages: [
            'images/cars/bmw-i7-front.avif',
            'images/cars/bmw-i7-interior-1.jpg',
            'images/cars/bmw-i7-interior-2.jpg',
            'images/cars/bmw-i7-interior-3.jpg'
        ],
        description: 'Luxury all-electric BMW i7 with executive comfort, advanced digital cockpit, and flagship long-wheelbase refinement.',
        features: ['BMW Curved Display', 'Executive Rear Comfort', 'Premium Ambient Lighting', 'Advanced Driver Assistance', 'Electric Performance']
    },
    {
        id: 3,
        brand: 'Lexus',
        model: 'LX 600',
        year: 2024,
        price: 129500,
        mileage: 7800,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        color: 'White',
        interior: 'Red / Black Leather',
        engine: '3.5L Twin-Turbo V6',
        horsepower: 409,
        featured: true,
        image: 'images/cars/lexus-lx600-front.jpg',
        galleryImages: [
            'images/cars/lexus-lx600-front.jpg',
            'images/cars/lexus-lx600-interior-1.jpg',
            'images/cars/lexus-lx600-interior-2.jpg',
            'images/cars/lexus-lx600-interior-3.jpg'
        ],
        description: 'Flagship Lexus LX 600 F SPORT with commanding SUV presence, refined twin-turbo power, and premium red-black luxury interior.',
        features: ['F SPORT Styling', 'Multi-Terrain Select', 'Premium Leather Cabin', 'Advanced Driver Assistance', '360 Camera']
    },
    {
        id: 4,
        brand: 'Nissan',
        model: 'GT-R NISMO',
        year: 2024,
        price: 212000,
        mileage: 3200,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        color: 'Pearl White',
        interior: 'Black Leather',
        engine: '3.8L Twin-Turbo V6',
        horsepower: 600,
        featured: true,
        image: 'images/cars/nissan-gtr-nismo-front.webp',
        galleryImages: [
            'images/cars/nissan-gtr-nismo-front.webp',
            'images/cars/nissan-gtr-nismo-front.avif',
            'images/cars/nissan-gtr-nismo-side.avif'
        ],
        description: 'Track-focused Nissan GT-R NISMO with race-derived aerodynamics, sharper chassis tuning, black interior trim, and flagship supercar performance.',
        features: ['NISMO Aero Package', 'Brembo Brakes', 'Black Sport Interior', 'Performance AWD', 'Launch Control']
    },
    {
        id: 6000,
        brand: 'Toyota',
        model: 'Century SUV',
        year: 2024,
        price: 168000,
        mileage: 1200,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        color: 'Grey / Beige',
        interior: 'Beige Leather',
        engine: '3.5L V6 Hybrid',
        horsepower: 406,
        featured: true,
        image: 'images/cars/toyota-century-exterior.jpg',
        galleryImages: [
            'images/cars/toyota-century-exterior.jpg',
            'images/cars/toyota-century-dashboard.jpg',
            'images/cars/toyota-century-rear-seat.jpg',
            'images/cars/toyota-century-cabin.jpg'
        ],
        description: 'Ultra-premium Toyota Century SUV in elegant graphite grey with chauffeur-level comfort, refined hybrid power, and flagship Japanese craftsmanship throughout the cabin.',
        features: ['Executive Rear Seats', 'Rear Entertainment Displays', 'Premium Beige Leather Interior', 'Advanced Driver Assistance', 'Hybrid Efficiency']
    },
    {
        id: 5,
        brand: 'Subaru',
        model: 'Outback',
        image: 'images/cars/subaru-outback.png'
    },
    {
        id: 374,
        brand: 'Subaru',
        model: 'LEVORG',
        image: 'images/cars/subaru-levorg.avif'
    },
    {
        id: 375,
        brand: 'Subaru',
        model: 'BRZ',
        image: 'images/cars/subaru-brz.png'
    },
    {
        id: 376,
        brand: 'Subaru',
        model: 'FORESTER',
        image: 'images/cars/subaru-forester.png'
    },
    {
        id: 377,
        brand: 'Subaru',
        model: 'IMPREZA G4',
        image: 'images/cars/subaru-impreza-g4.jpg'
    },
    {
        id: 378,
        brand: 'Subaru',
        model: 'XV HYBRID',
        image: 'images/cars/subaru-xv-hybrid.png'
    },
    {
        id: 379,
        brand: 'Subaru',
        model: 'EXIGA',
        image: 'images/cars/subaru-exiga.webp'
    },
    {
        id: 380,
        brand: 'Subaru',
        model: 'EXIGA CROSSOVER7',
        image: 'images/cars/subaru-exiga-crossover-7.jpg'
    },
    {
        id: 381,
        brand: 'Subaru',
        model: 'DEX',
        image: 'images/cars/subaru-dex.jpg'
    },
    {
        id: 382,
        brand: 'Subaru',
        model: 'DIAS WAGON',
        image: 'images/cars/subaru-dias-wagon.jpg'
    },
    {
        id: 383,
        brand: 'Subaru',
        model: 'DOMINGO',
        image: 'images/cars/subaru-domingo.jpg'
    },
    {
        id: 384,
        brand: 'Subaru',
        model: 'SUBARU 360',
        image: 'images/cars/subaru-360.webp'
    },
    {
        id: 385,
        brand: 'Subaru',
        model: 'IMPREZA H/B',
        image: 'images/cars/subaru-impreza-hb.png'
    },
    {
        id: 386,
        brand: 'Subaru',
        model: 'IMPREZA SPORTS',
        image: 'images/cars/subaru-impreza-sports.webp'
    },
    {
        id: 387,
        brand: 'Subaru',
        model: 'IMPREZA SPORTS W',
        image: 'images/cars/subaru-impreza-sports-w.jpg'
    },
    {
        id: 388,
        brand: 'Subaru',
        model: 'JUSTY',
        image: 'images/cars/subaru-justy.jpg'
    },
    {
        id: 389,
        brand: 'Subaru',
        model: 'LEGACY B4',
        image: 'images/cars/subaru-legacy-b4.jpg'
    },
    {
        id: 390,
        brand: 'Subaru',
        model: 'LEGACY OUTBACK',
        image: 'images/cars/subaru-legacy-outback.webp'
    },
    {
        id: 391,
        brand: 'Subaru',
        model: 'LEGACY W',
        image: 'images/cars/subaru-legacy-w.webp'
    },
    {
        id: 392,
        brand: 'Subaru',
        model: 'PLEO PLUS',
        image: 'images/cars/subaru-pleo-plus.jpg'
    },
    {
        id: 393,
        brand: 'Subaru',
        model: 'R1',
        image: 'images/cars/subaru-r1.jpg'
    },
    {
        id: 394,
        brand: 'Subaru',
        model: 'Sambar Dias',
        image: 'images/cars/subaru-sambar-dias.jpg'
    },
    {
        id: 395,
        brand: 'Subaru',
        model: 'SAMBAR DIAS V',
        image: 'images/cars/subaru-sambar-dias-v.jpg'
    },
    {
        id: 396,
        brand: 'Subaru',
        model: 'SAMBAR T',
        image: 'images/cars/subaru-sambar-t.webp'
    },
    {
        id: 397,
        brand: 'Subaru',
        model: 'SAMBAR V',
        image: 'images/cars/subaru-sambar-v.jpg'
    },
    {
        id: 398,
        brand: 'Subaru',
        model: 'STELLA',
        image: 'images/cars/subaru-stella.jpg'
    },
    {
        id: 399,
        brand: 'Subaru',
        model: 'STELLA CUSTOM',
        image: 'images/cars/subaru-stella-custom.png'
    },
    {
        id: 400,
        brand: 'Subaru',
        model: 'TREZIA',
        image: 'images/cars/subaru-trezia.jpg'
    },
    {
        id: 401,
        brand: 'Subaru',
        model: 'XV',
        image: 'images/cars/subaru-xv.webp'
    },
    {
        id: 402,
        brand: 'Suzuki',
        model: 'CERVO',
        image: 'images/cars/suzuki-cervo.avif'
    },
    {
        id: 403,
        brand: 'Suzuki',
        model: 'LANDY',
        image: 'images/cars/suzuki-landy.jpg'
    },
    {
        id: 404,
        brand: 'Suzuki',
        model: 'MR WAGON',
        image: 'images/cars/suzuki-mr-wagon.jpg'
    },
    {
        id: 405,
        brand: 'Suzuki',
        model: 'MR WAGON WIT',
        image: 'images/cars/suzuki-mr-wagon-wit.jpg'
    },
    {
        id: 406,
        brand: 'Suzuki',
        model: 'PALETTE',
        image: 'images/cars/suzuki-palette.jpg'
    },
    {
        id: 407,
        brand: 'Suzuki',
        model: 'PALETTE SW',
        image: 'images/cars/suzuki-palette-sw.webp'
    },
    {
        id: 408,
        brand: 'Suzuki',
        model: 'SOLIO',
        image: 'images/cars/suzuki-solio.jpg'
    },
    {
        id: 409,
        brand: 'Suzuki',
        model: 'SOLIO BANDIT',
        image: 'images/cars/suzuki-solio-bandit.jpg'
    },
    {
        id: 410,
        brand: 'Suzuki',
        model: 'SPACIA',
        image: 'images/cars/suzuki-spacia.jpg'
    },
    {
        id: 411,
        brand: 'Suzuki',
        model: 'SPACIA CUSTOM',
        image: 'images/cars/suzuki-spacia-custom.jpg'
    },
    {
        id: 412,
        brand: 'Suzuki',
        model: 'SPACIA CUSTOM Z',
        image: 'images/cars/suzuki-spacia-custom-z.jpg'
    },
    {
        id: 413,
        brand: 'Suzuki',
        model: 'KEI',
        image: 'images/cars/suzuki-kei.jpg'
    },
    {
        id: 414,
        brand: 'Suzuki',
        model: 'JIMNY WIDE',
        image: 'images/cars/suzuki-jimny-wide.jpg'
    },
    {
        id: 415,
        brand: 'Suzuki',
        model: 'SPLASH',
        image: 'images/cars/suzuki-splash.jpg'
    },
    {
        id: 416,
        brand: 'Suzuki',
        model: 'SUPER CARRY',
        image: 'images/cars/suzuki-super-carry.jpg'
    },
    {
        id: 417,
        brand: 'Suzuki',
        model: 'SWIFT',
        image: 'images/cars/suzuki-swift.jpg'
    },
    {
        id: 418,
        brand: 'Suzuki',
        model: 'WAGON R',
        image: 'images/cars/suzuki-wagon-r.jpg'
    },
    {
        id: 419,
        brand: 'Suzuki',
        model: 'WAGON R STINGRAY',
        image: 'images/cars/suzuki-wagon-r-stingray.jpg'
    },
    {
        id: 420,
        brand: 'Suzuki',
        model: 'WAGON R SMILE',
        image: 'images/cars/suzuki-wagon-r-smile.jpg'
    },
    {
        id: 421,
        brand: 'Suzuki',
        model: 'XBEE',
        image: 'images/cars/suzuki-xbee.jpg'
    },
    {
        id: 422,
        brand: 'Suzuki',
        model: 'ALTO',
        image: 'images/cars/suzuki-alto.webp'
    },
    {
        id: 423,
        brand: 'Suzuki',
        model: 'ALTO ECO',
        image: 'images/cars/suzuki-alto-eco.webp'
    },
    {
        id: 424,
        brand: 'Suzuki',
        model: 'ALTO LAPIN',
        image: 'images/cars/suzuki-alto-lapin.webp'
    },
    {
        id: 425,
        brand: 'Suzuki',
        model: 'ALTO LAPIN CHOCOLATE',
        image: 'images/cars/suzuki-alto-lapin-chocolate.jpg'
    },
    {
        id: 426,
        brand: 'Suzuki',
        model: 'ALTO V',
        image: 'images/cars/suzuki-alto-v.webp'
    },
    {
        id: 427,
        brand: 'Suzuki',
        model: 'ALTO WORKS',
        image: 'images/cars/suzuki-alto-works.jpg'
    },
    {
        id: 428,
        brand: 'Suzuki',
        model: 'BALENO',
        image: 'images/cars/suzuki-baleno.jpg'
    },
    {
        id: 429,
        brand: 'Suzuki',
        model: 'CARRY T',
        image: 'images/cars/suzuki-carry-t.jpg'
    },
    {
        id: 430,
        brand: 'Suzuki',
        model: 'CHEVROLET CRUZE',
        image: 'images/cars/suzuki-chevrolet-cruze.jpg'
    },
    {
        id: 431,
        brand: 'Suzuki',
        model: 'CHEVROLET MW',
        image: 'images/cars/suzuki-chevrolet-mw.jpg'
    },
    {
        id: 432,
        brand: 'Suzuki',
        model: 'ESCUDO W',
        image: 'images/cars/suzuki-escudo-w.jpg'
    },
    {
        id: 433,
        brand: 'Suzuki',
        model: 'EVERY LANDY',
        image: 'images/cars/suzuki-every-landy.jpg'
    },
    {
        id: 434,
        brand: 'Suzuki',
        model: 'EVERY V',
        image: 'images/cars/suzuki-every-v.jpg'
    },
    {
        id: 435,
        brand: 'Suzuki',
        model: 'EVERY W',
        image: 'images/cars/suzuki-every-w.jpg'
    },
    {
        id: 436,
        brand: 'Suzuki',
        model: 'HUSTLER',
        image: 'images/cars/suzuki-hustler.jpg'
    },
    {
        id: 437,
        brand: 'Suzuki',
        model: 'IGNIS',
        image: 'images/cars/suzuki-ignis.webp'
    },
    {
        id: 438,
        brand: 'Suzuki',
        model: 'JIMNY NOMADE',
        image: 'images/cars/suzuki-jimny-nomade.jpg'
    },
    {
        id: 439,
        brand: 'Suzuki',
        model: 'JIMNY SIERRA',
        image: 'images/cars/suzuki-jimny-sierra.jpg'
    },
    {
        id: 440,
        brand: 'Suzuki',
        model: 'JIMNY W',
        image: 'images/cars/suzuki-jimny-w.jpg'
    },
    {
        id: 441,
        brand: 'Isuzu',
        model: '810',
        image: 'images/cars/isuzu-810.png'
    },
    {
        id: 442,
        brand: 'Isuzu',
        model: 'BIGHORN V',
        image: 'images/cars/isuzu-bighorn-v.webp'
    },
    {
        id: 443,
        brand: 'Isuzu',
        model: 'BIGHORN W',
        image: 'images/cars/isuzu-bighorn-w.webp'
    },
    {
        id: 444,
        brand: 'Isuzu',
        model: 'COMO V',
        image: 'images/cars/isuzu-como-v.jpg'
    },
    {
        id: 445,
        brand: 'Isuzu',
        model: 'COMO W',
        image: 'images/cars/isuzu-como-w.jpg'
    },
    {
        id: 446,
        brand: 'Isuzu',
        model: 'ELF T',
        image: 'images/cars/isuzu-elf-t.jpg'
    },
    {
        id: 447,
        brand: 'Isuzu',
        model: 'ELF V',
        image: 'images/cars/isuzu-elf-v.jpg'
    },
    {
        id: 448,
        brand: 'Isuzu',
        model: 'ERGA',
        image: 'images/cars/isuzu-erga.jpg'
    },
    {
        id: 449,
        brand: 'Isuzu',
        model: 'FARGO',
        image: 'images/cars/isuzu-fargo.jpg'
    },
    {
        id: 450,
        brand: 'Isuzu',
        model: 'FOWARD',
        image: 'images/cars/isuzu-foward.jpg'
    },
    {
        id: 451,
        brand: 'Isuzu',
        model: 'FOWARD JUSTON',
        image: 'images/cars/isuzu-foward.jpg'
    },
    {
        id: 452,
        brand: 'Isuzu',
        model: 'GIGA',
        image: 'images/cars/isuzu-giga.jpg'
    },
    {
        id: 453,
        brand: 'Isuzu',
        model: 'JOURNEY',
        image: 'images/cars/isuzu-journey.avif'
    },
    {
        id: 454,
        brand: 'Isuzu',
        model: 'RODEO',
        image: 'images/cars/isuzu-rodeo.webp'
    },
    {
        id: 455,
        brand: 'Lexus',
        model: 'CT',
        image: 'images/cars/lexus-ct.jpg'
    },
    {
        id: 456,
        brand: 'Lexus',
        model: 'ES',
        image: 'images/cars/lexus-es.jpg'
    },
    {
        id: 457,
        brand: 'Lexus',
        model: 'GS',
        image: 'images/cars/lexus-gs.jpg'
    },
    {
        id: 458,
        brand: 'Lexus',
        model: 'HS',
        image: 'images/cars/lexus-hs.jpg'
    },
    {
        id: 459,
        brand: 'Lexus',
        model: 'IS',
        image: 'images/cars/lexus-is.webp'
    },
    {
        id: 460,
        brand: 'Lexus',
        model: 'LS',
        image: 'images/cars/lexus-ls.webp'
    },
    {
        id: 461,
        brand: 'Lexus',
        model: 'LX',
        image: 'images/cars/lexus-lx.jpg'
    },
    {
        id: 462,
        brand: 'Lexus',
        model: 'NX',
        image: 'images/cars/lexus-nx.webp'
    },
    {
        id: 463,
        brand: 'Lexus',
        model: 'RX',
        image: 'images/cars/lexus-rx.png'
    },
    {
        id: 6,
        brand: 'Mitsubishi',
        model: 'Outlander',
        image: 'images/cars/mitsubishi-outlander.webp'
    },
    {
        id: 319,
        brand: 'Mitsubishi',
        model: 'RVR',
        image: 'images/cars/mitsubishi-rvr.jpg'
    },
    {
        id: 320,
        brand: 'Mitsubishi',
        model: 'Delica D5',
        image: 'images/cars/mitsubishi-delica-d5.png'
    },
    {
        id: 321,
        brand: 'Mitsubishi',
        model: 'Eclipse Cross',
        image: 'images/cars/mitsubishi-eclipse-cross.webp'
    },
    {
        id: 322,
        brand: 'Mitsubishi',
        model: 'Pajero Mini',
        image: 'images/cars/mitsubishi-pajero-mini.jpg'
    },
    {
        id: 323,
        brand: 'Mitsubishi',
        model: 'EK Wagon',
        image: 'images/cars/mitsubishi-ek-wagon.jpg'
    },
    {
        id: 7,
        brand: 'Toyota',
        model: 'RAV4',
        image: 'images/cars/toyota-rav4.jpg'
    },
    {
        id: 8,
        brand: 'Honda',
        model: 'Accord',
        image: 'images/cars/honda-accord.avif'
    },
    {
        id: 221,
        brand: 'Honda',
        model: 'ACCORD W',
        image: 'images/cars/honda-accord-w.jpg'
    },
    {
        id: 222,
        brand: 'Honda',
        model: 'ACTY T',
        image: 'images/cars/honda-acty-t.webp'
    },
    {
        id: 223,
        brand: 'Honda',
        model: 'ACTY V',
        image: 'images/cars/honda-acty-v.jpg'
    },
    {
        id: 224,
        brand: 'Honda',
        model: 'AIRWEVE',
        image: 'images/cars/honda-airwave.jpg'
    },
    {
        id: 225,
        brand: 'Honda',
        model: 'BEAT',
        image: 'images/cars/honda-beat.jpg'
    },
    {
        id: 226,
        brand: 'Honda',
        model: 'CIVIC H/B',
        image: 'images/cars/honda-civic-hb.avif'
    },
    {
        id: 227,
        brand: 'Honda',
        model: 'CR-V',
        image: 'images/cars/honda-cr-v.jpg'
    },
    {
        id: 228,
        brand: 'Honda',
        model: 'CR-X',
        image: 'images/cars/honda-cr-x.jpg'
    },
    {
        id: 229,
        brand: 'Honda',
        model: 'CR-Z',
        image: 'images/cars/honda-cr-z.jpg'
    },
    {
        id: 230,
        brand: 'Honda',
        model: 'CROSSROAD',
        image: 'images/cars/honda-crossroad.jpg'
    },
    {
        id: 231,
        brand: 'Honda',
        model: 'EDIX',
        image: 'images/cars/honda-edix.jpg'
    },
    {
        id: 232,
        brand: 'Honda',
        model: 'ELEMENT',
        image: 'images/cars/honda-element.jpg'
    },
    {
        id: 233,
        brand: 'Honda',
        model: 'ELYSION',
        image: 'images/cars/honda-elysion.jpg'
    },
    {
        id: 234,
        brand: 'Honda',
        model: 'ELYSION PRESTIGE',
        image: 'images/cars/honda-elysion-prestige.jpg'
    },
    {
        id: 235,
        brand: 'Honda',
        model: 'FIT',
        image: 'images/cars/honda-fit.webp'
    },
    {
        id: 236,
        brand: 'Honda',
        model: 'FIT ARIA',
        image: 'images/cars/honda-fit-aria.jpg'
    },
    {
        id: 237,
        brand: 'Honda',
        model: 'FIT HYBRID',
        image: 'images/cars/honda-fit-hybrid.jpg'
    },
    {
        id: 238,
        brand: 'Honda',
        model: 'FIT SHUTTLE',
        image: 'images/cars/honda-fit-shuttle.jpg'
    },
    {
        id: 239,
        brand: 'Honda',
        model: 'FREED',
        image: 'images/cars/honda-freed.webp'
    },
    {
        id: 240,
        brand: 'Honda',
        model: 'FREED PLUS',
        image: 'images/cars/honda-freed-plus.jpg'
    },
    {
        id: 241,
        brand: 'Honda',
        model: 'GRACE',
        image: 'images/cars/honda-grace.jpg'
    },
    {
        id: 242,
        brand: 'Honda',
        model: 'HR-V',
        image: 'images/cars/honda-hr-v.webp'
    },
    {
        id: 243,
        brand: 'Honda',
        model: 'INSIGHT',
        image: 'images/cars/honda-insight.jpg'
    },
    {
        id: 244,
        brand: 'Honda',
        model: 'INSPIRE',
        image: 'images/cars/honda-inspire.jpg'
    },
    {
        id: 245,
        brand: 'Honda',
        model: 'INTEGRA C/P',
        image: 'images/cars/honda-integra.jpg'
    },
    {
        id: 246,
        brand: 'Honda',
        model: 'JADE',
        image: 'images/cars/honda-jade.jpg'
    },
    {
        id: 247,
        brand: 'Honda',
        model: 'LEGEND',
        image: 'images/cars/honda-legend.jpg'
    },
    {
        id: 248,
        brand: 'Honda',
        model: 'LIFE',
        image: 'images/cars/honda-life.jpg'
    },
    {
        id: 249,
        brand: 'Honda',
        model: 'LOGO',
        image: 'images/cars/honda-logo.jpg'
    },
    {
        id: 250,
        brand: 'Honda',
        model: 'MOBILIO',
        image: 'images/cars/honda-mobilio.webp'
    },
    {
        id: 251,
        brand: 'Honda',
        model: 'MOBILIO SPIKE',
        image: 'images/cars/honda-mobilio-spike.jpg'
    },
    {
        id: 252,
        brand: 'Honda',
        model: 'N BOX',
        image: 'images/cars/honda-n-box.jpg'
    },
    {
        id: 253,
        brand: 'Honda',
        model: 'N BOX CUSTOM',
        image: 'images/cars/honda-n-box-custom.jpg'
    },
    {
        id: 254,
        brand: 'Honda',
        model: 'N BOX PLUS',
        image: 'images/cars/honda-n-box-plus.jpg'
    },
    {
        id: 255,
        brand: 'Honda',
        model: 'N BOX SLASH',
        image: 'images/cars/honda-n-box-slash.jpg'
    },
    {
        id: 256,
        brand: 'Honda',
        model: 'N ONE',
        image: 'images/cars/honda-n-one.jpg'
    },
    {
        id: 257,
        brand: 'Honda',
        model: 'N-VAN',
        image: 'images/cars/honda-n-van.png'
    },
    {
        id: 258,
        brand: 'Honda',
        model: 'N-WGN CUSTOM',
        image: 'images/cars/honda-n-wgn-custom.jpg'
    },
    {
        id: 259,
        brand: 'Honda',
        model: 'N-WGN',
        image: 'images/cars/honda-n-wgn.png'
    },
    {
        id: 260,
        brand: 'Honda',
        model: 'ODYSSEY',
        image: 'images/cars/honda-odyssey.jpg'
    },
    {
        id: 261,
        brand: 'Honda',
        model: 'PARTNER',
        image: 'images/cars/honda-partner.jpg'
    },
    {
        id: 262,
        brand: 'Honda',
        model: 'S-MX',
        image: 'images/cars/honda-smx.jpg'
    },
    {
        id: 263,
        brand: 'Honda',
        model: 'S660',
        image: 'images/cars/honda-s660.jpg'
    },
    {
        id: 264,
        brand: 'Honda',
        model: 'SHUTTLE',
        image: 'images/cars/honda-shuttle.jpg'
    },
    {
        id: 265,
        brand: 'Honda',
        model: 'FREED SPIKE',
        image: 'images/cars/honda-spike.jpg'
    },
    {
        id: 266,
        brand: 'Honda',
        model: 'FREED SPIKE HV',
        image: 'images/cars/honda-spike-hv.webp'
    },
    {
        id: 267,
        brand: 'Honda',
        model: 'STEPWAGON',
        image: 'images/cars/honda-stepwagon.png'
    },
    {
        id: 268,
        brand: 'Honda',
        model: 'STEPWAGON SPADA',
        image: 'images/cars/honda-stepwagon-spada.jpg'
    },
    {
        id: 269,
        brand: 'Honda',
        model: 'STREAM',
        image: 'images/cars/honda-stream.jpg'
    },
    {
        id: 270,
        brand: 'Honda',
        model: 'STREET',
        image: 'images/cars/honda-street.webp'
    },
    {
        id: 271,
        brand: 'Honda',
        model: 'TORNEO',
        image: 'images/cars/honda-torneo.jpg'
    },
    {
        id: 272,
        brand: 'Honda',
        model: 'VAMOS',
        image: 'images/cars/honda-vamos.jpg'
    },
    {
        id: 273,
        brand: 'Honda',
        model: 'VAMOS HOBIO',
        image: 'images/cars/honda-vamos-hobio.jpg'
    },
    {
        id: 274,
        brand: 'Honda',
        model: 'VEZEL',
        image: 'images/cars/honda-vezel.jpg'
    },
    {
        id: 275,
        brand: 'Honda',
        model: 'WR-V',
        image: 'images/cars/honda-wr-v.avif'
    },
    {
        id: 276,
        brand: 'Honda',
        model: 'ZEST',
        image: 'images/cars/honda-rest.jpg'
    },
    {
        id: 9,
        brand: 'Toyota',
        model: 'Allex',
        image: 'images/cars/toyota-allex.jpg'
    },
    {
        id: 10,
        brand: 'Toyota',
        model: 'Alion',
        image: 'images/cars/toyota-allion.jpg'
    },
    {
        id: 11,
        brand: 'Toyota',
        model: 'Alphard',
        image: 'images/cars/toyota-alphard.jpg'
    },
    {
        id: 12,
        brand: 'Toyota',
        model: 'Altezza',
        image: 'images/cars/toyota-altezza.jpg'
    },
    {
        id: 13,
        brand: 'Toyota',
        model: 'Aqua',
        image: 'images/cars/toyota-aqua.webp'
    },
    {
        id: 14,
        brand: 'Toyota',
        model: 'Aristo',
        image: 'images/cars/toyota-aristo.jpg'
    },
    {
        id: 15,
        brand: 'Toyota',
        model: 'Auris',
        image: 'images/cars/toyota-auris.jpg'
    },
    {
        id: 16,
        brand: 'Toyota',
        model: 'Avalon',
        image: 'images/cars/toyota-avalon.jpg'
    },
    {
        id: 17,
        brand: 'Toyota',
        model: 'Avensis',
        image: 'images/cars/toyota-avensis.jpg'
    },
    {
        id: 18,
        brand: 'Toyota',
        model: 'Belta',
        image: 'images/cars/toyota-belta.jpg'
    },
    {
        id: 19,
        brand: 'Toyota',
        model: '86',
        image: 'images/cars/86.jpg'
    },
    {
        id: 20,
        brand: 'Toyota',
        model: 'Camry',
        image: 'images/cars/camry.webp'
    },
    {
        id: 21,
        brand: 'Toyota',
        model: 'C-HR',
        image: 'images/cars/c-hr.jpg'
    },
    {
        id: 22,
        brand: 'Toyota',
        model: 'Celica',
        image: 'images/cars/celica.jpg'
    },
    {
        id: 23,
        brand: 'Toyota',
        model: 'Chaser',
        image: 'images/cars/chaser.jpg'
    },
    {
        id: 24,
        brand: 'Toyota',
        model: 'Carina',
        image: 'images/cars/carina.webp'
    },
    {
        id: 25,
        brand: 'Toyota',
        model: 'Celsior',
        image: 'images/cars/celsior.webp'
    },
    {
        id: 26,
        brand: 'Toyota',
        model: 'Corolla Fielder',
        image: 'images/cars/corolla-fielder.jpg'
    },
    {
        id: 27,
        brand: 'Toyota',
        model: 'Ambulance',
        image: 'images/cars/ambulance.jpg'
    },
    {
        id: 28,
        brand: 'Toyota',
        model: 'bb',
        image: 'images/cars/bb.jpg'
    },
    {
        id: 29,
        brand: 'Toyota',
        model: 'Blade',
        image: 'images/cars/blade.jpg'
    },
    {
        id: 30,
        brand: 'Toyota',
        model: 'Brevis',
        image: 'images/cars/brevis.webp'
    },
    {
        id: 31,
        brand: 'Toyota',
        model: 'Caldina V',
        image: 'images/cars/caldina-v.jpg'
    },
    {
        id: 32,
        brand: 'Toyota',
        model: 'Caldina W',
        image: 'images/cars/caldina-w.jpg'
    },
    {
        id: 33,
        brand: 'Toyota',
        model: 'Coaster',
        image: 'images/cars/coaster.jpg'
    },
    {
        id: 34,
        brand: 'Toyota',
        model: 'Comfort',
        image: 'images/cars/comfort.jpg'
    },
    {
        id: 35,
        brand: 'Toyota',
        model: 'Corolla Axio',
        image: 'images/cars/corolla-axio.jpg'
    },
    {
        id: 36,
        brand: 'Toyota',
        model: 'Corolla Levin',
        image: 'images/cars/corolla-levin.jpg'
    },
    {
        id: 37,
        brand: 'Toyota',
        model: 'Corolla Rumion',
        image: 'images/cars/corolla-rumion.jpg'
    },
    {
        id: 38,
        brand: 'Toyota',
        model: 'Corolla Runx',
        image: 'images/cars/toyota-corolla-runx.jpg'
    },
    {
        id: 39,
        brand: 'Toyota',
        model: 'Corolla Spacio',
        image: 'images/cars/toyota-corolla-spacio.jpg'
    },
    {
        id: 40,
        brand: 'Toyota',
        model: 'Corolla Sport',
        image: 'images/cars/toyota-corolla-sport.jpg'
    },
    {
        id: 41,
        brand: 'Toyota',
        model: 'Corolla Touring',
        image: 'images/cars/toyota-corolla-touring.jpg'
    },
    {
        id: 42,
        brand: 'Toyota',
        model: 'Corolla',
        image: 'images/cars/toyota-corolla.jpg'
    },
    {
        id: 43,
        brand: 'Toyota',
        model: 'Corona Premio',
        image: 'images/cars/toyota-corona-premio.webp'
    },
    {
        id: 44,
        brand: 'Toyota',
        model: 'Corona',
        image: 'images/cars/toyota-corona.jpg'
    },
    {
        id: 45,
        brand: 'Toyota',
        model: 'Corsa',
        image: 'images/cars/toyota-corsa.jpg'
    },
    {
        id: 46,
        brand: 'Toyota',
        model: 'Cresta',
        image: 'images/cars/toyota-cresta.jpg'
    },
    {
        id: 47,
        brand: 'Toyota',
        model: 'Crown Athlete Hybrid',
        image: 'images/cars/toyota-crown-athlete-hybrid.jpg'
    },
    {
        id: 48,
        brand: 'Toyota',
        model: 'Crown Athlete',
        image: 'images/cars/toyota-crown-athlete.jpg'
    },
    {
        id: 49,
        brand: 'Toyota',
        model: 'Crown Comfort',
        image: 'images/cars/toyota-crown-comfort.webp'
    },
    {
        id: 50,
        brand: 'Toyota',
        model: 'Crown Crossover',
        image: 'images/cars/toyota-crown-crossover.jpg'
    },
    {
        id: 51,
        brand: 'Toyota',
        model: 'Crown Estate',
        image: 'images/cars/toyota-crown-estate.jpg'
    },
    {
        id: 52,
        brand: 'Toyota',
        model: 'Crown Hybrid',
        image: 'images/cars/toyota-crown-hybrid.jpg'
    },
    {
        id: 53,
        brand: 'Toyota',
        model: 'Crown Majesta',
        image: 'images/cars/toyota-crown-majesta.jpg'
    },
    {
        id: 54,
        brand: 'Toyota',
        model: 'Crown Royal Hybrid',
        image: 'images/cars/toyota-crown-royal-hybrid.jpg'
    },
    {
        id: 55,
        brand: 'Toyota',
        model: 'Crown Royal',
        image: 'images/cars/toyota-crown-royal.jpg'
    },
    {
        id: 56,
        brand: 'Toyota',
        model: 'Crown Sport',
        image: 'images/cars/toyota-crown-sport.jpg'
    },
    {
        id: 57,
        brand: 'Toyota',
        model: 'Crown W',
        image: 'images/cars/toyota-crown-w.jpg'
    },
    {
        id: 58,
        brand: 'Toyota',
        model: 'Crown',
        image: 'images/cars/toyota-crown.jpg'
    },
    {
        id: 59,
        brand: 'Toyota',
        model: 'Dyna T',
        image: 'images/cars/toyota-dyna-t.jpg'
    },
    {
        id: 60,
        brand: 'Toyota',
        model: 'Esquire',
        image: 'images/cars/toyota-esquire.webp'
    },
    {
        id: 61,
        brand: 'Toyota',
        model: 'Estima Hybrid',
        image: 'images/cars/toyota-estima-hybrid.jpg'
    },
    {
        id: 62,
        brand: 'Toyota',
        model: 'Estima',
        image: 'images/cars/toyota-estima.jpg'
    },
    {
        id: 63,
        brand: 'Toyota',
        model: 'FJ Cruiser',
        image: 'images/cars/toyota-fj-cruiser.jpg'
    },
    {
        id: 64,
        brand: 'Toyota',
        model: 'Funcargo',
        image: 'images/cars/toyota-funcargo.jpg'
    },
    {
        id: 65,
        brand: 'Toyota',
        model: 'Gaia',
        image: 'images/cars/toyota-gaia.jpg'
    },
    {
        id: 66,
        brand: 'Toyota',
        model: 'GR Yaris',
        image: 'images/cars/toyota-gr-yaris.webp'
    },
    {
        id: 67,
        brand: 'Toyota',
        model: 'Granvia',
        image: 'images/cars/toyota-granvia.jpg'
    },
    {
        id: 68,
        brand: 'Toyota',
        model: 'Harrier Hybrid',
        image: 'images/cars/toyota-harrier-hybrid.jpg'
    },
    {
        id: 69,
        brand: 'Toyota',
        model: 'Harrier',
        image: 'images/cars/toyota-harrier.jpg'
    },
    {
        id: 70,
        brand: 'Toyota',
        model: 'Hiace Commuter',
        image: 'images/cars/toyota-hiace-commuter.jpg'
    },
    {
        id: 71,
        brand: 'Toyota',
        model: 'Hiace Regius W',
        image: 'images/cars/toyota-hiace-regius-w.webp'
    },
    {
        id: 72,
        brand: 'Toyota',
        model: 'Hiace V',
        image: 'images/cars/toyota-hiace-v.webp'
    },
    {
        id: 73,
        brand: 'Toyota',
        model: 'Hiace W',
        image: 'images/cars/toyota-hiace-w.jpg'
    },
    {
        id: 74,
        brand: 'Toyota',
        model: 'Hiace Wagon',
        image: 'images/cars/toyota-hiace-wagon.jpg'
    },
    {
        id: 75,
        brand: 'Toyota',
        model: 'Hiace',
        image: 'images/cars/toyota-hiace.jpg'
    },
    {
        id: 76,
        brand: 'Toyota',
        model: 'Hilux Surf',
        image: 'images/cars/toyota-hilux-surf.jpg'
    },
    {
        id: 77,
        brand: 'Toyota',
        model: 'Hilux',
        image: 'images/cars/toyota-hilux.jpg'
    },
    {
        id: 78,
        brand: 'Toyota',
        model: 'Ipsum',
        image: 'images/cars/toyota-ipsum.webp'
    },
    {
        id: 79,
        brand: 'Toyota',
        model: 'Kluger',
        image: 'images/cars/toyota-kluger.webp'
    },
    {
        id: 80,
        brand: 'Toyota',
        model: 'Kluger Hybrid',
        image: 'images/cars/toyota-kluger-hybrid.jpg'
    },
    {
        id: 81,
        brand: 'Toyota',
        model: 'Landcruiser 250',
        image: 'images/cars/toyota-landcruiser-250.jpg'
    },
    {
        id: 82,
        brand: 'Toyota',
        model: 'Landcruiser Prado',
        image: 'images/cars/toyota-landcruiser-prado.jpg'
    },
    {
        id: 83,
        brand: 'Toyota',
        model: 'Landcruiser V',
        image: 'images/cars/toyota-landcruiser-v.jpg'
    },
    {
        id: 84,
        brand: 'Toyota',
        model: 'Landcruiser W',
        image: 'images/cars/toyota-landcruiser-w.jpg'
    },
    {
        id: 85,
        brand: 'Toyota',
        model: 'Liteace Noah',
        image: 'images/cars/toyota-liteace-noah.jpg'
    },
    {
        id: 86,
        brand: 'Toyota',
        model: 'Liteace T',
        image: 'images/cars/toyota-liteace-t.webp'
    },
    {
        id: 87,
        brand: 'Toyota',
        model: 'Liteace V',
        image: 'images/cars/toyota-liteace-v.jpg'
    },
    {
        id: 88,
        brand: 'Toyota',
        model: 'Liteace W',
        image: 'images/cars/toyota-liteace-w.webp'
    },
    {
        id: 89,
        brand: 'Toyota',
        model: 'Mark X',
        image: 'images/cars/toyota-mark-x.jpg'
    },
    {
        id: 90,
        brand: 'Toyota',
        model: 'Mark X Zio',
        image: 'images/cars/toyota-mark-x-zio.jpg'
    },
    {
        id: 91,
        brand: 'Toyota',
        model: 'Mark2 Blit',
        image: 'images/cars/toyota-mark2-blit.jpg'
    },
    {
        id: 92,
        brand: 'Toyota',
        model: 'Mark2 Qualis',
        image: 'images/cars/toyota-mark2-qualis.jpg'
    },
    {
        id: 93,
        brand: 'Toyota',
        model: 'Mirai',
        image: 'images/cars/toyota-mirai.jpg'
    },
    {
        id: 94,
        brand: 'Toyota',
        model: 'MR-2',
        image: 'images/cars/toyota-mr2.webp'
    },
    {
        id: 95,
        brand: 'Toyota',
        model: 'MR-S',
        image: 'images/cars/toyota-mr-s.jpg'
    },
    {
        id: 96,
        brand: 'Toyota',
        model: 'Noah',
        image: 'images/cars/toyota-noah.jpg'
    },
    {
        id: 97,
        brand: 'Toyota',
        model: 'Opa',
        image: 'images/cars/toyota-opa.jpg'
    },
    {
        id: 98,
        brand: 'Toyota',
        model: 'Passo',
        image: 'images/cars/toyota-passo.webp'
    },
    {
        id: 99,
        brand: 'Toyota',
        model: 'Passo Sette',
        image: 'images/cars/toyota-passo-sette.jpg'
    },
    {
        id: 100,
        brand: 'Toyota',
        model: 'Pixis Epoch',
        image: 'images/cars/toyota-pixis-epoch.jpg'
    },
    {
        id: 101,
        brand: 'Toyota',
        model: 'Pixis Joy',
        image: 'images/cars/toyota-pixis-joy.jpg'
    },
    {
        id: 102,
        brand: 'Toyota',
        model: 'Pixis Mega',
        image: 'images/cars/toyota-pixis-mega.jpg'
    },
    {
        id: 103,
        brand: 'Toyota',
        model: 'Pixis Space',
        image: 'images/cars/toyota-pixis-space.webp'
    },
    {
        id: 104,
        brand: 'Toyota',
        model: 'Pixis T',
        image: 'images/cars/toyota-pixis-t.jpg'
    },
    {
        id: 105,
        brand: 'Toyota',
        model: 'Pixis V',
        image: 'images/cars/toyota-pixis-v.jpg'
    },
    {
        id: 106,
        brand: 'Toyota',
        model: 'Platz',
        image: 'images/cars/toyota-platz.jpg'
    },
    {
        id: 107,
        brand: 'Toyota',
        model: 'Porte',
        image: 'images/cars/toyota-porte.jpg'
    },
    {
        id: 108,
        brand: 'Toyota',
        model: 'Premio',
        image: 'images/cars/toyota-premio.jpg'
    },
    {
        id: 109,
        brand: 'Toyota',
        model: 'Prius',
        image: 'images/cars/toyota-prius.jpg'
    },
    {
        id: 110,
        brand: 'Toyota',
        model: 'Prius Alfa',
        image: 'images/cars/toyota-prius-alpha.jpg'
    },
    {
        id: 111,
        brand: 'Toyota',
        model: 'Prius PHV',
        image: 'images/cars/toyota-prius-phv.jpg'
    },
    {
        id: 112,
        brand: 'Toyota',
        model: 'Probox V',
        image: 'images/cars/toyota-probox-v.jpg'
    },
    {
        id: 113,
        brand: 'Toyota',
        model: 'Probox W',
        image: 'images/cars/toyota-probox-w.jpg'
    },
    {
        id: 114,
        brand: 'Toyota',
        model: 'Progres',
        image: 'images/cars/toyota-progres.jpg'
    },
    {
        id: 115,
        brand: 'Toyota',
        model: 'Pronard',
        image: 'images/cars/toyota-pronard.jpg'
    },
    {
        id: 116,
        brand: 'Toyota',
        model: 'Quick Delivery',
        image: 'images/cars/toyota-quick-delivery.jpg'
    },
    {
        id: 117,
        brand: 'Toyota',
        model: 'Ractis',
        image: 'images/cars/toyota-ractis.jpg'
    },
    {
        id: 118,
        brand: 'Toyota',
        model: 'Raize',
        image: 'images/cars/toyota-raize.jpg'
    },
    {
        id: 119,
        brand: 'Toyota',
        model: 'Raum',
        image: 'images/cars/toyota-raum.jpg'
    },
    {
        id: 120,
        brand: 'Toyota',
        model: 'Regius Ace V',
        image: 'images/cars/toyota-regius-ace-v.jpg'
    },
    {
        id: 121,
        brand: 'Toyota',
        model: 'Regius W',
        image: 'images/cars/toyota-regius-w.jpg'
    },
    {
        id: 122,
        brand: 'Toyota',
        model: 'Roomy',
        image: 'images/cars/toyota-roomy.jpg'
    },
    {
        id: 123,
        brand: 'Toyota',
        model: 'Rush',
        image: 'images/cars/toyota-rush.webp'
    },
    {
        id: 124,
        brand: 'Toyota',
        model: 'Sai',
        image: 'images/cars/toyota-sai.jpg'
    },
    {
        id: 125,
        brand: 'Toyota',
        model: 'Sienta',
        image: 'images/cars/toyota-sienta.jpg'
    },
    {
        id: 126,
        brand: 'Toyota',
        model: 'Spade',
        image: 'images/cars/toyota-spade.jpg'
    },
    {
        id: 127,
        brand: 'Toyota',
        model: 'Sprinter V',
        image: 'images/cars/toyota-sprinter-v.jpg'
    },
    {
        id: 128,
        brand: 'Toyota',
        model: 'Sprinter W',
        image: 'images/cars/toyota-sprinter-w.webp'
    },
    {
        id: 129,
        brand: 'Toyota',
        model: 'Starlet',
        image: 'images/cars/toyota-starlet.jpg'
    },
    {
        id: 130,
        brand: 'Toyota',
        model: 'Succeed W',
        image: 'images/cars/toyota-succeed-w.jpg'
    },
    {
        id: 131,
        brand: 'Toyota',
        model: 'Tank',
        image: 'images/cars/toyota-tank.jpg'
    },
    {
        id: 132,
        brand: 'Toyota',
        model: 'Townace Noah',
        image: 'images/cars/toyota-townace-noah.jpg'
    },
    {
        id: 133,
        brand: 'Toyota',
        model: 'Toyoace T',
        image: 'images/cars/toyota-toyoace-t.jpg'
    },
    {
        id: 134,
        brand: 'Toyota',
        model: 'Vanguard',
        image: 'images/cars/toyota-vanguard.jpg'
    },
    {
        id: 135,
        brand: 'Toyota',
        model: 'Vellfire',
        image: 'images/cars/toyota-vellfire.jpg'
    },
    {
        id: 136,
        brand: 'Toyota',
        model: 'Verossa',
        image: 'images/cars/toyota-verossa.webp'
    },
    {
        id: 137,
        brand: 'Toyota',
        model: 'Vista',
        image: 'images/cars/toyota-vista.jpg'
    },
    {
        id: 138,
        brand: 'Toyota',
        model: 'Vitz',
        image: 'images/cars/toyota-vitz.jpg'
    },
    {
        id: 139,
        brand: 'Toyota',
        model: 'Voxy',
        image: 'images/cars/toyota-voxy.jpg'
    },
    {
        id: 140,
        brand: 'Toyota',
        model: 'WiLL Cypha',
        image: 'images/cars/toyota-will-cypha.jpg'
    },
    {
        id: 141,
        brand: 'Toyota',
        model: 'WiLL Vi',
        image: 'images/cars/toyota-will-vi.jpg'
    },
    {
        id: 142,
        brand: 'Toyota',
        model: 'Windom',
        image: 'images/cars/toyota-windom.jpg'
    },
    {
        id: 143,
        brand: 'Toyota',
        model: 'Wish',
        image: 'images/cars/toyota-wish.jpg'
    },
    {
        id: 144,
        brand: 'Toyota',
        model: 'Yaris',
        image: 'images/cars/toyota-yaris.webp'
    },
    {
        id: 145,
        brand: 'Toyota',
        model: 'Yaris Cross',
        image: 'images/cars/toyota-yaris-cross.jpg'
    },
    {
        id: 146,
        brand: 'Nissan',
        model: 'Clipper V',
        image: 'images/cars/nissan-clipper-v.jpg'
    },
    {
        id: 147,
        brand: 'Nissan',
        model: 'Condor',
        image: 'images/cars/nissan-condor.webp'
    },
    {
        id: 148,
        brand: 'Nissan',
        model: 'Cube Cubic',
        image: 'images/cars/nissan-cube-cubic.jpg'
    },
    {
        id: 149,
        brand: 'Nissan',
        model: 'Cube',
        image: 'images/cars/nissan-cube.jpg'
    },
    {
        id: 150,
        brand: 'Nissan',
        model: 'Datsun Truck',
        image: 'images/cars/nissan-datsun-truck.jpg'
    },
    {
        id: 151,
        brand: 'Nissan',
        model: 'Dayz Roox',
        image: 'images/cars/nissan-dayz-roox.jpg'
    },
    {
        id: 152,
        brand: 'Nissan',
        model: 'Dayz',
        image: 'images/cars/nissan-dayz.jpg'
    },
    {
        id: 153,
        brand: 'Nissan',
        model: 'Dualis',
        image: 'images/cars/nissan-dualis.jpg'
    },
    {
        id: 154,
        brand: 'Nissan',
        model: 'Elgrand',
        image: 'images/cars/nissan-elgrand.jpg'
    },
    {
        id: 155,
        brand: 'Nissan',
        model: 'Fairlady Z',
        image: 'images/cars/nissan-fairlady-z.jpg'
    },
    {
        id: 156,
        brand: 'Nissan',
        model: 'Fuga Hybrid',
        image: 'images/cars/nissan-fuga-hybrid.avif'
    },
    {
        id: 157,
        brand: 'Nissan',
        model: 'Fuga',
        image: 'images/cars/nissan-fuga.jpg'
    },
    {
        id: 158,
        brand: 'Nissan',
        model: 'Gloria W',
        image: 'images/cars/nissan-gloria-w.jpg'
    },
    {
        id: 159,
        brand: 'Nissan',
        model: 'Gloria',
        image: 'images/cars/nissan-gloria.jpg'
    },
    {
        id: 160,
        brand: 'Nissan',
        model: 'Juke',
        image: 'images/cars/nissan-juke.jpg'
    },
    {
        id: 161,
        brand: 'Nissan',
        model: 'Kix',
        image: 'images/cars/nissan-kix.avif'
    },
    {
        id: 162,
        brand: 'Nissan',
        model: 'Lafesta',
        image: 'images/cars/nissan-lafesta.jpg'
    },
    {
        id: 163,
        brand: 'Nissan',
        model: 'Latio',
        image: 'images/cars/nissan-latio.jpg'
    },
    {
        id: 164,
        brand: 'Nissan',
        model: 'Laurel',
        image: 'images/cars/nissan-laurel.jpg'
    },
    {
        id: 165,
        brand: 'Nissan',
        model: 'Leaf',
        image: 'images/cars/nissan-leaf.jpg'
    },
    {
        id: 166,
        brand: 'Nissan',
        model: 'Ad Van',
        image: 'images/cars/nissan-ad-van.jpg'
    },
    {
        id: 167,
        brand: 'Nissan',
        model: 'NT450 Atlas',
        image: 'images/cars/nissan-nt450-atlas.jpg'
    },
    {
        id: 168,
        brand: 'Nissan',
        model: 'Atlas',
        image: 'images/cars/nissan-atlas.jpg'
    },
    {
        id: 169,
        brand: 'Nissan',
        model: 'Aura',
        image: 'images/cars/nissan-aura.jpg'
    },
    {
        id: 170,
        brand: 'Nissan',
        model: 'Be-1',
        image: 'images/cars/nissan-be-1.jpg'
    },
    {
        id: 171,
        brand: 'Nissan',
        model: 'Big Thumb',
        image: 'images/cars/nissan-big-thumb.webp'
    },
    {
        id: 172,
        brand: 'Nissan',
        model: 'Bluebird Sylphy',
        image: 'images/cars/nissan-bluebird-sylphy.jpg'
    },
    {
        id: 173,
        brand: 'Nissan',
        model: 'Caravan Bus',
        image: 'images/cars/nissan-caravan-bus.jpg'
    },
    {
        id: 174,
        brand: 'Nissan',
        model: 'Caravan V',
        image: 'images/cars/nissan-caravan-v.jpg'
    },
    {
        id: 175,
        brand: 'Nissan',
        model: 'Caravan W',
        image: 'images/cars/nissan-caravan-w.jpg'
    },
    {
        id: 176,
        brand: 'Nissan',
        model: 'Caravan',
        image: 'images/cars/nissan-caravan.jpg'
    },
    {
        id: 177,
        brand: 'Nissan',
        model: 'Cedric',
        image: 'images/cars/nissan-cedric.webp'
    },
    {
        id: 178,
        brand: 'Nissan',
        model: 'Cefiro',
        image: 'images/cars/nissan-cefiro.jpg'
    },
    {
        id: 179,
        brand: 'Nissan',
        model: 'Cima',
        image: 'images/cars/nissan-cima.jpg'
    },
    {
        id: 180,
        brand: 'Nissan',
        model: 'Civilian',
        image: 'images/cars/nissan-civilian.jpg'
    },
    {
        id: 181,
        brand: 'Nissan',
        model: 'Clipper T',
        image: 'images/cars/nissan-clipper-t.jpg'
    },
    {
        id: 182,
        brand: 'Nissan',
        model: 'Liberty',
        image: 'images/cars/nissan-liberty.jpg'
    },
    {
        id: 183,
        brand: 'Nissan',
        model: 'March',
        image: 'images/cars/nissan-march.jpg'
    },
    {
        id: 184,
        brand: 'Nissan',
        model: 'Micra C+C',
        image: 'images/cars/nissan-micra-c-plus-c.jpg'
    },
    {
        id: 185,
        brand: 'Nissan',
        model: 'Moco',
        image: 'images/cars/nissan-moco.jpg'
    },
    {
        id: 186,
        brand: 'Nissan',
        model: 'Murano',
        image: 'images/cars/nissan-murano.jpg'
    },
    {
        id: 187,
        brand: 'Nissan',
        model: 'Note',
        image: 'images/cars/nissan-note.jpg'
    },
    {
        id: 188,
        brand: 'Nissan',
        model: 'NT100 Clipper T',
        image: 'images/cars/nissan-nt100-clipper-t.jpg'
    },
    {
        id: 189,
        brand: 'Nissan',
        model: 'NV100 Clipper Rio',
        image: 'images/cars/nissan-nv100-clipper-rio.jpg'
    },
    {
        id: 190,
        brand: 'Nissan',
        model: 'NV100 Clipper V',
        image: 'images/cars/nissan-nv100-clipper-v.jpg'
    },
    {
        id: 191,
        brand: 'Nissan',
        model: 'NV150 AD',
        image: 'images/cars/nissan-nv150-ad.jpg'
    },
    {
        id: 192,
        brand: 'Nissan',
        model: 'NV200 Vanette V',
        image: 'images/cars/nissan-nv200-vanette-v.jpg'
    },
    {
        id: 193,
        brand: 'Nissan',
        model: 'NV200 Vanette W',
        image: 'images/cars/nissan-nv200-vanette-w.jpg'
    },
    {
        id: 194,
        brand: 'Nissan',
        model: 'NV350 Caravan V',
        image: 'images/cars/nissan-nv350-caravan-v.jpg'
    },
    {
        id: 195,
        brand: 'Nissan',
        model: 'NV350 Caravan W',
        image: 'images/cars/nissan-nv350-caravan-w.jpg'
    },
    {
        id: 196,
        brand: 'Nissan',
        model: 'Paramedic',
        image: 'images/cars/nissan-paramedic.jpg'
    },
    {
        id: 197,
        brand: 'Nissan',
        model: 'Pino',
        image: 'images/cars/nissan-pino.jpg'
    },
    {
        id: 198,
        brand: 'Nissan',
        model: 'Presage',
        image: 'images/cars/nissan-presage.jpg'
    },
    {
        id: 199,
        brand: 'Nissan',
        model: 'Primera S/D',
        image: 'images/cars/nissan-primera.jpg'
    },
    {
        id: 200,
        brand: 'Nissan',
        model: 'Pulsar Serie',
        image: 'images/cars/nissan-pulsar-serie.jpg'
    },
    {
        id: 201,
        brand: 'Nissan',
        model: 'Quon',
        image: 'images/cars/nissan-quon.jpg'
    },
    {
        id: 202,
        brand: 'Nissan',
        model: 'Safari V',
        image: 'images/cars/nissan-safari-v.jpg'
    },
    {
        id: 203,
        brand: 'Nissan',
        model: 'Safari W',
        image: 'images/cars/nissan-safari-w.jpg'
    },
    {
        id: 204,
        brand: 'Nissan',
        model: 'Sakura',
        image: 'images/cars/nissan-sakura.webp'
    },
    {
        id: 205,
        brand: 'Nissan',
        model: 'Serena W',
        image: 'images/cars/nissan-serena-w.jpg'
    },
    {
        id: 206,
        brand: 'Nissan',
        model: 'Silvia',
        image: 'images/cars/nissan-silvia.jpg'
    },
    {
        id: 207,
        brand: 'Nissan',
        model: 'Skyline Crossover',
        image: 'images/cars/nissan-skyline-crossover.jpg'
    },
    {
        id: 208,
        brand: 'Nissan',
        model: 'Skyline',
        image: 'images/cars/nissan-skyline.avif'
    },
    {
        id: 209,
        brand: 'Nissan',
        model: 'Stagea',
        image: 'images/cars/nissan-stagea.jpg'
    },
    {
        id: 210,
        brand: 'Nissan',
        model: 'Sunny',
        image: 'images/cars/nissan-sunny.avif'
    },
    {
        id: 211,
        brand: 'Nissan',
        model: 'Sylphy',
        image: 'images/cars/nissan-sylphy.jpg'
    },
    {
        id: 212,
        brand: 'Nissan',
        model: 'Teana',
        image: 'images/cars/nissan-teana.jpg'
    },
    {
        id: 213,
        brand: 'Nissan',
        model: 'Terrano W',
        image: 'images/cars/nissan-terrano-w.avif'
    },
    {
        id: 214,
        brand: 'Nissan',
        model: 'Tiida',
        image: 'images/cars/nissan-tiida.avif'
    },
    {
        id: 215,
        brand: 'Nissan',
        model: 'Tiida Latio',
        image: 'images/cars/nissan-tiida-latio.jpg'
    },
    {
        id: 216,
        brand: 'Nissan',
        model: 'UD',
        image: 'images/cars/nissan-ud.jpg'
    },
    {
        id: 217,
        brand: 'Nissan',
        model: 'VANETTE T',
        image: 'images/cars/nissan-vanette-t.jpg'
    },
    {
        id: 218,
        brand: 'Nissan',
        model: 'VANETTE V',
        image: 'images/cars/nissan-vanette-v.jpg'
    },
    {
        id: 219,
        brand: 'Nissan',
        model: 'WINGROAD',
        image: 'images/cars/nissan-wingroad.jpg'
    },
    {
        id: 220,
        brand: 'Nissan',
        model: 'X-TRAIL',
        image: 'images/cars/nissan-x-trail.webp'
    },
    {
        id: 277,
        brand: 'Mazda',
        model: 'ATENZA SPORTS',
        image: 'images/cars/mazda-atenza-sport.webp'
    },
    {
        id: 278,
        brand: 'Mazda',
        model: 'ATENZA SPORTS W',
        image: 'images/cars/mazda-atenza-sport-w.jpg'
    },
    {
        id: 279,
        brand: 'Mazda',
        model: 'ATENZA W',
        image: 'images/cars/mazda-atenza-w.jpg'
    },
    {
        id: 280,
        brand: 'Mazda',
        model: 'AXELA',
        image: 'images/cars/mazda-axela.jpg'
    },
    {
        id: 281,
        brand: 'Mazda',
        model: 'AXELA HYBRID',
        image: 'images/cars/mazda-axela-hybrid.webp'
    },
    {
        id: 282,
        brand: 'Mazda',
        model: 'AXELA SPORTS',
        image: 'images/cars/mazda-axela-sport.jpg'
    },
    {
        id: 283,
        brand: 'Mazda',
        model: 'AZ-OFFROAD',
        image: 'images/cars/mazda-az-offroad.jpg'
    },
    {
        id: 284,
        brand: 'Mazda',
        model: 'AZ-WAGON',
        image: 'images/cars/mazda-azwagon.jpg'
    },
    {
        id: 285,
        brand: 'Mazda',
        model: 'AZ-WAGON CUSTOM STYLE',
        image: 'images/cars/mazda-azwagon-custom-style.jpg'
    },
    {
        id: 286,
        brand: 'Mazda',
        model: 'BIANTE',
        image: 'images/cars/mazda-biante.jpg'
    },
    {
        id: 287,
        brand: 'Mazda',
        model: 'BONGO BRAWNY T',
        image: 'images/cars/mazda-bongo-brawny-truck.jpg'
    },
    {
        id: 288,
        brand: 'Mazda',
        model: 'BONGO BRAWNY V',
        image: 'images/cars/mazda-bongo-brawny-v.jpg'
    },
    {
        id: 289,
        brand: 'Mazda',
        model: 'BONGO T',
        image: 'images/cars/mazda-bongo-t.jpg'
    },
    {
        id: 290,
        brand: 'Mazda',
        model: 'BONGO V',
        image: 'images/cars/mazda-bongo-v.jpg'
    },
    {
        id: 291,
        brand: 'Mazda',
        model: 'CAROL',
        image: 'images/cars/mazda-carol.jpg'
    },
    {
        id: 292,
        brand: 'Mazda',
        model: 'CAROL ECO',
        image: 'images/cars/mazda-carol-eco.jpg'
    },
    {
        id: 293,
        brand: 'Mazda',
        model: 'CX-3',
        image: 'images/cars/mazda-cx-3.png'
    },
    {
        id: 294,
        brand: 'Mazda',
        model: 'FLAIR WAGON CUSTOM STYEL',
        image: 'images/cars/mazda-flair-wagon-custom-style.jpg'
    },
    {
        id: 295,
        brand: 'Mazda',
        model: 'MAZDA2',
        image: 'images/cars/mazda-2.webp'
    },
    {
        id: 296,
        brand: 'Mazda',
        model: 'MAZDA3 FASTBACK',
        image: 'images/cars/mazda-3-fastback.webp'
    },
    {
        id: 297,
        brand: 'Mazda',
        model: 'CX-30',
        image: 'images/cars/mazda-cx-30.png'
    },
    {
        id: 298,
        brand: 'Mazda',
        model: 'CX-5',
        image: 'images/cars/mazda-cx-5.png'
    },
    {
        id: 299,
        brand: 'Honda',
        model: 'NSX',
        year: 2021,
        price: 164900,
        mileage: 14900,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        color: 'White',
        interior: 'Black Alcantara / Leather',
        engine: '3.5L Twin-Turbo V6 Hybrid',
        horsepower: 573,
        featured: true,
        image: 'images/cars/honda-nsx.jpeg',
        galleryImages: [
            'images/cars/honda-nsx.jpeg',
            'images/cars/honda-nsx-23.jpeg',
            'images/cars/honda-nsx-11.jpeg',
            'images/cars/honda-nsx-12.jpeg'
        ],
        description: 'Honda NSX supercar with Sport Hybrid SH-AWD, precision handling, and daily-usable grand touring comfort in an iconic mid-engine package.',
        features: ['Sport Hybrid SH-AWD', '9-Speed Dual-Clutch Transmission', 'Adaptive Suspension', 'Launch Control', 'Premium Alcantara Cabin']
    },
    {
        id: 300,
        brand: 'Mazda',
        model: 'CX-8',
        image: 'images/cars/mazda-cx-8.jpg'
    },
    {
        id: 301,
        brand: 'Mazda',
        model: 'DEMIO',
        image: 'images/cars/mazda-demio.webp'
    },
    {
        id: 302,
        brand: 'Mazda',
        model: 'EUNOS COSMO',
        image: 'images/cars/mazda-eunos-cosmo.jpg'
    },
    {
        id: 303,
        brand: 'Mazda',
        model: 'EUNOS PRESSO',
        image: 'images/cars/mazda-eunos-presso.jpg'
    },
    {
        id: 304,
        brand: 'Mazda',
        model: 'EUNOS ROADSTER',
        image: 'images/cars/mazda-eunos-roadster.webp'
    },
    {
        id: 305,
        brand: 'Mazda',
        model: 'FAMILIA S-WAGON',
        image: 'images/cars/mazda-familia-swagon.jpg'
    },
    {
        id: 306,
        brand: 'Mazda',
        model: 'FAMILIA V',
        image: 'images/cars/mazda-familia-v.jpg'
    },
    {
        id: 307,
        brand: 'Mazda',
        model: 'FLAIR',
        image: 'images/cars/mazda-flair.jpg'
    },
    {
        id: 308,
        brand: 'Mazda',
        model: 'FLAIR CROSSOVER',
        image: 'images/cars/mazda-flair-crossover.jpg'
    },
    {
        id: 309,
        brand: 'Mazda',
        model: 'FLAIR CUSTOM STYLE',
        image: 'images/cars/mazda-flair-custom-style.jpg'
    },
    {
        id: 310,
        brand: 'Mazda',
        model: 'FLAIR WAGON',
        image: 'images/cars/mazda-flair-wagon.jpg'
    },
    {
        id: 311,
        brand: 'Mazda',
        model: 'MPV',
        image: 'images/cars/mazda-mpv.jpg'
    },
    {
        id: 312,
        brand: 'Mazda',
        model: 'SCRUM T',
        image: 'images/cars/mazda-scrum-t.jpg'
    },
    {
        id: 313,
        brand: 'Mazda',
        model: 'SCRUM V',
        image: 'images/cars/mazda-scrum-v.jpg'
    },
    {
        id: 314,
        brand: 'Mazda',
        model: 'SCRUM W',
        image: 'images/cars/mazda-scrum-w.jpg'
    },
    {
        id: 315,
        brand: 'Mazda',
        model: 'SPIANO',
        image: 'images/cars/mazda-spiano.jpg'
    },
    {
        id: 316,
        brand: 'Mazda',
        model: 'TITAN',
        image: 'images/cars/mazda-titan.jpg'
    },
    {
        id: 317,
        brand: 'Mazda',
        model: 'VERISA',
        image: 'images/cars/mazda-verisa.jpg'
    },
    {
        id: 318,
        brand: 'Mazda',
        model: 'MAZDA6 W',
        image: 'images/cars/mazda6-w.webp'
    },
    {
        id: 464,
        brand: 'Daihatsu',
        model: 'ALTIS',
        image: 'images/cars/daihatsu-altis.jpg'
    },
    {
        id: 465,
        brand: 'Daihatsu',
        model: 'ATRAI7',
        image: 'images/cars/daihatsu-atrai-7.jpg'
    },
    {
        id: 466,
        brand: 'Daihatsu',
        model: 'ATRAI V',
        image: 'images/cars/daihatsu-atrai-v.png'
    },
    {
        id: 467,
        brand: 'Daihatsu',
        model: 'ATRAI W',
        image: 'images/cars/daihatsu-atrai-w.jpg'
    },
    {
        id: 468,
        brand: 'Daihatsu',
        model: 'BEGO',
        image: 'images/cars/daihatsu-bego.jpg'
    },
    {
        id: 469,
        brand: 'Daihatsu',
        model: 'BOON',
        image: 'images/cars/daihatsu-boon.jpg'
    },
    {
        id: 470,
        brand: 'Daihatsu',
        model: 'BOON LUMINAS',
        image: 'images/cars/daihatsu-boon-luminas.jpg'
    },
    {
        id: 471,
        brand: 'Daihatsu',
        model: 'CAST',
        image: 'images/cars/daihatsu-cast.jpg'
    },
    {
        id: 472,
        brand: 'Daihatsu',
        model: 'C00',
        image: 'images/cars/daihatsu-coo.jpg'
    },
    {
        id: 473,
        brand: 'Daihatsu',
        model: 'COPEN',
        image: 'images/cars/daihatsu-copen.jpg'
    },
    {
        id: 474,
        brand: 'Daihatsu',
        model: 'DELTA',
        image: 'images/cars/daihatsu-delta.jpg'
    },
    {
        id: 475,
        brand: 'Daihatsu',
        model: 'ESSE',
        image: 'images/cars/daihatsu-esse.jpg'
    },
    {
        id: 476,
        brand: 'Daihatsu',
        model: 'HIJET',
        image: 'images/cars/daihatsu-hijet.jpg'
    },
    {
        id: 477,
        brand: 'Daihatsu',
        model: 'HIJET T',
        image: 'images/cars/daihatsu-hijet-t.jpg'
    },
    {
        id: 478,
        brand: 'Daihatsu',
        model: 'HIJET V',
        image: 'images/cars/daihatsu-hijet-v.png'
    },
    {
        id: 479,
        brand: 'Daihatsu',
        model: 'MIDGET2',
        image: 'images/cars/daihatsu-midget-2.avif'
    },
    {
        id: 480,
        brand: 'Daihatsu',
        model: 'MIRA AVY',
        image: 'images/cars/daihatsu-mira-avy.jpg'
    },
    {
        id: 481,
        brand: 'Daihatsu',
        model: 'MIRA CUSTOM',
        image: 'images/cars/daihatsu-mira-custom.jpg'
    },
    {
        id: 482,
        brand: 'Daihatsu',
        model: 'MIRA e:S',
        image: 'images/cars/daihatsu-mira-es.jpg'
    },
    {
        id: 483,
        brand: 'Daihatsu',
        model: 'MIRA',
        image: 'images/cars/daihatsu-mira.webp'
    },
    {
        id: 484,
        brand: 'Daihatsu',
        model: 'MIRA GINO',
        image: 'images/cars/daihatsu-mira-gino.jpg'
    },
    {
        id: 485,
        brand: 'Daihatsu',
        model: 'MIRA TOCOT',
        image: 'images/cars/daihatsu-mira-tocot.jpg'
    },
    {
        id: 486,
        brand: 'Daihatsu',
        model: 'MIRA V',
        image: 'images/cars/daihatsu-mira-v.jpg'
    },
    {
        id: 487,
        brand: 'Daihatsu',
        model: 'MOVE',
        image: 'images/cars/daihatsu-move.jpg'
    },
    {
        id: 488,
        brand: 'Daihatsu',
        model: 'MOVE CANBUS',
        image: 'images/cars/daihatsu-move-canbus.png'
    },
    {
        id: 489,
        brand: 'Daihatsu',
        model: 'MOVE CONTE',
        image: 'images/cars/daihatsu-move-conte.jpg'
    },
    {
        id: 490,
        brand: 'Daihatsu',
        model: 'NAKED',
        image: 'images/cars/daihatsu-naked.jpg'
    },
    {
        id: 491,
        brand: 'Daihatsu',
        model: 'ROCCY',
        image: 'images/cars/daihatsu-rocky.jpg'
    },
    {
        id: 492,
        brand: 'Daihatsu',
        model: 'TAFT',
        image: 'images/cars/daihatsu-taft.jpg'
    },
    {
        id: 493,
        brand: 'Daihatsu',
        model: 'TANTO',
        image: 'images/cars/daihatsu-tanto.jpg'
    },
    {
        id: 494,
        brand: 'Daihatsu',
        model: 'TANTO CUSTOM',
        image: 'images/cars/daihatsu-tanto-custom.png'
    },
    {
        id: 495,
        brand: 'Daihatsu',
        model: 'TANTO EXE',
        image: 'images/cars/daihatsu-tanto-exe.jpg'
    },
    {
        id: 496,
        brand: 'Daihatsu',
        model: 'TERIOS KID',
        image: 'images/cars/daihatsu-terios-kid.jpg'
    },
    {
        id: 497,
        brand: 'Daihatsu',
        model: 'THOR',
        image: 'images/cars/daihatsu-thor.jpg'
    },
    {
        id: 498,
        brand: 'Daihatsu',
        model: 'WAKE',
        image: 'images/cars/daihatsu-wake.jpg'
    },
    {
        id: 499,
        brand: 'Hino',
        model: 'DUTRO',
        image: 'images/cars/hino-dutro.jpg'
    },
    {
        id: 500,
        brand: 'Hino',
        model: 'LIESSE',
        image: 'images/cars/hino-liesse.jpg'
    },
    {
        id: 501,
        brand: 'Hino',
        model: 'LIESSE2',
        image: 'images/cars/hino-liesse2.jpg'
    },
    {
        id: 502,
        brand: 'Hino',
        model: 'MELPHA',
        image: 'images/cars/hino-melpha.jpg'
    },
    {
        id: 503,
        brand: 'Hino',
        model: 'PROFIA',
        image: 'images/cars/hino-profia.jpg'
    },
    {
        id: 504,
        brand: 'Hino',
        model: 'RANGER',
        image: 'images/cars/hino-ranger.avif'
    },
    {
        id: 505,
        brand: 'Hino',
        model: 'RANGER2',
        image: 'images/cars/hino-ranger2.jpg'
    },
    {
        id: 506,
        brand: 'Hino',
        model: 'SELEGA',
        image: 'images/cars/hino-selega.jpg'
    },
    {
        id: 507,
        brand: 'Hino',
        model: 'SUPER DOLPHIN',
        image: 'images/cars/hino-super-dolphin.jpg'
    },
    {
        id: 508,
        brand: 'Hino',
        model: 'SUPER DOLPHIN PROFIA',
        image: 'images/cars/hino-super-dolphin-profia.jpg'
    },
    {
        id: 324,
        brand: 'Mitsubishi',
        model: 'AERO QUEEN',
        image: 'images/cars/mitsubishi-aero-queen.png'
    },
    {
        id: 325,
        brand: 'Mitsubishi',
        model: 'AIRTREK',
        image: 'images/cars/mitsubishi-airtrek.jpg'
    },
    {
        id: 326,
        brand: 'Mitsubishi',
        model: 'CANTER',
        image: 'images/cars/mitsubishi-canter.png'
    },
    {
        id: 327,
        brand: 'Mitsubishi',
        model: 'CHARIOT GRANDIS',
        image: 'images/cars/mitsubishi-chariot-grandis.jpg'
    },
    {
        id: 328,
        brand: 'Mitsubishi',
        model: 'COLT',
        image: 'images/cars/mitsubishi-colt.jpg'
    },
    {
        id: 329,
        brand: 'Mitsubishi',
        model: 'COLT PLUS',
        image: 'images/cars/mitsubishi-colt-plus.jpg'
    },
    {
        id: 330,
        brand: 'Mitsubishi',
        model: 'eK CUSTOM',
        image: 'images/cars/mitsubishi-ek-custom.jpg'
    },
    {
        id: 331,
        brand: 'Mitsubishi',
        model: 'eK SPACE',
        image: 'images/cars/mitsubishi-ek-space.jpg'
    },
    {
        id: 332,
        brand: 'Mitsubishi',
        model: 'eK SPACE CUSTOM',
        image: 'images/cars/mitsubishi-ek-space-custom.jpg'
    },
    {
        id: 333,
        brand: 'Mitsubishi',
        model: 'ECLIPSE',
        image: 'images/cars/mitsubishi-eclipse.jpg'
    },
    {
        id: 334,
        brand: 'Mitsubishi',
        model: 'ECLIPSE CROSS PHEV',
        image: 'images/cars/mitsubishi-eclipse-cross-phev.png'
    },
    {
        id: 335,
        brand: 'Mitsubishi',
        model: 'DELICA D2',
        image: 'images/cars/mitsubishi-delica-d2.jpg'
    },
    {
        id: 336,
        brand: 'Mitsubishi',
        model: 'DELICA D3',
        image: 'images/cars/mitsubishi-delica-d3.jpg'
    },
    {
        id: 337,
        brand: 'Mitsubishi',
        model: 'DELICA MINI',
        image: 'images/cars/mitsubishi-delica-mini.png'
    },
    {
        id: 338,
        brand: 'Mitsubishi',
        model: 'DELICA SPACEGEAR',
        image: 'images/cars/mitsubishi-delica-spacegear.jpg'
    },
    {
        id: 339,
        brand: 'Mitsubishi',
        model: 'DELICA T',
        image: 'images/cars/mitsubishi-delica-t.jpg'
    },
    {
        id: 340,
        brand: 'Mitsubishi',
        model: 'DELICA V',
        image: 'images/cars/mitsubishi-delica-v.webp'
    },
    {
        id: 341,
        brand: 'Mitsubishi',
        model: 'DELICA W',
        image: 'images/cars/mitsubishi-delica-w.jpg'
    },
    {
        id: 342,
        brand: 'Mitsubishi',
        model: 'eK SPORT',
        image: 'images/cars/mitsubishi-ek-sport.jpg'
    },
    {
        id: 343,
        brand: 'Mitsubishi',
        model: 'eK X',
        image: 'images/cars/mitsubishi-ek-x.jpg'
    },
    {
        id: 344,
        brand: 'Mitsubishi',
        model: 'eK X EV',
        image: 'images/cars/mitsubishi-ek-x-ev.webp'
    },
    {
        id: 345,
        brand: 'Mitsubishi',
        model: 'eK X SPACE',
        image: 'images/cars/mitsubishi-ek-x-space.jpg'
    },
    {
        id: 346,
        brand: 'Mitsubishi',
        model: 'FIGHTER',
        image: 'images/cars/mitsubishi-fighter.jpg'
    },
    {
        id: 347,
        brand: 'Mitsubishi',
        model: 'FK/FM SERIES',
        image: 'images/cars/mitsubishi-fk-fm-series.jpg'
    },
    {
        id: 348,
        brand: 'Mitsubishi',
        model: 'FORTE',
        image: 'images/cars/mitsubishi-forte.webp'
    },
    {
        id: 349,
        brand: 'Mitsubishi',
        model: 'GALANT FORTIS',
        image: 'images/cars/mitsubishi-galant-fortis.jpg'
    },
    {
        id: 350,
        brand: 'Mitsubishi',
        model: 'GRANDIS',
        image: 'images/cars/mitsubishi-grandis.jpg'
    },
    {
        id: 351,
        brand: 'Mitsubishi',
        model: 'i',
        image: 'images/cars/mitsubishi-i.jpg'
    },
    {
        id: 352,
        brand: 'Mitsubishi',
        model: 'i MIEV',
        image: 'images/cars/mitsubishi-i-miev.webp'
    },
    {
        id: 353,
        brand: 'Mitsubishi',
        model: 'JEEP',
        image: 'images/cars/mitsubishi-jeep.jpg'
    },
    {
        id: 354,
        brand: 'Mitsubishi',
        model: 'LANCER CEDIA S/D',
        image: 'images/cars/mitsubishi-lancer-cedia-sd.jpg'
    },
    {
        id: 355,
        brand: 'Mitsubishi',
        model: 'LANCER CEDIA W',
        image: 'images/cars/mitsubishi-lancer-cedia-w.jpg'
    },
    {
        id: 356,
        brand: 'Mitsubishi',
        model: 'LANCER S/D',
        image: 'images/cars/mitsubishi-lancer-sd.webp'
    },
    {
        id: 357,
        brand: 'Mitsubishi',
        model: 'LANCER V',
        image: 'images/cars/mitsubishi-lancer-v.jpg'
    },
    {
        id: 358,
        brand: 'Mitsubishi',
        model: 'LANCER W',
        image: 'images/cars/mitsubishi-lancer-w.webp'
    },
    {
        id: 359,
        brand: 'Mitsubishi',
        model: 'LEGNUM',
        image: 'images/cars/mitsubishi-legnum.jpg'
    },
    {
        id: 360,
        brand: 'Mitsubishi',
        model: 'MINICA',
        image: 'images/cars/mitsubishi-minica.jpg'
    },
    {
        id: 361,
        brand: 'Mitsubishi',
        model: 'MINICAB MiEV',
        image: 'images/cars/mitsubishi-minicab-miev.jpg'
    },
    {
        id: 362,
        brand: 'Mitsubishi',
        model: 'MINICAB T',
        image: 'images/cars/mitsubishi-minicab-t.jpg'
    },
    {
        id: 363,
        brand: 'Mitsubishi',
        model: 'MINICAB V',
        image: 'images/cars/mitsubishi-minicab-v.jpg'
    },
    {
        id: 364,
        brand: 'Mitsubishi',
        model: 'MIRAGE H/B',
        image: 'images/cars/mitsubishi-mirage-hb.jpg'
    },
    {
        id: 365,
        brand: 'Mitsubishi',
        model: 'OUTLANDER PHEV',
        image: 'images/cars/mitsubishi-outlander-phev.jpg'
    },
    {
        id: 366,
        brand: 'Mitsubishi',
        model: 'PAJERO iO',
        image: 'images/cars/mitsubishi-pajero-io.webp'
    },
    {
        id: 367,
        brand: 'Mitsubishi',
        model: 'PAJERO W',
        image: 'images/cars/mitsubishi-pajero-w.jpg'
    },
    {
        id: 368,
        brand: 'Mitsubishi',
        model: 'SUPER GREAT',
        image: 'images/cars/mitsubishi-super-great.jpg'
    },
    {
        id: 369,
        brand: 'Mitsubishi',
        model: 'THE GREAT',
        image: 'images/cars/mitsubishi-the-great.jpg'
    },
    {
        id: 370,
        brand: 'Mitsubishi',
        model: 'TOPPO',
        image: 'images/cars/mitsubishi-toppo.jpg'
    },
    {
        id: 371,
        brand: 'Mitsubishi',
        model: 'TOPPO BJ',
        image: 'images/cars/mitsubishi-toppo-bj.jpg'
    },
    {
        id: 372,
        brand: 'Mitsubishi',
        model: 'TOWNBOX',
        image: 'images/cars/mitsubishi-townbox.jpg'
    },
    {
        id: 373,
        brand: 'Mitsubishi',
        model: 'TRITON',
        image: 'images/cars/mitsubishi-triton.png'
    },
    {
        id: 509,
        brand: 'Mercedes',
        model: 'AMG CLAclass',
        image: 'images/cars/mercedes-amg-cla-class.png'
    },
    {
        id: 510,
        brand: 'Mercedes',
        model: 'AMG CLSclass',
        image: 'images/cars/mercedes-amg-cls-class.jpg'
    },
    {
        id: 511,
        brand: 'Mercedes',
        model: 'AMG Cclass',
        image: 'images/cars/mercedes-c-class.avif'
    },
    {
        id: 512,
        brand: 'Mercedes',
        model: 'AMG Eclass',
        image: 'images/cars/mercedes-amg-e-class.jpg'
    },
    {
        id: 513,
        brand: 'Mercedes',
        model: 'AMG GLC Coupe',
        image: 'images/cars/mercedes-amg-glc-coupe.jpg'
    },
    {
        id: 514,
        brand: 'Mercedes',
        model: 'AMG Gclass',
        image: 'images/cars/mercedes-amg-g-class.webp'
    },
    {
        id: 515,
        brand: 'Mercedes',
        model: 'Aclass',
        image: 'images/cars/mercedes-a-class.jpg'
    },
    {
        id: 516,
        brand: 'Mercedes',
        model: 'Bclass',
        image: 'images/cars/mercedes-b-class.jpg'
    },
    {
        id: 517,
        brand: 'Mercedes',
        model: 'CLA ShootingBrake',
        image: 'images/cars/mercedes-cla-shooting-brake.jpg'
    },
    {
        id: 518,
        brand: 'Mercedes',
        model: 'CLAclass',
        image: 'images/cars/mercedes-cla-class.jpg'
    },
    {
        id: 519,
        brand: 'Mercedes',
        model: 'CLKclass Cabriolet',
        image: 'images/cars/mercedes-clk-class-cabriolet.webp'
    },
    {
        id: 520,
        brand: 'Mercedes',
        model: 'CLS ShootingBrake',
        image: 'images/cars/mercedes-cls-shooting-brake.avif'
    },
    {
        id: 521,
        brand: 'Mercedes',
        model: 'CLSclass',
        image: 'images/cars/mercedes-cls-class.webp'
    },
    {
        id: 522,
        brand: 'Mercedes',
        model: 'Cclass',
        image: 'images/cars/mercedes-c-class.avif'
    },
    {
        id: 523,
        brand: 'Mercedes',
        model: 'Cclass Coupe',
        image: 'images/cars/mercedes-c-class-coupe.avif'
    },
    {
        id: 524,
        brand: 'Mercedes',
        model: 'Cclass StationW',
        image: 'images/cars/mercedes-c-class-station-w.avif'
    },
    {
        id: 525,
        brand: 'Mercedes',
        model: 'Eclass',
        image: 'images/cars/mercedes-e-class.webp'
    },
    {
        id: 526,
        brand: 'Mercedes',
        model: 'Eclass Coupe',
        image: 'images/cars/mercedes-e-class-coupe.jpg'
    },
    {
        id: 527,
        brand: 'Mercedes',
        model: 'Eclass StationW',
        image: 'images/cars/mercedes-e-class-station-w.webp'
    },
    {
        id: 528,
        brand: 'Mercedes',
        model: 'GLAclass',
        image: 'images/cars/mercedes-gla-class.jpg'
    },
    {
        id: 529,
        brand: 'Mercedes',
        model: 'GLC',
        image: 'images/cars/mercedes-glc.avif'
    },
    {
        id: 530,
        brand: 'Mercedes',
        model: 'GLC COUPE',
        image: 'images/cars/mercedes-glc-coupe.avif'
    },
    {
        id: 531,
        brand: 'Mercedes',
        model: 'GLS',
        image: 'images/cars/mercedes-gls.jpg'
    },
    {
        id: 532,
        brand: 'Mercedes',
        model: 'Gclass',
        image: 'images/cars/mercedes-g-class.avif'
    },
    {
        id: 533,
        brand: 'Mercedes',
        model: 'Mclass',
        image: 'images/cars/mercedes-m-class.jpg'
    },
    {
        id: 534,
        brand: 'Mercedes',
        model: 'SLKclass',
        image: 'images/cars/mercedes-slk-class.avif'
    },
    {
        id: 535,
        brand: 'Mercedes',
        model: 'Sclass',
        image: 'images/cars/mercedes-s-class.jpg'
    },
    {
        id: 536,
        brand: 'Mercedes',
        model: 'Slclass',
        image: 'images/cars/mercedes-sl-class.jpg'
    },
    {
        id: 537,
        brand: 'Mercedes',
        model: 'Vclass',
        image: 'images/cars/mercedes-v-class.avif'
    },
    {
        id: 538,
        brand: 'BMW',
        model: '1series',
        image: 'images/cars/bmw-1-series.webp'
    },
    {
        id: 539,
        brand: 'BMW',
        model: '2series ACTIVE TOURER',
        image: 'images/cars/bmw-2-series-active-tourer.webp'
    },
    {
        id: 540,
        brand: 'BMW',
        model: '2series Coupe',
        image: 'images/cars/bmw-2-series-coupe.webp'
    },
    {
        id: 541,
        brand: 'BMW',
        model: '2series GRAN COUPE',
        image: 'images/cars/bmw-2-series-gran-coupe.jpg'
    },
    {
        id: 542,
        brand: 'BMW',
        model: '2series GRAN TOURER',
        image: 'images/cars/bmw-2-series-gran-tourer.jpg'
    },
    {
        id: 543,
        brand: 'BMW',
        model: '3series',
        image: 'images/cars/bmw-3-series.avif'
    },
    {
        id: 544,
        brand: 'BMW',
        model: '3series Coupe',
        image: 'images/cars/bmw-3-series-coupe.avif'
    },
    {
        id: 545,
        brand: 'BMW',
        model: '3series GRAN TURISMO',
        image: 'images/cars/bmw-3-series-gran-turismo.webp'
    },
    {
        id: 546,
        brand: 'BMW',
        model: '3series Touring',
        image: 'images/cars/bmw-3-series-touring.webp'
    },
    {
        id: 547,
        brand: 'BMW',
        model: '5series',
        image: 'images/cars/bmw-5-series-touring.avif'
    },
    {
        id: 548,
        brand: 'BMW',
        model: '5series Touring',
        image: 'images/cars/bmw-5-series-touring.avif'
    },
    {
        id: 549,
        brand: 'BMW',
        model: '6series',
        image: 'images/cars/bmw-6-series.jpg'
    },
    {
        id: 550,
        brand: 'BMW',
        model: 'Z4',
        image: 'images/cars/bmw-z4.jpg'
    },
    {
        id: 551,
        brand: 'BMW',
        model: 'X1',
        image: 'images/cars/bmw-x1.jpg'
    },
    {
        id: 552,
        brand: 'BMW',
        model: 'X1',
        image: 'images/cars/bmw-x1.jpg'
    },
    {
        id: 553,
        brand: 'BMW',
        model: 'X3',
        image: 'images/cars/bmw-x3.jpg'
    },
    {
        id: 554,
        brand: 'BMW',
        model: 'X4',
        image: 'images/cars/bmw-x4.webp'
    },
    {
        id: 555,
        brand: 'BMW',
        model: 'X5',
        image: 'images/cars/bmw-x5.webp'
    },
    {
        id: 556,
        brand: 'BMW',
        model: 'X6',
        image: 'images/cars/bmw-x6.webp'
    },
    {
        id: 557,
        brand: 'Volkswagen',
        model: 'ARTEON',
        image: 'images/cars/volkswagen-arteon.webp'
    },
    {
        id: 558,
        brand: 'Volkswagen',
        model: 'BEETLE',
        image: 'images/cars/volkswagen-beetle.jpg'
    },
    {
        id: 559,
        brand: 'Volkswagen',
        model: 'BORA',
        image: 'images/cars/volkswagen-bora.jpg'
    },
    {
        id: 560,
        brand: 'Volkswagen',
        model: 'CROSS POLO',
        image: 'images/cars/volkswagen-cross-polo.avif'
    },
    {
        id: 561,
        brand: 'Volkswagen',
        model: 'CROSS TOURAN',
        image: 'images/cars/volkswagen-cross-touran.jpg'
    },
    {
        id: 562,
        brand: 'Volkswagen',
        model: 'CROSS UP!',
        image: 'images/cars/volkswagen-cross-up.jpg'
    },
    {
        id: 563,
        brand: 'Volkswagen',
        model: 'EOS',
        image: 'images/cars/volkswagen-eos.avif'
    },
    {
        id: 564,
        brand: 'Volkswagen',
        model: 'GOLF',
        image: 'images/cars/volkswagen-golf.webp'
    },
    {
        id: 565,
        brand: 'Volkswagen',
        model: 'GOLF ALLTRACK',
        image: 'images/cars/volkswagen-golf-alltrack.avif'
    },
    {
        id: 566,
        brand: 'Volkswagen',
        model: 'GOLF Cabriolet',
        image: 'images/cars/volkswagen-golf-cabriolet.jpg'
    },
    {
        id: 567,
        brand: 'Volkswagen',
        model: 'GOLF PLUS',
        image: 'images/cars/volkswagen-golf-plus.jpg'
    },
    {
        id: 568,
        brand: 'Volkswagen',
        model: 'GOLF TOURAN',
        image: 'images/cars/volkswagen-golf-touran.jpg'
    },
    {
        id: 569,
        brand: 'Volkswagen',
        model: 'GOLF VARIANT',
        image: 'images/cars/volkswagen-golf-variant.jpg'
    },
    {
        id: 570,
        brand: 'Volkswagen',
        model: 'GOLF Wagon',
        image: 'images/cars/volkswagen-golf-wagon.avif'
    },
    {
        id: 571,
        brand: 'Volkswagen',
        model: 'JETTA',
        image: 'images/cars/volkswagen-jetta.avif'
    },
    {
        id: 572,
        brand: 'Volkswagen',
        model: 'KARMANN GHIA',
        image: 'images/cars/volkswagen-karmann-ghia.jpg'
    },
    {
        id: 573,
        brand: 'Volkswagen',
        model: 'LUPO',
        image: 'images/cars/volkswagen-lupo.jpg'
    },
    {
        id: 574,
        brand: 'Volkswagen',
        model: 'NEW BEETLE',
        image: 'images/cars/volkswagen-new-beetle.webp'
    },
    {
        id: 575,
        brand: 'Volkswagen',
        model: 'NEW BEETLE Cabriolet',
        image: 'images/cars/volkswagen-new-beetle-cabriolet.avif'
    },
    {
        id: 576,
        brand: 'Volkswagen',
        model: 'PASSAT',
        image: 'images/cars/volkswagen-passat.webp'
    },
    {
        id: 577,
        brand: 'Volkswagen',
        model: 'PASSAT CC',
        image: 'images/cars/volkswagen-passat-cc.avif'
    },
    {
        id: 578,
        brand: 'Volkswagen',
        model: 'PASSAT VARIANT',
        image: 'images/cars/volkswagen-passat-variant.jpg'
    },
    {
        id: 579,
        brand: 'Volkswagen',
        model: 'POLO',
        image: 'images/cars/volkswagen-polo.webp'
    },
    {
        id: 580,
        brand: 'Volkswagen',
        model: 'SANTANA',
        image: 'images/cars/volkswagen-santana.jpg'
    },
    {
        id: 581,
        brand: 'Volkswagen',
        model: 'SCIROCCO',
        image: 'images/cars/volkswagen-scirocco.webp'
    },
    {
        id: 582,
        brand: 'Volkswagen',
        model: 'SHARAN',
        image: 'images/cars/volkswagen-sharan.webp'
    },
    {
        id: 583,
        brand: 'Volkswagen',
        model: 'T-CROSS',
        image: 'images/cars/volkswagen-t-cross.webp'
    },
    {
        id: 584,
        brand: 'Volkswagen',
        model: 'T-ROC',
        image: 'images/cars/volkswagen-t-roc.jpg'
    },
    {
        id: 585,
        brand: 'Volkswagen',
        model: 'THE BEETLE',
        image: 'images/cars/volkswagen-the-beetle.jpg'
    },
    {
        id: 586,
        brand: 'Volkswagen',
        model: 'THE BEETLE Cabriolet',
        image: 'images/cars/volkswagen-the-beetle-cabriolet.webp'
    },
    {
        id: 587,
        brand: 'Volkswagen',
        model: 'TIGUAN',
        image: 'images/cars/volkswagen-tiguan.avif'
    },
    {
        id: 588,
        brand: 'Volkswagen',
        model: 'TOUAREG',
        image: 'images/cars/volkswagen-touareg.jpg'
    },
    {
        id: 589,
        brand: 'Volkswagen',
        model: 'UP!',
        image: 'images/cars/volkswagen-up.webp'
    },
    {
        id: 590,
        brand: 'Volkswagen',
        model: 'VENTO',
        image: 'images/cars/volkswagen-vento.webp'
    },
    {
        id: 591,
        brand: 'Volkswagen',
        model: 'VOLKSWAGEN CC',
        image: 'images/cars/volkswagen-cc.webp'
    },
    {
        id: 592,
        brand: 'Audi',
        model: 'Q2',
        image: 'images/cars/audi-q2.avif'
    },
    {
        id: 593,
        brand: 'Audi',
        model: 'Q3 Sportback',
        image: 'images/cars/audi-q3-sportback.avif'
    },
    {
        id: 594,
        brand: 'Audi',
        model: 'Q5',
        image: 'images/cars/audi-q5.avif'
    },
    {
        id: 595,
        brand: 'Audi',
        model: 'Q7',
        image: 'images/cars/audi-q7.avif'
    },
    {
        id: 596,
        brand: 'Audi',
        model: 'S5 Sportback',
        image: 'images/cars/audi-s5-sportback.avif'
    },
    {
        id: 597,
        brand: 'Audi',
        model: 'SQ2',
        image: 'images/cars/audi-sq2.avif'
    },
    {
        id: 598,
        brand: 'Audi',
        model: 'A1',
        image: 'images/cars/audi-a1.avif'
    },
    {
        id: 599,
        brand: 'Audi',
        model: 'A3 Sedan',
        image: 'images/cars/audi-a3-sedan.avif'
    },
    {
        id: 600,
        brand: 'Audi',
        model: 'A6 Avant',
        image: 'images/cars/audi-a6-avant.avif'
    },
    {
        id: 601,
        brand: 'Audi',
        model: 'A8',
        image: 'images/cars/audi-a8.avif'
    },
    {
        id: 602,
        brand: 'Audi',
        model: 'A5 Cabriolet',
        image: 'images/cars/audi-a5-cabriolet.png'
    },
    {
        id: 603,
        brand: 'Audi',
        model: 'A5 Sportback',
        image: 'images/cars/audi-a5-sportback.png'
    },
    {
        id: 604,
        brand: 'Audi',
        model: 'Allroad Quattro',
        image: 'images/cars/audi-allroad-quattro.png'
    },
    {
        id: 605,
        brand: 'Audi',
        model: 'E-tron GT Quattro',
        image: 'images/cars/audi-e-tron-gt-quattro.jpg'
    },
    {
        id: 606,
        brand: 'Audi',
        model: 'R8',
        image: 'images/cars/audi-r8.jpg'
    },
    {
        id: 607,
        brand: 'Audi',
        model: 'S3',
        image: 'images/cars/audi-s3.jpg'
    },
    {
        id: 608,
        brand: 'Audi',
        model: 'S4 Avant',
        image: 'images/cars/audi-s4-avant.webp'
    },
    {
        id: 609,
        brand: 'Audi',
        model: 'S8',
        image: 'images/cars/audi-s8.webp'
    },
    {
        id: 610,
        brand: 'Audi',
        model: 'SQ5',
        image: 'images/cars/audi-sq5.webp'
    },
    {
        id: 611,
        brand: 'Audi',
        model: 'TT Coupé',
        image: 'images/cars/audi-tt-coupe.jpg'
    },
    {
        id: 612,
        brand: 'Audi',
        model: 'TTS Coupe',
        image: 'images/cars/audi-tts-coupe.jpg'
    },
    {
        id: 613,
        brand: 'Audi',
        model: 'A03',
        image: 'images/cars/audi-03.jpg'
    },
    {
        id: 614,
        brand: 'Audi',
        model: 'A1 Sportback',
        image: 'images/cars/audi-a1-sportback.jpg'
    },
    {
        id: 615,
        brand: 'Audi',
        model: 'A3 Sportback',
        image: 'images/cars/audi-a3-sportback.jpg'
    },
    {
        id: 616,
        brand: 'Audi',
        model: 'A4 Allroad Quattro',
        image: 'images/cars/audi-a4-allroad-quattro.png'
    },
    {
        id: 617,
        brand: 'Audi',
        model: 'A4 Avant',
        image: 'images/cars/audi-a4-avant.jpg'
    },
    {
        id: 618,
        brand: 'Audi',
        model: 'A4',
        image: 'images/cars/audi-a4.png'
    },
    {
        id: 619,
        brand: 'Audi',
        model: 'A5',
        image: 'images/cars/audi-a5.jpg'
    },
    {
        id: 620,
        brand: 'Audi',
        model: 'A6 Allroad Quattro',
        image: 'images/cars/audi-a6-allroad-quattro.png'
    },
    {
        id: 621,
        brand: 'Audi',
        model: 'A6 Hybrid',
        image: 'images/cars/audi-a6-hybrid.webp'
    },
    {
        id: 622,
        brand: 'Audi',
        model: 'A6',
        image: 'images/cars/audi-a6.jpg'
    },
    {
        id: 623,
        brand: 'Audi',
        model: 'A7 Sportback',
        image: 'images/cars/audi-a7-sportback.jpg'
    },
    {
        id: 624,
        brand: 'Audi',
        model: 'A8 Hybrid',
        image: 'images/cars/audi-a8-hybrid.jpg'
    },
    {
        id: 625,
        brand: 'Volvo',
        model: '850 ESTATE',
        image: 'images/cars/volvo-850-estate.jpg'
    },
    {
        id: 626,
        brand: 'Volvo',
        model: 'S40',
        image: 'images/cars/volvo-s40.jpg'
    },
    {
        id: 627,
        brand: 'Volvo',
        model: 'S60',
        image: 'images/cars/volvo-s60.webp'
    },
    {
        id: 628,
        brand: 'Volvo',
        model: 'V40',
        image: 'images/cars/volvo-v40.jpg'
    },
    {
        id: 629,
        brand: 'Volvo',
        model: 'V40 Crosscountry',
        image: 'images/cars/volvo-v40-cross-country.jpg'
    },
    {
        id: 630,
        brand: 'Volvo',
        model: 'V60',
        image: 'images/cars/volvo-v60.jpg'
    },
    {
        id: 631,
        brand: 'Volvo',
        model: 'V70',
        image: 'images/cars/volvo-v70.jpg'
    },
    {
        id: 632,
        brand: 'Volvo',
        model: 'XC60',
        image: 'images/cars/volvo-xc60.webp'
    },
    {
        id: 633,
        brand: 'Volvo',
        model: 'XC90',
        image: 'images/cars/volvo-xc90.webp'
    },
    {
        id: 634,
        brand: 'Peugeot',
        model: '2008',
        image: 'images/cars/peugeot-2008.jpg'
    },
    {
        id: 635,
        brand: 'Peugeot',
        model: '207',
        image: 'images/cars/peugeot-207.avif'
    },
    {
        id: 636,
        brand: 'Peugeot',
        model: '208',
        image: 'images/cars/peugeot-208.jpg'
    },
    {
        id: 637,
        brand: 'Peugeot',
        model: '307',
        image: 'images/cars/peugeot-307.webp'
    },
    {
        id: 638,
        brand: 'Peugeot',
        model: '307CC',
        image: 'images/cars/peugeot-307-cc.jpg'
    },
    {
        id: 639,
        brand: 'Peugeot',
        model: '308',
        image: 'images/cars/peugeot-308.avif'
    },
    {
        id: 640,
        brand: 'Peugeot',
        model: '308CC',
        image: 'images/cars/peugeot-308-cc.jpg'
    },
    {
        id: 641,
        brand: 'Peugeot',
        model: '308SW',
        image: 'images/cars/peugeot-308-sw.jpg'
    },
    {
        id: 642,
        brand: 'Chrysler',
        model: '300C',
        image: 'images/cars/chrysler-300c.webp'
    },
    {
        id: 643,
        brand: 'Chrysler',
        model: 'CHEROKEE',
        image: 'images/cars/chrysler-cherokee.jpg'
    },
    {
        id: 644,
        brand: 'Chrysler',
        model: 'COMPASS',
        image: 'images/cars/chrysler-compass.jpg'
    },
    {
        id: 645,
        brand: 'Chrysler',
        model: 'GRAND CHEROKEE',
        image: 'images/cars/chrysler-grand-cherokee.avif'
    },
    {
        id: 646,
        brand: 'Chrysler',
        model: 'PATRIOT',
        image: 'images/cars/chrysler-patriot.jpg'
    },
    {
        id: 647,
        brand: 'Chrysler',
        model: 'RENEGADE',
        image: 'images/cars/chrysler-renegade.png'
    },
    {
        id: 648,
        brand: 'Chrysler',
        model: 'WRANGLER',
        image: 'images/cars/chrysler-wrangler.avif'
    },
    {
        id: 649,
        brand: 'Chrysler',
        model: 'WRANGLER UNLIMITED',
        image: 'images/cars/chrysler-wrangler-unlimited.png'
    },
    {
        id: 650,
        brand: 'Audi',
        model: 'TT COUPE',
        image: 'images/cars/audi-tt-coupe.jpg'
    },
    {
        id: 651,
        brand: 'Daihatsu',
        model: 'MIRA COCOA',
        image: 'images/cars/daihatsu-mira-cocoa.jpg'
    },
    {
        id: 652,
        brand: 'Ford',
        model: 'Freda',
        image: 'images/cars/ford-freda.webp'
    },
    {
        id: 653,
        brand: 'Honda',
        model: 'CIVIC',
        image: 'images/cars/honda-civic.webp'
    },
    {
        id: 654,
        brand: 'Mitsubishi',
        model: 'DIAMANTE W',
        image: 'images/cars/mitsubishi-diamante-w.jpg'
    },
    {
        id: 655,
        brand: 'Nissan',
        model: 'Datsun T',
        image: 'images/cars/nissan-datsun-truck.jpg'
    },
    {
        id: 656,
        brand: 'Nissan',
        model: 'Roox',
        image: 'images/cars/nissan-roox.webp'
    },
    {
        id: 657,
        brand: 'Toyota',
        model: 'AVENSIS W',
        image: 'images/cars/toyota-avensis-w.jpg'
    },
    {
        id: 658,
        brand: 'Toyota',
        model: 'COROLLA CROSS',
        image: 'images/cars/corolla-cross.webp'
    },
    {
        id: 659,
        brand: 'Toyota',
        model: 'Corolla V',
        image: 'images/cars/toyota-corolla-v.png'
    },
    {
        id: 660,
        brand: 'Toyota',
        model: 'Corolla W',
        image: 'images/cars/toyota-corolla-w.jpg'
    },
    {
        id: 661,
        brand: 'Toyota',
        model: 'Corsa S/D',
        image: 'images/cars/toyota-corsa-sd.png'
    },
    {
        id: 662,
        brand: 'Toyota',
        model: 'Grand Hiace W',
        image: 'images/cars/toyota-grand-hiace-w.jpg'
    },
    {
        id: 663,
        brand: 'Toyota',
        model: 'Hiace T',
        image: 'images/cars/toyota-hiace-t.jpg'
    },
    {
        id: 664,
        brand: 'Toyota',
        model: 'Mark2',
        image: 'images/cars/toyota-mark2.jpeg'
    },
    {
        id: 665,
        brand: 'Toyota',
        model: 'Mark2 V',
        image: 'images/cars/toyota-mark2-v.jpg'
    },
    {
        id: 666,
        brand: 'Toyota',
        model: 'Mark2 W',
        image: 'images/cars/toyota-mark2-w.jpg'
    },
    {
        id: 667,
        brand: 'Toyota',
        model: 'Succeed V',
        image: 'images/cars/toyota-succeed-v.webp'
    }
];

// Fetch all cars
async function fetchAllCars() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(carsData), 500);
    });
}

// Fetch featured cars
async function fetchFeaturedCars() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const featured = carsData.filter(car => car.featured);
            resolve(featured);
        }, 500);
    });
}

// Fetch car by ID
async function fetchCarById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const car = carsData.find(c => c.id === parseInt(id));
            if (car) {
                resolve(car);
            } else {
                reject('Car not found');
            }
        }, 500);
    });
}

// Filter cars
async function filterCarsByParams(params) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let filtered = carsData;

            if (params.brand && params.brand !== '') {
                filtered = filtered.filter(car => car.brand === params.brand);
            }

            if (params.yearMin) {
                filtered = filtered.filter(car => car.year >= params.yearMin);
            }

            if (params.yearMax) {
                filtered = filtered.filter(car => car.year <= params.yearMax);
            }

            if (params.priceMin) {
                filtered = filtered.filter(car => car.price >= params.priceMin);
            }

            if (params.priceMax) {
                filtered = filtered.filter(car => car.price <= params.priceMax);
            }

            if (params.mileageMax) {
                filtered = filtered.filter(car => car.mileage <= params.mileageMax);
            }

            if (params.transmission && params.transmission !== '') {
                filtered = filtered.filter(car => car.transmission === params.transmission);
            }

            if (params.condition && params.condition !== '') {
                filtered = filtered.filter(car => car.condition === params.condition);
            }

            resolve(filtered);
        }, 500);
    });
}

// Submit contact form
async function submitContactForm(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Contact form submitted:', data);
            resolve({ success: true, message: 'Thank you for contacting us!' });
        }, 1000);
    });
}
