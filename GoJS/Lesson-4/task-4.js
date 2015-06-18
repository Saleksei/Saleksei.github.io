/**
 * Created by Алексей on 18.06.2015.
 */
/**Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
 Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'/ */

addTripplePoint('liugil ilyg iy iluglk ilyg ily ligu ilyg ilguy lgui liug ');

function addTripplePoint(phrase) {
if (phrase.length<20) {return phrase;}
else {return phrase.slice(0, 17) + '...';}
    }