const globalThemes = {
    // colors
    green: "hsl(163, 72%, 41%)",
    red: "hsl(356, 69%, 56%)",
    facebook: "hsl(195, 100%, 50%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
    youtube: "hsl(348, 97%, 39%)",

    // typography
    font: "'Inter', sans-serif",
}

const dark = {
    ...globalThemes,
    background: "hsl(230, 17%, 14%)",
    topBgPattern:"hsl(232, 19%, 15%)",
    cardBg:"hsl(228, 28%, 20%)",
    textLight: "hsl(228, 34%, 66%)",
    textDark: "hsl(0, 0%, 100%)",
    
}

const light = {
    ...globalThemes,
    background: "hsl(0, 0%, 100%)",
    topBgPattern:"hsl(225, 100%, 98%)",
    cardBg:"hsl(227, 47%, 96%)",
    textLight: "hsl(228, 12%, 44%)",
    textDark: "hsl(230, 17%, 14%)"
}

const themes = {light, dark}

export default themes