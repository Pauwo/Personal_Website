// const courseList = [
//     {code: 'ACIT 1515', name: 'Scripting For IT'},
//     {code: 'ACIT 1620', name: 'Fundamental Web Technologies'},
//     {code: 'ACIT 1630', name: 'Database Systems'},
// ]

// let user = "";
// do{
//     user = prompt("Enter a 4 digit course code: ");
// }
// while(isNaN(user) || (user.length != 4));

// let found = false;
// for (let item of courseList) {
//     if (item.code.includes(user)) {
//         console.log(`Yes, I am taking the course: ${item.code} - ${item.name}`);
//         found = true;
//         break
//     }
// }
// if (found == false) {
//     for (let item of courseList) {
//         if (!item.code.includes(user)) {
//             const newCourse = {code: `ACIT ${user}`, name: null};
//             courseList.push(newCourse);
//             console.log(`Successfully added a new course ${newCourse.code}`);
//             break
//         }
//     }
// }

const courseDate = document.querySelector(".b-order")
const courseCode = document.querySelectorAll(".a-order")
function createCourseArray() {
    const courseArray = [];
    for (let item of courseCode) {
            courseArray.push({code: item.textContent, date: courseDate.textContent})
    }
    return courseArray
}

function findCourse(courseList) {
    let user = "";
    do{
        user = prompt("Enter a 4 digit course code: ");
    }
    while(isNaN(user) || (user.length != 4));
    index = 0
    found = false
    for (let item of courseList) {

        if (item.code.includes(user)) {
            const course = document.querySelectorAll(".courses")[index]
            course.style.backgroundColor = "green"
            found = true
        }
        index += 1
    }
    if (found === false) {
        const mainElement = document.querySelector("main")

        const newdiv = document.createElement("div")
        newdiv.classList.add("coursediv")
        newdiv.style.borderTop = "2px solid gray"
        mainElement.appendChild(newdiv)

        const newp = document.createElement("p")
        newp.classList.add("a-order")
        newdiv.appendChild(newp)

        const newa = document.createElement("a")
        newa.textContent = user
        newp.appendChild(newa)

        const newparaB = document.createElement("p")
        newparaB.textContent = courseDate.textContent
        newparaB.classList.add("b-order")
        newdiv.appendChild(newparaB)

        const newparaC = document.createElement("p")
        newparaC.textContent = "N/A"
        newparaC.classList.add("c-order")
        newdiv.appendChild(newparaC)
    }
}
findCourse(createCourseArray());