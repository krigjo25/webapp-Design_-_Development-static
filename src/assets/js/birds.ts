// Javascript document of Birds...

function modalOpen(): void {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = "block";
    }
}

function modalClose(): void {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

var slideIndex: number = 1;
showSlides(slideIndex);

function toggleSwitch(n: number): void {
    showSlides(slideIndex += n);
}

function currentSwitch(n: number): void {
    showSlides(slideIndex = n);
}

function showSlides(n: number): void {
    var modalSlide = document.getElementsByClassName('modalSlide');
    var ms = document.getElementsByClassName('ms');
    var caption = document.getElementById("caption");
    
    if (n > modalSlide.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = modalSlide.length;
    }
    
    for (var i = 0; i < modalSlide.length; i++) {
        const slide = modalSlide[i] as HTMLElement;
        slide.style.display = "none";
    }
    
    for (var j = 0; j < ms.length; j++) {
        const item = ms[j] as HTMLElement;
        item.className = item.className.replace(" .active", "");
    }
    
    if (modalSlide.length > 0 && slideIndex > 0) {
        const currentSlide = modalSlide[slideIndex - 1] as HTMLElement;
        currentSlide.style.display = "block";
    }
    
    if (ms.length > 0 && slideIndex > 0) {
        const currentItem = ms[slideIndex - 1] as HTMLImageElement;
        currentItem.className += " .active";
        if (caption) {
            caption.innerHTML = currentItem.alt;
        }
    }
}

// Expose functions globally for inline HTML click handlers
(window as any).modalOpen = modalOpen;
(window as any).modalClose = modalClose;
(window as any).toggleSwitch = toggleSwitch;
(window as any).currentSwitch = currentSwitch;
(window as any).showSlides = showSlides;

export {};