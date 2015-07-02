/**TASK 2
 * Created by afmin on 02/07/2015.
 */
var image = {
    'width': 100,
    'height' : 300,
    'name' : 'cool image'

};

function multiplyNumbers(obj){
    for (var key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key]=obj[key]*2;
        }

    }


}

multiplyNumbers(image);
console.log (image);
----------------------------------------

