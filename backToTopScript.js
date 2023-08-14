 
  window.onscroll = function() {
    showBackToTopButton();
  };

  function showBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function scrollToTop() {
    // Use window.scrollTo() with behavior: 'smooth' for smooth scrolling
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }