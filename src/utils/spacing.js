// The idea for the spacing function is borrowed from: https://medium.com/codyhouse/create-your-design-system-part-4-spacing-895c9213e2b9

const spacing = (size, unit = "rem") => {
  switch (size) {
    case "xxs":
      return `0.25${unit}`;
    case "xs":
      return `0.5${unit}`;
    case "small":
      return `0.75${unit}`;
    case "sm":
      return `0.75${unit}`;
    case "medium":
      return `1.25${unit}`;
    case "md":
      return `1.25${unit}`;
    case "large":
      return `1.5${unit}`;
    case "lg":
      return `1.5${unit}`;
    case "xl":
      return `2${unit}`;
    case "xxl":
      return `3${unit}`;
  }
};

export default spacing;
