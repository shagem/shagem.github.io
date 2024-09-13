(() => {
  // js/input.js
  (function() {
    const mobileNavBtn = document.getElementById("mobileNavBtn");
    const menu = document.getElementById("mobileNav");
    const menuLinks = document.getElementById("linksContainer");
    const additionalLinks = document.getElementsByClassName("additionalLinks");
    function setTabIndexes() {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 1024) {
        Array.from(menuLinks.children).forEach((link) => {
          link.setAttribute("tabindex", "0");
        });
      } else {
        if (menu.style.height === "0px" || menu.style.height === "") {
          document.querySelectorAll("a, button").forEach((element) => {
            element.setAttribute("tabindex", "0");
          });
          Array.from(menuLinks.children).forEach((link) => {
            link.setAttribute("tabindex", "-1");
          });
          for (let i = 0; i < additionalLinks.length; i++) {
            additionalLinks[i].setAttribute("tabindex", "-1");
          }
          mobileNavBtn.setAttribute("tabindex", "0");
        } else {
          document.querySelectorAll("a, button, input, select, textarea").forEach((element) => {
            element.setAttribute("tabindex", "-1");
          });
          Array.from(menuLinks.children).forEach((link) => {
            link.setAttribute("tabindex", "0");
          });
          for (let i = 0; i < additionalLinks.length; i++) {
            additionalLinks[i].setAttribute("tabindex", "0");
          }
          mobileNavBtn.setAttribute("tabindex", "0");
        }
      }
    }
    mobileNavBtn.addEventListener("click", () => {
      if (menu.style.height === "0px" || menu.style.height === "") {
        menu.style.height = "100vh";
        document.body.style.overflow = "hidden";
      } else {
        menu.style.height = "0px";
        document.body.style.overflow = "";
      }
      setTabIndexes();
    });
    setTabIndexes();
    window.addEventListener("resize", () => {
      setTabIndexes();
    });
  })();
  (function() {
    document.querySelectorAll(".thoughtsCard").forEach((card) => {
      card.addEventListener("click", function() {
        const thoughtsCardBody = card.querySelector(".thoughtsCardBody");
        const arrowIcon = card.querySelector(".arrow-icon");
        if (thoughtsCardBody.style.maxHeight) {
          thoughtsCardBody.style.maxHeight = null;
          arrowIcon.classList.remove("rotate-180");
        } else {
          thoughtsCardBody.style.maxHeight = thoughtsCardBody.scrollHeight + "px";
          arrowIcon.classList.add("rotate-180");
        }
      });
    });
  })();
  (function() {
    document.querySelectorAll(".projectCard").forEach((card) => {
      card.addEventListener("click", function() {
        const projectCardBody = card.querySelector(".projectCardBody");
        if (projectCardBody.style.maxHeight) {
          projectCardBody.style.maxHeight = null;
        } else {
          projectCardBody.style.maxHeight = projectCardBody.scrollHeight + "px";
        }
      });
    });
  })();
})();
