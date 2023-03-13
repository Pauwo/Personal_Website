const courseList = [
    {code: 'ACIT 1515', name: 'Scripting For IT'},
    {code: 'ACIT 1620', name: 'Fundamental Web Technologies'},
    {code: 'ACIT 1630', name: 'Database Systems'},
]

let user = "";
do{
    user = prompt("Enter a 4 digit course code: ");
}
while(isNaN(user) || (user.length != 4));

let found = false;
for (let item of courseList) {
    if (item.code.includes(user)) {
        console.log(`Yes, I am taking the course: ${item.code} - ${item.name}`);
        found = true;
        break
    }
}
if (found == false) {
    for (let item of courseList) {
        if (!item.code.includes(user)) {
            const newCourse = {code: `ACIT ${user}`, name: null};
            courseList.push(newCourse);
            console.log(`Successfully added a new course ${newCourse.code}`);
            break
        }
    }
}