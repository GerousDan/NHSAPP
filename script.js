window.onload = function () {
    expiryDate();
}

function expiryDate() {
    const months = [
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
        "December"
    ];
    var date = new Date();
    date.setDate(date.getDate()-1);
    date = date.addMonths(1);
    document.getElementById("covidrecords-details-expiry__bilingual").innerText = 
        date.getDate().toString() + " " + months[date.getMonth()] + " " + date.getFullYear();
        
}

Date.isLeapYear = function (year) { 
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
};

Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

Date.prototype.isLeapYear = function () { 
    return Date.isLeapYear(this.getFullYear()); 
};

Date.prototype.getDaysInMonth = function () { 
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

function reWrite(element) {
    var n = window.prompt(
              "",
              element.innerText
            );
    if (n && n.trim() !== "") element.innerText = n;
}