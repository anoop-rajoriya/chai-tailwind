const ChaiTail = { prefix: "chai-" };

ChaiTail.$utils = {
  static: {
    flex: { display: "flex" },
    "flex-col": { flexDirection: "column" },
    "flex-row": { flexDirection: "row" },
    "items-center": { alignItems: "center" },
    "justify-center": { justifyContent: "center" },
    hidden: { display: "none" },
    block: { display: "block" },
  },
  dynamic: {
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
      property: "color",
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
  },
};

ChaiTail.$parser = function (cls) {
  const coreClass = cls.replace(this.prefix, "");
  if (!coreClass.length) return null;

  //   Handling static classes
  if (this.$utils.static[coreClass]) {
    return this.$utils.static[coreClass];
  }

  //   Handling Dynamic classes
  const firstDashIndex = coreClass.indexOf("-");
  if (firstDashIndex === -1) return null;

  const prefix = coreClass.substring(0, firstDashIndex);
  const value = coreClass.substring(firstDashIndex + 1);

  const rule = this.$utils.dynamic[prefix];

  if (rule) {
    return { [rule.property]: rule.value(value) };
  }

  return null;
};

ChaiTail.$scan = function (root = document) {
  const elements = root.querySelectorAll(`[class*="${this.prefix}"]`);
  elements.forEach((elm) => {
    const classes = Array.from(elm.classList);
    classes.forEach((cls) => {
      if (!cls.startsWith(this.prefix)) return;

      const style = this.$parser(cls);

      if (style) {
        console.info(`${cls} applyied ✔`);
        Object.assign(elm.style, style);
        elm.classList.remove(cls);
      }
    });
  });
};

window.ChaiTail = ChaiTail;
ChaiTail.$scan(document);
