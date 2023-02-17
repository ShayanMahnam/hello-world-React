const capitalize = (str) => {
  if(str.includes(' ')){
    return str
      .split(" ")
      .map(
        (element) =>
          element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
      ).join(" ").trim()

  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default capitalize;