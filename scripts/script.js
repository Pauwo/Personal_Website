const courseList = {
    code: ['ACIT 1515', 'ACIT 1620', 'ACIT 1630'],
    name: ['Scripting For IT', 'Fundamental Web Technologies', 'Database Systems'],
    program: 'CIT',
}

let user = "";
do{
    user = prompt("Enter a 4 digit course code: ");
}
while(isNaN(user) || (user.length != 4));
alert ("Hello")