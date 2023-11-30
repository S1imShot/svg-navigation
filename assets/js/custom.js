const installBuildings = () => {
  const buildingItem = document.querySelectorAll(".building-item path");
  const buildingItemAdress = document.querySelector("#adress");
  const buildingItemStages = document.querySelector("#stages");
  const buildingItemFlats = document.querySelector("#flats");

  buildingItem.forEach((item) => {
    const itemFlats = item.getAttribute("data-flats");
    if (Number(itemFlats) === 0) {
      item.closest("a").classList.add("sold");
    }

    const soldItem = document.querySelectorAll(".sold");
    soldItem.forEach((sold, index) => {
      sold.setAttribute("data-modal", "modal-" + (index + 1));
    });

    item.addEventListener("mouseover", () => {
      const getItemAdress = item.getAttribute("data-adress");
      const getItemFloors = item.getAttribute("data-floors");
      const getItemFlats = item.getAttribute("data-flats");

      buildingItemAdress.innerHTML = getItemAdress;
      buildingItemStages.innerHTML = getItemFloors;
      buildingItemFlats.innerHTML = getItemFlats;

      item.addEventListener("click", (event) => {
        if (item.closest(".sold")) {
          event.preventDefault();
        }
      });
    });
  });
};

document.querySelector(".buildings-list") ? installBuildings() : null;

function installModals() {
  const callModalButton = document.querySelectorAll("[data-modal]");
  const customModal = document.querySelectorAll(".custom-modal");
  const closeModal = document.querySelectorAll(".close-modal");

  customModal.forEach((modal, index) => {
    modal.setAttribute("id", "modal-" + (index + 1));
  });

  callModalButton.forEach((call, index) => {
    call.addEventListener("click", () => {
      const callModal = document.querySelector("#modal-" + (index + 1));
      callModal.style.display = "flex";
      callModal.classList.add("show-modal");
    });
  });

  closeModal.forEach((closeButton) => {
    closeButton.addEventListener("click", onCloseModal);
  });

  function onCloseModal() {
    const openModal = document.querySelector(".show-modal");
    openModal.classList.remove("show-modal");
    openModal.style.display = "none";
  }
}

document.querySelector(".custom-modal") ? installModals() : false;
