document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling only for internal links on the same page (starting with #)
    document.querySelectorAll('nav a').forEach(anchor => {
        const href = anchor.getAttribute('href');

        // Only apply smooth scrolling for sections inside the same page
        if (href.startsWith("#")) {
            anchor.addEventListener('click', function(event) {
                event.preventDefault();
                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    });


    // Highlight active section in navigation
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY + 100;
        document.querySelectorAll('section').forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                document.querySelectorAll('nav ul li a').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`nav ul li a[href="#${section.id}"]`)?.classList.add('active');
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        console.log("Typing script loaded!");
    
        const textElement = document.getElementById("about-text");
        const text = "I am a passionate web developer creating stunning web experiences.";
        let index = 0;
    
        function typeWriterEffect() {
            console.log(`Typing: ${text.charAt(index)}`);
    
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriterEffect, 50);
            }
        }
    
        if (textElement) {
            textElement.innerHTML = "";
            typeWriterEffect();
        } else {
            console.log("❌ Error: #about-text not found!");
        }
    });
    
    
    

    // Project fade-in animation on scroll
    const projects = document.querySelectorAll('.project');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.3 });

    projects.forEach(project => observer.observe(project));

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields.");
                event.preventDefault();
            }
        });
    }

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = "↑";
    backToTop.id = "back-to-top";
    backToTop.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px 15px;font-size:20px;background:#0d47a1;color:white;border:none;border-radius:50%;cursor:pointer;display:none;z-index:1000;";
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
