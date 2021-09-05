import { isArrayEmpty, generatePairsOfUniqueNumbers, getNumberOfPlayCards, isObjectEmpty, isEqual, capitalizeString } from '../src/common/functions';
import { CONSTANTS } from '../src/common/constants';

describe('capitalizeString', () => {
    test("aabd23", () => {
        expect(capitalizeString("aabd23")).toBe("Aabd23");
    })

    test("2abd23", () => {
        expect(capitalizeString("2abd23")).toBe("2abd23");
    })

    test(CONSTANTS.CONGRATULATIONS, () => {
        expect(capitalizeString(CONSTANTS.CONGRATULATIONS)).toBe("Congratulations");
    })

    test(CONSTANTS.TRY_ANOTHER_ROUND, () => {
        expect(capitalizeString(CONSTANTS.TRY_ANOTHER_ROUND)).toBe("Try Another Round");
    })
})
describe('isArrayEmpty', () => {
    let cardPairValues = generatePairsOfUniqueNumbers(getNumberOfPlayCards(), true);

    test('[]', () => {
        expect(isArrayEmpty([])).toBe(true);
    });

    test('null', () => {
        expect(isArrayEmpty(null)).toBe(true);
    });

    test('undefined', () => {
        expect(isArrayEmpty(undefined)).toBe(true);
    });

    test("Array Not Empty", () => {
        expect(isArrayEmpty(cardPairValues)).toBe(false);
    });

    test("Array Not Empty", () => {
        expect(!isArrayEmpty(cardPairValues)).toBe(true);
    });

    test("Invalid Array", () => {
        expect(!isArrayEmpty(cardPairValues[0])).toBe(false);
    });
});

describe('isObjectEmpty', () => {
    let cardPairValues = generatePairsOfUniqueNumbers(getNumberOfPlayCards(), true);

    test('{}', () => {
        expect(isObjectEmpty({})).toBe(true);
    });

    test('null', () => {
        expect(isObjectEmpty(null)).toBe(true);
    });

    test('undefined', () => {
        expect(isObjectEmpty(undefined)).toBe(true);
    });

    test("Object Not Empty", () => {
        expect(isObjectEmpty(cardPairValues[0])).toBe(false);
    });

    test("Object Not Empty", () => {
        expect(!isObjectEmpty(cardPairValues[0])).toBe(true);
    });

    test("Invalid Object", () => {
        expect(!isObjectEmpty(cardPairValues)).toBe(false);
    });
});

describe('isEqual', () => {
    let cardPairValues = generatePairsOfUniqueNumbers(getNumberOfPlayCards(), false);
    //pairs of cards not shuffled, starting from index 0, every 2 numbers will be the same number

    test("Is Equal", () => {
        expect(isEqual(JSON.stringify(cardPairValues[0]), JSON.stringify(cardPairValues[1]))).toBe(true);
    });

    test("Is Not Equal", () => {
        expect(isEqual(JSON.stringify(cardPairValues[1]), JSON.stringify(cardPairValues[2]))).toBe(false);
    });
});

describe('getNumberOfPlayCards', () => {
    test('valid', () => {
        expect(getNumberOfPlayCards()).toBe(12);
    });
});

describe('generatePairsOfUniqueNumbers', () => {
    describe("Shuffled", () => {
        let cardPairValues = generatePairsOfUniqueNumbers(getNumberOfPlayCards(), true);
        test("numberOfPlayingCards", () => {
            expect(cardPairValues.length === getNumberOfPlayCards())
        })
    })

    describe("Not shuffled", () => {
        let cardPairValues = generatePairsOfUniqueNumbers(getNumberOfPlayCards(), false);
        console.log(cardPairValues);
        test("numberOfPlayingCards", () => {
            expect(cardPairValues.length === getNumberOfPlayCards())
        })

        test("1st and 2nd numbers same", () => {
            expect(JSON.stringify(cardPairValues[0]) === JSON.stringify(cardPairValues[1])).toBe(true);
        })

        test("3rd and 4th numbers same", () => {
            expect(JSON.stringify(cardPairValues[2]) === JSON.stringify(cardPairValues[3])).toBe(true);
        })

        test("5th and 6th numbers same", () => {
            expect(JSON.stringify(cardPairValues[4]) === JSON.stringify(cardPairValues[5])).toBe(true);
        })

        test("7th and 8th numbers same", () => {
            expect(JSON.stringify(cardPairValues[6]) === JSON.stringify(cardPairValues[7])).toBe(true);
        })

        test("9th and 10th numbers same", () => {
            expect(JSON.stringify(cardPairValues[8]) === JSON.stringify(cardPairValues[9])).toBe(true);
        })

        test("11th and 12th numbers same", () => {
            expect(JSON.stringify(cardPairValues[10]) === JSON.stringify(cardPairValues[11])).toBe(true);
        })

        test("2nd and 3rd numbers not same", () => {
            expect(JSON.stringify(cardPairValues[1]) === JSON.stringify(cardPairValues[2])).toBe(false);
        })

        test("4th and 5th numbers not same", () => {
            expect(JSON.stringify(cardPairValues[3]) === JSON.stringify(cardPairValues[4])).toBe(false);
        })

        test("6th and 7th numbers not same", () => {
            expect(JSON.stringify(cardPairValues[5]) === JSON.stringify(cardPairValues[6])).toBe(false);
        })

        test("8th and 9th numbers not same", () => {
            expect(JSON.stringify(cardPairValues[7]) === JSON.stringify(cardPairValues[8])).toBe(false);
        })

        test("10th and 11th numbers not same", () => {
            expect(JSON.stringify(cardPairValues[9]) === JSON.stringify(cardPairValues[10])).toBe(false);
        })
    })
});