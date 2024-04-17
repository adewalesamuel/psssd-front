function hideElement(selector) {
    const elem = window.document.querySelector(selector);
    elem.style.display = 'none';
}

function showElement(selector) {
    const elem = window.document.querySelector(selector);
    elem.style.display = 'block';
}

function toggleElement(selector) {
    const elem = window.document.querySelector(selector);

    if (elem.style.display === 'none' || !elem.style.display) {
        showElement(selector);
        return;
    }
    
    hideElement(selector);
}

function toggleVisibility(selector) {
    const elem = window.document.querySelector(selector);
    elem.classList.toggle('show');
}

const copyToClipboard = (content, object='Le code de parrainage') => {
    const document = window.document;
    const el = document.createElement("textarea");

    el.value = content;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";

    document.body.appendChild(el);

    el.select();
    el.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(el);

    window.alert(`${object} a bien été copié !`)
};


export const Dom = {
    copyToClipboard,
    hideElement,
    showElement,
    toggleElement,
    toggleVisibility
}