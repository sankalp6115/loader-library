const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const loader = entry.target;

    if (entry.isIntersecting) {
      loader.classList.remove('paused');
    } else {
      loader.classList.add('paused');
    }
  });
}, {
  root: null, // viewport
  threshold: 1 // adjust as needed
});

// Observe all .loader elements
document.querySelectorAll('.loader').forEach(loader => {
  observer.observe(loader);
});
