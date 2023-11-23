export const hideAlert = function () {
  const ele = document.querySelector(".alert");
  if (ele) ele.parentElement.removeChild(ele);
};

export const showAlert = (type, message) => {
  hideAlert();

  const markup = `
  <div class="alert-div">
    <div class='alert alert--${type}'>${message}</div>
  </div>`;

  document
    .querySelector(".form-div-first")
    .insertAdjacentHTML("beforeend", markup);

  // window.setTimeout(hideAlert, 3000);
};
