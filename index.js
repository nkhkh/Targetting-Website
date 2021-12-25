const selected = "brown";
const reset = "white";
const times = {
    date: "",
    arrayoftime: []
}
let AOb = [];

function refreshtime() {
    let date = document.getElementById('incredible').value
    PowerOn(date)
    for (let i = 0; i < 24; i++) {
        document.getElementById(i).style.backgroundColor = reset;
    }

}

function getcurrentdate() {
    document.getElementById('incredible').value = document.getElementById('datefield').value
}

function PowerOn(date) {
    let period = []
    for (let i = 0; i < 24; i++) {
        let element = document.getElementById(i)
        if (element.style.backgroundColor == selected) {
            period.push(i)
        }
    }

    const one = Object.create(times);

    one.date = date
    one.arrayoftime = period

    AOb.push(one)

}

function setTodayDate() {
    console.log("something");

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("datefield").value = today;
}

function select(id) {
    let time = document.getElementById(id)

    if (time.style.backgroundColor != selected) {
        time.style.backgroundColor = selected
    } else {
        time.style.backgroundColor = reset
    }

}


function printarray() {

    for (let i = 0; i < AOb.length; i++) {
        console.log(AOb[i]);
    }
}