async function includeHTML() {
    const response = await fetch('./header.html');
    const text = await response.text();
    document.querySelector('header').innerHTML = text;
}

document.addEventListener('DOMContentLoaded', includeHTML);