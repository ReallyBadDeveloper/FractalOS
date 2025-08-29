var disableBootMenu = true;
if (disableBootMenu) {
    document.querySelector('.boot.background').remove()
}

setTimeout(() => {
    document.querySelector('.boot.progress').style.display = 'initial'
    loadIncrease()
}, 1500)

var loadIncrease = () => {
    if (!document.querySelector('.boot.background')) {
        return
    }
    document.querySelector('.boot.progress').value += Math.floor(Math.random()*25)
    if (document.querySelector('.boot.progress').value > 99) {
        setTimeout(() => {
            document.querySelector('.boot.container').style.display = 'none'
            document.querySelector('.boot.background').style.animationName = "fadeout"
        },1000)
        return;
    }
    setTimeout(loadIncrease,Math.random()*1000)
}
var removeInterval
removeInterval = setInterval(() => {
    if (!document.querySelector('.boot.background')) {
        clearInterval(removeInterval)
        return
    }
    if (Number(getComputedStyle(document.querySelector('.boot.background')).getPropertyValue("opacity")) < 0.01) {
        document.querySelector('.boot.background').remove()
        clearInterval(removeInterval)
    }
},1)