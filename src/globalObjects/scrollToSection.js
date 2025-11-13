export const scrollUtils = {
  scrollToSection(id) {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  },
};
