/**
 * Created by ������� on 11.06.2015.
 */
/**
 *�������� ���, ������� ����� ����������� ����� ������������ (prompt).
 ���� ���������� ������ 'admin', �� ���������� ������, ���� ����� ������ (escape) � �������� 'Canceled', ���� ������
 ���-�� ������ � 'Access denied'.
 ������ ��������� ���. ���� ����� ������ 'passw0rd', �� �������� 'Welcome home!', ����� � 'Wrong password', ���
 ������ � 'Canceled'.
 */

var user_login = prompt('������� �����?','');
if (user_login == 'admin')
{
    var user_pass = prompt('������� ������?','');

    if (user_pass == 'passw0rd') {alert('Welcome home!')}
    else if (user_pass == null) {alert('Cancelled!')}
    else {alert('Wrong password!')}

}

else if (user_login == null) {alert('Cancelled!')}
else {alert('Access denied!')}