/**
 * Created by ������� on 16.06.2015.
 */
/**
 �������� ����, ������� ���������� prompt ������ �����,
 ������� 100. ���� ���������� ���� ������ ����� � ��������� ������ ��� ���,
 � ��� �����.

 ���� ������ ���������� ����� ���� ���� ���������� �� ������ �����, ������� 100,
 ���� �� ������ ������ Cancel (ESC).

 ��������������, ��� ���������� ������ ������ �����, ���������������
 ��������� ���������� ����� � ���� ������ �������������.
 */

do {?var inputed_value = prompt('Please enter num > 100');? }
    while (inputed_value<100);

console.log(inputed_value);
