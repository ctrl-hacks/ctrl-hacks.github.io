// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from "firebase/database";
import { gsap } from "gsap";

const firebaseConfig = {
  apiKey: "AIzaSyDDGBGdvTpFQHgauSiTrmal3lnnRhFd4pw",
  authDomain: "ctrl-hacks.firebaseapp.com",
  projectId: "ctrl-hacks",
  storageBucket: "ctrl-hacks.appspot.com",
  messagingSenderId: "699208292660",
  appId: "1:699208292660:web:cd16a0667cdf3217b02d61",
  measurementId: "G-48WZZ50XR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

$("#signup-submit").click(function (e) {
  e.preventDefault();

  const email = $("#email-input").val();
    
  push(ref(db), {
    timestamp: Date().toString(),
    email: email,
  });

  
  gsap.set("#modal", { visibility: "hidden" });
  gsap.to("#modal", { opacity: 0, duration: 0.2 })
  gsap.set("#signup", { display: "none" });

  gsap.set("#success-msg", { display: "block", delay: 0.1 });
  gsap.to("#success-msg", { opacity: 1, });
  
});