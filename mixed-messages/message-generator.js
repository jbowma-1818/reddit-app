
const astrology = [
    'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
    'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'
];

const randomAstrology = () => {
    return astrology[Math.floor(Math.random() * astrology.length)];
}

const generateMessage = (name) => {
    return `Hello, ${name}! Today is your lucky day. Your astrological sign is ${randomAstrology()}.`
}

console.log(generateMessage('John')); 
