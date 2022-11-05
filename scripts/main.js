this.window.addEventListener('scroll', function() {
    var topBarClassList = this.document.querySelector('.top-bar').classList;
    var scrolledClass = 'is-scrolled';

    if (this.window.scrollY === 0) {
        topBarClassList.remove(scrolledClass);
    } else {
        topBarClassList.add(scrolledClass);
    }
});
