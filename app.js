const chrs = [
    {name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck"},
    {name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank"},
    {name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car"},
    {name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane"},
    {name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck"},
    {name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank"},
];

// autobot function
function autoTrans(val, vech) {
    let imgA = document.createElement("img");
    imgA.src = "css/image/auto.png"

    let eleA = document.createElement("div");
    let eleV = document.createElement("p");

    eleA.innerHTML = val;
    eleA.classList.add('autobot','character');

    eleV.innerHTML = vech;
    vehicleColor(eleV);

    eleA.appendChild(imgA);
    eleA.appendChild(eleV);
    document.body.appendChild(eleA);


}

//decepticon function
function deceTrans(val, vech) {
    let imgD = document.createElement("img");
    imgD.src = "css/image/dece.png"

    let eleD = document.createElement("div");
    let eleV = document.createElement("p");

    eleD.innerHTML = val;
    eleD.classList.add('decepticon','character');

    eleV.innerHTML = vech;
    vehicleColor(eleV);

    eleD.appendChild(imgD);
    eleD.appendChild(eleV);
    document.body.appendChild(eleD);

}

// writing items to home page function
function writeTrans() {
    for (let i = 0; i<chrs.length; i++ ) {
        if (chrs[i].afl === "autobot") {
            autoTrans("Name: " + chrs[i].name + "<br>Class: " + chrs[i].class.toUpperCase(),
                "Vehicle: " + chrs[i].vehicle);
        }
        else {
           deceTrans( "Name: " + chrs[i].name + "<br>Class: " + chrs[i].class.toUpperCase(),
               "Vehicle: " + chrs[i].vehicle);
        }
    }
}

function vehicleColor(val) {
    for (let i in chrs) {
        if (chrs[i].vehicle === "truck"){
            val.setAttribute("style", "color: green")
        } else if (chrs[i].vehicle === "tank"){
            val.setAttribute("style", "color: green")
        } else if (chrs[i].vehicle === "car"){
            val.setAttribute("style", "color: gold")
        } else {
            val.setAttribute("style", "color: white")
        }
    }
}
writeTrans();