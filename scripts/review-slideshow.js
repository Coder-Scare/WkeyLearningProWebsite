reviewIndex = 1;

const plusReviews = n => {
    clearInterval(myTimer2);
    if (n < 0) {
        showReviews(reviewIndex -= 1);
    } else {
        showReviews(reviewIndex += 1);
    }

    if (n === -1) {
        myTimer2 = setInterval(function() {plusReviews(n + 2)}, 5000);
    } else {
        myTimer2 = setInterval(function() {plusReviews(n + 1)}, 5000);
    }
}

const showReviews = n => {
    let i;
    let reviews = document.getElementsByClassName("review-box");
    
    if (n > reviews.length) {reviewIndex = 1}
    if (n < 1) {reviewIndex = reviews.length}
    for (i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[reviewIndex-1].style.display = "block";
}

window.addEventListener("load", function() {
    showReviews(reviewIndex);
    myTimer2 = setInterval(function() {plusReviews(1)}, 5000);
})