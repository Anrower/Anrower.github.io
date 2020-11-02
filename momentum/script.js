//Dom elements
const time = document.getElementById('time');
const date = document.getElementById('date');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];




//Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        dayof = today.getDay(),
        dateof = today.getDate(),
        month = today.getMonth();


    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    date.innerHTML = `${getWeekDay(dayof)} ${dateof} ${getMonth(month)}`;

    setTimeout(showTime, 1000);
}

//get WeekDay
function getWeekDay(dayof) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayof];
}
//get Month
function getMonth(month) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[month];
}

//Add Zeroes
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Get Random Bg
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//Create BG day-list
function dayListBg() {
    let tempArr = images.slice();
    let arr = [];
    let randBg;
    for (let i = 0; i < 6; i++) {
        randBg = getRandomInt(0, tempArr.length);
        arr.push(tempArr[randBg]);
        tempArr.splice([randBg], 1);
    }
    return arr;
}

const base = 'assets/images/';



function viewBgImage(data) {
    const body = document.querySelector('body');
    const src = data;
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {
        body.style.backgroundImage = `url(${src})`;
    };
}

function getImage() {
    let i = 0,
        arr = dayListBg(),
        index = i,
        day = 'day/',
        imageSrc;
    /* evening = 'evening/',
    morning = 'morning/',
    night = 'night/'; */

    imageSrc = base + day + arr[index];
    viewBgImage(imageSrc);
    i++;
    btn.disabled = true;
    setTimeout(function() { btn.disabled = false }, 1000);
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);


///assets/images/day/16.jpg
//\assets\images\day

//Set BG and Greating
function setBgGreat() {
    let today = new Date(),
        hour = today.getHours(),
        bg = dayListBg(),
        part;

    getPartHour(hour);

    function getPartHour(hour) {
        if (hour === 0 || hour === 6 || hour === 12 || hour === 18) {
            return part = 0;
        } else if (hour === 1 || hour === 7 || hour === 13 || hour === 19) {
            return part = 1;
        } else if (hour === 2 || hour === 8 || hour === 14 || hour === 20) {
            return part = 2;
        } else if (hour === 3 || hour === 9 || hour === 15 || hour === 21) {
            return part = 3;
        } else if (hour === 4 || hour === 10 || hour === 16 || hour === 22) {
            return part = 4;
        } else {
            return part = 5;
        }
    }

    if (hour >= 6 && hour < 12) {
        //Morning
        document.body.style.backgroundImage = `url('assets/images/morning/${bg[part]})`;
        greeting.textContent = 'Good Morning'
    } else if (hour >= 12 && hour < 18) {
        //Day
        document.body.style.backgroundImage = `url('assets/images/day/${bg[part]}')`;
        greeting.textContent = 'Good Day';
    } else if (hour >= 18 && hour < 24) {
        //Evening
        document.body.style.backgroundImage = `url('assets/images/evening/${bg[part]}')`;
        greeting.textContent = 'Good Evening'
        document.body.style.color = '#fff'
    } else {
        //Night
        document.body.style.backgroundImage = `url('assets/images/night/${bg[part]}')`;
        greeting.textContent = 'Good Night';
    }
}

//Get Name 
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set On Click Name
function clearName(e) {
    name.textContent = '';
}


//Set Name
function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerHTML);
    }
}


//Get Focus 
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}


//Set On Click Name
function clearFocus(e) {
    focus.textContent = '';
}

//Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerHTML);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerHTML);
    }
}

name.addEventListener('click', clearName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('click', clearFocus);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreat();
getName();
getFocus();