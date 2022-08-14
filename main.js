function changeLanguage(language) {
    if (!language) {
        console.error('Argmument language is invalid')
        return
    }

    const el = document.querySelectorAll("[data-text-type]")

    document.querySelector('html').lang = language;

    el.forEach((e) => {
        const textType = e.getAttribute("data-text-type")

        e.textContent = texts[textType][language] ?? e.textContent;
    })
}

window.onload = () => {
    changeLanguage("pt-BR")

    document.querySelector('#changeLanguageToEn').onclick = () => {
        changeLanguage('en')
    }
}