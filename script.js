document.addEventListener("DOMContentLoaded", function () {
  const sites = [
    "https://forms.office.com/r/t0XQ0GgUGi",
    "https://forms.office.com/r/yn6VpX9bQP",
    "https://forms.office.com/r/z6qwckPAqn",
  ];

  function pickRandomSite() {
    var site = Math.floor(Math.random() * sites.length);
    var selectedLink = sites[site];

    window.location.href = selectedLink;
  }

  pickRandomSite();
});
