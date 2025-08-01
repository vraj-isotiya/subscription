document.addEventListener("DOMContentLoaded", function () {
  const baseCard = document.querySelector(".buy-one-time-card");
  const basePrice = parseFloat(baseCard.dataset.basePrice || "44");

  document.querySelectorAll(".card").forEach((card) => {
    const quantity = parseInt(card.dataset.quantity, 10) || 1;
    const discount = parseFloat(card.dataset.discount) || 0;

    const originalTotal = basePrice * quantity;
    const discountedTotal = originalTotal * (1 - discount / 100);
    const perBottlePrice = discountedTotal / quantity;

    const quantityLabel = card.querySelector(".quantity-label");
    const perBottleLabel = card.querySelector(".per-bottle-label");
    const priceLabel = card.querySelector(".price-label");

    if (quantityLabel)
      quantityLabel.textContent = `${quantity} Bottle${
        quantity > 1 ? "s" : ""
      }`;
    if (perBottleLabel)
      perBottleLabel.textContent = `$${perBottlePrice.toFixed(2)} / bottle`;
    if (priceLabel) {
      priceLabel.innerHTML = `<s class="original-price" style="color: #9ca3af">$${originalTotal.toFixed(
        2
      )}</s><strong class="discounted-price" style="color: #111827">$${discountedTotal.toFixed(
        2
      )}</strong>`;
    }
  });

  // Toggle active class
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });
  });
});
