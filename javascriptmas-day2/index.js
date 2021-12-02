// html dom elements 
const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const formContainer = document.getElementById('full-form-container')

// console log messages 
const message = `Do it, you know you want to 😏`
const altMessage = `This is a lot of fun, isn't it? 😏`
const themeChangeFailed = `This is the theme already.`
const themeChangeSuccess = 'Theme changed successfully!'

// changes the theme to christmas
const toggleChristmasTheme = () => {
    if(body.classList.contains('christmas')) {
        console.log(themeChangeFailed)
    } else {
        body.classList.remove('snow')
        body.classList.add('christmas')
        greeting.textContent = '🎅 Merry Christmas!'
        console.log(themeChangeSuccess)
    }
}

// changes the theme to snow
const toggleSnowTheme = () => {
    if(body.classList.contains('snow')) {
        console.log(themeChangeFailed)
    } else {
        body.classList.remove('christmas')
        body.classList.add('snow')
        greeting.textContent = '☃️ Let It Snow!'
        console.log(themeChangeSuccess)
    }
}

// console logs messsages when hover over buttons
snowBtn.onmouseover = () => {console.log(altMessage)}
christmasBtn.onmouseover = () => {console.log(message)}

// buttons change the theme directly
snowBtn.onclick = () => {toggleSnowTheme()}
christmasBtn.onclick = () => {toggleChristmasTheme()}