/**
 * Created by Алексей on 16.06.2015.
 */
/**
 Напишите цикл, который предлагает prompt ввести число,
 большее 100. Если посетитель ввел другое число — попросить ввести еще раз,
 и так далее.

 Цикл должен спрашивать число пока либо посетитель не введет число, большее 100,
 либо не нажмет кнопку Cancel (ESC).

 Предполагается, что посетитель вводит только числа, предусматривать
 обработку нечисловых строк в этой задаче необязательно.
 */

do { var inputed_value = prompt('Please enter num > 100');  }
    while (inputed_value<100);

console.log(inputed_value);


