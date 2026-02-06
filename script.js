document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(faq => {
                if (faq !== item) faq.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            alert("Thank you! We’ll call you shortly.");
            contactForm.reset();
        });
    }

    // Testimonials
    let current = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');

    function updateTestimonial() {
        testimonials.forEach((t, i) => t.style.display = i === current ? "block" : "none");
    }

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    if (prev && next) {
        prev.onclick = () => { current = (current - 1 + testimonials.length) % testimonials.length; updateTestimonial(); };
        next.onclick = () => { current = (current + 1) % testimonials.length; updateTestimonial(); };
    }

    if (testimonials.length) updateTestimonial();

    // Call Buttons
    document.querySelectorAll('.btn-primary,.phone-btn,.floating-btn-left,.cta-btn').forEach(btn => {
        btn.onclick = () => window.location.href = "tel:+918148490360";
    });

    // WhatsApp Buttons
    document.querySelectorAll('.floating-btn-right,.whatsapp-btn').forEach(btn => {
        btn.onclick = () => window.open("https://wa.me/918148490360", "_blank");
    });

    // Contact Us Button
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.onclick = () => window.location.href = "tel:+918148490360";
    });


    // Book Button
    document.querySelector('.book-btn').onclick = () =>
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });

    // Explore Button
    document.querySelector('.explore-btn').onclick = () =>
        document.querySelector('#programs').scrollIntoView({ behavior: 'smooth' });

    // Navbar Scroll
    window.addEventListener('scroll', () => {
        document.querySelector('.navbar').style.background =
            window.scrollY > 50 ? "rgba(0,0,0,.95)" : "#000";
    });

    // Scroll Animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = 1;
                e.target.style.transform = "translateY(0)";
            }
        });
    });

    document.querySelectorAll('.program-card,.location-card,.stat-item').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = ".6s";
        observer.observe(el);
    });

    // Stats Counter
    function counter(el, target) {
        let c = 0;
        const i = setInterval(() => {
            c++;
            el.textContent = c + "+";
            if (c >= target) clearInterval(i);
        }, 20);
    }

    const stats = document.querySelector('.stats');
    if (stats) {
        new IntersectionObserver(e => {
            if (e[0].isIntersecting) {
                document.querySelectorAll('.stat-item h2').forEach(h =>
                    counter(h, parseInt(h.textContent)));
            }
        }, { threshold: .5 }).observe(stats);
    }

});
