const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetSelector = link.getAttribute('href');
    const target = document.querySelector(targetSelector);

    if (!target) {
      return;
    }

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeButton = document.querySelector('.close');

if (lightbox && lightboxImg && closeButton) {
  images.forEach((img) => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
  };

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target || 0);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 80));

  const updateCounter = () => {
    current += step;
    if (current >= target) {
      counter.textContent = String(target);
      return;
    }
    counter.textContent = String(current);
    requestAnimationFrame(updateCounter);
  };

  requestAnimationFrame(updateCounter);
};

if (counters.length > 0) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}


const contactForm = document.getElementById('contact-form') || document.getElementById('footer-contact-form');
const contactFormStatus = document.getElementById('contact-form-status') || document.getElementById('footer-form-status');

if (contactForm && contactFormStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      contactFormStatus.textContent = 'Por favor completa todos los campos.';
      return;
    }

    contactFormStatus.textContent = '¡Gracias! Te contactaremos pronto.';
    contactForm.reset();
  });
}
}

const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target || 0);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 80));

  const updateCounter = () => {
    current += step;
    if (current >= target) {
      counter.textContent = String(target);
      return;
    }
    counter.textContent = String(current);
    requestAnimationFrame(updateCounter);
  };

  requestAnimationFrame(updateCounter);
};

if (counters.length > 0) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}
