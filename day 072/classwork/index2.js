// 2


let width = 0


const loadingp = document.getElementById('loading')



function loading() {

    loadingp.style.width = width + 'px'

    if (width >= 700){

        width = 0
    }

    width += 1

}




setInterval(loading, 1)