
// Add & Remove Active Class
let mainBullets = Array.from(document.querySelectorAll('header .navbar a'));

for (let i of mainBullets) {
    i.onclick = function () {
        for (let _i of mainBullets) {
            _i.classList.remove('active');
        }
        this.classList.add('active');
    }
}

// Make Header in Full Screen
let heightSeter = document.querySelector('header .overlay .container');
heightSeter.style.height = `${window.innerHeight}px`;

// Deprecate Default Submit Action
document.querySelector('.subscribe form input[type="submit"]').onclick = function (e) {
    e.preventDefault();
}

// Show-More Button Action
document.querySelector('.our-works .show-more').onclick = function() {
    document.querySelector('.our-works .more').classList.remove('hidden');
    this.style.display = 'none';
}

// Testimonials Function Checker
var testiItems = document.querySelectorAll('.testimonials .testi'),
    prevTesti = document.querySelector('.testimonials .prev-testi'),
    nextTesti = document.querySelector('.testimonials .next-testi'),
    testiCount = 0;

var testiChecker = function() {
    for (let x of testiItems) {
        x.classList.remove('visibale');
    }
    testiItems[testiCount].classList.add('visibale');
    // Hide next and prev buttons
    if (testiCount == 0) {
        prevTesti.style.display = 'none';
    } else if (testiCount == testiItems.length - 1) {
        nextTesti.style.display = 'none'
    } else {
        prevTesti.style.display = 'block';
        nextTesti.style.display = 'block';
    }
}; testiChecker();

// prev-button Actions
document.querySelector('.prev-testi').onclick = function() {
    testiCount == 0 ? testiCount : testiCount-- ;
    testiChecker();
}
// next-button Actions
document.querySelector('.next-testi').onclick = function() {
    testiCount >= (testiItems.length - 1) ? testiCount : testiCount++ ;
    testiChecker();
}

