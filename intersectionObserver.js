const image = document.querySelector('.imageOfMe');
const bio = document.querySelector('.bio');

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle("visible");
        observer.unobserve(entry.target);
    });
}, options);

observer.observe(image);
observer.observe(bio);