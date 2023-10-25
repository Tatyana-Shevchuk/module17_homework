import {getPercents} from './getPercents';  


//успешное выполнение функции 
describe ("test getPercent function", () => {
    it ("should operate correctly with positive number of percent", () => {
        const percent = 30;
        const number = 200;
        expect (getPercents(percent, number)).toBe(`${percent}% от ${number} это ${number / 100 * percent}`); 
    });
})
//неуспешное выполнение функции 
describe ("failed in function", () => {
    it ('if enter string', () => {
    const percent = "shjf";
    const number = 90;
    expect (getPercents(percent, number)).toBe(undefined);
    })
})

//corner case - тесты проваливаются 
describe ('corner-case for getPercents', () => {
    it ("null percent is null", () => {
        const percent = 0; 
        const number = 78;
        expect (getPercents(percent, number)).toBe(0); 
    })
    it ("percent for null number is null", () => {
        const percent = 78; 
        const number = 0;
        expect (getPercents(percent, number)).toBe(0); 
    })
})

//Три unit-tests 
describe ("test for getPercents function", () => {
    it ("should operate correctly with null in percent", () => {
        const percent = 0;
        const number = 200;
        expect (getPercents(percent, number)).toBe('Отсутствие процентного изменения, специфическое значение в математике'); 
    }),   
    it ("should operate correctly with null in number", () => {
        const percent = -30;
        const number = 0;
        expect (getPercents(percent, number)).toBe(`От нуля процент не высчитывается`); 
    });
    it ("should operate correctly with negative number of percent", () => {
        const percent = -30;
        const number = 200;
        expect (getPercents(percent, number)).toBe(`Процент не может быть отрицательным числом`); 
    });
    
});









