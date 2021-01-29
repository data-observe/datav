webpackHotUpdate_N_E("pages/docs/features/style-props",{

/***/ "./src/components/mobile-nav.tsx":
/*!***************************************!*\
  !*** ./src/components/mobile-nav.tsx ***!
  \***************************************/
/*! exports provided: MobileNavContent, MobileNavButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileNavContent\", function() { return MobileNavContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileNavButton\", function() { return MobileNavButton; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var hooks_use_route_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks/use-route-changed */ \"./src/hooks/use-route-changed.ts\");\n/* harmony import */ var layouts_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! layouts/mdx */ \"./layouts/mdx.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-remove-scroll */ \"./node_modules/react-remove-scroll/dist/es2015/index.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logo */ \"./src/components/logo.tsx\");\n/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar */ \"./src/components/sidebar/sidebar.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/sunfei/Downloads/website/src/components/mobile-nav.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _this = undefined,\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction NavLink(_ref) {\n  _s();\n\n  var href = _ref.href,\n      children = _ref.children;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      pathname = _useRouter.pathname;\n\n  var _href$split = href.split(\"/\"),\n      _href$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_href$split, 2),\n      group = _href$split2[1];\n\n  var isActive = pathname.includes(group);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: href,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], {\n      flex: \"1\",\n      minH: \"40px\",\n      as: \"button\",\n      rounded: \"md\",\n      transition: \"0.2s all\",\n      fontWeight: isActive ? \"semibold\" : \"medium\",\n      bg: isActive ? \"teal.400\" : undefined,\n      borderWidth: isActive ? undefined : \"1px\",\n      color: isActive ? \"white\" : undefined,\n      _hover: {\n        bg: isActive ? \"teal.500\" : Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"])(\"gray.100\", \"whiteAlpha.100\")\n      },\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NavLink, \"8c/0L2gPdnxRfVGllOcu7QfPkQU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"]];\n});\n\n_c = NavLink;\nfunction MobileNavContent(props) {\n  _s2();\n\n  var isOpen = props.isOpen,\n      onClose = props.onClose;\n  var closeBtnRef = react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"]();\n\n  var _useRouter2 = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      pathname = _useRouter2.pathname;\n\n  Object(hooks_use_route_changed__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(onClose);\n  /**\n   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.\n   * Result: We'll close the menu\n   */\n\n  var showOnBreakpoint = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useBreakpointValue\"])({\n    base: true,\n    lg: false\n  });\n  react__WEBPACK_IMPORTED_MODULE_10__[\"useEffect\"](function () {\n    if (showOnBreakpoint == false) {\n      onClose();\n    }\n  }, [showOnBreakpoint]);\n  Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useUpdateEffect\"])(function () {\n    if (isOpen) {\n      requestAnimationFrame(function () {\n        var _closeBtnRef$current;\n\n        (_closeBtnRef$current = closeBtnRef.current) === null || _closeBtnRef$current === void 0 ? void 0 : _closeBtnRef$current.focus();\n      });\n    }\n  }, [isOpen]);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"](),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      shadow = _React$useState2[0],\n      setShadow = _React$useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"AnimatePresence\"], {\n    children: isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__[\"RemoveScroll\"], {\n      forwardProps: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, {\n        transition: {\n          duration: 0.3\n        },\n        initial: {\n          opacity: 0\n        },\n        animate: {\n          opacity: 1\n        },\n        exit: {\n          opacity: 0\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n          direction: \"column\",\n          w: \"100%\",\n          bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"])(\"white\", \"gray.800\"),\n          h: \"100vh\",\n          overflow: \"auto\",\n          pos: \"absolute\",\n          top: \"0\",\n          left: \"0\",\n          zIndex: 20,\n          pb: \"8\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n              justify: \"space-between\",\n              px: \"6\",\n              pt: \"5\",\n              pb: \"4\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_logo__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"HStack\"], {\n                spacing: \"5\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"CloseButton\"], {\n                  ref: closeBtnRef,\n                  onClick: onClose\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 116,\n                  columnNumber: 21\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n              px: \"6\",\n              pb: \"6\",\n              pt: \"2\",\n              shadow: shadow,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"HStack\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(NavLink, {\n                  href: \"/docs/getting-started\",\n                  children: \"Docs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 121,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(NavLink, {\n                  href: \"/guides/integrations/with-cra\",\n                  children: \"Guides\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 122,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(NavLink, {\n                  href: \"/team\",\n                  children: \"Team\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 125,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 120,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ScrollView, {\n            onScroll: function onScroll(scrolled) {\n              setShadow(scrolled ? \"md\" : undefined);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_14__[\"SidebarContent\"], {\n              pathname: pathname,\n              routes: Object(layouts_mdx__WEBPACK_IMPORTED_MODULE_7__[\"getRoutes\"])(pathname)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(MobileNavContent, \"eIZ5rT34UQCqW9nFUqZm9bszS1U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], hooks_use_route_changed__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useBreakpointValue\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useUpdateEffect\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"]];\n});\n\n_c2 = MobileNavContent;\n\nvar ScrollView = function ScrollView(props) {\n  _s3();\n\n  var onScroll = props.onScroll,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"onScroll\"]);\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"](0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      y = _React$useState4[0],\n      setY = _React$useState4[1];\n\n  var elRef = react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"]();\n\n  var _useElementScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useElementScroll\"])(elRef),\n      scrollY = _useElementScroll.scrollY;\n\n  react__WEBPACK_IMPORTED_MODULE_10__[\"useEffect\"](function () {\n    return scrollY.onChange(function () {\n      return setY(scrollY.get());\n    });\n  }, [scrollY]);\n  Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useUpdateEffect\"])(function () {\n    onScroll === null || onScroll === void 0 ? void 0 : onScroll(y > 5 ? true : false);\n  }, [y]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    ref: elRef,\n    flex: \"1\",\n    id: \"routes\",\n    overflow: \"auto\",\n    px: \"6\",\n    pb: \"6\"\n  }, rest), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 162,\n    columnNumber: 5\n  }, _this);\n};\n\n_s3(ScrollView, \"L1PVdp+/dSGKjyHrJWN5R+kJ9RI=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useElementScroll\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useUpdateEffect\"]];\n});\n\n_c3 = ScrollView;\nvar MobileNavButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__[\"forwardRef\"](_c4 = _s4(function (props, ref) {\n  _s4();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"IconButton\"], _objectSpread({\n    ref: ref,\n    display: {\n      base: \"flex\",\n      md: \"none\"\n    },\n    \"aria-label\": \"Open menu\",\n    fontSize: \"20px\",\n    color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"])(\"gray.800\", \"inherit\"),\n    variant: \"ghost\",\n    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__[\"AiOutlineMenu\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 15\n    }, _this)\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 177,\n    columnNumber: 7\n  }, _this);\n}, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"]];\n}));\n_c5 = MobileNavButton;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c2, \"MobileNavContent\");\n$RefreshReg$(_c3, \"ScrollView\");\n$RefreshReg$(_c4, \"MobileNavButton$React.forwardRef\");\n$RefreshReg$(_c5, \"MobileNavButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlLW5hdi50c3g/ZTQ1NyJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiaHJlZiIsImNoaWxkcmVuIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJzcGxpdCIsImdyb3VwIiwiaXNBY3RpdmUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsImJnIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJNb2JpbGVOYXZDb250ZW50IiwicHJvcHMiLCJpc09wZW4iLCJvbkNsb3NlIiwiY2xvc2VCdG5SZWYiLCJSZWFjdCIsInVzZVJvdXRlQ2hhbmdlZCIsInNob3dPbkJyZWFrcG9pbnQiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJiYXNlIiwibGciLCJ1c2VVcGRhdGVFZmZlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50IiwiZm9jdXMiLCJzaGFkb3ciLCJzZXRTaGFkb3ciLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJzY3JvbGxlZCIsImdldFJvdXRlcyIsIlNjcm9sbFZpZXciLCJvblNjcm9sbCIsInJlc3QiLCJ5Iiwic2V0WSIsImVsUmVmIiwidXNlRWxlbWVudFNjcm9sbCIsInNjcm9sbFkiLCJvbkNoYW5nZSIsImdldCIsIk1vYmlsZU5hdkJ1dHRvbiIsInJlZiIsIm1kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsT0FBVCxPQUFxQztBQUFBOztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsbUJBQ2RDLDZEQUFTLEVBREs7QUFBQSxNQUMzQkMsUUFEMkIsY0FDM0JBLFFBRDJCOztBQUFBLG9CQUdqQkgsSUFBSSxDQUFDSSxLQUFMLENBQVcsR0FBWCxDQUhpQjtBQUFBO0FBQUEsTUFHMUJDLEtBSDBCOztBQUluQyxNQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksUUFBVCxDQUFrQkYsS0FBbEIsQ0FBakI7QUFFQSxzQkFDRSxxRUFBQyxnREFBRDtBQUFVLFFBQUksRUFBRUwsSUFBaEI7QUFBQSwyQkFDRSxxRUFBQyx1REFBRDtBQUNFLFVBQUksRUFBQyxHQURQO0FBRUUsVUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFFLEVBQUMsUUFITDtBQUlFLGFBQU8sRUFBQyxJQUpWO0FBS0UsZ0JBQVUsRUFBQyxVQUxiO0FBTUUsZ0JBQVUsRUFBRU0sUUFBUSxHQUFHLFVBQUgsR0FBZ0IsUUFOdEM7QUFPRSxRQUFFLEVBQUVBLFFBQVEsR0FBRyxVQUFILEdBQWdCRSxTQVA5QjtBQVFFLGlCQUFXLEVBQUVGLFFBQVEsR0FBR0UsU0FBSCxHQUFlLEtBUnRDO0FBU0UsV0FBSyxFQUFFRixRQUFRLEdBQUcsT0FBSCxHQUFhRSxTQVQ5QjtBQVVFLFlBQU0sRUFBRTtBQUNOQyxVQUFFLEVBQUVILFFBQVEsR0FDUixVQURRLEdBRVJJLDBFQUFpQixDQUFDLFVBQUQsRUFBYSxnQkFBYjtBQUhmLE9BVlY7QUFBQSxnQkFnQkdUO0FBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBNUJRRixPO1VBQ2NHLHFELEVBb0JUUSxrRTs7O0tBckJMWCxPO0FBbUNGLFNBQVNZLGdCQUFULENBQTBCQyxLQUExQixFQUF3RDtBQUFBOztBQUFBLE1BQ3JEQyxNQURxRCxHQUNqQ0QsS0FEaUMsQ0FDckRDLE1BRHFEO0FBQUEsTUFDN0NDLE9BRDZDLEdBQ2pDRixLQURpQyxDQUM3Q0UsT0FENkM7QUFFN0QsTUFBTUMsV0FBVyxHQUFHQyw2Q0FBQSxFQUFwQjs7QUFGNkQsb0JBR3hDZCw2REFBUyxFQUgrQjtBQUFBLE1BR3JEQyxRQUhxRCxlQUdyREEsUUFIcUQ7O0FBSzdEYyx5RUFBZSxDQUFDSCxPQUFELENBQWY7QUFFQTtBQUNGO0FBQ0E7QUFDQTs7QUFDRSxNQUFNSSxnQkFBZ0IsR0FBR0MsMkVBQWtCLENBQUM7QUFBRUMsUUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBRSxFQUFFO0FBQWxCLEdBQUQsQ0FBM0M7QUFFQUwsa0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQixRQUFJRSxnQkFBZ0IsSUFBSSxLQUF4QixFQUErQjtBQUM3QkosYUFBTztBQUNSO0FBQ0YsR0FKRCxFQUlHLENBQUNJLGdCQUFELENBSkg7QUFNQUksMEVBQWUsQ0FBQyxZQUFNO0FBQ3BCLFFBQUlULE1BQUosRUFBWTtBQUNWVSwyQkFBcUIsQ0FBQyxZQUFNO0FBQUE7O0FBQzFCLGdDQUFBUixXQUFXLENBQUNTLE9BQVosOEVBQXFCQyxLQUFyQjtBQUNELE9BRm9CLENBQXJCO0FBR0Q7QUFDRixHQU5jLEVBTVosQ0FBQ1osTUFBRCxDQU5ZLENBQWY7O0FBbkI2RCx3QkEyQmpDRywrQ0FBQSxFQTNCaUM7QUFBQTtBQUFBLE1BMkJ0RFUsTUEzQnNEO0FBQUEsTUEyQjlDQyxTQTNCOEM7O0FBNkI3RCxzQkFDRSxxRUFBQyw2REFBRDtBQUFBLGNBQ0dkLE1BQU0saUJBQ0wscUVBQUMsaUVBQUQ7QUFBYyxrQkFBWSxNQUExQjtBQUFBLDZCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGtCQUFVLEVBQUU7QUFBRWUsa0JBQVEsRUFBRTtBQUFaLFNBRGQ7QUFFRSxlQUFPLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBRlg7QUFHRSxlQUFPLEVBQUU7QUFBRUEsaUJBQU8sRUFBRTtBQUFYLFNBSFg7QUFJRSxZQUFJLEVBQUU7QUFBRUEsaUJBQU8sRUFBRTtBQUFYLFNBSlI7QUFBQSwrQkFNRSxxRUFBQyxxREFBRDtBQUNFLG1CQUFTLEVBQUMsUUFEWjtBQUVFLFdBQUMsRUFBQyxNQUZKO0FBR0UsWUFBRSxFQUFFbkIsMEVBQWlCLENBQUMsT0FBRCxFQUFVLFVBQVYsQ0FIdkI7QUFJRSxXQUFDLEVBQUMsT0FKSjtBQUtFLGtCQUFRLEVBQUMsTUFMWDtBQU1FLGFBQUcsRUFBQyxVQU5OO0FBT0UsYUFBRyxFQUFDLEdBUE47QUFRRSxjQUFJLEVBQUMsR0FSUDtBQVNFLGdCQUFNLEVBQUUsRUFUVjtBQVVFLFlBQUUsRUFBQyxHQVZMO0FBQUEsa0NBWUUscUVBQUMsb0RBQUQ7QUFBQSxvQ0FDRSxxRUFBQyxxREFBRDtBQUFNLHFCQUFPLEVBQUMsZUFBZDtBQUE4QixnQkFBRSxFQUFDLEdBQWpDO0FBQXFDLGdCQUFFLEVBQUMsR0FBeEM7QUFBNEMsZ0JBQUUsRUFBQyxHQUEvQztBQUFBLHNDQUNFLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSxxRUFBQyx1REFBRDtBQUFRLHVCQUFPLEVBQUMsR0FBaEI7QUFBQSx1Q0FDRSxxRUFBQyw0REFBRDtBQUFhLHFCQUFHLEVBQUVLLFdBQWxCO0FBQStCLHlCQUFPLEVBQUVEO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQU9FLHFFQUFDLG9EQUFEO0FBQUssZ0JBQUUsRUFBQyxHQUFSO0FBQVksZ0JBQUUsRUFBQyxHQUFmO0FBQW1CLGdCQUFFLEVBQUMsR0FBdEI7QUFBMEIsb0JBQU0sRUFBRVksTUFBbEM7QUFBQSxxQ0FDRSxxRUFBQyx1REFBRDtBQUFBLHdDQUNFLHFFQUFDLE9BQUQ7QUFBUyxzQkFBSSxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUUscUVBQUMsT0FBRDtBQUFTLHNCQUFJLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsZUFLRSxxRUFBQyxPQUFEO0FBQVMsc0JBQUksRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpGLGVBOEJFLHFFQUFDLFVBQUQ7QUFDRSxvQkFBUSxFQUFFLGtCQUFDSSxRQUFELEVBQWM7QUFDdEJILHVCQUFTLENBQUNHLFFBQVEsR0FBRyxJQUFILEdBQVV0QixTQUFuQixDQUFUO0FBQ0QsYUFISDtBQUFBLG1DQUtFLHFFQUFDLGdFQUFEO0FBQ0Usc0JBQVEsRUFBRUwsUUFEWjtBQUVFLG9CQUFNLEVBQUU0Qiw2REFBUyxDQUFDNUIsUUFBRDtBQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3REQ7O0lBckZlUSxnQjtVQUdPVCxxRCxFQUVyQmUsK0QsRUFNeUJFLG1FLEVBUXpCRyxnRSxFQXVCZ0JaLGtFOzs7TUExQ0ZDLGdCOztBQXVGaEIsSUFBTXFCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNwQixLQUFELEVBQTBDO0FBQUE7O0FBQUEsTUFDbkRxQixRQURtRCxHQUM3QnJCLEtBRDZCLENBQ25EcUIsUUFEbUQ7QUFBQSxNQUN0Q0MsSUFEc0Msc0dBQzdCdEIsS0FENkI7O0FBQUEseUJBRXpDSSwrQ0FBQSxDQUFlLENBQWYsQ0FGeUM7QUFBQTtBQUFBLE1BRXBEbUIsQ0FGb0Q7QUFBQSxNQUVqREMsSUFGaUQ7O0FBRzNELE1BQU1DLEtBQUssR0FBR3JCLDZDQUFBLEVBQWQ7O0FBSDJELDBCQUl2Q3NCLHNFQUFnQixDQUFDRCxLQUFELENBSnVCO0FBQUEsTUFJbkRFLE9BSm1ELHFCQUluREEsT0FKbUQ7O0FBSzNEdkIsa0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQixXQUFPdUIsT0FBTyxDQUFDQyxRQUFSLENBQWlCO0FBQUEsYUFBTUosSUFBSSxDQUFDRyxPQUFPLENBQUNFLEdBQVIsRUFBRCxDQUFWO0FBQUEsS0FBakIsQ0FBUDtBQUNELEdBRkQsRUFFRyxDQUFDRixPQUFELENBRkg7QUFJQWpCLDBFQUFlLENBQUMsWUFBTTtBQUNwQlcsWUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUdFLENBQUMsR0FBRyxDQUFKLEdBQVEsSUFBUixHQUFlLEtBQWxCLENBQVI7QUFDRCxHQUZjLEVBRVosQ0FBQ0EsQ0FBRCxDQUZZLENBQWY7QUFJQSxzQkFDRSxxRUFBQyxvREFBRDtBQUNFLE9BQUcsRUFBRUUsS0FEUDtBQUVFLFFBQUksRUFBQyxHQUZQO0FBR0UsTUFBRSxFQUFDLFFBSEw7QUFJRSxZQUFRLEVBQUMsTUFKWDtBQUtFLE1BQUUsRUFBQyxHQUxMO0FBTUUsTUFBRSxFQUFDO0FBTkwsS0FPTUgsSUFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQXhCRDs7SUFBTUYsVTtVQUlnQk0sOEQsRUFLcEJoQixnRTs7O01BVElVLFU7QUEwQkMsSUFBTVUsZUFBZSxnQkFBRzFCLGlEQUFBLFdBQzdCLFVBQUNKLEtBQUQsRUFBeUIrQixHQUF6QixFQUFpRDtBQUFBOztBQUMvQyxzQkFDRSxxRUFBQywyREFBRDtBQUNFLE9BQUcsRUFBRUEsR0FEUDtBQUVFLFdBQU8sRUFBRTtBQUFFdkIsVUFBSSxFQUFFLE1BQVI7QUFBZ0J3QixRQUFFLEVBQUU7QUFBcEIsS0FGWDtBQUdFLGtCQUFXLFdBSGI7QUFJRSxZQUFRLEVBQUMsTUFKWDtBQUtFLFNBQUssRUFBRWxDLDBFQUFpQixDQUFDLFVBQUQsRUFBYSxTQUFiLENBTDFCO0FBTUUsV0FBTyxFQUFDLE9BTlY7QUFPRSxRQUFJLGVBQUUscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBSLEtBUU1FLEtBUk47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FkNEI7QUFBQSxVQVFoQkYsa0VBUmdCO0FBQUEsR0FBeEI7TUFBTWdDLGUiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2JpbGUtbmF2LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQm94UHJvcHMsXG4gIENlbnRlcixcbiAgQ2xvc2VCdXR0b24sXG4gIEZsZXgsXG4gIEhTdGFjayxcbiAgSWNvbkJ1dHRvbixcbiAgSWNvbkJ1dHRvblByb3BzLFxuICB1c2VCcmVha3BvaW50VmFsdWUsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VVcGRhdGVFZmZlY3QsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uLCB1c2VFbGVtZW50U2Nyb2xsIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHVzZVJvdXRlQ2hhbmdlZCBmcm9tIFwiaG9va3MvdXNlLXJvdXRlLWNoYW5nZWRcIlxuaW1wb3J0IHsgZ2V0Um91dGVzIH0gZnJvbSBcImxheW91dHMvbWR4XCJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQWlPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXG5pbXBvcnQgeyBSZW1vdmVTY3JvbGwgfSBmcm9tIFwicmVhY3QtcmVtb3ZlLXNjcm9sbFwiXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCJcbmltcG9ydCB7IFNpZGViYXJDb250ZW50IH0gZnJvbSBcIi4vc2lkZWJhci9zaWRlYmFyXCJcbmltcG9ydCBTcG9uc29yQnV0dG9uIGZyb20gXCIuL3Nwb25zb3ItYnV0dG9uXCJcblxuZnVuY3Rpb24gTmF2TGluayh7IGhyZWYsIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKClcblxuICBjb25zdCBbLCBncm91cF0gPSBocmVmLnNwbGl0KFwiL1wiKVxuICBjb25zdCBpc0FjdGl2ZSA9IHBhdGhuYW1lLmluY2x1ZGVzKGdyb3VwKVxuXG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgPENlbnRlclxuICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgIG1pbkg9XCI0MHB4XCJcbiAgICAgICAgYXM9XCJidXR0b25cIlxuICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICB0cmFuc2l0aW9uPVwiMC4ycyBhbGxcIlxuICAgICAgICBmb250V2VpZ2h0PXtpc0FjdGl2ZSA/IFwic2VtaWJvbGRcIiA6IFwibWVkaXVtXCJ9XG4gICAgICAgIGJnPXtpc0FjdGl2ZSA/IFwidGVhbC40MDBcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgYm9yZGVyV2lkdGg9e2lzQWN0aXZlID8gdW5kZWZpbmVkIDogXCIxcHhcIn1cbiAgICAgICAgY29sb3I9e2lzQWN0aXZlID8gXCJ3aGl0ZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICBiZzogaXNBY3RpdmVcbiAgICAgICAgICAgID8gXCJ0ZWFsLjUwMFwiXG4gICAgICAgICAgICA6IHVzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCJ3aGl0ZUFscGhhLjEwMFwiKSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DZW50ZXI+XG4gICAgPC9OZXh0TGluaz5cbiAgKVxufVxuXG5pbnRlcmZhY2UgTW9iaWxlTmF2Q29udGVudFByb3BzIHtcbiAgaXNPcGVuPzogYm9vbGVhblxuICBvbkNsb3NlPzogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTW9iaWxlTmF2Q29udGVudChwcm9wczogTW9iaWxlTmF2Q29udGVudFByb3BzKSB7XG4gIGNvbnN0IHsgaXNPcGVuLCBvbkNsb3NlIH0gPSBwcm9wc1xuICBjb25zdCBjbG9zZUJ0blJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4oKVxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZVJvdXRlQ2hhbmdlZChvbkNsb3NlKVxuXG4gIC8qKlxuICAgKiBTY2VuYXJpbzogTWVudSBpcyBvcGVuIG9uIG1vYmlsZSwgYW5kIHVzZXIgcmVzaXplcyB0byBkZXNrdG9wL3RhYmxldCB2aWV3cG9ydC5cbiAgICogUmVzdWx0OiBXZSdsbCBjbG9zZSB0aGUgbWVudVxuICAgKi9cbiAgY29uc3Qgc2hvd09uQnJlYWtwb2ludCA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7IGJhc2U6IHRydWUsIGxnOiBmYWxzZSB9KVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3dPbkJyZWFrcG9pbnQgPT0gZmFsc2UpIHtcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH1cbiAgfSwgW3Nob3dPbkJyZWFrcG9pbnRdKVxuXG4gIHVzZVVwZGF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY2xvc2VCdG5SZWYuY3VycmVudD8uZm9jdXMoKVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtpc09wZW5dKVxuXG4gIGNvbnN0IFtzaGFkb3csIHNldFNoYWRvd10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KClcblxuICByZXR1cm4gKFxuICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPFJlbW92ZVNjcm9sbCBmb3J3YXJkUHJvcHM+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwid2hpdGVcIiwgXCJncmF5LjgwMFwiKX1cbiAgICAgICAgICAgICAgaD1cIjEwMHZoXCJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCJcbiAgICAgICAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICB0b3A9XCIwXCJcbiAgICAgICAgICAgICAgbGVmdD1cIjBcIlxuICAgICAgICAgICAgICB6SW5kZXg9ezIwfVxuICAgICAgICAgICAgICBwYj1cIjhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgcHg9XCI2XCIgcHQ9XCI1XCIgcGI9XCI0XCI+XG4gICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgICAgPEhTdGFjayBzcGFjaW5nPVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gcmVmPXtjbG9zZUJ0blJlZn0gb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8Qm94IHB4PVwiNlwiIHBiPVwiNlwiIHB0PVwiMlwiIHNoYWRvdz17c2hhZG93fT5cbiAgICAgICAgICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZG9jcy9nZXR0aW5nLXN0YXJ0ZWRcIj5Eb2NzPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2d1aWRlcy9pbnRlZ3JhdGlvbnMvd2l0aC1jcmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICBHdWlkZXNcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3RlYW1cIj5UZWFtPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgIDxTY3JvbGxWaWV3XG4gICAgICAgICAgICAgICAgb25TY3JvbGw9eyhzY3JvbGxlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0U2hhZG93KHNjcm9sbGVkID8gXCJtZFwiIDogdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2lkZWJhckNvbnRlbnRcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lPXtwYXRobmFtZX1cbiAgICAgICAgICAgICAgICAgIHJvdXRlcz17Z2V0Um91dGVzKHBhdGhuYW1lKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L1JlbW92ZVNjcm9sbD5cbiAgICAgICl9XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gIClcbn1cblxuY29uc3QgU2Nyb2xsVmlldyA9IChwcm9wczogQm94UHJvcHMgJiB7IG9uU2Nyb2xsPzogYW55IH0pID0+IHtcbiAgY29uc3QgeyBvblNjcm9sbCwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgY29uc3QgW3ksIHNldFldID0gUmVhY3QudXNlU3RhdGUoMClcbiAgY29uc3QgZWxSZWYgPSBSZWFjdC51c2VSZWY8YW55PigpXG4gIGNvbnN0IHsgc2Nyb2xsWSB9ID0gdXNlRWxlbWVudFNjcm9sbChlbFJlZilcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gc2Nyb2xsWS5vbkNoYW5nZSgoKSA9PiBzZXRZKHNjcm9sbFkuZ2V0KCkpKVxuICB9LCBbc2Nyb2xsWV0pXG5cbiAgdXNlVXBkYXRlRWZmZWN0KCgpID0+IHtcbiAgICBvblNjcm9sbD8uKHkgPiA1ID8gdHJ1ZSA6IGZhbHNlKVxuICB9LCBbeV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICByZWY9e2VsUmVmfVxuICAgICAgZmxleD1cIjFcIlxuICAgICAgaWQ9XCJyb3V0ZXNcIlxuICAgICAgb3ZlcmZsb3c9XCJhdXRvXCJcbiAgICAgIHB4PVwiNlwiXG4gICAgICBwYj1cIjZcIlxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgTW9iaWxlTmF2QnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKHByb3BzOiBJY29uQnV0dG9uUHJvcHMsIHJlZjogUmVhY3QuUmVmPGFueT4pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGRpc3BsYXk9e3sgYmFzZTogXCJmbGV4XCIsIG1kOiBcIm5vbmVcIiB9fVxuICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBtZW51XCJcbiAgICAgICAgZm9udFNpemU9XCIyMHB4XCJcbiAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS44MDBcIiwgXCJpbmhlcml0XCIpfVxuICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICBpY29uPXs8QWlPdXRsaW5lTWVudSAvPn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0sXG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/mobile-nav.tsx\n");

/***/ })

})