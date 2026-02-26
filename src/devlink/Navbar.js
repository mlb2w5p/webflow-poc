"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-591"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1973ba2f-a2cf-2e02-1164-b5564599b07d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1973ba2f-a2cf-2e02-1164-b5564599b07d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626169409644},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-394"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1973ba2f-a2cf-2e02-1164-b5564599b07d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1973ba2f-a2cf-2e02-1164-b5564599b07d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626169409644}},"actionLists":{"a":{"id":"a","title":"Navbar 2 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-top","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59786"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-bottom","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59782"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-bottom","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59782"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-top","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59786"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-middle","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59790"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626225663494},"a-2":{"id":"a-2","title":"Navbar 2 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-top","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59786"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-bottom","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59782"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-bottom","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59782"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-top","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59786"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-middle","selectorGuids":["ddaca197-96dc-263e-4c2d-9202a0f59790"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626226496146}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      data-w-id="1973ba2f-a2cf-2e02-1164-b5564599b07d"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
        animation: "default",
        collapse: "medium",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar2_container")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "navbar2_logo-link")}
          options={{
            href: "#",
          }}
        />
        <_Builtin.NavbarMenu
          className={_utils.cx(
            _styles,
            "navbar2_menu",
            "is-page-height-tablet"
          )}
          id={_utils.cx(
            _styles,
            "w-node-_1973ba2f-a2cf-2e02-1164-b5564599b080-4599b07d"
          )}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar-link")}
            options={{
              href: "#",
            }}
          >
            {"Home"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar-link")}
            options={{
              href: "#",
            }}
          >
            {"Producten"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar-link")}
            options={{
              href: "#",
            }}
          >
            {"Recepten"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar-link")}
            options={{
              href: "#",
            }}
          >
            {"Onze gamma's"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar-link")}
            options={{
              href: "#",
            }}
          >
            {"Over Boni"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar2_button-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-_1973ba2f-a2cf-2e02-1164-b5564599b08b-4599b07d"
          )}
          tag="div"
        >
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "navbar2_menu-button")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon2_line-top")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon2_line-middle")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon2_line-middle-inner")}
                  tag="div"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon2_line-bottom")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
