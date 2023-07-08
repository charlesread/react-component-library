import t, { useCallback as c } from "react";
function a({ onClick: e, children: n }) {
  const l = e || c(function(o) {
    console.log(o), alert("click!!");
  }, []);
  return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("button", { onClick: l }, n));
}
export {
  a as Button
};
