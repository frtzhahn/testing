if (!sessionStorage.getItem('alertShown')) {
    alert("some images and text may load for a few seconds, please wait");
    sessionStorage.setItem('alertShown', 'true');
}

document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const logos = document.querySelectorAll(".logo");
    const textContainer = document.querySelector(".text-container");

    function changeLogo() {
        if (index < logos.length) {
            if (index > 0) logos[index - 1].classList.remove("active"); // Hide previous logo
            logos[index].classList.add("active"); // Show next logo
            index++;
            setTimeout(changeLogo, 1500);
        } else {
            // Show the last logo and show text
            logos[index - 1].classList.add("active");
            setTimeout(() => {
                textContainer.classList.add("show");
            }, 5);
        }
    }

    setTimeout(changeLogo, 1000);

    // Scroll animation for content sections
    document.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".scroll-effect");
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
                el.classList.add("show");
                el.classList.remove("hide");
            } else {
                el.classList.remove("show");
                el.classList.add("hide");
            }
        });
    });

    // Scroll functions for left and right buttons
    function scrollLeft() {
        const container = document.querySelector('.strands');
        const strandWidth = document.querySelector('.strand').offsetWidth + 10; // Include the gap
        container.scrollBy({
            left: -strandWidth,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        const container = document.querySelector('.strands');
        const strandWidth = document.querySelector('.strand').offsetWidth + 10; // Include the gap
        container.scrollBy({
            left: strandWidth,
            behavior: 'smooth'
        });
    }

    // Attach event listeners to the LEFT AND RIGHT buttons
    document.querySelector('.scroll-button.left').addEventListener('click', scrollLeft);
    document.querySelector('.scroll-button.right').addEventListener('click', scrollRight);

    // Add fade-out animation and redirect to help.html
    document.querySelector('.header-button[title="click me!"]').addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = 'help.html';
        }, 1000); // Match the duration of the fade-out animation
    });

    // Add fade-out animation and redirect to about us.html
    document.querySelector('a[href="about us.html"] button').addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = 'about us.html';
        }, 1000); // Match the duration of the fade-out animation
    });
});

document.getElementById('mobile-view-button').addEventListener('click', function() {
    document.body.classList.toggle('mobile-view');
});