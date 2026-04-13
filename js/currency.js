// Currency conversion rates (relative to USD)
const currencyRates = {
    USD: { rate: 1,       symbol: '$',  label: '🇺🇸 USD ($)' },
    GBP: { rate: 0.79,   symbol: '£',  label: '🇬🇧 GBP (£)' },
    PKR: { rate: 278,    symbol: '₨',  label: '🇵🇰 PKR (₨)' },
    JPY: { rate: 149.5,  symbol: '¥',  label: '🇯🇵 JPY (¥)' }
};

const CURRENCY_KEY = 'atl_currency';

// Exposed globally so script.js can call after dynamic render
window.getSelectedCurrency = function() {
    return localStorage.getItem(CURRENCY_KEY) || 'USD';
};

function setSelectedCurrency(code) {
    localStorage.setItem(CURRENCY_KEY, code);
}

function convertPrice(usdPrice, currencyCode) {
    const { rate, symbol } = currencyRates[currencyCode];
    const converted = Math.round(usdPrice * rate);
    return symbol + converted.toLocaleString();
}

function emitCurrencyChanged(code) {
    document.dispatchEvent(new CustomEvent('atl:currency-change', {
        detail: { code }
    }));
}

// Exposed globally for non-price UI (e.g., preference budget options)
window.convertUsdAmount = function(usdAmount, currencyCode) {
    const code = currencyCode || window.getSelectedCurrency();
    return convertPrice(usdAmount, code);
};

// Exposed globally so script.js can call it after injecting dynamic HTML
window.applyPrices = function(currencyCode) {
    document.querySelectorAll('[data-usd-price]').forEach(el => {
        const usd = parseFloat(el.getAttribute('data-usd-price'));
        if (!isNaN(usd)) {
            el.textContent = convertPrice(usd, currencyCode);
        }
    });
};

// Populate dropdown with full flag + label options
function populateSwitcher(switcher) {
    switcher.innerHTML = '';
    Object.entries(currencyRates).forEach(([code, { label }]) => {
        const opt = document.createElement('option');
        opt.value = code;
        opt.textContent = label;
        switcher.appendChild(opt);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('currency-switcher');
    const currencyLabel = document.querySelector('label[for="currency-switcher"]');

    if (currencyLabel) {
        currencyLabel.textContent = 'Currency  🇺🇸/🇬🇧/🇵🇰/🇯🇵';
    }

    if (!switcher) return;

    populateSwitcher(switcher);

    // Restore last saved choice
    const saved = window.getSelectedCurrency();
    switcher.value = saved;

    // Apply immediately (for static prices already in the DOM)
    window.applyPrices(saved);
    emitCurrencyChanged(saved);

    switcher.addEventListener('change', () => {
        const code = switcher.value;
        setSelectedCurrency(code);
        window.applyPrices(code);
        emitCurrencyChanged(code);
    });
});
