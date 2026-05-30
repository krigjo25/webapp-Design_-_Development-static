// JavaScript Document
function formValidation(): boolean | void {
    const form = document.forms.namedItem("feedback") as HTMLFormElement | undefined;
    if (form) {
        const textbox = form.elements.namedItem("textbox") as HTMLInputElement | HTMLTextAreaElement | null;
        if (textbox) {
            const x = textbox.value;
            if (x === null || x === "") {
                alert("feeback must be filled out");
                return false;
            }
        }
    }
}