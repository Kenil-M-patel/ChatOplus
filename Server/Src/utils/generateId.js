const generateUniqueSKU = (name) => {
    const timestamp = Date.now().toString(); // 13 digits
    const random = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit random
    const combined = timestamp + random; // ~17 digits

    const lastTenDigits = combined.slice(-8); // Take last 10 digits to keep it compact
    return `${name}${lastTenDigits}`;
};

module.exports = generateUniqueSKU;
