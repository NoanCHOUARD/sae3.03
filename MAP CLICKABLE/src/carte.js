function popUpVelo(){
        scrollToTop();
    vel = document.querySelector("#velo");
    vel.classList.remove("z-0");
    vel.classList.add("z-30");
    document.body.classList.add("overflow-hidden");
    
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

function popUpAvion(){
        scrollToTop();
    vel = document.querySelector("#avion");
    vel.classList.remove("z-0");
    vel.classList.add("z-30");
    document.body.classList.add("overflow-hidden");
}

function popUpTrain(){
        scrollToTop();
    vel = document.querySelector("#train");
    vel.classList.remove("z-0");
    vel.classList.add("z-30");
    document.body.classList.add("overflow-hidden");
}

function popUpBateau(){
        scrollToTop();
    vel = document.querySelector("#bateau");
    vel.classList.remove("z-0");
    vel.classList.add("z-30");
    document.body.classList.add("overflow-hidden");
}

function popUpVoiture(){
        scrollToTop();
    vel = document.querySelector("#voiture");
    vel.classList.remove("z-0");
    vel.classList.add("z-30");
    document.body.classList.add("overflow-hidden");
}

function popUpBus(){
        scrollToTop();
    vel = document.querySelector("#bus");
    vel.classList.remove("z-0");
    vel.classList.add("z-30");
    document.body.classList.add("overflow-hidden");
}

// ----------------------------------------

function closePopUpVelo(){
    vel = document.querySelector("#velo");
    vel.classList.remove("z-30");
    vel.classList.add("z-0");
    document.body.classList.remove("overflow-hidden");
}

function closePopUpAvion(){
    vel = document.querySelector("#avion");
    vel.classList.remove("z-30");
    vel.classList.add("z-0");
    document.body.classList.remove("overflow-hidden");
}

function closePopUpTrain(){
    vel = document.querySelector("#train");
    vel.classList.remove("z-30");
    vel.classList.add("z-0");
    document.body.classList.remove("overflow-hidden");
}

function closePopUpBateau(){
    vel = document.querySelector("#bateau");
    vel.classList.remove("z-30");
    vel.classList.add("z-0");
    document.body.classList.remove("overflow-hidden");
}

function closePopUpVoiture(){
    vel = document.querySelector("#voiture");
    vel.classList.remove("z-30");
    vel.classList.add("z-0");
    document.body.classList.remove("overflow-hidden");
}

function closePopUpBus(){
    vel = document.querySelector("#bus");
    vel.classList.remove("z-30");
    vel.classList.add("z-0");
    document.body.classList.remove("overflow-hidden");
}