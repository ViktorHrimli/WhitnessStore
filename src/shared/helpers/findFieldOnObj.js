var doFindKey = (obj) => {
  var target = "url";

  if (obj.hasOwnProperty(target)) {
    return obj[target];
  } else {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        const result = doFindKey(obj[key]);
        return result ? result : "NOT FOUND";
      }
    }
  }
};

export { doFindKey };
