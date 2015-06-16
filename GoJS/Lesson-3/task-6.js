/**
 * Created by Алексей on 16.06.2015.
 */
/**
 Задание 6 (pow)

 Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

 pow(3, 2) = 3 * 3 = 9
 pow(1, 100) = 1 * 1 * ...* 1 = 1
 **/


/**
finction pow (a,b){
    return Math.pow(a,b);
}
*/
function pov(a,b){
    var n=a;
    for (var i=1; i<b ;i++)
    {
        n *= a;

    }
    return n;

}


console.log (pov(2,30));