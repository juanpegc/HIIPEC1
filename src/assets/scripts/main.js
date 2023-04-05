/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import { Splide } from "@splidejs/splide";

/**
 * Write any other JavaScript below
 */
var splide = new Splide("#main-carousel", {
  pagination: false,
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();

var map = L.map("map").setView([40.42318, -3.71186], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([40.4231224, -3.7127177]);

marker.addTo(map);
