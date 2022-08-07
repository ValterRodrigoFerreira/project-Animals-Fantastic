function initTab() {
  const $tabMenu = document.querySelectorAll(".js-tabmenu li");
  const $tabContent = document.querySelectorAll(".js-tabcontent section");

  const $activeClass = "ativo";

  if ($tabMenu.length && $tabContent.length) {
    $tabContent[0].classList.add($activeClass);

    function activeClass(index) {
      $tabContent.forEach((section) => {
        section.classList.remove($activeClass);
      });

      $tabContent[index].classList.add($activeClass);
    }

    $tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeClass(index);
      });
    });
  }
}
initTab();

function initAccordionList() {
  const $accordionList = document.querySelectorAll(".js-accordion dt");

  const activeClassAccordion = "ativo";

  if ($accordionList.length) {
    $accordionList[0].nextElementSibling.classList.add(activeClassAccordion);

    function ativarClasseAccordion(event) {
      event.currentTarget.classList.toggle(activeClassAccordion);
      event.currentTarget.nextElementSibling.classList.toggle(
        activeClassAccordion
      );
    }

    $accordionList.forEach((item) => {
      item.addEventListener("click", ativarClasseAccordion);
    });
  }
}
initAccordionList();

const $linksInternos = document.querySelectorAll(".js-linkMenu a[href^='#']");

function initScrollSuave() {
  function scrollSuave(event) {
    event.preventDefault();

    const $newHref = event.currentTarget.getAttribute("href");
    const $sections = document.querySelector($newHref);

    $sections.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  $linksInternos.forEach((links) => {
    links.addEventListener("click", scrollSuave);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const $sectionsAnimation = document.querySelectorAll(".js-scroll");

  if ($sectionsAnimation.length) {
    const $windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      $sectionsAnimation.forEach((section) => {
        const $sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = $sectionTop - $windowMetade < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
