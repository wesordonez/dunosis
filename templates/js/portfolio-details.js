function toggleCollapse() {
    const content = document.getElementById('collapsibleContent');
    const button = document.getElementById('toggleButton');

    if (content.classList.contains('tw-hidden')) {
        content.classList.remove('tw-hidden');
        arrowIcon.classList.replace('bi-chevron-right', 'bi-chevron-down'); 
        // button.textContent = 'Hide Project Information';
    } else {
        content.classList.add('tw-hidden');
        arrowIcon.classList.replace('bi-chevron-down', 'bi-chevron-right'); 
        // button.textContent = 'Show Project Information';
    }
}