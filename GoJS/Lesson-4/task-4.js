/**
 * Created by ������� on 18.06.2015.
 */
/**�������� �������, ������� ��������� �� ���� ������ � ���������� �� ���������� ���� �� ����� �� ��������� 20 ��������.
 ���� ������ ������ 20, �� �������� ������ � ��������� � ����� ������ '...'/ */

addTripplePoint('liugil ilyg iy iluglk ilyg ily ligu ilyg ilguy lgui liug ');

function addTripplePoint(phrase) {
if (phrase.length<20) {return phrase;}
else {return phrase.slice(0, 17) + '...';}
    }