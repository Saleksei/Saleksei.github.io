/**
 * Created by ������� on 16.06.2015.
 */
/*������� 4 (FizzBuzz 2)
��������� 1� ������ ���, ����� ��� �������� �FizzBuzz� ��� ���� �����, ������� ������� � �� 3, � �� 5.
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