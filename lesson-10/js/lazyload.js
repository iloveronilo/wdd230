const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
};

if("intersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items,imgObserver) => {
        items.forEach((item) => { 
            if (!item.isIntersecting) {
                return;
            }  else {
                loadImages(item.target);
                imgObserver.unobserver(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) =>{
        imgObserver.observe(img);
    });
}

