document.addEventListener("DOMContentLoaded", function () {
  const baseCard = document.querySelector(".buy-one-time-card");
  const basePrice = parseFloat(baseCard?.dataset.basePrice || "44");

  //render all card price and quantity
  document.querySelectorAll(".card").forEach((card) => {
    const quantity = parseInt(card.dataset.quantity || "1", 10);
    const discount = parseFloat(card.dataset.discount || "0");

    const originalTotal = basePrice * quantity;
    const discountedTotal = originalTotal * (1 - discount / 100);
    const perBottlePrice = discountedTotal / quantity;

    card.querySelector(".quantity-label").textContent = `${quantity} Bottle${
      quantity > 1 ? "s" : ""
    }`;
    card.querySelector(
      ".per-bottle-label"
    ).textContent = `$${perBottlePrice.toFixed(2)} / bottle`;
    card.querySelector(".price-label").innerHTML = `
      <s class="original-price" style="color: #9ca3af">$${originalTotal.toFixed(
        2
      )}</s>
      <strong class="discounted-price" style="color: #111827">$${discountedTotal.toFixed(
        2
      )}</strong>
    `;
  });

  // to higilight card is active or not
  const allCards = document.querySelectorAll(".card, .buy-one-time-card");

  allCards.forEach((card) => {
    card.addEventListener("click", () => {
      allCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      // Check any radio input inside the clicked card
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
});
