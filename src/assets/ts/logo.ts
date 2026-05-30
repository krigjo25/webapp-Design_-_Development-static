// This document contains the Javascript used for the Slideshow for logos 
var slideIndex: number = 0;
showSlides();

function showSlides(): void {
    var i: number;
    var carousel = document.getElementsByClassName("slideshow");
    var indicator = document.getElementsByClassName('indicator');
    
    for (i = 0; i < carousel.length; i++) {
        const item = carousel[i] as HTMLElement;
        item.style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > carousel.length) {
        slideIndex = 1;
    }
    
    for (i = 0; i < indicator.length; i++) {
        const item = indicator[i] as HTMLElement;
        item.className = item.className.replace(" active", "");
    }
    
    if (carousel.length > 0 && slideIndex > 0) {
        const currentCarousel = carousel[slideIndex - 1] as HTMLElement;
        currentCarousel.style.display = "block";
    }
    
    if (indicator.length > 0 && slideIndex > 0) {
        const currentIndicator = indicator[slideIndex - 1] as HTMLElement;
        currentIndicator.className += " active";
    }
    
    setTimeout(showSlides, 2000); // Timer (2000ms) = 2s
}

// Expose showSlides globally for inline HTML click handlers
(window as any).showSlides = showSlides;

export {};
