const getRandomDarkColor = () => {
  // Generate random values for red, green, and blue components
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  // Create a hexadecimal color string
  const randomHexColor = `#${randomRed
    .toString(16)
    .padStart(2, "0")}${randomGreen.toString(16).padStart(2, "0")}${randomBlue
    .toString(16)
    .padStart(2, "0")}`;

  return randomHexColor;
};

export default getRandomDarkColor;
