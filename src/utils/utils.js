// Format HTML entities to characters
export const htmlDecode = text => {
  var doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
};

// Check if the recipe have ingredient with lactose
export const handleLactose = ingredient => {
  if (ingredient.includes("milk") || ingredient.includes("cheese")) {
    return true;
  } else {
    return false;
  }
};
