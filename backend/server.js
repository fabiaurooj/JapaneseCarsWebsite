const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..')));

// Sample database
const defaultCarDetails = {
    year: 2020,
    price: 12000,
    mileage: 65000,
    condition: 'Good',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Pearl White',
    engine: '1.8L',
    horsepower: 140,
    featured: false,
    features: []
};

const rawCarsDatabase = [
    {
        id: 1,
        brand: 'Toyota',
        model: 'Corolla',
        year: 2022,
        price: 18500,
        mileage: 25000,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        color: 'Silver',
        engine: '1.8L',
        horsepower: 137,
        featured: true,
        description: 'Low mileage Toyota Corolla in excellent condition. Recently serviced with full maintenance records.',
        image: 'images/cars/corolla-rumion.jpg'
    },
    {
        id: 7,
        brand: 'Toyota',
        model: 'RAV4',
        year: 2022,
        price: 26800,
        mileage: 28000,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        color: 'Gray',
        engine: '2.5L Hybrid',
        horsepower: 219,
        featured: false,
        description: 'Popular Toyota RAV4 hybrid with exceptional fuel economy. Reliable, spacious, and equipped with latest safety technology.',
        image: 'images/cars/toyota-rav4.jpg'
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
        model: 'Datsun T',
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
        model: 'Liberty',
        image: 'images/cars/nissan-liberty.jpg'
    },
    {
        id: 167,
        brand: 'Nissan',
        model: 'March',
        image: 'images/cars/nissan-march.jpg'
    },
    {
        id: 168,
        brand: 'Nissan',
        model: 'Micra C+C',
        image: 'images/cars/nissan-micra-c-plus-c.jpg'
    },
    {
        id: 169,
        brand: 'Nissan',
        model: 'Moco',
        image: 'images/cars/nissan-moco.jpg'
    },
    {
        id: 170,
        brand: 'Nissan',
        model: 'Murano',
        image: 'images/cars/nissan-murano.jpg'
    },
    {
        id: 171,
        brand: 'Nissan',
        model: 'Note',
        image: 'images/cars/nissan-note.jpg'
    },
    {
        id: 172,
        brand: 'Nissan',
        model: 'NT100 Clipper T',
        image: 'images/cars/nissan-nt100-clipper-t.jpg'
    },
    {
        id: 173,
        brand: 'Nissan',
        model: 'NV100 Clipper Rio',
        image: 'images/cars/nissan-nv100-clipper-rio.jpg'
    },
    {
        id: 174,
        brand: 'Nissan',
        model: 'NV100 Clipper V',
        image: 'images/cars/nissan-nv100-clipper-v.jpg'
    },
    {
        id: 175,
        brand: 'Nissan',
        model: 'NV150 AD',
        image: 'images/cars/nissan-nv150-ad.jpg'
    },
    {
        id: 176,
        brand: 'Nissan',
        model: 'NV200 Vanette V',
        image: 'images/cars/nissan-nv200-vanette-v.jpg'
    },
    {
        id: 177,
        brand: 'Nissan',
        model: 'NV200 Vanette W',
        image: 'images/cars/nissan-nv200-vanette-w.jpg'
    },
    {
        id: 178,
        brand: 'Nissan',
        model: 'NV350 Caravan V',
        image: 'images/cars/nissan-nv350-caravan-v.jpg'
    },
    {
        id: 179,
        brand: 'Nissan',
        model: 'NV350 Caravan W',
        image: 'images/cars/nissan-nv350-caravan-w.jpg'
    },
    {
        id: 180,
        brand: 'Nissan',
        model: 'Paramedic',
        image: 'images/cars/nissan-paramedic.jpg'
    },
    {
        id: 181,
        brand: 'Nissan',
        model: 'Ad Van',
        image: 'images/cars/nissan-ad-van.jpg'
    },
    {
        id: 182,
        brand: 'Nissan',
        model: 'NT450 Atlas',
        image: 'images/cars/nissan-nt450-atlas.jpg'
    },
    {
        id: 183,
        brand: 'Nissan',
        model: 'Atlas',
        image: 'images/cars/nissan-atlas.jpg'
    },
    {
        id: 184,
        brand: 'Nissan',
        model: 'Aura',
        image: 'images/cars/nissan-aura.jpg'
    },
    {
        id: 185,
        brand: 'Nissan',
        model: 'Be-1',
        image: 'images/cars/nissan-be-1.jpg'
    },
    {
        id: 186,
        brand: 'Nissan',
        model: 'Big Thumb',
        image: 'images/cars/nissan-big-thumb.webp'
    },
    {
        id: 187,
        brand: 'Nissan',
        model: 'Bluebird Sylphy',
        image: 'images/cars/nissan-bluebird-sylphy.jpg'
    },
    {
        id: 188,
        brand: 'Nissan',
        model: 'Caravan Bus',
        image: 'images/cars/nissan-caravan-bus.jpg'
    },
    {
        id: 189,
        brand: 'Nissan',
        model: 'Caravan V',
        image: 'images/cars/nissan-caravan-v.jpg'
    },
    {
        id: 190,
        brand: 'Nissan',
        model: 'Caravan W',
        image: 'images/cars/nissan-caravan-w.jpg'
    },
    {
        id: 191,
        brand: 'Nissan',
        model: 'Caravan',
        image: 'images/cars/nissan-caravan.jpg'
    },
    {
        id: 192,
        brand: 'Nissan',
        model: 'Cedric',
        image: 'images/cars/nissan-cedric.webp'
    },
    {
        id: 193,
        brand: 'Nissan',
        model: 'Cefiro',
        image: 'images/cars/nissan-cefiro.jpg'
    },
    {
        id: 194,
        brand: 'Nissan',
        model: 'Cima',
        image: 'images/cars/nissan-cima.jpg'
    },
    {
        id: 195,
        brand: 'Nissan',
        model: 'Civilian',
        image: 'images/cars/nissan-civilian.jpg'
    },
    {
        id: 196,
        brand: 'Nissan',
        model: 'Clipper T',
        image: 'images/cars/nissan-clipper-t.jpg'
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
        id: 6,
        brand: 'Mitsubishi',
        model: 'Outlander',
        year: 2020,
        price: 22000,
        mileage: 52000,
        condition: 'Good',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        color: 'White',
        engine: '2.4L',
        horsepower: 168,
        featured: false,
        image: 'images/cars/mitsubishi-outlander.webp',
        description: 'Versatile Mitsubishi Outlander with excellent cargo space and fuel efficiency. Great for families and outdoor enthusiasts.',
        features: ['All-Wheel Drive', 'Apple CarPlay', 'Alloy Wheels', 'Cruise Control', 'Power Locks']
    },
    {
        id: 319,
        brand: 'Mitsubishi',
        model: 'RVR',
        year: 2021,
        price: 19600,
        mileage: 41000,
        condition: 'Good',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        color: 'Gray',
        engine: '1.8L',
        horsepower: 139,
        featured: false,
        image: 'images/cars/mitsubishi-rvr.jpg',
        description: 'Compact Mitsubishi RVR with practical cabin space, smooth automatic transmission, and reliable daily-driving comfort.',
        features: ['Keyless Entry', 'Cruise Control', 'Rear Camera', 'Fog Lamps', 'ABS']
    },
    {
        id: 320,
        brand: 'Mitsubishi',
        model: 'Delica D5',
        year: 2019,
        price: 23800,
        mileage: 57000,
        condition: 'Good',
        transmission: 'Automatic',
        fuelType: 'Diesel',
        color: 'Black',
        engine: '2.2L Turbo Diesel',
        horsepower: 145,
        featured: false,
        image: 'images/cars/mitsubishi-delica-d5.png',
        description: 'Spacious Mitsubishi Delica D5 built for family trips, with excellent interior flexibility and strong road presence.',
        features: ['8 Seats', 'Sliding Doors', '4WD', 'Rear Climate Control', 'Power Mirrors']
    },
    {
        id: 321,
        brand: 'Mitsubishi',
        model: 'Eclipse Cross',
        year: 2022,
        price: 27400,
        mileage: 22000,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        color: 'White',
        engine: '1.5L Turbo',
        horsepower: 152,
        featured: true,
        image: 'images/cars/mitsubishi-eclipse-cross.webp',
        description: 'Modern Mitsubishi Eclipse Cross SUV with bold styling, confident handling, and advanced safety support for city and highway use.',
        features: ['Forward Collision Mitigation', 'Lane Departure Warning', 'Apple CarPlay', 'Dual-Zone AC', '18-inch Alloy Wheels']
    },
    {
        id: 322,
        brand: 'Mitsubishi',
        model: 'Pajero Mini',
        year: 2018,
        price: 9800,
        mileage: 69000,
        condition: 'Good',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        color: 'Silver',
        engine: '660cc Turbo',
        horsepower: 64,
        featured: false,
        image: 'images/cars/mitsubishi-pajero-mini.jpg',
        description: 'Compact Mitsubishi Pajero Mini with a classic kei-SUV profile, ideal for efficient city use and light outdoor travel.',
        features: ['Compact 4WD', 'Power Windows', 'Central Locking', 'Roof Rails', 'Spare Tire Carrier']
    },
    {
        id: 323,
        brand: 'Mitsubishi',
        model: 'EK Wagon',
        year: 2020,
        price: 11200,
        mileage: 36000,
        condition: 'Excellent',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        color: 'Blue',
        engine: '660cc',
        horsepower: 52,
        featured: false,
        image: 'images/cars/mitsubishi-ek-wagon.jpg',
        description: 'Economical Mitsubishi eK Wagon designed for urban commuting with low running costs and easy parking.',
        features: ['Eco Idle', 'Touchscreen Audio', 'Power Steering', 'Dual Airbags', 'Auto Headlights']
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
    }
];

const carsDatabase = rawCarsDatabase.map((car) => {
    const normalized = { ...defaultCarDetails, ...car };

    if (!normalized.description) {
        normalized.description = `${normalized.brand} ${normalized.model} is available for enquiry. Contact us for latest pricing and shipping details.`;
    }

    return normalized;
});

const contactMessages = [];

// Routes

// Get all cars
app.get('/api/cars', (req, res) => {
    res.json(carsDatabase);
});

// Get featured cars
app.get('/api/cars/featured', (req, res) => {
    const featured = carsDatabase.filter(car => car.featured);
    res.json(featured);
});

// Get car by ID
app.get('/api/cars/:id', (req, res) => {
    const car = carsDatabase.find(c => c.id === parseInt(req.params.id));
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
});

// Filter cars
app.post('/api/cars/filter', (req, res) => {
    const { brand, yearMin, yearMax, priceMin, priceMax, mileageMax, transmission, condition } = req.body;
    
    let filtered = carsDatabase;

    if (brand) filtered = filtered.filter(car => car.brand === brand);
    if (yearMin) filtered = filtered.filter(car => car.year >= yearMin);
    if (yearMax) filtered = filtered.filter(car => car.year <= yearMax);
    if (priceMin) filtered = filtered.filter(car => car.price >= priceMin);
    if (priceMax) filtered = filtered.filter(car => car.price <= priceMax);
    if (mileageMax) filtered = filtered.filter(car => car.mileage <= mileageMax);
    if (transmission) filtered = filtered.filter(car => car.transmission === transmission);
    if (condition) filtered = filtered.filter(car => car.condition === condition);

    res.json(filtered);
});

// Submit contact form
app.post('/api/contact', (req, res) => {
    const { name, email, phone, carInterest, message, carImage, preferredFeatures } = req.body;

    const cleanedMessage = String(message || '')
        .replace(/\n?Car image URL:\s*\S+/gi, '')
        .trim();

    if (!name || !email || !phone || !cleanedMessage) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const contactData = {
        id: contactMessages.length + 1,
        name,
        email,
        phone,
        carInterest,
        message: cleanedMessage,
        carImage: carImage || '',
        preferredFeatures: preferredFeatures || '',
        submittedAt: new Date(),
        status: 'new'
    };

    contactMessages.push(contactData);

    // In production, send email notification here
    console.log('New contact submission:', contactData);

    res.json({ success: true, message: 'Thank you for contacting us! We will get back to you soon.' });
});

// Get all contact messages (admin endpoint)
app.get('/api/admin/contacts', (req, res) => {
    // In production, verify authentication before returning this
    res.json(contactMessages);
});

// Mark contact as handled (admin endpoint)
app.put('/api/admin/contacts/:id', (req, res) => {
    const contact = contactMessages.find(c => c.id === parseInt(req.params.id));
    if (contact) {
        contact.status = 'handled';
        res.json({ success: true, message: 'Contact marked as handled' });
    } else {
        res.status(404).json({ message: 'Contact not found' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
