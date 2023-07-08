import t, { useCallback as c } from "react";
function r({ children: e }) {
  const n = c(function(l) {
    alert("click!");
  }, []);
  return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("button", { onClick: n }, e));
}
export {
  r as Button
};
