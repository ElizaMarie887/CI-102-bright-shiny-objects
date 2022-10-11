// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

/*
function name: createUser
parameters 2 - strings (firstName, lastName)

return object
{
    key - firstName: string
    key - lastName: string
}
putting firstName and lastName into an object
*/
function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName:  lastName,
    }
    return user;
}
//console.log(createUser("Mesi", "Kaleziq"))

/*
function name: setAge
parameters: user(object), age(number)
user ={
    firstName: string
    lastName: string
}

return: 
user{
    firstName: String
    lastName: String
    age: number
}

*/
function setAge(user, age){
    user.age = age;
    return user;
    }
 //console.log(setAge('Tim', 'Horton', 50))

 /*
function: incerementAge
parameters: user(object), age
user={
    firstName: string
    lastName: string
}
return{
    firstName: string
    lastName: String
    age: age +1
}
 */
function incrementAge(user){
    user.age = user.age +1;
    return user;
}


function fixCar(car){
    car.needsMaintenance = false;
    return car
}
/*
function addGrades
parameters: student object and grades array

student object = {
    name: string
    email: string
    grades: array - numbers
}

grades param- array of numbers

return studen object
*/
function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades);
    return student;
}

function getDataType(object, key){
    let keytype = key;
    keyType = typeof object[key];
    return keytype
}

function addTodo (toDos, newToDo){
   toDos.push(newToDo);
   return todos
}

function addSong(playlist, newSong){
    playlist.songs.push(newSong);
    playlist['duration'] = (playlist['duration'] += newSong['duration'])
    return playlist;
}

function updateReportCard(report, newGrade){
    report.grades.push(newGrade);
    let hG = report.grades[0]
    let lG = report.grades[0]
    let sum = 0

    for(let i = 0; i < report.grades.length; i++){
        sum = sum + report.grades[i]
        if (report.grades[i]< report.grades[i + 1] && report.grades[i] < lG){lG = report.grades[i];}
        else if (report.grades[i] > report.grades[i+1] && report.grades[i+1] <lG){lG = report.grades +1}
        else if (report.grades[i] > report.grades[i+1] && report.grades [i] > hG){hG = report.grade[i]}
        else if( report.grades[i] < report.grades[i+1] && report.grades[i+1]> hG){hG= report.grades +1}
    }
    avg = sum/(reports.grades.length)
    avg = Number((math.round(avg *2) /2).toFixed(1))

    report.lowestGrade = lG
    report.highestGrade = hG
    report.averageGrade = avg

    return report
}


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
