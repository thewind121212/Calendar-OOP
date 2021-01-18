const date = new Date()
const monthToString = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]





function renderCalendar() {
document.querySelector('.date h1').innerHTML = monthToString[date.getMonth()];
document.querySelector('.date p').innerHTML = (new Date()).toDateString();

let monthDays = document.querySelector('.days');

let days = ''

let allDayInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

let indexFirstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()

function restDayPreCalc(ngay) {
    return new Date(date.getFullYear(), date.getMonth(), ngay).getDate()
}
    class Calendar {

    
    constructor(indexFirstDayOfMonth, indexLatstDayOfMonth, allDayInMonth) {
        this.indexFirstDayOfMonth = indexFirstDayOfMonth;
        this.indexLatstDayOfMonth = indexLatstDayOfMonth;
        this.allDayInMonth = allDayInMonth;
    }

    restDayHeadMonth = () => {
        let restDay = 0;
            switch (this.indexFirstDayOfMonth) {
                case 0: {
                     restDay = 6;
                }
                break;
                case 1: {
                     restDay = 7;
                }
                break;
                default: {
                    restDay = this.indexFirstDayOfMonth - 1;                }
            }
                for (let i = (restDay - 1); i >= 0; i--) {
             days+= `<div class= "prev-date" >${restDayPreCalc(-i)}</div>`
        }
         return restDay
    }
    
    restDayOfEndMonth = () => {
        let restDay =  42 - ((this.allDayInMonth) + 1)
        for (let i = 0; i < restDay; i++) {
            days+=  `<div class="next-date">${restDayPreCalc((this.allDayInMonth+1)+i)}</div>`
        }
    }

}

let linh = new Calendar(indexFirstDayOfMonth, 4, allDayInMonth)

linh.restDayHeadMonth()


for (let i = 1; i <= allDayInMonth; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() ) {
        days+= `<div class="today" > ${i}</div>`
    }
    else {
        days+= `<div > ${i}</div>`
    }

}

linh.restDayOfEndMonth()
monthDays.innerHTML = days;
}



document.querySelector('.prev').addEventListener('click', function() {
    date.setMonth(date.getMonth()  -1)
    renderCalendar()
})

document.querySelector('.next').addEventListener('click', function() {
    date.setMonth(date.getMonth()  + 1 )
    renderCalendar()
})

renderCalendar()