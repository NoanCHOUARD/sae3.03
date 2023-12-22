function popUpVelo(){
    // scrollToTop();
vel = document.querySelector("#velo");
vel.classList.remove("z-0");
vel.classList.add("z-50");
// document.body.classList.add("overflow-hidden");

}

// function scrollToTop() {
// window.scrollTo({
//     top: 0,
// });
// }

function popUpAvion(){
    // scrollToTop();
vel = document.querySelector("#avion");
vel.classList.remove("z-0");
vel.classList.add("z-50");
// document.body.classList.add("overflow-hidden");
}

function popUpTrain(){
    // scrollToTop();
vel = document.querySelector("#train");
vel.classList.remove("z-0");
vel.classList.add("z-50");
// document.body.classList.add("overflow-hidden");
}

function popUpBateau(){
    // scrollToTop();
vel = document.querySelector("#bateau");
vel.classList.remove("z-0");
vel.classList.add("z-50");
// document.body.classList.add("overflow-hidden");
}

function popUpVoiture(){
    // scrollToTop();
vel = document.querySelector("#voiture");
vel.classList.remove("z-0");
vel.classList.add("z-50");
// document.body.classList.add("overflow-hidden");
}

function popUpBus(){
    // scrollToTop();
vel = document.querySelector("#bus");
vel.classList.remove("z-0");
vel.classList.add("z-50");
// document.body.classList.add("overflow-hidden");
}

// ----------------------------------------

function closePopUpVelo(){
vel = document.querySelector("#velo");
vel.classList.remove("z-50");
vel.classList.add("z-0");
document.body.classList.remove("overflow-hidden");
}

function closePopUpAvion(){
vel = document.querySelector("#avion");
vel.classList.remove("z-50");
vel.classList.add("z-0");
document.body.classList.remove("overflow-hidden");
}

function closePopUpTrain(){
vel = document.querySelector("#train");
vel.classList.remove("z-50");
vel.classList.add("z-0");
document.body.classList.remove("overflow-hidden");
}

function closePopUpBateau(){
vel = document.querySelector("#bateau");
vel.classList.remove("z-50");
vel.classList.add("z-0");
document.body.classList.remove("overflow-hidden");
}

function closePopUpVoiture(){
vel = document.querySelector("#voiture");
vel.classList.remove("z-50");
vel.classList.add("z-0");
document.body.classList.remove("overflow-hidden");
}

function closePopUpBus(){
vel = document.querySelector("#bus");
vel.classList.remove("z-50");
vel.classList.add("z-0");
document.body.classList.remove("overflow-hidden");
}

//------------------------------------------

//-------------------------------------------------

function showEssence(){
    let ess = document.querySelector("#essence");
    let gaz = document.querySelector("#gazoil");
    let edix = document.querySelector("#e10");
    let eqvc = document.querySelector("#e85");

    ess.classList.replace("opacity-0", "opacity-100");
    gaz.classList.replace("opacity-100", "opacity-0");
    edix.classList.replace("opacity-100", "opacity-0");
    eqvc.classList.replace("opacity-100", "opacity-0");

}

function showGazoil(){
    let ess = document.querySelector("#essence");
    let gaz = document.querySelector("#gazoil");
    let edix = document.querySelector("#e10");
    let eqvc = document.querySelector("#e85");

    ess.classList.replace("opacity-100", "opacity-0");
    gaz.classList.replace("opacity-0", "opacity-100");
    edix.classList.replace("opacity-100", "opacity-0");
    eqvc.classList.replace("opacity-100", "opacity-0");

}

function showE10(){
    let ess = document.querySelector("#essence");
    let gaz = document.querySelector("#gazoil");
    let edix = document.querySelector("#e10");
    let eqvc = document.querySelector("#e85");

    ess.classList.replace("opacity-100", "opacity-0");
    gaz.classList.replace("opacity-100", "opacity-0");
    edix.classList.replace("opacity-0", "opacity-100");
    eqvc.classList.replace("opacity-100", "opacity-0");

}

function showE85(){
    let ess = document.querySelector("#essence");
    let gaz = document.querySelector("#gazoil");
    let edix = document.querySelector("#e10");
    let eqvc = document.querySelector("#e85");

    ess.classList.replace("opacity-100", "opacity-0");
    gaz.classList.replace("opacity-100", "opacity-0");
    edix.classList.replace("opacity-100", "opacity-0");
    eqvc.classList.replace("opacity-0", "opacity-100");


}