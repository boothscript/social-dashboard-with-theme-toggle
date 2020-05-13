const globalThemes = {
    // colors
    green: "hsl(163, 72%, 41%)",
    red: "hsl(356, 69%, 56%)",
    facebook: "hsl(221, 44%, 41%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
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
    toggle: "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
    
}

const light = {
    ...globalThemes,
    background: "hsl(0, 0%, 100%)",
    topBgPattern:"hsl(225, 100%, 98%)",
    cardBg:"hsl(227, 47%, 96%)",
    textLight: "hsl(228, 12%, 44%)",
    textDark: "hsl(230, 17%, 14%)",
    toggle: "hsl(230, 22%, 74%)"
}

const themes = {light, dark}

export default themes