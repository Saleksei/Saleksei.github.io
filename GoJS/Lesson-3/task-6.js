/**
 * Created by ������� on 16.06.2015.
 */
/**
 ������� 6 (pow)

 �������� ������� pow(x,n), ������� ���������� x � ������� n. ����� ������, �������� x �� ���� n ��� � ���������� ���������.

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