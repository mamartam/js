const btns = document.querySelectorAll(".btn");
const chapters = document.querySelectorAll(".chapter");
btns.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    const currentBtnId = el.currentTarget.id;

    chapters.forEach((chpt) => {
      chpt.classList.remove("show");
      if (chpt.classList.contains(currentBtnId)) {
        chpt.classList.toggle("show");
      }
    });
    btns.forEach((e) => {
      e.classList.remove("btn-effect");
    });
    el.currentTarget.classList.add("btn-effect");
  });
});
