const luigi = document.querySelector(".luigi");
const pipe = document.querySelector(".pipe");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;


document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
      jump();
    }
  });


  function jump() {
    if (!luigi.classList.contains("jump")) {
      luigi.classList.add("jump");
      alreadyJump = true;

  
      setTimeout(() => {
        luigi.classList.remove("jump");
        alreadyJump = false;
      }, 1100);
    }
  }

  setInterval(() => {
    let luigiBottom = parseInt(
        window.getComputedStyle(luigi).getPropertyValue("bottom")
    );
    let pipeLeft = parseInt(
        window.getComputedStyle(pipe).getPropertyValue("left")
    );


    if (pipeLeft < 70 && pipeLeft > 40 && luigiBottom < 40 && !alreadyJump) {
        alert(`Game Over! Seu score foi: ${count}`);
        count = 0;
    }


  
    count++;
    score.innerHTML = `SCORE: ${count}`;
  }, 10);