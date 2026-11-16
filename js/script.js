document.addEventListener("DOMContentLoaded", () => {

  
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {
        section.classList.add("reveal");
        observer.observe(section);
    });



    const pageSections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    const navObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }

                });

            }

        });

    }, {
        threshold: 0.4
    });

    pageSections.forEach(section => {
        navObserver.observe(section);
    });


    // ==========================================
    // 3. BACK TO TOP BUTTON
    // ==========================================

    const backToTop = document.getElementById("back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }
    
    const scrollProgress = document.getElementById("scroll-progress");

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        scrollProgress.style.width = progress + "%";

    });
   
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("project-hover");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("project-hover");
        });

    });

    const shopContainer = document.querySelector(".shop-container");

    if (shopContainer) {

        const shopObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    shopContainer.classList.add("shop-active");

                    shopObserver.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.2
        });

        shopObserver.observe(shopContainer);

    }
 

    const preloader = document.getElementById("preloader");

    const loadingStart = Date.now();

    window.addEventListener("load", () => {

        if (preloader) {

            const elapsedTime = Date.now() - loadingStart;
            const remainingTime = Math.max(0, 1000 - elapsedTime);

            setTimeout(() => {

                preloader.classList.add("preloader-hidden");

                setTimeout(() => {
                    preloader.style.display = "none";
                }, 800);

            }, remainingTime);

        }

    });

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        // Close menu after selecting a link

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

    }

});