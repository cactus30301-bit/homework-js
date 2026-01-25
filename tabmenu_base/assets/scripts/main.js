const tabNav = document.querySelector(".tab-nav");
console.log(tabNav);

// tabinvest.addEventListener("click", () => {
//   tabinvest.classList.add("tab-nav__button--active");
// });

const tabMenu = tabNav.querySelectorAll(".tab-nav__button");
console.log(tabMenu)

const tabPanels = document.querySelectorAll(".tab-panel");
console.log(tabPanels)

// let i = 0, total = tabmenu.length

// while (i < total) {
//   tabmenu.addEventListener('click', () => {
//     tabmenu.classList.add("tab-nav__button--active");
//   })
  
// }


//--------------------------------------------------------------------

// tabMenu.forEach((button) => {
//   button.addEventListener('click', () => {
//     // 버튼 클릭하면 타겟이 켜짐 (화면상 변화 X)
//     const targetA = button.dataset.target;

//     // 비활성화 된 버튼에 active 지우기
//     tabMenu.forEach((button) => {
//       button.classList.remove("tab-nav__button--active");
//     });

//     // 비활성화 된 패널에 active 지우기
//     tabPanels.forEach((panel) => {
//       panel.classList.remove("tab-panel--active");
//     });

//     button.classList.add("tab-nav__button--active");


//     panel.classList.add("tab-panel--active");
//   })
// })


//--------------------------------------------------------------------

tabMenu.forEach((button) => {
  button.addEventListener("click", () => {
    // 버튼 클릭하면 타겟을 가리킴 (화면상 변화 X)
    // 버튼의 data-target <> 패널의 id
    // 이해가 진짜 안 가긴 함... 우째서!!!

    // 아... 이해함... >버튼의 data-target <> 패널의 id< 
    // id 선택해야 하는 것을 간과하였다

    const targetSelector = button.dataset.target;
    // 타겟이 된 패널
    const targetPanel = document.getElementById(targetSelector);
    console.log(targetSelector);
    console.log(targetPanel);

    // 비활성화 된 버튼에 active 지우기
    tabMenu.forEach((button) => {
      button.classList.remove("tab-nav__button--active");
    });

    // 비활성화 된 패널에 active 지우기
    tabPanels.forEach((panel) => {
      panel.classList.remove("tab-panel--active");
    });

    // 활성화 된 버튼 active
    button.classList.add("tab-nav__button--active");

    // 활성화 된 패널 active
    targetPanel.classList.add("tab-panel--active");
  });
});

