import { gsap } from "gsap";
import { drawTextObjects, undrawTextObjects } from "../effects/draws/textDraw";
import { drawModel, undrawModel } from "../effects/draws/modelDraw";

let pageIsChanging = false;

const handlePageChange = (newPage, pageObjects) => {
    if(!pageIsChanging) {
        pageIsChanging = true;
        setTimeout(() => { pageIsChanging = false }, 0.6);

        // Hide Current Page
        gsap.to(`#${pageObjects.activePage}`, { opacity: 0, duration: 0.2 });
        gsap.set(`#${pageObjects.activePage}`, { visibility: 'hidden', delay: 0.2 });

        // Undraw all content
        // Im too lazy to think of a better solution leave me alone
        if(pageObjects.activePage === "home") {
            const tl = gsap.timeline();
            pageObjects.activePage = "about";
            undrawTextObjects(pageObjects['home']['letters'], 1, tl);

            drawModel(pageObjects['about']['towerModel'], 1.25, tl, 1);
            drawTextObjects(pageObjects['about']['aboutLetters'], 1.25, tl, 1);

            tl.set("#about", { display: "block" });
            tl.set("#about", { visibility: "visible" });
            tl.to("#about", { opacity: 1, duration: 0.2 });
        } else if (pageObjects.activePage === "about") {
            // Undraw Calgary Tower
            const tl = gsap.timeline();
            pageObjects.activePage = "home";
            undrawModel(pageObjects['about']['towerModel'], 1.25, tl);
            undrawTextObjects(pageObjects['about']['aboutLetters'], 1.25, tl);
            
            drawTextObjects(pageObjects['home']['letters'], 1, tl, 1.25);

            tl.set("#home", { visibility: "visible" });
            tl.to("#home", { opacity: 1, duration: 0.2 });
        }

    }
}

const navigation = (pageObjects) => {

    $("#nav-about").click(() => { 
        if(pageObjects.activePage !== "about") handlePageChange("about", pageObjects);
    });

    $("#nav-logo").click(() => { 
        if(pageObjects.activePage !== "home") handlePageChange("home", pageObjects);
        console.log(pageObjects)
    });

}

export default navigation