function navigateToPage(language) {
    // Map each language to the page link you want to redirect to
    const languageLinks = {
        'hindi': 'page-hindi.html',
        'english': 'page-english.html',
        'bengali': 'page-bengali.html',
        'telugu': 'page-telugu.html',
        'marathi': 'page-marathi.html',
        'tamil': 'page-tamil.html',
        'urdu': 'page-urdu.html',
        'gujarati': 'page-gujarati.html',
        'malayalam': 'page-malayalam.html',
        'kannada': 'page-kannada.html',
        'punjabi': 'page-punjabi.html',
        'odia': 'page-odia.html',
        'assamese': 'page-assamese.html',
        'maithili': 'page-maithili.html',
        'sanskrit': 'page-sanskrit.html',
        'dogri': 'page-dogri.html',
        'manipuri': 'page-manipuri.html',
        'nepali': 'page-nepali.html',
        'konkani': 'page-konkani.html',
        'sindhi': 'page-sindhi.html',
        'kashmiri': 'page-kashmiri.html',
        'bodo': 'page-bodo.html'
    };

    const pageUrl = languageLinks[language];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        alert("Language page not found.");
    }
}
