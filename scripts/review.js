const countKey = "reviewCount";
const previousCount = Number.parseInt(localStorage.getItem(countKey), 10) || 0;
const reviewCount = previousCount + 1;

localStorage.setItem(countKey, reviewCount);
document.querySelector("#review-count").textContent = reviewCount;
document.querySelector("#review-word").textContent = reviewCount === 1 ? "review" : "reviews";
