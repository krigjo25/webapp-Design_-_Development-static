// Declaration of variables
var i: number;
var tabContent: HTMLCollectionOf<Element>;
var tabUrl: HTMLCollectionOf<Element>;

function openTab(evt: Event, tabName: string): void {
    // Hide the tabcontent
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
        const element = tabContent[i] as HTMLElement;
        element.style.display = "none";
    }
    
    // Remove the activation of the class "tablinks"
    tabUrl = document.getElementsByClassName("tabUrl");
    for (i = 0; i < tabUrl.length; i++) {
        const element = tabUrl[i] as HTMLElement;
        element.className = element.className.replace("active", "");
    }

    // Open the current tab, and add an "active" class to the link
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.style.display = "block";
    }
    
    if (evt.currentTarget) {
        (evt.currentTarget as HTMLElement).className += "active";
    }
}

// Expose openTab globally for inline HTML click handlers
(window as any).openTab = openTab;

export {};