"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardComponent.module.css";

export function CardComponent({
  as: _Component = _Builtin.Block,
  title = "Card Title",
  description = "This is a card description. Add your content here.",
  image = "https://via.placeholder.com/400x300",
}) {
  return (
    <_Component className={_utils.cx(_styles, "card-component")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "card-image")}
        width="auto"
        height="auto"
        loading="lazy"
        alt={title}
        src={image}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "card-content")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "card-title")}
          tag="h3"
        >
          {title}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "card-description")}
          tag="p"
        >
          {description}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
