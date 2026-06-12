if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
});

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "aria-hidden": "true"
    }
  });
}
