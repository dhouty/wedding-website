this.window.addEventListener('scroll', function () {
    var topBarClassList = this.document.querySelector('.top-bar').classList;
    var scrolledClass = 'is-scrolled';

    if (this.window.scrollY === 0) {
        topBarClassList.remove(scrolledClass);
    } else {
        topBarClassList.add(scrolledClass);
    }
});

var countdownDate = new Date('Oct 28, 2023 17:00:00').getTime();
var countdownInterval = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
    } else {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.document.querySelector('.countdown .days .value').innerHTML = days;
        this.document.querySelector('.countdown .hours .value').innerHTML = hours;
        this.document.querySelector('.countdown .minutes .value').innerHTML = minutes;
        this.document.querySelector('.countdown .seconds .value').innerHTML = seconds;
        this.document.querySelector('.countdown .days .label').innerHTML = days === 1 ? 'Day' : 'Days';
        this.document.querySelector('.countdown .hours .label').innerHTML = hours === 1 ? 'Hour' : 'Hours';
        this.document.querySelector('.countdown .minutes .label').innerHTML = minutes === 1 ? 'Minute' : 'Minutes';
        this.document.querySelector('.countdown .seconds .label').innerHTML = seconds === 1 ? 'Second' : 'Seconds';
    }
}, 1000);
