let inp_day_main = document.getElementById("inp_day")
let inp_day_month = document.getElementById("inp_month")
let inp_day_years = document.getElementById("inp_year")

let year_s_main = document.getElementById("year_s")
let months_s_main = document.getElementById("months_s")
let days_s_main = document.getElementById("day_s")

let status_main = document.getElementById("status")

let textdate = document.getElementById("status")




const date = new Date()

let y = date.getFullYear()

let m = date.getMonth()

let d = date.getDay()
    




setInterval(date, 1000)




function main() {

    if (inp_day_main.value  === "" && inp_day_month.value === "" && inp_day_years.value === "") {
        status_main.innerHTML = "unsuccessful pls input !!!"
        status_main.style.color = "red"
    }
    else{
        let day = d - inp_day_main.value + 30
        let mounth = m - inp_day_month.value + 12 - 1
        let year = y - inp_day_years.value - 1

        year_s_main.innerHTML = year
        months_s_main.innerHTML = mounth
        days_s_main.innerHTML = day
    }

}
