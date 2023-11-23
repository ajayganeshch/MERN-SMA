export const hideAlert = function () {
  const ele = document.querySelector(".alert");
  if (ele) ele.parentElement.removeChild(ele);
};

export const showAlert = (type, message) => {
  hideAlert();

  const markup = `<div class='alert alert--${type}'>${message}</div>`;

  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);

  window.setTimeout(hideAlert, 3000);
};
