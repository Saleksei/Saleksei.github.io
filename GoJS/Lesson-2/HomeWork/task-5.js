/**
 * Created by ������� on 11.06.2015.
 */
/**���������� if..else � �������������� ���������� ���������� '?':*/

var name = 'admin', text;

name == 'admin' ? text = 'Hi!'  :
    name == 'manager' ? text = 'Hello!' :
        name == '' ? text = '' : null;

console.log(text);
