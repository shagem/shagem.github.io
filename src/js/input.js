//Navigation formatting and accessibility handler
(function() {
    const mobileNavBtn = document.getElementById('mobileNavBtn');
    const menu = document.getElementById('mobileNav');
    const menuLinks = document.getElementById('linksContainer');
    const additionalLinks = document.getElementsByClassName('additionalLinks');

    function setTabIndexes() {
        const viewportWidth = window.innerWidth;

        if (viewportWidth >= 1024) {
            // Viewport is 1024px or more, set tabindex to "0"
            Array.from(menuLinks.children).forEach(link => {
                link.setAttribute('tabindex', '0');
            });
        } else {
            // Viewport is below 1024px
            if (menu.style.height === "0px" || menu.style.height === "") {
                // Menu is closed, set tabindex to "-1"
                document.querySelectorAll('a, button').forEach(element => {
                    element.setAttribute('tabindex', '0');
                });
                Array.from(menuLinks.children).forEach(link => {
                    link.setAttribute('tabindex', '-1');
                });
                for (let i = 0; i < additionalLinks.length; i++) {
                    additionalLinks[i].setAttribute('tabindex', '-1');
                }
                mobileNavBtn.setAttribute('tabindex', '0');
            } else {
                // Menu is open, set tabindex to "0"
                document.querySelectorAll('a, button, input, select, textarea').forEach(element => {
                    element.setAttribute('tabindex', '-1');
                });
                Array.from(menuLinks.children).forEach(link => {
                    link.setAttribute('tabindex', '0');
                });
                for (let i = 0; i < additionalLinks.length; i++) {
                    additionalLinks[i].setAttribute('tabindex', '0');
                }
                mobileNavBtn.setAttribute('tabindex', '0');
            }
        }
    }

    mobileNavBtn.addEventListener("click", () => {
        if (menu.style.height === "0px" || menu.style.height === "") {
            // Menu is closed, open it
            menu.style.height = "100vh";
            document.body.style.overflow = 'hidden';
        } else {
            // Menu is open, close it
            menu.style.height = "0px";
            document.body.style.overflow = '';
        }

        // After toggling menu state, update tabindex
        setTabIndexes();
    });

    // Initially set tabindex based on viewport width
    setTabIndexes();

    // Update tabindex when the window is resized
    window.addEventListener('resize', () => {
        setTabIndexes();
    });
})();