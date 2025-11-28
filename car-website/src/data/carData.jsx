import React from "react";
// Icons

const iconsImport = import.meta.glob("../assets/carrouselIcons/*.svg", {
  eager: true,
});

const carrouselIcons = {};
Object.keys(iconsImport).forEach((path) => {
  const fileName = path.split("/").pop().replace(".svg", "");
  carrouselIcons[fileName] = iconsImport[path].default;
});

// Carrousel images and models

const carImages = import.meta.glob("../assets/carrousel/porscheBrand/*.svg", {
  eager: true,
});

const carrouselimages = Object.values(carImages).map((img) => img.default);

const models = ["Turbo S", "Taycan", "Turbo S Cross", "Boxster 718", "Cayman"];
const prices = [175900, 114900, 150900, 125900, 128900];
const acceleration = [2.7, 3.7, 3.2, 4.0, 3.9];
const maxSpeed = [330, 356, 340, 320, 376];

export const carData = models.map((currentModelName, index) => ({
  name: "Porsche",
  model: currentModelName,
  acceleration: acceleration[index],
  maxSpeed: maxSpeed[index],
  fuel: "Electric",
  prices: prices[index],
  image: carrouselimages[index],
  accelerationIcon: carrouselIcons.accelerationIcon,
  maxSpeedIcon: carrouselIcons.speedIcon,
  fuelIcon: carrouselIcons.fuelIcon,
  saveIcon: carrouselIcons.saveIcon,
}));
