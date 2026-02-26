"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardRecipe.module.css";

export function CardRecipe({
  as: _Component = _Builtin.Block,
  title = "Ontbijtbowl",
  kcal = "386 kcal",
  type = "Ontbijt",
  time = "10 min",
  ingredients = "Met Boni ontbijt topper rode vruchtenmix, Boni bananen, Boni kiwi groen, Boni zachte dadels, Boni Granola honing, ....",
  image = "https://cdn.prod.website-files.com/699d5f91cd9fb7e364b4131f/699dd22e4ac66fafb5be568a_Ontbijtbowl.avif",
}) {
  return (
    <_Component className={_utils.cx(_styles, "card-recipe")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "recipe-card-content")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-titlem")}
          tag="h4"
        >
          {title}
        </_Builtin.Heading>
        <_Builtin.HFlex className={_utils.cx(_styles, "meta")} tag="div">
          <_Builtin.Block tag="div">{kcal}</_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "dott")} tag="div" />
          <_Builtin.Block tag="div">{type}</_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "dott")} tag="div" />
          <_Builtin.Block tag="div">{time}</_Builtin.Block>
        </_Builtin.HFlex>
        <_Builtin.Block tag="div">{ingredients}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "recipe-tile-image")}
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src={image}
      />
    </_Component>
  );
}
