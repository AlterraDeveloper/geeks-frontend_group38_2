const currentDate = moment();

function renderWeekdays() {
    const weekdaysNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const calendarWeekdaysContainer = document.querySelector(".calendar-weekdays");

    const htmlElements = weekdaysNames.map(function (weekday) {
        const li = document.createElement("li");
        li.innerText = weekday;
        return li;
    });

    calendarWeekdaysContainer.innerHTML = "";
    calendarWeekdaysContainer.append(...htmlElements); // append(1,2,3) append(1,2,3)
}

function renderCurrentDate() {
    const calendarCurrentDateContainer = document.querySelector(".calendar-current-date");
    calendarCurrentDateContainer.innerText = currentDate.format("MMMM YYYY");
}

function renderDays() {
    const calendarDaysContainer = document.querySelector(".calendar-dates");
    calendarDaysContainer.innerHTML = "";

    const firstDayInMonth = currentDate.set(1, "date");
    const skipDaysCount = firstDayInMonth.weekday() - 1;

    for (let i = 0; i < skipDaysCount; i++) {
        const li = document.createElement("li");
        li.innerText = "";
        calendarDaysContainer.append(li);
    }

    const daysInMonth = currentDate.daysInMonth();
    const dateNow = moment();
    for (let i = 1; i <= daysInMonth; i++) {
        const li = document.createElement("li");
        li.innerText = i.toString();
        if (currentDate.format("MM-YYYY") === dateNow.format("MM-YYYY") && dateNow.date() === i) {
            li.className = "active";
        }
        calendarDaysContainer.append(li);
    }
}

function renderCalendar() {
    renderWeekdays();
    renderCurrentDate();
    renderDays();
}

renderCalendar();

const [prevBtn, nextBtn] = [...document.querySelectorAll(".calendar-navigation span")];

// const buttons = document.querySelectorAll(".calendar-navigation span");
// const prevBtn = buttons[0];
// const nextBtn = buttons[1];

prevBtn.onclick = () => {
    currentDate.subtract(1, "month");
    renderCalendar();
}

nextBtn.onclick = () => {
    currentDate.add(1, "month");
    renderCalendar();
}

const myBirthday = moment("2024-11-24", "YYYY-MM-DD");

for (let i = 0; i < 10; i++) {
    console.log(`My birthday (${myBirthday.format("YYYY")}) will be on ${myBirthday.format("dddd")}`);
    myBirthday.add(1, "year");
}


