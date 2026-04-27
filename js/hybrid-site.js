document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector("[data-nav-toggle]");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const filters = document.querySelectorAll("[data-filter]");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      const group = button.getAttribute("data-filter-group") || "default";
      const groupFilters = group === "default"
        ? Array.from(filters).filter((item) => !item.hasAttribute("data-filter-group"))
        : document.querySelectorAll(`[data-filter-group="${group}"]`);
      const filterItems = group === "default"
        ? Array.from(document.querySelectorAll("[data-tags]")).filter((item) => !item.closest("[data-filter-scope]"))
        : document.querySelectorAll(`[data-filter-scope="${group}"] [data-tags], [data-tags][data-filter-scope="${group}"]`);

      groupFilters.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      filterItems.forEach((item) => {
        const tags = item.getAttribute("data-tags") || "";
        item.classList.toggle("is-hidden", filter !== "all" && !tags.includes(filter));
      });
    });
  });
});
