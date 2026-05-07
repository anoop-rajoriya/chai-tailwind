export const staticDict = {
  flex: { display: "flex" },
  "flex-col": { flexDirection: "column" },
  "flex-row": { flexDirection: "row" },
  "items-center": { alignItems: "center" },
  "justify-center": { justifyContent: "center" },
  hidden: { display: "none" },
  block: { display: "block" },
};

export const dynamicDict = {
  p: {
    property: "padding",
    value: (val) => `${val}px`,
  },
  m: {
    property: "margin",
    value: (val) => `${val}px`,
  },
  bg: {
    property: "backgroundColor",
    value: (val) => val,
  },
  text: {
    property: "textColor",
    value: (val) => val,
  },
  font: {
    property: "fontSize",
    value: (val) => `${val}px`,
  },
  rounded: {
    property: "borderRadius",
    value: (val) => `${val}px`,
  },
};
