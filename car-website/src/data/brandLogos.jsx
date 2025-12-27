const logos = import.meta.glob("../assets/featuresImg/buttonIcons/*.svg", {
  eager: true,
});
const newIcons = Object.values(logos).map((img) => img.default);

export const brandLogos = newIcons;
