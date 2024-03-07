"use client";

import { useState } from "react";

var usePerfectState = (initial) => {
  var hook = useState(initial);

  return [hook[0], hook[1]];
};

export { usePerfectState };
