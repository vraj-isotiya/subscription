document.addEventListener("DOMContentLoaded", function () {
  const baseCard = document.querySelector(".tr-buy-one-time-card");
  const basePrice = parseFloat(baseCard?.dataset.basePrice || "44");

  // Render prices and quantities for subscription cards
  document.querySelectorAll(".tr-card").forEach((card) => {
    const quantity = parseInt(card.dataset.quantity || "1", 10);
    const discount = parseFloat(card.dataset.discount || "0");

    const originalTotal = basePrice * quantity;
    const discountedTotal = originalTotal * (1 - discount / 100);
    const perBottlePrice = discountedTotal / quantity;

    card.querySelector(".tr-quantity-label").textContent = `${quantity} Bottle${
      quantity > 1 ? "s" : ""
    }`;
    card.querySelector(
      ".tr-per-bottle-label"
    ).textContent = `$${perBottlePrice.toFixed(2)} / bottle`;
    card.querySelector(".tr-price-label").innerHTML = `
      <s class="tr-original-price" >$${originalTotal.toFixed(2)}</s>
      <strong class="tr-discounted-price" ">$${discountedTotal.toFixed(
        2
      )}</strong>
    `;
  });

  // Handle active state toggle for all selectable cards
  const allCards = document.querySelectorAll(".tr-card, .tr-buy-one-time-card");

  allCards.forEach((card) => {
    card.addEventListener("click", () => {
      allCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
});
