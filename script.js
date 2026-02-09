document.addEventListener("DOMContentLoaded", function () {

    // Initialize dataLayer for GTM
    window.dataLayer = window.dataLayer || [];
    
    // Helper function to push conversion events to dataLayer
    function pushConversionEvent(eventName, eventParams) {
        const eventData = {
            'event': eventName,
            'event_category': eventParams.category || 'Conversion',
            'event_label': eventParams.label || '',
            'value': eventParams.value || 1,
            'currency': 'INR',
            ...eventParams
        };
        window.dataLayer.push(eventData);
        // Production: Console log removed for performance
    }

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

    // Call Buttons - Track all call button clicks as one conversion event
    document.querySelectorAll('.btn-primary,.phone-btn,.floating-btn-left,.cta-btn').forEach(btn => {
        btn.onclick = function(e) {
            // Track phone call conversion event
            pushConversionEvent('call_click', {
                'category': 'Conversion',
                'label': 'Phone Call Click',
                'value': 1,
                'phone_number': '+918148490360',
                'button_type': this.className,
                'button_text': this.textContent.trim() || this.innerText.trim()
            });
            // Small delay to ensure event is sent before navigation
            setTimeout(() => {
                window.location.href = "tel:+918148490360";
            }, 100);
        };
    });

    // WhatsApp Buttons - Track all WhatsApp button clicks as one conversion event
    const whatsappButtons = document.querySelectorAll('.floating-btn-right,.whatsapp-btn');
    if (whatsappButtons.length > 0) {
        whatsappButtons.forEach(btn => {
            btn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                try {
                    // Track WhatsApp conversion event
                    pushConversionEvent('whatsapp_click', {
                        'category': 'Conversion',
                        'label': 'WhatsApp Click',
                        'value': 1,
                        'phone_number': '918148490360',
                        'button_type': this.className
                    });
                    // Small delay to ensure event is sent before navigation
                    setTimeout(() => {
                        window.open("https://wa.me/918148490360", "_blank");
                    }, 100);
                } catch (error) {
                    // Fallback: still allow WhatsApp even if tracking fails
                    window.open("https://wa.me/918148490360", "_blank");
                }
            };
        });
    }

    // Contact Us Button - Track as call conversion
    const contactButtons = document.querySelectorAll('.contact-btn');
    if (contactButtons.length > 0) {
        contactButtons.forEach(btn => {
            btn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                try {
                    pushConversionEvent('call_click', {
                        'category': 'Conversion',
                        'label': 'Contact Us - Phone Call',
                        'value': 1,
                        'phone_number': '+918148490360',
                        'button_type': 'contact-btn'
                    });
                    setTimeout(() => {
                        window.location.href = "tel:+918148490360";
                    }, 100);
                } catch (error) {
                    // Fallback: still allow call even if tracking fails
                    window.location.href = "tel:+918148490360";
                }
            };
        });
    }


    // Book Button - Also tracked as call_click conversion
    const bookBtn = document.querySelector('.book-btn');
    if (bookBtn) {
        bookBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            try {
                // Track as call conversion
                pushConversionEvent('call_click', {
                    'category': 'Conversion',
                    'label': 'Book Appointment - Phone Call',
                    'value': 1,
                    'phone_number': '+918148490360',
                    'button_type': 'book-btn',
                    'button_text': 'Book Your Appointment'
                });
                setTimeout(() => {
                    window.location.href = "tel:+918148490360";
                }, 100);
            } catch (error) {
                // Fallback: still allow call even if tracking fails
                window.location.href = "tel:+918148490360";
            }
        };
    }

    // Explore Button - Track as engagement (not conversion)
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.onclick = function(e) {
            // Track engagement event (not a conversion)
            window.dataLayer.push({
                'event': 'explore_sessions',
                'event_category': 'Engagement',
                'event_label': 'Explore Sessions Click'
            });
            document.querySelector('#programs').scrollIntoView({ behavior: 'smooth' });
        };
    }

    // Navbar Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (navbar && navbar.style) {
                navbar.style.background = window.scrollY > 50 ? "rgba(0,0,0,.95)" : "#000";
            }
        }, { passive: true });
    }

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
