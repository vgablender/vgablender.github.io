document.addEventListener("DOMContentLoaded", function () {
  const sites = [
    "https://forms.office.com/r/0vg9QKd1Tv",
    "https://forms.office.com/r/0heirEAH5g",
    "https://forms.office.com/r/t0XQ0GgUGi",
  ];

  function pickRandomSite() {
    var site = Math.floor(Math.random() * sites.length);
    var selectedLink = sites[site];

    window.location.href = selectedLink;
  }

  pickRandomSite();
});
