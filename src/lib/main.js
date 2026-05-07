import { staticDict, dynamicDict } from "./dictionary";

function parser(cls) {
  if (!cls.startsWith("chai-")) return null;

  const coreClass = cls.replace("chai-", "");
  if (!coreClass.length) return null;

  //   Handling static classes
  if (staticDict[coreClass]) {
    return staticDict[coreClass];
  }

  //   Handling Dynamic classes
  const firstDashIndex = coreClass.indexOf("-");
  if (firstDashIndex === -1) return null;

  const prefix = coreClass.substring(0, firstDashIndex);
  const value = coreClass.substring(firstDashIndex + 1);

  const rule = dynamicDict[prefix];

  if (rule) {
    return { [rule.property]: rule.value(value) };
  }

  return null;
}

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('[class*="chai-"]');

  elements.forEach((elm) => {
    const classes = Array.from(elm.classList);

    classes.forEach((cls) => {
      const style = parser(cls);

      if (style) {
        console.log(`Successfully parsed: ${cls}`, style);

        Object.assign(elm.style, style);

        elm.classList.remove(cls);
      }
    });
  });
});
