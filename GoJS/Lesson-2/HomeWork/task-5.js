/**
 * Created by Алексей on 11.06.2015.
 */
/**Перепишите if..else с использованием нескольких операторов '?':*/

var name = 'admin', text;

name == 'admin' ? text = 'Hi!'  :
    name == 'manager' ? text = 'Hello!' :
        name == '' ? text = '' : null;

console.log(text);
