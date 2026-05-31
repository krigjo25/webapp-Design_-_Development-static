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
export function modalOpen(modalId: string): void {
    const lightbox = document.getElementById(modalId);
    if (lightbox) {
        lightbox.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent background scroll
        if (!lightboxStates[modalId]) {
            lightboxStates[modalId] = { slideIndex: 1 };
        }
        showSlides(lightboxStates[modalId].slideIndex, modalId);
    }
}

/**
 * Closes a specific modal by ID.
 * @param modalId The HTML ID of the modal section.
 */
export function modalClose(modalId: string): void {
    const lightbox = document.getElementById(modalId);
    if (lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scroll
    }
}

/**
 * Switches to the next/previous slide in a specific modal.
 * @param n Offset (1 for next, -1 for previous).
 * @param modalId The HTML ID of the modal section.
 */
export function toggleSwitch(n: number, modalId: string): void {
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
export function currentSwitch(n: number, modalId: string): void {
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
export function showSlides(n: number, modalId: string): void {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const modalSlides = modal.getElementsByClassName('modalSlide');
    const caption = modal.querySelector(".caption-text");
    const prevBtn = modal.querySelector(".prev") as HTMLElement;
    const nextBtn = modal.querySelector(".next") as HTMLElement;
    const nrDisplay = modal.querySelector(".nr") as HTMLElement;
    
    // Hide navigation if there's only one slide
    if (modalSlides.length <= 1) {
        if (prevBtn) prevBtn.style.display = "none";
        if (nextBtn) nextBtn.style.display = "none";
        if (nrDisplay) nrDisplay.style.display = "none";
    } else {
        if (prevBtn) prevBtn.style.display = "block";
        if (nextBtn) nextBtn.style.display = "block";
        if (nrDisplay) nrDisplay.style.display = "block";
    }

    let slideIndex = n;
    if (n > modalSlides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = modalSlides.length;
    }
    lightboxStates[modalId].slideIndex = slideIndex;
    
    // Hide all slides
    for (let i = 0; i < modalSlides.length; i++) {
        (modalSlides[i] as HTMLElement).style.display = "none";
    }
    
    // Show current slide
    if (modalSlides.length > 0) {
        (modalSlides[slideIndex - 1] as HTMLElement).style.display = "block";
        
        // Update caption from the image's alt attribute inside the slide
        const img = (modalSlides[slideIndex - 1] as HTMLElement).querySelector('img');
        if (caption && img) {
            caption.innerHTML = img.alt || "";
        }
    }
}

// Global keyboard listeners
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        // Find all visible modals and close them
        const visibleModals = document.querySelectorAll('.modal[style*="display: block"]');
        visibleModals.forEach(modal => {
            modalClose(modal.id);
        });
    }
});

// Initial setup for any modals present
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const id = modal.id;
        if (id) {
            lightboxStates[id] = { slideIndex: 1 };
            showSlides(1, id);
        }
    });
});

// Expose functions globally for inline HTML click handlers
(window as any).modalOpen = modalOpen;
(window as any).modalClose = modalClose;
(window as any).toggleSwitch = toggleSwitch;
(window as any).currentSwitch = currentSwitch;

export {};
