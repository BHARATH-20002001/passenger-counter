let count = 0
let countel = document.getElementById("count-el")
let saveel = document.getElementById("save-el")

function increment() {
    count += 1
    countel.innerHTML = count
}

function save(){
    let countstr = count + " - "
    saveel.innerHTML += countstr
    console.log(countstr)
    count = 0
}

