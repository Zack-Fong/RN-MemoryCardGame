export function shuffleArray(array) {
    // Durstenfeld shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export function generatePairsOfUniqueNumbers(numberOfPlayingCards) {
    let pairsOfUniqueNumbers = [];
    for (let i = 0; i < numberOfPlayingCards; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if (pairsOfUniqueNumbers.indexOf(randomNumber) === -1) {
            pairsOfUniqueNumbers.push({ number: randomNumber, numberShownToUser: false });
            pairsOfUniqueNumbers.push({ number: randomNumber, numberShownToUser: false });
        }
    }

    return pairsOfUniqueNumbers;
}

export function generateAndShufflePairsOfUniqueNumbers(numberOfPlayingCards) {
    let pairsOfUniqueNumbers = generatePairsOfUniqueNumbers(numberOfPlayingCards);
    return shuffleArray(pairsOfUniqueNumbers);
}

export function isNumber(number) {
    return (Number.isFinite(number));
}

export function isString(string) {
    return (typeof string === 'string');
}

export function isArray(array) {
    return Array.isArray(array);
}

export function isObject(object) {
    return (typeof object === 'object');
}

export function isVariableDefined(variable) {
    return typeof variable !== 'undefined' && variable !== null;
}

export function isNumberEmpty(number) {
    return (typeof number === "undefined" || number === null || number === '' || isNaN(Number(number)));
}

export function isStringEmpty(string) {
    return (typeof string === 'undefined' || string === null || string.length === 0);
}

export function isArrayEmpty(array) {
    return (typeof array === 'undefined' || array === null || array.length === 0);
}

export function isObjectEmpty(object) {
    return (typeof object === 'undefined' || object === null || (Object.entries(object).length === 0 && object.constructor === Object));
}

export function isEqual(element1, element2) {
    return (element1 === element2);
}

export function shadowCopyObject(obj) {
    return Object.assign({}, obj);
}

export function deepCopyObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function capitalizeString(string) {
    var splitStr = string.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

export function uppercaseString(string) {
    return string.toUpperCase();
}

export function lowercaseString(string) {
    return string.toLowerCase();
}