const player = document.querySelector("lottie-player");
player.load("https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json");

// or load via a Bodymovin JSON string/object
player.load(
  '{"v":"5.3.4","fr":30,"ip":0,"op":38,"w":315,"h":600,"nm":"new", ... }'
);

let player2 = document.getElementById("firstLottie");

player2.addEventListener("ready", () => {
let inte = LottieInteractivity.create({
    player2: "#firstLottie",
    mode:"scroll",
    actions: [
        {
        visibility: [0.50, 1.0],
        type: "play"
        }
    ]
});
});