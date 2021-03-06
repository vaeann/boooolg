// Back to Previous Mode & Respect System Preferences
// `userPrefers`, `darkModeMediaQuery`, `lightModeMediaQuery` is defined in layouts/partials/head.html

if (userPrefers === 'dark') {
    changeMode('dark');
} else if (userPrefers === 'light') {
    changeMode('light');
} else if (darkModeMediaQuery.matches) {
    changeMode('dark');
} else if (lightModeMediaQuery.matches) {
    changeMode('light');
}

// Reactive Dark Mode
// https://web.dev/prefers-color-scheme/#reacting-on-dark-mode-changes
// https://twitter.com/ChromeDevTools/status/1197175265643745282

darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) {
        changeModeMeta('dark');
        changeMode('dark');
        setMode('dark');
    }
});

lightModeMediaQuery.addListener((e) => {
    const lightModeOn = e.matches;
    if (lightModeOn) {
        changeModeMeta('light');
        changeMode('light');
        setMode('light');
    }
});

// Mode Switcher
// https://derekkedziora.com/blog/dark-mode

function modeSwitcher() {
    const currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === 'dark') {
        changeModeMeta('light');
        changeMode('light');
        setMode('light');
    } else {
        changeModeMeta('dark');
        changeMode('dark');
        setMode('dark');
    }
}

// Sync Across Tabs
// https://codepen.io/tevko/pen/GgWYpg

window.addEventListener('storage', function (event) {
    if (event.newValue === 'dark') {
        changeModeMeta('dark');
        changeMode('dark');
    } else {
        changeModeMeta('light');
        changeMode('light');
    }
});

// Functions

function changeMode(theme) {
    var isDark = theme === 'dark';

    // Change Theme Toggle Emoji
    document.getElementById('theme-toggle').innerHTML = isDark ? '🌙' : '🌞';

    // Change Chroma Code Highlight Theme
    var oldChromaTheme = isDark ? 'chroma' : 'chroma-dark';
    var newChromaTheme = isDark ? 'chroma-dark' : 'chroma';

    var els = [].slice.apply(document.getElementsByClassName(oldChromaTheme));
    for (var i = 0; i < els.length; i++) {
        els[i].className = newChromaTheme;
    }

    {{ if and .Site.Params.enableUtterances (eq hugo.Environment "production") }}
        // Change Utterances Comments Theme
        // https://github.com/utterance/utterances/issues/229
        if (isDark) {
            changeUtterancesTheme('{{ .Site.Params.utterancesThemeDark }}');
        } else {
            changeUtterancesTheme('{{ .Site.Params.utterancesTheme }}');
        }
        function changeUtterancesTheme(theme) {
            const iframe = document.querySelector('.utterances-frame');
            if (iframe !== null) {
                const message = {
                    type: 'set-theme',
                    theme: theme
                };
                iframe.contentWindow.postMessage(message, 'https://utteranc.es');
            }
        }
    {{ end }}
}

function setMode(theme) {
    window.localStorage.setItem('theme', theme);
}
