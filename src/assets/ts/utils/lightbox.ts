/**
 * Lightbox functionality for displaying images in a modal.
 * Supports multiple independent modals on the same page.
 */

interface LightboxState {
    slideIndex: number;
}

const lightboxStates: { [key: string]: LightboxState } = {};

/**
 * Opens a specific modal by ID and initializes its first slide.
 * @param modalId The HTML ID of the modal section.
 */
function modalOpen(modalId: string): void {
    console.log(`Opening modal: ${modalId}`);
    const lightbox = document.getElementById(modalId);
    if (lightbox) {
        lightbox.style.display = "block";
        // Ensure state exists
        if (!lightboxStates[modalId]) {
            lightboxStates[modalId] = { slideIndex: 1 };
        }
        showSlides(lightboxStates[modalId].slideIndex, modalId);
    } else {
        console.error(`Modal with ID "${modalId}" not found.`);
    }
}

/**
 * Closes a specific modal by ID.
 * @param modalId The HTML ID of the modal section.
 */
function modalClose(modalId: string): void {
    console.log(`Closing modal: ${modalId}`);
    const lightbox = document.getElementById(modalId);
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

/**
 * Switches to the next/previous slide in a specific modal.
 * @param n Offset (1 for next, -1 for previous).
 * @param modalId The HTML ID of the modal section.
 */
function toggleSwitch(n: number, modalId: string): void {
    if (!lightboxStates[modalId]) {
        lightboxStates[modalId] = { slideIndex: 1 };
    }
    showSlides(lightboxStates[modalId].slideIndex += n, modalId);
}

/**
 * Switches to a specific slide in a specific modal and opens the modal.
 * @param n The slide index (1-based).
 * @param modalId The HTML ID of the modal section.
 */
function currentSwitch(n: number, modalId: string): void {
    console.log(`Switching to slide ${n} in modal ${modalId}`);
    if (!lightboxStates[modalId]) {
        lightboxStates[modalId] = { slideIndex: 1 };
    }
    lightboxStates[modalId].slideIndex = n;
    modalOpen(modalId);
}

/**
 * Displays a specific slide within a modal.
 * @param n The slide index (1-based).
 * @param modalId The HTML ID of the modal section.
 */
function showSlides(n: number, modalId: string): void {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const modalSlides = modal.getElementsByClassName('modalSlide');
    const thumbnails = modal.getElementsByClassName('ms');
    const caption = modal.querySelector(".caption-text");
    
    if (!lightboxStates[modalId]) {
        lightboxStates[modalId] = { slideIndex: 1 };
    }

    let slideIndex = n;
    if (n > modalSlides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = modalSlides.length;
    }
    lightboxStates[modalId].slideIndex = slideIndex;
    
    // Hide all slides in THIS modal
    for (let i = 0; i < modalSlides.length; i++) {
        (modalSlides[i] as HTMLElement).style.display = "none";
    }
    
    // Remove active class from all thumbnails in THIS modal
    for (let j = 0; j < thumbnails.length; j++) {
        const item = thumbnails[j] as HTMLElement;
        item.classList.remove('active');
    }
    
    // Show current slide
    if (modalSlides.length > 0 && slideIndex > 0) {
        (modalSlides[slideIndex - 1] as HTMLElement).style.display = "block";
    }
    
    // Set active thumbnail and update caption from its alt attribute
    if (thumbnails.length >= slideIndex && slideIndex > 0) {
        const currentItem = thumbnails[slideIndex - 1] as HTMLImageElement;
        currentItem.classList.add('active');
        if (caption) {
            caption.innerHTML = currentItem.alt || "";
        }
    }
}

// Initial setup for any modals present on the page
function initModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const id = modal.id;
        if (id) {
            lightboxStates[id] = { slideIndex: 1 };
            showSlides(1, id);
        }
    });
}

// Execute initialization when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModals);
} else {
    initModals();
}

// Expose functions globally for inline HTML click handlers (onclick=...)
(window as any).modalOpen = modalOpen;
(window as any).modalClose = modalClose;
(window as any).toggleSwitch = toggleSwitch;
(window as any).currentSwitch = currentSwitch;
(window as any).showSlides = showSlides;

export {};
