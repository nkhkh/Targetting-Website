function refreshtime() {
    let StartTime = document.getElementById("StartTime").value
    let EndTime = document.getElementById("EndTime").value

    if (StartTime.length == 0 || EndTime.length == 0) {
        window.alert("fill both inputs")
    } else {
        gettime(StartTime, EndTime)
    }

    document.getElementById("StartTime").value = "";
    document.getElementById("EndTime").value = "";
}

function gettime(startTime, EndTime) {
    let times = []
    times.push(startTime)
    times.push(EndTime)

    console.log(times[0])
    console.log(times[1])
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