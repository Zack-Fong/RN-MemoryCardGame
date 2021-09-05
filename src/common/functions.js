import { CONSTANTS } from "./constants";
import { themes } from "./themes";

import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from "react-native";

export function shuffleArray(array) {
    // Durstenfeld shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export function generatePairsOfUniqueNumbers(numberOfPlayingCards, shuffle) {
    let pairsOfUniqueNumbers = [];
    for (let i = 0; i < numberOfPlayingCards / 2; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if (pairsOfUniqueNumbers.indexOf(randomNumber) === -1) {
            pairsOfUniqueNumbers.push({ number: randomNumber, numberShownToUser: false, matched: false });
            pairsOfUniqueNumbers.push({ number: randomNumber, numberShownToUser: false, matched: false });
        }
    }

    return (shuffle ? shuffleArray(pairsOfUniqueNumbers) : pairsOfUniqueNumbers);
}

export function getNumberOfPlayCards() {
    return CONSTANTS.NUMBER_OF_ROWS * CONSTANTS.NUMBER_OF_CARDS_PER_ROW;
}

export function generateCardWidth() {
    return ((themes.screenWidth - (CONSTANTS.GAP_BETWEEN_CARDS * (CONSTANTS.NUMBER_OF_CARDS_PER_ROW + 1))) / CONSTANTS.NUMBER_OF_CARDS_PER_ROW);
}

export function generateCardHeight(viewHeight) {
    return ((viewHeight - getBottomSpace() - (CONSTANTS.GAP_BETWEEN_CARDS * (CONSTANTS.NUMBER_OF_ROWS + (Platform.OS === "ios" ? 3 : 1)))) / CONSTANTS.NUMBER_OF_ROWS);
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