// 플랜카드 클릭하면 clicked css 적용

const planCards = document.querySelectorAll(".plan-card");
const info = document.querySelector(".selection-info");
// const highlight = document.querySelector(".highlight");

for (const planCard of planCards) {
  planCard.addEventListener("click", (e) => {
    const isClicked = planCard.classList.contains("clicked");

    if (isClicked) {
      planCard.classList.remove("clicked");
      info.classList.remove("clicked");
    } else {
      planCards.forEach((planCard) => planCard.classList.remove("clicked"));
      planCard.classList.add("clicked");
      info.classList.add("clicked");
    }

    const planName = planCard.dataset.name;
    const planPrice = planCard.dataset.price;
    // highlight.textContent = planCard.dataset.name;
    info.textContent = `${planName} 플랜(${planPrice})을 선택하셨습니다.`;
  });
}
