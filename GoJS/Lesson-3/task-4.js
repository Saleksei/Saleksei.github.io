/**
 * Created by Алексей on 16.06.2015.
 */
/*Задание 4 (FizzBuzz 2)
Исправьте 1ю задачу так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
*/
for (i=1; i<100; i++)
{

    console.log(i);

    if ((i%5) == 0 || (i%3) != 0){
        console.log('FizzBuzz');
    }
    else {
        console.log(i);
    }


}