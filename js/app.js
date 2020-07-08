function quarantineEnd (day, month) {
    let announcedDay = 20;
    let announcedMonth = "July"
    let returnDay;

    if ( month === announcedMonth) {
        return announcedDay-day;
    } else {
        return "Stay home, stay safe"
    }
}

console.log (quarantineEnd (day=15, month="July"));

const multiplyHundred = number => number*100;
console.log (multiplyHundred (number = 5));

const cityName = (city) => {
    console.log ('I love, ${city}')
}
console.log (cityName( city = "Baku"));

const globalCity = "Baku";
function returnCity (city) {
    const localCity = city;
    console.log (globalCity); 
    return localCity;
}
console.log(returnCity("London")); 


//MyHomeWork
function greetEverybody(myName) {
    var greeting = "Hi! My name is " + myName + ", nice to meet you!";
    return greeting;
}
var name = "Fatima"
console.log(greetEverybody(name));


function checkAge (age) {
    if (age >=18) {
        return true;
    } else {
        return "You're underage, please ask your parent for permission"
    }
}


function findMyNumber (number) {
    if (number >=0 && number%2===0) {
        return "This is correct range"
    } else {
        return "You didn't guess"
    }
}

const calculateMySalary= function (PaymentForADay, MyWorkDays) {
    const salary = PaymentForADay * MyWorkDays;
    return salary;
}


