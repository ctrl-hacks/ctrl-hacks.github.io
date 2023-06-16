import { Collapse, initTE } from "tw-elements";
import { gsap } from "gsap";

$("#signup-btn, #nav-signup").click(function (e) {
    gsap.set("#modal", { visibility: "visible" });
    gsap.to("#modal", { opacity: 1, duration: 0.2 })
});

$("#modalClose").click(() => {
    gsap.set("#modal", { visibility: "hidden" });
    gsap.to("#modal", { opacity: 0, duration: 0.2 })
});
  
initTE({ Collapse });