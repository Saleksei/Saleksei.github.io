/**
 * Created by ������� on 16.06.2015.
 */
/**
 ������� 5 (��������� �����)

 �������� ���������, ��������� ������, ���������� ������� 8�8, � ������� ����� ����������� ��������� ����� ������.
 �� ������ ������� ���� ������, ���� #. � ���������� ������ ���������� ��������� �����.
 */

/*var str = ''; - ��������� ������
 str += 'something'
 str += 'simple string'
 str += 'one more string'
 console.log(str)*/


var out = "#"; /*���������� ����������, ��� �������*/

for (j = 1; j<9; j++) {

    for (i = 1; i < 9; i++) {

        out += (i % 2) == 0 ? '#' : '_';

    }
    console.log(out);



}
