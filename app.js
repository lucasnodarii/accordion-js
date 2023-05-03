const accordion = document.querySelector("[data-js='accordion']");

const handleAccordionClick = (e) => {
  const closeAccordionItem = (accordionHeaderToBeClosed) => {
    const accordionHeaderId = accordionHeaderToBeClosed.dataset.accordionHeader;
    const accordianBodyToBeClosed = document.querySelector(
      `[data-accordion-body="${accordionHeaderId}"]`
    );
    accordionHeaderToBeClosed.classList.remove("active");
    accordianBodyToBeClosed.classList.remove("active");
  };

  const accordionHeaderId = e.target.dataset.accordionHeader;
  const clickedAccordionHeader = document.querySelector(
    `[data-accordion-header="${accordionHeaderId}"]`
  );
  const accordionItemToBeOpened = document.querySelector(
    `[data-accordion-body="${accordionHeaderId}"]`
  );
  const accordionHeaderToBeClosed = Array.from(
    document.querySelectorAll('[data-js="accordion-header"]')
  )
    .filter((accordionHeader) => accordionHeader !== clickedAccordionHeader)
    .find((accordionHeader) => accordionHeader.classList.contains("active"));

  if (!e.target.dataset.accordionHeader) {
    return;
  }

  if (accordionHeaderToBeClosed) {
    closeAccordionItem(accordionHeaderToBeClosed);
  }

  accordionItemToBeOpened.classList.toggle("active");
  clickedAccordionHeader.classList.toggle("active");
};

accordion.addEventListener("click", handleAccordionClick);
