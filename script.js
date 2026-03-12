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
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

if (lightbox && lightboxImg && closeButton) {
  let zoom = 1;
  const minZoom = 1;
  const maxZoom = 4;

  const applyZoom = () => {
    lightboxImg.style.transform = `scale(${zoom})`;
    lightboxImg.classList.toggle('zoomed', zoom > 1);
  };

  const setZoom = (nextZoom) => {
    zoom = Math.min(maxZoom, Math.max(minZoom, nextZoom));
    applyZoom();
  };

  const resetZoom = () => setZoom(1);

  images.forEach((img) => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.setAttribute('aria-hidden', 'false');
      resetZoom();
    });
  });

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    resetZoom();
  };

  lightboxImg.addEventListener('click', (e) => {
    e.stopPropagation();
    setZoom(zoom > 1 ? 1 : 2);
  });

  lightboxImg.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    setZoom(zoom + delta);
  }, { passive: false });

  if (zoomInButton) {
    zoomInButton.addEventListener('click', () => setZoom(zoom + 0.25));
  }

  if (zoomOutButton) {
    zoomOutButton.addEventListener('click', () => setZoom(zoom - 0.25));
  }

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.getAttribute('aria-hidden') === 'true') {
      return;
    }

    if (e.key === 'Escape') {
      closeLightbox();
    }

    if (e.key === '+' || e.key === '=') {
      setZoom(zoom + 0.25);
    }

    if (e.key === '-') {
      setZoom(zoom - 0.25);
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
