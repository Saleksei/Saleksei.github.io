/**
 * Created by ������� on 18.06.2015.
 */
/**�������� ������� checkSpam ������� ��������� ������ �� ���������� ����: spam, sex.

 checkSpam('get new Sex videos'); // true
 checkSpam('[SPAM] How to earn fast money?'); // true
 checkSpam('New PSD template'); // false
 */

checkSpam('sex');

function checkSpam(spamOrNot) {

    spamOrNot = spamOrNot.toLowerCase();

    if (~spamOrNot.indexOf("sex")) {
        return false;
    }
    else if (~spamOrNot.indexOf("spam")) {
        return false;
    }
    else  return true;
}
