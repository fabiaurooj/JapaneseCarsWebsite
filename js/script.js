function redirectLocalFilePagesToServer() {
    if (window.location.protocol !== 'file:') return;

    // Keep local file navigation working by default.
    // Redirect only when explicitly enabled.
    const query = new URLSearchParams(window.location.search);
    const redirectEnabled =
        query.get('useServer') === '1' ||
        localStorage.getItem('atl_force_local_server') === '1';
    if (!redirectEnabled) return;

    const fileName = window.location.pathname.split('/').pop() || 'index.html';
    const targetUrl = `http://localhost:8080/${fileName}${window.location.search}${window.location.hash}`;

    window.location.replace(targetUrl);
}

redirectLocalFilePagesToServer();

// Load featured cars on homepage
async function loadFeaturedCars() {
    const container = document.getElementById('featuredCars');
    if (!container) return;

    try {
        const cars = await fetchFeaturedCars();
        container.innerHTML = cars.map(car => createFeaturedCarCard(car)).join('');
        if (window.applyPrices) applyPrices(getSelectedCurrency());
    } catch (error) {
        console.error('Error loading featured cars:', error);
    }
}

function createFeaturedCarCard(car) {
    const brandModelLabel = formatBrandModelLabel(car.brand, car.model) || 'Selected Car';
    const hasPrice = Number.isFinite(car.price);
    const hasMileage = Number.isFinite(car.mileage);
    const yearText = car.year ? String(car.year) : 'Year on request';
    const transmissionText = String(car.transmission || 'Transmission on request');
    const fuelText = String(car.fuelType || 'Fuel type on request');
    const conditionText = String(car.condition || 'Available');
    const conditionKey = conditionText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const conditionClass = `condition-${conditionKey}`;
    const imageMarkup = car.image
        ? `<img src="${car.image}" alt="${brandModelLabel}" loading="lazy">`
        : '🚗';
    const detailTarget = Number.isFinite(car.id)
        ? `car-detail.html?id=${encodeURIComponent(car.id)}&from=featured`
        : buildEnquiryUrlForSelection(car.brand, car.model, '', car.image || '');

    return `
        <article class="car-card featured-car-card" onclick="window.location.href='${detailTarget}'" title="View full details for ${brandModelLabel}">
            <div class="car-card-image">
                ${imageMarkup}
            </div>
            <div class="car-card-body">
                <div class="car-title">${brandModelLabel}</div>
                <div class="car-price"${hasPrice ? ` data-usd-price="${car.price}"` : ''}>${hasPrice ? `$${car.price.toLocaleString()}` : 'Price on request'}</div>
                <div class="car-specs">
                    <p>📅 ${yearText}</p>
                    <p>📍 ${hasMileage ? `${car.mileage.toLocaleString()} km` : 'Mileage on request'}</p>
                    <p>⚙️ ${transmissionText} | ${fuelText}</p>
                </div>
                <span class="car-condition-badge ${conditionClass}">${conditionText}</span>
                <br>
                <a href="${detailTarget}" class="view-details-btn" onclick="event.stopPropagation();">View Full Details</a>
            </div>
        </article>
    `;
}

// Left drawer (hamburger) menu behavior
function initDrawerMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sideDrawer = document.getElementById('sideDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const languageSelect = document.getElementById('languageSelect');
    const currencySwitcher = document.getElementById('currency-switcher');

    if (!menuToggle || !sideDrawer || !drawerBackdrop) return;

    const openDrawer = () => {
        sideDrawer.classList.add('open');
        drawerBackdrop.classList.add('show');
        menuToggle.classList.add('open');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        sideDrawer.classList.remove('open');
        drawerBackdrop.classList.remove('show');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', () => {
        if (sideDrawer.classList.contains('open')) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', closeDrawer);
    if (languageSelect) languageSelect.addEventListener('change', closeDrawer);
    if (currencySwitcher) currencySwitcher.addEventListener('change', closeDrawer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
}

// Hide header on scroll down and show on scroll up
function initAutoHideNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    const threshold = 12;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Keep header visible near the top of the page.
        if (currentScrollY <= 20) {
            navbar.classList.remove('navbar-hidden');
            lastScrollY = currentScrollY;
            return;
        }

        // Ignore tiny scroll jitters.
        if (Math.abs(currentScrollY - lastScrollY) < threshold) {
            return;
        }

        if (currentScrollY > lastScrollY) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
}

const defaultBrandModels = {
    Honda: [
        'ACCORD W', 'ACTY T', 'ACTY V', 'AIRWEVE', 'BEAT', 'CIVIC', 'CIVIC H/B', 'CR-V',
        'CR-X', 'CR-Z', 'CROSSROAD', 'EDIX', 'ELEMENT', 'ELYSION', 'ELYSION PRESTIGE', 'FIT', 'FIT ARIA',
        'FIT HYBRID', 'FIT SHUTTLE', 'FREED', 'FREED PLUS', 'FREED SPIKE', 'FREED SPIKE HV', 'GRACE',
        'HR-V', 'INSIGHT', 'INSPIRE', 'INTEGRA C/P', 'JADE', 'LEGEND', 'LIFE', 'LOGO', 'MOBILIO',
        'MOBILIO SPIKE', 'N BOX', 'N BOX CUSTOM', 'N BOX PLUS', 'N BOX SLASH', 'N ONE', 'N-VAN',
        'N-WGN', 'N-WGN CUSTOM', 'NSX', 'ODYSSEY', 'PARTNER', 'S-MX', 'S660', 'SHUTTLE', 'STEPWAGON',
        'STEPWAGON SPADA', 'STREAM', 'STREET', 'TORNEO', 'VAMOS', 'VAMOS HOBIO', 'VEZEL', 'WR-V',
        'ZEST'
    ],
    Lexus: ['CT', 'ES', 'GS', 'HS', 'IS', 'LS', 'NX', 'RX'],
    Mercedes: [
        'AMG CLAclass', 'AMG CLSclass', 'AMG Cclass', 'AMG Eclass', 'AMG GLC Coupe', 'AMG Gclass',
        'Aclass', 'Bclass', 'CLA ShootingBrake', 'CLAclass', 'CLKclass Cabriolet', 'CLS ShootingBrake',
        'CLSclass', 'Cclass', 'Cclass Coupe', 'Cclass StationW', 'Eclass', 'Eclass Coupe',
        'Eclass StationW', 'GLAclass', 'GLC', 'GLC COUPE', 'GLS', 'Gclass', 'Mclass', 'SLKclass',
        'Sclass', 'Slclass', 'Vclass'
    ],
    BMW: [
        '1series', '2series ACTIVE TOURER', '2series Coupe', '2series GRAN COUPE',
        '2series GRAN TOURER', '3series', '3series Coupe', '3series GRAN TURISMO',
        '3series Touring', '5series', '5series Touring', '6series', 'Z4', 'X1', 'X1',
        'X3', 'X4', 'X5', 'X6'
    ],
    Volkswagen: [
        'ARTEON', 'BEETLE', 'BORA', 'CROSS POLO', 'CROSS TOURAN', 'CROSS UP!', 'EOS', 'GOLF',
        'GOLF ALLTRACK', 'GOLF Cabriolet', 'GOLF PLUS', 'GOLF TOURAN', 'GOLF VARIANT', 'GOLF Wagon',
        'JETTA', 'KARMANN GHIA', 'LUPO', 'NEW BEETLE', 'NEW BEETLE Cabriolet', 'PASSAT', 'PASSAT CC',
        'PASSAT VARIANT', 'POLO', 'SANTANA', 'SCIROCCO', 'SHARAN', 'T-CROSS', 'T-ROC', 'THE BEETLE',
        'THE BEETLE Cabriolet', 'TIGUAN', 'TOUAREG', 'UP!', 'VENTO', 'VOLKSWAGEN CC'
    ],
    Audi: [
        'A1', 'A1 SPORTBACK', 'A3 SEDAN', 'A3 SPORTBACK', 'A4', 'A4 ALLROAD QUATTRO', 'A4 AVANT', 'A5',
        'A5 CABRIOLET', 'A5 SPORTBACK', 'A6', 'A6 ALLROAD QUATTRO', 'A6 AVANT', 'A6 HYBRID', 'A7 SPORT-BACK',
        'A8', 'A8 HYBRID', 'ALLROAD QUATTRO', 'e-tronGT QUATTRO', 'Q2', 'Q3 SPORTBACK', 'Q5', 'Q7',
        'R8', 'S3', 'S4 AVANT', 'S5 SPORTBACK', 'S8', 'SQ2', 'SQ5', 'TT COUPE', 'TTS COUPE'
    ],
    Volvo: [
        'S40', 'S60', 'V40', 'V40 Crosscountry', 'V60', 'V70', 'XC60', 'XC90', '850 ESTATE'
    ],
    Peugeot: [
        '2008', '207', '208', '307', '307CC', '308', '308CC', '308SW'
    ],
    Chrysler: [
        '300C', 'CHEROKEE', 'COMPASS', 'GRAND CHEROKEE', 'PATRIOT', 'RENEGADE',
        'WRANGLER', 'WRANGLER UNLIMITED'
    ],
    Mazda: [
        'ATENZA SPORTS', 'ATENZA SPORTS W', 'ATENZA W', 'AXELA', 'AXELA HYBRID', 'AXELA SPORTS',
        'AZ-OFFROAD', 'AZ-WAGON', 'AZ-WAGON CUSTOM STYLE', 'BIANTE', 'BONGO BRAWNY T', 'BONGO BRAWNY V',
        'BONGO T', 'BONGO V', 'CAROL', 'CAROL ECO', 'CX-3', 'CX-30', 'CX-5', 'CX-8', 'DEMIO',
        'EUNOS COSMO', 'EUNOS PRESSO', 'EUNOS ROADSTER', 'FAMILIA S-WAGON', 'FAMILIA V', 'FLAIR',
        'FLAIR CROSSOVER', 'FLAIR CUSTOM STYLE', 'FLAIR WAGON', 'FLAIR WAGON CUSTOM STYEL', 'MAZDA2',
        'MAZDA3 FASTBACK', 'MAZDA6 W', 'MPV', 'SCRUM T', 'SCRUM V', 'SCRUM W', 'SPIANO',
        'TITAN', 'VERISA'
    ],
    Daihatsu: [
        'ALTIS', 'ATRAI V', 'ATRAI W', 'ATRAI7', 'BEGO', 'BOON', 'BOON LUMINAS', 'C00', 'CAST', 'COPEN',
        'DELTA', 'ESSE', 'HIJET', 'HIJET T', 'HIJET V', 'MIDGET2', 'MIRA', 'MIRA AVY', 'MIRA COCOA',
        'MIRA CUSTOM', 'MIRA GINO', 'MIRA TOCOT', 'MIRA V', 'MIRA e:S', 'MOVE', 'MOVE CANBUS',
        'MOVE CONTE', 'NAKED', 'ROCCY', 'TAFT', 'TANTO', 'TANTO CUSTOM', 'TANTO EXE', 'TERIOS KID',
        'THOR', 'WAKE'
    ],
    Ford: ['Freda'],
    Mitsubishi: [
        'AERO QUEEN', 'AIRTREK', 'CANTER', 'CHARIOT GRANDIS', 'COLT', 'COLT PLUS', 'eK CUSTOM', 'eK SPACE',
        'eK SPACE CUSTOM', 'eK SPORT', 'eK WAGON', 'eK X', 'eK X EV', 'eK X SPACE', 'DELICA D2', 'DELICA D3',
        'DELICA D5', 'DELICA MINI', 'DELICA SPACEGEAR', 'DELICA T', 'DELICA V', 'DIAMANTE W', 'ECLIPSE',
        'ECLIPSE CROSS', 'ECLIPSE CROSS PHEV', 'FIGHTER', 'FK/FM SERIES', 'FORTE', 'GALANT FORTIS', 'GRANDIS',
        'i', 'i MIEV', 'JEEP', 'LANCER CEDIA S/D', 'LANCER CEDIA W', 'LANCER S/D', 'LANCER V', 'LANCER W',
        'LEGNUM', 'MINICA', 'MINICAB MiEV', 'MINICAB T', 'MINICAB V', 'MIRAGE H/B', 'OUTLANDER',
        'OUTLANDER PHEV', 'PAJERO MINI', 'PAJERO W', 'PAJERO iO', 'RVR', 'SUPER GREAT', 'THE GREAT', 'TOPPO',
        'TOPPO BJ', 'TOWNBOX', 'TRITON'
    ],
    Subaru: [
        'BRZ', 'DEX', 'DIAS WAGON', 'DOMINGO', 'EXIGA', 'EXIGA CROSSOVER7', 'FORESTER', 'IMPREZA G4',
        'IMPREZA H/B', 'IMPREZA SPORTS', 'IMPREZA SPORTS W', 'JUSTY', 'LEGACY B4', 'LEGACY OUTBACK',
        'LEGACY W', 'LEVORG', 'PLEO PLUS', 'R1', 'Sambar Dias', 'SAMBAR DIAS V', 'SAMBAR T', 'SAMBAR V',
        'STELLA', 'STELLA CUSTOM', 'SUBARU 360', 'TREZIA', 'XV', 'XV HYBRID'
    ],
    Nissan: [
        'Ad Van', 'Atlas', 'Aura', 'Be-1', 'Big Thumb', 'Bluebird Sylphy', 'Caravan', 'Caravan Bus',
        'Caravan V', 'Caravan W', 'Cedric', 'Cefiro', 'Cima', 'Civilian', 'Clipper T', 'Clipper V',
        'Condor', 'Cube', 'Cube Cubic', 'Datsun T', 'Dayz', 'Dayz Roox', 'Dualis', 'Elgrand',
        'Fairlady Z', 'Fuga', 'Fuga Hybrid', 'Gloria', 'Gloria W', 'Juke', 'Kix', 'Lafesta', 'Latio',
        'Laurel', 'Leaf', 'Liberty', 'March', 'Micra C+C', 'Moco', 'Murano', 'Note', 'NT100 Clipper T',
        'NT450 Atlas', 'NV100 Clipper Rio', 'NV100 Clipper V', 'NV150 AD', 'NV200 Vanette V',
        'NV200 Vanette W', 'NV350 Caravan V', 'NV350 Caravan W', 'Paramedic', 'Pino', 'Presage',
        'Primera S/D', 'Pulsar Serie', 'Quon', 'Roox', 'Safari V', 'Safari W', 'Sakura', 'Serena W',
        'Silvia', 'Skyline', 'Skyline Crossover', 'Stagea', 'Sunny', 'Sylphy', 'Teana', 'Terrano W',
        'Tiida', 'Tiida Latio', 'UD', 'VANETTE T', 'VANETTE V', 'WINGROAD', 'X-TRAIL'
    ],
    Hino: [
        'DUTRO', 'LIESSE', 'LIESSE2', 'MELPHA', 'PROFIA', 'RANGER', 'RANGER2', 'SELEGA',
        'SUPER DOLPHIN', 'SUPER DOLPHIN PROFIA'
    ],
    Isuzu: [
        'BIGHORN V', 'BIGHORN W', 'COMO V', 'COMO W', 'ELF T', 'ELF V', 'ERGA', 'FARGO', 'FOWARD',
        'FOWARD JUSTON', 'GIGA', 'JOURNEY', 'RODEO', '810'
    ],
    Suzuki: [
        'ALTO', 'ALTO ECO', 'ALTO LAPIN', 'ALTO LAPIN CHOCOLATE', 'ALTO V', 'ALTO WORKS', 'BALENO',
        'CARRY T', 'CERVO', 'CHEVROLET CRUZE', 'CHEVROLET MW', 'ESCUDO W', 'EVERY LANDY', 'EVERY V',
        'EVERY W', 'HUSTLER', 'IGNIS', 'JIMNY NOMADE', 'JIMNY SIERRA', 'JIMNY W', 'JIMNY WIDE', 'KEI',
        'LANDY', 'MR WAGON', 'MR WAGON WIT', 'PALETTE', 'PALETTE SW', 'SOLIO', 'SOLIO BANDIT', 'SPACIA',
        'SPACIA CUSTOM', 'SPACIA CUSTOM Z', 'SPLASH', 'SUPER CARRY', 'SWIFT', 'WAGON R', 'WAGON R SMILE',
        'WAGON R STINGRAY', 'XBEE'
    ],
    Toyota: [
        'ALION', 'ALLEX', 'ALPHARD', 'ALTEZZA', 'AQUA', 'ARISTO', 'AURIS', 'AVALON', 'AVENSIS W', 'BELTA',
        'BLADE', 'BREVIS', 'C-HR', 'CALDINA V', 'CALDINA W', 'CAMRY', 'CARINA', 'CELICA', 'CELSIOR', 'CHASER',
        'COASTER', 'COMFORT', 'COROLLA', 'COROLLA AXIO', 'COROLLA CROSS', 'COROLLA FIELDER', 'COROLLA LEVIN',
        'COROLLA RUMION', 'COROLLA RUNX', 'COROLLA SPACIO', 'COROLLA SPORT', 'Corolla Touring', 'Corolla V',
        'Corolla W', 'Corona', 'Corona Premio', 'Corsa S/D', 'Cresta', 'Crown', 'Crown Athlete',
        'Crown Athlete Hybrid', 'Crown Comfort', 'Crown Crossover', 'Crown Estate', 'Crown Hybrid',
        'Crown Majesta', 'Crown Royal', 'Crown Royal Hybrid', 'Crown Sport', 'Crown W', 'bB', 'Dyna T',
        'Esquire', 'Estima', 'Estima Hybrid', 'FJ Cruiser', 'Funcargo', 'Gaia', 'Grand Hiace W', 'Granvia',
        'GR Yaris', 'Harrier', 'Harrier Hybrid', 'Hiace', 'Hiace Commuter', 'Hiace Regius W', 'Hiace T',
        'Hiace V', 'Hiace W', 'Hiace Wagon', 'Hilux', 'Hilux Surf', 'Ipsum', 'Kluger', 'Kluger Hybrid', 'Landcruiser 250',
        'Landcruiser Prado', 'Landcruiser V', 'Landcruiser W', 'Liteace Noah', 'Liteace T', 'Liteace V',
        'Liteace W', 'Mark X', 'Mark X Zio', 'Mark2', 'Mark2 Qualis', 'Mark2 V', 'Mark2 W', 'Mark2 Blit',
        'Mirai', 'MR-2', 'MR-S', 'Noah', 'Opa', 'Passo', 'Passo Sette', 'Pixis Epoch', 'Pixis Joy',
        'Pixis Mega', 'Pixis Space', 'Pixis T', 'Pixis V', 'Platz', 'Porte', 'Premio', 'Prius', 'Prius Alfa',
        'Prius PHV', 'Probox V', 'Probox W', 'Progres', 'Pronard', 'Quick Delivery', 'Ractis', 'Raize',
        'Raum', 'RAV4', 'Regius Ace V', 'Regius W', 'Roomy', 'Rush', 'Vanguard', 'Vellfire', 'Verossa',
        'Vista', 'Vitz', 'Voxy', 'Windom', 'Wish', 'WiLL Cypha', 'WiLL Vi', 'Sai', 'Sienta', 'Spade',
        'Sprinter V', 'Sprinter W', 'Starlet', 'Succeed V', 'Succeed W', 'Tank', 'Townace Noah', 'Toyoace T', 'Toyota Ambulance', 'Yaris', 'Yaris Cross', 'Toyota 86'
    ]
};

function makeBrandStorageKey(brandName) {
    return `atl_models_${brandName.toLowerCase().replace(/[^a-z0-9]+/g, '_')}`;
}

function getApiBrandModels(brandName) {
    if (typeof carsData === 'undefined' || !Array.isArray(carsData)) {
        return [];
    }

    return [...new Set(
        carsData
            .filter((car) => String(car.brand || '').toLowerCase() === String(brandName || '').toLowerCase())
            .map((car) => String(car.model || '').trim())
            .filter(Boolean)
    )].sort((left, right) => left.localeCompare(right));
}

function getBrandModels(brandName) {
    const key = makeBrandStorageKey(brandName);
    const defaults = dedupeModelNames(defaultBrandModels[brandName] || []);
    const apiModels = dedupeModelNames(getApiBrandModels(brandName));
    const storedRaw = JSON.parse(localStorage.getItem(key) || '[]');
    const stored = dedupeModelNames(storedRaw);
    const mergedDefaults = dedupeModelNames([...defaults, ...apiModels]);

    const deprecatedByBrand = {
        Mazda: ['ATENZA S/D', 'MAZDA3 S/D'],
        Mitsubishi: ['OTHER'],
        Peugeot: ['5008 SW', '5008SW', '508 SW', '508SW']
    };
    const blocked = new Set(
        (deprecatedByBrand[brandName] || []).map((model) => normalizeModelValue(model))
    );

    const removeDeprecated = (list) => {
        if (!blocked.size) return list;
        return dedupeModelNames(list.filter((model) => !blocked.has(normalizeModelValue(model))));
    };

    if (!Array.isArray(stored) || stored.length === 0) {
        return removeDeprecated(mergedDefaults);
    }

    const merged = removeDeprecated([...stored, ...mergedDefaults]);
    if (JSON.stringify(merged) !== JSON.stringify(storedRaw)) {
        localStorage.setItem(key, JSON.stringify(merged));
    }

    return merged;
}

function saveBrandModels(brandName, models) {
    const key = makeBrandStorageKey(brandName);
    localStorage.setItem(key, JSON.stringify(models));
}

function renderModelChips(listEl, models, onSelect, activeSearch = '') {
    listEl.innerHTML = '';
    const normalizedSearch = String(activeSearch || '').trim().toLowerCase();

    models.forEach((model) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'model-chip';
        if (normalizedSearch && String(model).toLowerCase().includes(normalizedSearch)) {
            item.classList.add('model-chip-active');
        }
        item.innerHTML = `<span class="model-chip-text">${formatModelDisplayName(model)}</span>`;
        if (typeof onSelect === 'function') {
            item.addEventListener('click', () => onSelect(model));
        }
        listEl.appendChild(item);
    });
}

function formatModelDisplayName(value) {
    const raw = String(value || '').trim();
    if (!raw) return '';
    return raw
        .toLowerCase()
        .replace(/([a-z])([a-z]*)/g, (_, first, rest) => first.toUpperCase() + rest);
}

function formatBrandModelLabel(brand, model) {
    const brandText = String(brand || '').trim();
    const modelText = formatModelDisplayName(model);
    return `${brandText}${brandText && modelText ? ' ' : ''}${modelText}`.trim();
}

function normalizeModelValue(value) {
    return String(value || '').trim().toLowerCase();
}

function normalizeModelLookupKey(value) {
    return normalizeModelValue(value)
        .replace(/^toyota\s+/, '')
        .replace(/[^a-z0-9]/g, '');
}

function dedupeModelNames(modelList) {
    if (!Array.isArray(modelList)) return [];

    const seen = new Set();
    const unique = [];

    modelList.forEach((model) => {
        const raw = String(model || '').trim();
        if (!raw) return;

        const key = normalizeModelValue(raw);
        if (seen.has(key)) return;

        seen.add(key);
        unique.push(raw);
    });

    return unique;
}

function buildEnquiryUrlForSelection(brand, model, carId = '', carImage = '') {
    const q = new URLSearchParams();
    if (brand) q.set('brand', String(brand).trim());
    if (model) q.set('model', String(model).trim());
    if (carId) q.set('carId', String(carId).trim());
    if (carImage) q.set('carImage', String(carImage).trim());
    return `enquiry.html?${q.toString()}`;
}

function getModelPriorityScore(modelName, car) {
    const requestedRaw = normalizeModelValue(modelName);
    const actualRaw = normalizeModelValue(car && car.model);
    if (!actualRaw) return 99;

    const requestedKey = normalizeModelLookupKey(modelName);
    const actualKey = normalizeModelLookupKey(car && car.model);

    if (actualRaw === requestedRaw || (actualKey && actualKey === requestedKey)) return 0;
    return 99;
}

function isExactBrandModelMatch(brandName, modelName, car) {
    if (!car) return false;

    const brandMatches = !brandName || normalizeModelValue(car.brand) === normalizeModelValue(brandName);
    if (!brandMatches) return false;

    if (!modelName) return true;
    return getModelPriorityScore(modelName, car) === 0;
}

async function navigateToBrandModelResults(brand, modelValue) {
    const cleanModel = (modelValue || '').trim();
    if (!cleanModel) return;

    const params = new URLSearchParams();
    params.set('brand', brand);
    params.set('model', cleanModel);

    try {
        const allCars = await fetchAllCars();
        const matches = allCars.filter((car) =>
            normalizeModelValue(car.brand) === normalizeModelValue(brand) &&
            getModelPriorityScore(cleanModel, car) < 99
        );

        if (matches.length) {
            const ranked = [...matches].sort((left, right) => {
                const imageDiff = Number(Boolean(right.image)) - Number(Boolean(left.image));
                if (imageDiff !== 0) return imageDiff;
                return getModelPriorityScore(cleanModel, left) - getModelPriorityScore(cleanModel, right);
            });

            const selected = ranked[0];
            if (selected && selected.id) params.set('carId', String(selected.id));
            if (selected && selected.image) params.set('carImage', selected.image);
        }
    } catch (error) {
        console.error('Error preparing model redirect:', error);
    }

    window.location.href = `enquiry.html?${params.toString()}`;
}

function buildBrandModelCardMarkup(brand, entry) {
    const formattedModel = formatModelDisplayName(entry.model);
    const brandModelLabel = formatBrandModelLabel(brand, entry.model);
    const imageMarkup = entry.image
        ? `<img src="${entry.image}" alt="${brandModelLabel}" loading="lazy">`
        : `<div class="brand-model-card-fallback">${brand}<span>${formattedModel}</span></div>`;
    const helperCopy = 'Open the enquiry page with this model selected.';

    return `
        <div class="car-card brand-model-browser-card" data-model="${entry.model.toLowerCase()}" data-model-name="${entry.model}" title="${brandModelLabel}">
            <div class="car-card-image brand-model-browser-image">
                ${imageMarkup}
            </div>
            <div class="car-card-body brand-model-browser-body">
                <p class="brand-model-card-kicker">${brand}</p>
                <div class="car-title">${formattedModel}</div>
                <p class="brand-model-card-copy">${helperCopy}</p>
            </div>
        </div>
    `;
}

function collectBrandModelEntries(brand, models, allCars, searchTerm = '') {
    const searchLower = normalizeModelValue(searchTerm);
    const uniqueModels = dedupeModelNames(models);
    const brandCars = Array.isArray(allCars)
        ? allCars.filter((car) => normalizeModelValue(car.brand) === normalizeModelValue(brand))
        : [];

    return uniqueModels
        .map((model) => {
            const exactMatches = brandCars.filter((car) => getModelPriorityScore(model, car) < 99);
            exactMatches.sort((left, right) => {
                const scoreDiff = getModelPriorityScore(model, left) - getModelPriorityScore(model, right);
                if (scoreDiff !== 0) return scoreDiff;
                return Number(Boolean(right.image)) - Number(Boolean(left.image));
            });

            const preferredCar = exactMatches.find((car) => !!car.image) || exactMatches[0] || null;

            return {
                model,
                image: preferredCar && preferredCar.image ? preferredCar.image : '',
                matchCount: exactMatches.length || 0
            };
        })
        .filter((entry) => !searchLower || normalizeModelValue(entry.model).includes(searchLower))
        .sort((left, right) => {
            const imageDiff = Number(Boolean(right.image)) - Number(Boolean(left.image));
            if (imageDiff !== 0) return imageDiff;
            return left.model.localeCompare(right.model);
        });
}

// Hero search bar on home page
function initHeroSearch() {
    const input = document.getElementById('heroSearchInput');
    const btn = document.getElementById('heroSearchBtn');
    const sugBox = document.getElementById('heroSearchSuggestions');
    if (!input || !btn || !sugBox) return;

    // Collect all brand names from brand cards
    const brandNames = [...document.querySelectorAll('.brand-card h3')].map(h => h.textContent.trim());

    // Build a combined suggestion list: brands + car data
    const safeText = (value) => String(value ?? '').trim();
    const carSuggestions = typeof carsData !== 'undefined'
        ? carsData
            .map((c) => {
                const brand = safeText(c.brand);
                const model = safeText(c.model);
                const year = safeText(c.year);
                const brandModel = formatBrandModelLabel(brand, model) || 'Car';
                const yearSuffix = year ? ` (${year})` : '';

                return {
                    label: `${brandModel}${yearSuffix}`,
                    type: 'car',
                    url: buildEnquiryUrlForSelection(brand, model, c.id, c.image || '')
                };
            })
            .filter((entry) => entry.label.toLowerCase() !== 'car')
        : [];

    const brandSuggestions = brandNames.map(b => ({
        label: b,
        type: 'brand',
        url: `brand-models.html?brand=${encodeURIComponent(b)}`
    }));

    const allSuggestions = [...brandSuggestions, ...carSuggestions];

    let activeIdx = -1;

    function getSuggestions(q) {
        if (!q) return [];
        const lower = q.toLowerCase();
        return allSuggestions.filter(s => s.label.toLowerCase().includes(lower)).slice(0, 6);
    }

    function renderSuggestions(matches) {
        if (!matches.length) { sugBox.classList.remove('open'); return; }
        sugBox.innerHTML = matches.map((s, i) =>
            `<div class="hero-search-suggestion" data-idx="${i}">
                <span class="sug-type">${s.type}</span>${s.label}
            </div>`
        ).join('');
        sugBox.classList.add('open');
        sugBox._matches = matches;
        activeIdx = -1;
        sugBox.querySelectorAll('.hero-search-suggestion').forEach((el, i) => {
            el.addEventListener('mousedown', (e) => {
                e.preventDefault();
                window.location.href = matches[i].url;
            });
        });
    }

    function navigate() {
        const q = input.value.trim();
        if (!q) return;
        const exactBrand = brandNames.find(b => b.toLowerCase() === q.toLowerCase());
        if (exactBrand) {
            window.location.href = `brand-models.html?brand=${encodeURIComponent(exactBrand)}`;
        } else {
            window.location.href = `listings.html?search=${encodeURIComponent(q)}`;
        }
    }

    input.addEventListener('input', () => {
        renderSuggestions(getSuggestions(input.value.trim()));
    });

    input.addEventListener('keydown', (e) => {
        const items = sugBox.querySelectorAll('.hero-search-suggestion');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIdx = Math.min(activeIdx + 1, items.length - 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIdx = Math.max(activeIdx - 1, -1);
        } else if (e.key === 'Enter') {
            if (activeIdx >= 0 && sugBox._matches) {
                window.location.href = sugBox._matches[activeIdx].url;
            } else {
                navigate();
            }
            return;
        } else if (e.key === 'Escape') {
            sugBox.classList.remove('open');
            return;
        }
        items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#heroSearch')) sugBox.classList.remove('open');
    });

    btn.addEventListener('click', navigate);
}

// Brand cards on home page: click brand name to open the next page.
function initBrandModelEditor() {
    const brandCards = document.querySelectorAll('.brand-card');
    if (!brandCards.length) return;

    brandCards.forEach((card) => {
        const brandTitle = card.querySelector('h3');
        if (!brandTitle) return;

        const brandName = brandTitle.textContent.trim();
        const navigateToBrandModels = () => {
            window.location.href = `brand-models.html?brand=${encodeURIComponent(brandName)}`;
        };

        brandTitle.classList.add('brand-clickable');
        brandTitle.setAttribute('title', 'Open models page');

        brandTitle.addEventListener('click', navigateToBrandModels);

        const brandLogo = card.querySelector('.brand-logo');
        if (brandLogo) {
            brandLogo.style.cursor = 'pointer';
            brandLogo.setAttribute('title', 'Open models page');
            brandLogo.addEventListener('click', navigateToBrandModels);
        }

        card.style.cursor = 'pointer';
        card.setAttribute('title', 'Open models page');
        card.addEventListener('click', (event) => {
            const clickedInteractive = event.target.closest('a, button, input, select, textarea, label');
            if (clickedInteractive) return;
            navigateToBrandModels();
        });
    });
}

// Next page model editor.
function initBrandModelsPage() {
    const page = document.getElementById('brandModelsPage');
    if (!page) return;

    const brand = new URLSearchParams(window.location.search).get('brand') || 'Brand';
    const heading = document.getElementById('brandModelsHeading');
    const subtitle = document.getElementById('brandModelsSubtitle');
    const helper = document.getElementById('brandModelsHelper');
    const countText = document.getElementById('brandModelCount');
    const searchForm = document.getElementById('brandModelSearchForm');
    const input = document.getElementById('brandModelInput');
    const addBtn = document.getElementById('brandModelAddBtn');
    const brandOnlyBtn = document.getElementById('brandOnlySearchBtn');
    const modelGallery = document.getElementById('quickModelButtons');
    const modelNameList = document.getElementById('brandModelNameList');
    const suggestions = document.getElementById('brandModelSuggestions');
    const searchResult = document.getElementById('brandModelsSearchResult');
    const emptyState = document.getElementById('brandModelEmptyState');

    if (!heading || !subtitle || !input || !addBtn) return;

    heading.textContent = `${brand} Models`;
    subtitle.textContent = `Search ${brand} models, view their photos, and open the one you want.`;

    let models = getBrandModels(brand);
    if (models.length === 0 && defaultBrandModels[brand]) {
        models = [...defaultBrandModels[brand]];
        saveBrandModels(brand, models);
    }

    const defaultHelperText = 'Pick a model card below or type a model name to filter instantly.';
    if (helper) helper.textContent = defaultHelperText;

    const syncSummary = (visibleCount, searchTerm) => {
        if (countText) countText.textContent = `${visibleCount} models available`;
        if (!searchResult) return;

        if (searchTerm) {
            searchResult.textContent = `${visibleCount} model${visibleCount === 1 ? '' : 's'} found for "${searchTerm}".`;
        } else {
            searchResult.textContent = `Showing all ${visibleCount} ${brand} models.`;
        }
    };

    const renderGallery = async (searchTerm = '') => {
        const allCars = typeof fetchAllCars === 'function' ? await fetchAllCars() : [];
        const entries = collectBrandModelEntries(brand, models, allCars, searchTerm);

        if (modelNameList) {
            renderModelChips(
                modelNameList,
                entries.map((entry) => entry.model),
                (modelName) => navigateToBrandModelResults(brand, modelName),
                searchTerm
            );
        }

        if (modelGallery) {
            modelGallery.innerHTML = entries.map((entry) => buildBrandModelCardMarkup(brand, entry)).join('');
            modelGallery.querySelectorAll('.brand-model-browser-card').forEach((card) => {
                card.addEventListener('click', () => navigateToBrandModelResults(brand, card.dataset.modelName));
            });
        }

        if (emptyState) emptyState.hidden = entries.length > 0;
        syncSummary(entries.length, searchTerm.trim());
        return entries;
    };

    if (suggestions) {
        suggestions.innerHTML = '';
        models.forEach((model) => {
            const opt = document.createElement('option');
            opt.value = model;
            suggestions.appendChild(opt);
        });
    }

    const searchByModel = async (rawValue) => {
        const value = (rawValue || '').trim();
        input.classList.remove('input-attention');
        if (helper) helper.textContent = defaultHelperText;

        const entries = await renderGallery(value).catch((error) => {
            console.error('Error rendering model gallery:', error);
            return [];
        });

        if (value) {
            const exact = models.find((model) => normalizeModelValue(model) === normalizeModelValue(value));
            if (exact) navigateToBrandModelResults(brand, exact);
        }
    };

    if (searchForm) {
        searchForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await searchByModel(input.value);
        });
    }

    addBtn.addEventListener('click', async () => {
        await searchByModel(input.value);
    });
    input.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await searchByModel(input.value);
        }
    });

    input.addEventListener('input', () => {
        input.classList.remove('input-attention');
        if (helper) helper.textContent = defaultHelperText;
        renderGallery(input.value).catch((error) => {
            console.error('Error filtering model gallery:', error);
        });
    });

    if (brandOnlyBtn) {
        brandOnlyBtn.textContent = `View All ${brand} Cars`;
        brandOnlyBtn.addEventListener('click', () => {
            window.location.href = `listings.html?brand=${encodeURIComponent(brand)}`;
        });
    }

    renderGallery().catch((error) => {
        console.error('Error initializing model gallery:', error);
    });

}

// Load all cars on listings page
async function loadAllCars() {
    const container = document.getElementById('carsGrid');
    const summary = document.getElementById('activeSearchSummary');
    if (!container) return;

    try {
        const cars = await fetchAllCars();
        const query = new URLSearchParams(window.location.search);
        const queryBrand = (query.get('brand') || '').trim();
        const queryModel = (query.get('model') || '').trim().toLowerCase();
        const querySearch = (query.get('search') || '').trim().toLowerCase();

        let filteredCars = cars;

        if (queryBrand) {
            filteredCars = filteredCars.filter(car => String(car.brand || '').toLowerCase() === queryBrand.toLowerCase());
            const brandSelect = document.getElementById('brandFilter');
            if (brandSelect && [...brandSelect.options].some(o => o.value === queryBrand)) {
                brandSelect.value = queryBrand;
            }
        }

        if (queryModel) {
            filteredCars = filteredCars.filter(car => String(car.model || '').toLowerCase().includes(queryModel));
        }

        if (querySearch) {
            filteredCars = filteredCars.filter(car =>
                String(car.brand || '').toLowerCase().includes(querySearch) ||
                String(car.model || '').toLowerCase().includes(querySearch) ||
                String(car.year).includes(querySearch) ||
                (car.color || '').toLowerCase().includes(querySearch) ||
                (car.fuelType || '').toLowerCase().includes(querySearch) ||
                (car.transmission || '').toLowerCase().includes(querySearch)
            );
        }

        if (summary) {
            if (queryBrand || queryModel || querySearch) {
                const pieces = [];
                if (queryBrand) pieces.push(`Brand: <strong>${queryBrand}</strong>`);
                if (queryModel) pieces.push(`Model: <strong>${queryModel}</strong>`);
                if (querySearch) pieces.push(`Search: <strong>${querySearch}</strong>`);
                summary.innerHTML = `${pieces.join(' | ')} | Results: <strong>${filteredCars.length}</strong> <a href="listings.html">Clear</a>`;
                summary.style.display = 'block';
            } else {
                summary.style.display = 'none';
                summary.innerHTML = '';
            }
        }

        if (filteredCars.length === 0) {
            const prettyBrand = queryBrand || 'selected brand';
            const prettyModel = queryModel ? formatModelDisplayName(queryModel) : 'selected model';
            const enquiryParams = queryBrand ? `brand=${encodeURIComponent(queryBrand)}${queryModel ? '&model=' + encodeURIComponent(queryModel) : ''}` : '';
            container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <p style="font-size: 1.2rem; color: #666;">No cars found for ${prettyBrand} ${prettyModel}.</p>
                <p style="color: #aaa; margin-bottom: 1.2rem;">We may be able to source this model for you.</p>
                <a href="enquiry.html?${enquiryParams}" class="view-details-btn" style="display:inline-block;">Add Your Preferences</a>
            </div>`;
        } else {
            const imageOnlyMode = Boolean(queryModel);
            container.innerHTML = imageOnlyMode
                ? filteredCars.map(car => createCarImageOnlyCard(car)).join('')
                : filteredCars.map(car => createCarCard(car)).join('');
        }

        if (window.applyPrices) applyPrices(getSelectedCurrency());
    } catch (error) {
        console.error('Error loading cars:', error);
    }
}

function createCarImageOnlyCard(car) {
    const brandModelLabel = formatBrandModelLabel(car.brand, car.model);
    const imageMarkup = car.image
        ? `<img src="${car.image}" alt="${brandModelLabel}" loading="lazy">`
        : '🚗';
    return `
        <div class="car-card" title="${brandModelLabel}">
            <div class="car-card-image" onclick="inquireAboutCar(${car.id})" title="Order this car">
                ${imageMarkup}
            </div>
            <div class="car-card-body">
                <div class="car-title">${brandModelLabel}</div>
            </div>
        </div>
    `;
}

// Create car card HTML
function createCarCard(car) {
    if (car.image) {
        return createCarImageOnlyCard(car);
    }

    const conditionClass = `condition-${car.condition.toLowerCase()}`;
    const brandModelLabel = formatBrandModelLabel(car.brand, car.model);
    const imageMarkup = car.image
        ? `<img src="${car.image}" alt="${brandModelLabel}" loading="lazy">`
        : '🚗';
    const modelQuery = `brand=${encodeURIComponent(car.brand)}&model=${encodeURIComponent(car.model)}`;
    return `
        <div class="car-card" onclick="window.location.href='enquiry.html?${modelQuery}'">
            <div class="car-card-image" title="Set your preferences for this model">
                ${imageMarkup}
            </div>
            <div class="car-card-body">
                <div class="car-title">${brandModelLabel}</div>
                <div class="car-price" data-usd-price="${car.price}">$${car.price.toLocaleString()}</div>
                <div class="car-specs">
                    <p>📍 Mileage: ${car.mileage.toLocaleString()} km</p>
                    <p>⚙️ ${car.transmission} | ${car.fuelType}</p>
                </div>
                <span class="car-condition-badge ${conditionClass}">${car.condition}</span>
                <br>
                <a href="enquiry.html?${modelQuery}" class="view-details-btn">Set Preferences</a>
            </div>
        </div>
    `;
}

// Load car detail
async function loadCarDetail(id) {
    const container = document.getElementById('carDetail');
    if (!container) return;

    try {
        const car = await fetchCarById(id);
        const brandModelLabel = formatBrandModelLabel(car.brand, car.model);
        const hasPrice = Number.isFinite(car.price);
        const hasMileage = Number.isFinite(car.mileage);
        const features = Array.isArray(car.features) && car.features.length
            ? car.features
            : ['Full specification available on request', 'Export and sourcing support available', 'Direct enquiry assistance from our team'];
        const description = car.description || `Tell us the exact ${brandModelLabel} specification you need and we will help you secure the right unit.`;
        const specValue = (value, fallback = 'On request') => {
            if (value === undefined || value === null || value === '') return fallback;
            return value;
        };
        const galleryImages = Array.isArray(car.galleryImages) && car.galleryImages.length
            ? car.galleryImages.filter(Boolean)
            : (car.image ? [car.image] : []);
        const mainImageMarkup = galleryImages.length
            ? `<img src="${galleryImages[0]}" alt="${brandModelLabel}">`
            : '🚗';
        const thumbsMarkup = galleryImages.length
            ? galleryImages.map((img, index) => `
                        <div class="gallery-thumb${index === 0 ? ' active' : ''}" style="background-image: url('${img}')" onclick="selectImage(${index})"></div>
                    `).join('')
            : `
                        <div class="gallery-thumb active" onclick="selectImage(0)"></div>
                        <div class="gallery-thumb" onclick="selectImage(1)"></div>
                        <div class="gallery-thumb" onclick="selectImage(2)"></div>
                    `;
        container.innerHTML = `
            <div class="detail-header">
                <div class="detail-gallery">
                    <div class="gallery-main" id="galleryMain">
                        ${mainImageMarkup}
                    </div>
                    <div class="gallery-thumbs">
                        ${thumbsMarkup}
                    </div>
                </div>
                <div class="detail-info">
                    <h1>${brandModelLabel}</h1>
                    <p class="detail-subtitle">Premium Japanese stock with direct ATIF enquiry support.</p>
                    <div class="detail-price"${hasPrice ? ` data-usd-price="${car.price}"` : ''}>${hasPrice ? `$${car.price.toLocaleString()}` : 'Price on request'}</div>
                    
                    <div class="detail-specs">
                        <div class="spec-item">
                            <div class="spec-label">Mileage</div>
                            <div class="spec-value">${hasMileage ? `${car.mileage.toLocaleString()} km` : 'On request'}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Condition</div>
                            <div class="spec-value">${specValue(car.condition)}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Transmission</div>
                            <div class="spec-value">${specValue(car.transmission)}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Fuel Type</div>
                            <div class="spec-value">${specValue(car.fuelType)}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Engine</div>
                            <div class="spec-value">${specValue(car.engine)}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Horsepower</div>
                            <div class="spec-value">${car.horsepower ? `${car.horsepower} hp` : 'On request'}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Color</div>
                            <div class="spec-value">${specValue(car.color)}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Interior</div>
                            <div class="spec-value">${specValue(car.interior, car.color ? `${car.color} Leather` : 'Custom request')}</div>
                        </div>
                    </div>

                    <button class="detail-inquiry-btn" onclick="inquireAboutCar(${car.id})">Make an Enquiry</button>
                </div>
            </div>

            <div class="detail-description">
                <h2>About This Vehicle</h2>
                <p>${description}</p>
                
                <h3 class="detail-feature-title">Highlights</h3>
                <ul class="detail-feature-list">
                    ${features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;

        window.currentCarGalleryImages = galleryImages;
        window.currentCarGalleryAlt = brandModelLabel;
    } catch (error) {
        console.error('Error loading car detail:', error);
        const container = document.getElementById('carDetail');
        if (container) {
            container.innerHTML = '<p style="padding: 2rem; text-align: center; color: red;">Car not found!</p>';
        }
    }
    // Apply selected currency to newly rendered price
    setTimeout(() => { if (window.applyPrices) window.applyPrices(window.getSelectedCurrency()); }, 0);
}

// Car detail helper functions
function selectImage(index) {
    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach(thumb => thumb.classList.remove('active'));
    if (thumbs[index]) thumbs[index].classList.add('active');

    const main = document.getElementById('galleryMain');
    const galleryImages = Array.isArray(window.currentCarGalleryImages) ? window.currentCarGalleryImages : [];
    if (!main || !galleryImages[index]) return;

    const altText = window.currentCarGalleryAlt || 'Car image';
    main.innerHTML = `<img src="${galleryImages[index]}" alt="${altText}">`;
}

function inquireAboutCar(carId) {
    const params = new URLSearchParams(window.location.search);
    const fromFeatured = params.get('from') === 'featured';
    if (fromFeatured) {
        window.location.href = `contact.html?carId=${encodeURIComponent(carId)}`;
        return;
    }

    window.location.href = `enquiry.html?carId=${encodeURIComponent(carId)}`;
}

function resolveAbsoluteCarImageUrl(imagePath) {
    const cleanPath = (imagePath || '').trim();
    if (!cleanPath) return '';

    try {
        return new URL(cleanPath, window.location.href).href;
    } catch {
        return cleanPath;
    }
}

function initEnquiryLandingPage() {
    const page = document.getElementById('enquiryLandingPage');
    if (!page) return;

    const params = new URLSearchParams(window.location.search);
    const carId = (params.get('carId') || '').trim();
    const selectedBrand = (params.get('brand') || '').trim();
    const selectedModel = (params.get('model') || '').trim();
    const queryCarImage = (params.get('carImage') || '').trim();

    const carNameEl = document.getElementById('enquiryCarName');
    const carPreviewEl = document.getElementById('enquiryCarPreview');
    const carPreviewImgEl = document.getElementById('enquiryCarImage');
    const continueBtn = document.getElementById('continueToContactBtn');
    const backBtn = document.getElementById('backToCarBtn');

    const prefBudget = document.getElementById('prefBudget');
    const prefBodyType = document.getElementById('prefBodyType');
    const prefFuel = document.getElementById('prefFuel');
    const prefTransmission = document.getElementById('prefTransmission');
    let selectedCarImage = queryCarImage;

    const renderCarPreview = (imagePath) => {
        if (!carPreviewEl || !carPreviewImgEl) return;
        const absoluteUrl = resolveAbsoluteCarImageUrl(imagePath);
        if (!absoluteUrl) {
            carPreviewEl.hidden = true;
            carPreviewImgEl.removeAttribute('src');
            return;
        }

        carPreviewImgEl.src = absoluteUrl;
        carPreviewEl.hidden = false;
    };

    const refreshBudgetOptionsByCurrency = () => {
        if (!prefBudget) return;

        const selectedValue = prefBudget.value;
        const currentCurrency = (window.getSelectedCurrency && window.getSelectedCurrency()) || 'USD';
        const fmt = (usd) => (window.convertUsdAmount
            ? window.convertUsdAmount(usd, currentCurrency)
            : `$${usd.toLocaleString()}`);

        const labels = {
            under_10k: `Under ${fmt(10000)}`,
            '10k_20k': `${fmt(10000)} - ${fmt(20000)}`,
            '20k_30k': `${fmt(20000)} - ${fmt(30000)}`,
            '30k_plus': `${fmt(30000)}+`
        };

        [...prefBudget.options].forEach((opt) => {
            if (labels[opt.value]) opt.textContent = labels[opt.value];
        });

        prefBudget.value = selectedValue;
    };

    refreshBudgetOptionsByCurrency();
    const handleCurrencyChange = () => {
        refreshBudgetOptionsByCurrency();
        syncContinueLink();
    };
    document.addEventListener('atl:currency-change', handleCurrencyChange);

    const buildContactHref = () => {
        const q = new URLSearchParams();
        if (carId) q.set('carId', carId);
        if (!carId && selectedBrand) q.set('brand', selectedBrand);
        if (!carId && selectedModel) q.set('model', selectedModel);
        if (selectedCarImage) q.set('carImage', selectedCarImage);

        const selectedFeatures = [...document.querySelectorAll('input[name="enqFeature"]:checked')]
            .map(el => el.value);
        const preferenceParts = [];
        if (prefBudget && prefBudget.value) {
            const selected = prefBudget.options[prefBudget.selectedIndex];
            if (selected && selected.text) preferenceParts.push(`Budget: ${selected.text}`);
        }
        if (prefBodyType && prefBodyType.value) preferenceParts.push(`Body: ${prefBodyType.value}`);
        if (prefFuel && prefFuel.value) preferenceParts.push(`Fuel: ${prefFuel.value}`);
        if (prefTransmission && prefTransmission.value) preferenceParts.push(`Transmission: ${prefTransmission.value}`);
        if (selectedFeatures.length) preferenceParts.push(`Features: ${selectedFeatures.join(', ')}`);

        if (preferenceParts.length) {
            q.set('prefs', preferenceParts.join(' | '));
        }

        const qs = q.toString();
        return qs ? `contact.html?${qs}` : 'contact.html';
    };

    const buildBackHref = () => {
        if (carId) {
            return `car-detail.html?id=${encodeURIComponent(carId)}`;
        }

        if (selectedBrand || selectedModel) {
            const q = new URLSearchParams();
            if (selectedBrand) q.set('brand', selectedBrand);
            if (selectedModel) q.set('model', selectedModel);
            return `listings.html?${q.toString()}`;
        }

        return 'listings.html';
    };

    let contactHref = buildContactHref();
    let backHref = buildBackHref();
    if (continueBtn) continueBtn.href = contactHref;
    if (backBtn) backBtn.href = backHref;

    const syncContinueLink = () => {
        contactHref = buildContactHref();
        if (continueBtn) continueBtn.href = contactHref;
    };

    [prefBudget, prefBodyType, prefFuel, prefTransmission].forEach((el) => {
        if (el) el.addEventListener('change', syncContinueLink);
    });
    document.querySelectorAll('input[name="enqFeature"]').forEach((el) => {
        el.addEventListener('change', syncContinueLink);
    });

    if (continueBtn) {
        continueBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = buildContactHref();
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = buildBackHref();
        });
    }

    const syncCarImageFromCar = (car) => {
        const nextImage = car && car.image ? car.image : '';
        if (nextImage !== selectedCarImage) {
            selectedCarImage = nextImage;
            syncContinueLink();
        }
        renderCarPreview(selectedCarImage);
    };

    renderCarPreview(selectedCarImage);

    if (carNameEl && carId && typeof fetchCarById === 'function') {
        fetchCarById(carId)
            .then((car) => {
                if (!car) return;
                carNameEl.textContent = formatBrandModelLabel(car.brand, car.model);
                syncCarImageFromCar(car);
            })
            .catch(() => {
                carNameEl.textContent = `Car ID: ${carId}`;
            });
    } else if (carNameEl && (selectedBrand || selectedModel)) {
        carNameEl.textContent = formatBrandModelLabel(selectedBrand, selectedModel);
        if (typeof fetchAllCars === 'function') {
            fetchAllCars()
                .then((cars) => {
                    if (!Array.isArray(cars)) return;

                    const brandLower = selectedBrand.toLowerCase();
                    const modelLower = selectedModel.toLowerCase();
                    const exact = cars.find((car) =>
                        car &&
                        car.image &&
                        isExactBrandModelMatch(selectedBrand, selectedModel, car)
                    );
                    if (exact) {
                        syncCarImageFromCar(exact);
                        return;
                    }
                })
                .catch(() => {});
        }
    } else if (carNameEl && carId) {
        carNameEl.textContent = `Car ID: ${carId}`;
    }

}

function initContactCarPrefill() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const carId = (params.get('carId') || '').trim();
    const selectedBrand = (params.get('brand') || '').trim();
    const selectedModel = (params.get('model') || '').trim();
    const prefs = (params.get('prefs') || '').trim();
    const selectedCarImage = (params.get('carImage') || '').trim();

    const carInterest = document.getElementById('carInterest');
    const message = document.getElementById('message');
    const carImageInput = document.getElementById('carImage');
    const preferredFeaturesValue = document.getElementById('preferredFeaturesValue');
    const preferencesSummaryGroup = document.getElementById('preferencesSummaryGroup');
    const preferencesSummary = document.getElementById('preferencesSummary');

    if (carImageInput && selectedCarImage && !carImageInput.value) {
        carImageInput.value = resolveAbsoluteCarImageUrl(selectedCarImage);
    }

    if (prefs && preferredFeaturesValue) preferredFeaturesValue.value = prefs;
    if (prefs && preferencesSummaryGroup && preferencesSummary) {
        preferencesSummaryGroup.style.display = 'block';
        preferencesSummary.value = prefs;
    }

    if (!carId) {
        const modelLabel = formatBrandModelLabel(selectedBrand, selectedModel);
        if (carInterest && modelLabel && !carInterest.value) carInterest.value = modelLabel;
        if (message && !message.value) {
            if (modelLabel) {
                message.value = `Hello, I am interested in ${modelLabel}. Please share availability and final price.`;
            } else {
                message.value = 'Hello, I need help finding a car.';
            }
        }
        return;
    }

    const setFallback = () => {
        if (carInterest && !carInterest.value) carInterest.value = `Car ID: ${carId}`;
        if (message && !message.value) {
            message.value = `Hello, I am interested in car ID ${carId}. Please share availability and final price.`;
        }
    };

    if (typeof fetchCarById !== 'function') {
        setFallback();
        return;
    }

    fetchCarById(carId)
        .then((car) => {
            if (!car) {
                setFallback();
                return;
            }

            const carLabel = formatBrandModelLabel(car.brand, car.model);
            if (carInterest && !carInterest.value) carInterest.value = carLabel;
            if (message && !message.value) {
                message.value = `Hello, I am interested in ${carLabel}. Please share availability and final price.`;
            }

            const chosenImage = car.image || selectedCarImage;
            if (carImageInput && chosenImage && !carImageInput.value) {
                carImageInput.value = resolveAbsoluteCarImageUrl(chosenImage);
            }
        })
        .catch(() => {
            setFallback();
        });
}
// View car detail
function viewCarDetail(carId) {
    window.location.href = `car-detail.html?id=${carId}`;
}

// Language switching
function applyLanguageOptionFlags(languageSelect) {
    if (!languageSelect) return;

    const labelsByLang = {
        en: '🇺🇸 English',
        ja: '🇯🇵 日本語'
    };

    Array.from(languageSelect.options).forEach((option) => {
        const key = String(option.value || '').trim().toLowerCase();
        if (labelsByLang[key]) {
            option.textContent = labelsByLang[key];
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    const languageLabel = document.querySelector('label[for="languageSelect"]');

    if (languageLabel) {
        languageLabel.textContent = 'Language  🇺🇸/🇯🇵';
    }

    if (languageSelect) {
        applyLanguageOptionFlags(languageSelect);
        languageSelect.addEventListener('change', function() {
            const lang = this.value;
            localStorage.setItem('language', lang);
            switchLanguage(lang);
        });
        // Load saved language
        const savedLang = localStorage.getItem('language') || 'en';
        languageSelect.value = savedLang;
        switchLanguage(savedLang);
    }
});

function switchLanguage(lang) {
    // Simple text switching - in a real app, use i18n library
    const elements = document.querySelectorAll('[data-en], [data-ja]');
    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.textContent = text;
    });
}

// Currency converter
document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    if (convertBtn) {
        convertBtn.addEventListener('click', convertCurrency);
    }
});

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;
    const resultEl = document.getElementById('result');

    if (!amount || amount <= 0) {
        resultEl.textContent = 'Please enter a valid amount';
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data = await response.json();
        const rate = data.rates[to];
        const converted = (amount * rate).toFixed(2);
        resultEl.textContent = `${amount} ${from} = ${converted} ${to}`;
    } catch (error) {
        resultEl.textContent = 'Error fetching exchange rates. Please try again.';
        console.error('Currency conversion error:', error);
    }
}

// Filter cars
async function filterCars() {
    const params = {
        brand: document.getElementById('brandFilter')?.value || '',
        priceMin: parseInt(document.getElementById('priceMin')?.value) || 0,
        priceMax: parseInt(document.getElementById('priceMax')?.value) || 50000,
        transmission: document.getElementById('transmissionFilter')?.value || '',
        condition: document.getElementById('conditionFilter')?.value || ''
    };

    try {
        const filtered = await filterCarsByParams(params);
        const container = document.getElementById('carsGrid');
        const carsMain = document.querySelector('.cars-main');
        if (container) {
            if (filtered.length === 0) {
                container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem;"><p style="font-size: 1.2rem; color: #666;">No cars found matching your criteria.</p></div>';
            } else {
                container.innerHTML = filtered.map(car => createCarCard(car)).join('');
                if (window.applyPrices) applyPrices(getSelectedCurrency());
            }

            // Move focus to results area right after filter apply.
            if (carsMain) {
                carsMain.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    } catch (error) {
        console.error('Error filtering cars:', error);
    }
}

// Reset filters
function resetFilters() {
    const brandFilter = document.getElementById('brandFilter');
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const transmissionFilter = document.getElementById('transmissionFilter');
    const conditionFilter = document.getElementById('conditionFilter');

    if (brandFilter) brandFilter.value = '';
    if (priceMin) priceMin.value = '';
    if (priceMax) priceMax.value = '50000';
    if (transmissionFilter) transmissionFilter.value = '';
    if (conditionFilter) conditionFilter.value = '';
    
    loadAllCars();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initDrawerMenu();
    initAutoHideNavbar();
    initHeroSearch();
    initBrandModelEditor();
    initBrandModelsPage();
    initEnquiryLandingPage();
    initContactCarPrefill();
    loadFeaturedCars();
});

