/*First Class Function คือ ฟังก์ชันที่นำมาเก็บไว้ในตัวแปรเลย และสามารถ return ฟังก์ชันจากในฟังก์ชันได้
                          แล้วก็สามารถที่รับค่าฟังก์ชันใน argument ได้ */

//1.นำฟังก์ชันมาเก็บในตัวแปรเลย
const addAssign = function(a,b) {
    return a+b;
} 

console.log(addAssign(5,6));


//2.สามารถ return ค่าจากฟังก์ชันอีกฟังก์ชันหนึ่งได้
function addReturn(a,b) {
    return function() {
        return a+b;
    }
}
const addNum = addReturn(1,6);
console.log(addNum());

//3.สามารถที่รับค่าฟังก์ชันใน argument ได้
function addNumber(a,b) {
    return a+b;
}

function addArg(add,a,b) {
    return add(a,b);
}
console.log(addArg(addNumber,5,8));