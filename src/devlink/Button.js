"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

export function Button({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  image = "https://cdn.prod.website-files.com/699d5f91cd9fb7e364b4131f/699ed50991600151231a487c_shopping-cart-white.svg",
  text = "Bekijk alle producten",
  imagePosition = "left",
}) {
  const imageEl = (
    <_Builtin.Image
      className={_utils.cx(_styles, "button-icon")}
      width="auto"
      height="auto"
      loading="lazy"
      alt=""
      src={image}
    />
  );

  return (
    <_Component
      className={_utils.cx(_styles, "button")}
      id={_utils.cx(
        _styles,
        "w-node-_2b403927-68c1-0538-a1f3-9c568d7cba75-8d7cba75"
      )}
      button={false}
      block="inline"
      options={link}
      style={{ flexDirection: imagePosition === "right" ? "row-reverse" : "row" }}
    >
      {imageEl}
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
