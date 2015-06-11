/**
 * Created by јлексей on 11.06.2015.
 */
/**
 *Ќапишите код, который будет запрашивать логин пользовател€ (prompt).
 ≈сли посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) Ч выводить 'Canceled', если вводит
 что-то другое Ч 'Access denied'.
 ѕароль провер€ть так. ≈сли введЄн пароль 'passw0rd', то выводить 'Welcome home!', иначе Ч 'Wrong password', при
 отмене Ч 'Canceled'.
 */

var user_login = prompt('¬ведите логин?','');
if (user_login == 'admin')
{
    var user_pass = prompt('¬ведите пароль?','');

    if (user_pass == 'passw0rd') {alert('Welcome home!')}
    else if (user_pass == null) {alert('Cancelled!')}
    else {alert('Wrong password!')}

}

else if (user_login == null) {alert('Cancelled!')}
else {alert('Access denied!')}