import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "*:after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "*:before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "switch input": {
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "opacity": 0,
        "zIndex": 100,
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "cursor": "pointer"
    },
    "switch": {
        "top": 50,
        "left": 50,
        "width": 150,
        "height": 150,
        "position": "relative"
    },
    "switch label": {
        "width": "100%",
        "height": "100%",
        "position": "relative",
        "display": "block",
        "borderRadius": "50%",
        "background": "linear-gradient(#f7f2f6, #b2ac9e)",
        "color": "#a5a39d",
        "fontSize": 70,
        "textAlign": "center",
        "lineHeight": 150,
        "WebkitTransition": "all 0.3s ease-out",
        "MozTransition": "all 0.3s ease-out",
        "MsTransition": "all 0.3s ease-out",
        "OTransition": "all 0.3s ease-out",
        "transition": "all 0.3s ease-out",
        "textShadow": "0 2px 1px rgba(0,0,0,0.25)",
        "boxShadow": "inset 0 2px 3px rgba(255,255,255,0.13),    0 5px 8px rgba(0,0,0,0.3),    0 10px 10px 4px rgba(0,0,0,0.3)",
        "zIndex": -1
    },
    "switch label:after": {
        "content": "",
        "position": "absolute",
        "left": -20,
        "right": -20,
        "top": -20,
        "bottom": -20,
        "zIndex": -2,
        "borderRadius": "inherit",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.1),    0 1px 2px rgba(0,0,0,0.3),    0 0 10px rgba(0,0,0,0.15)"
    },
    "switch label:before": {
        "content": "",
        "position": "absolute",
        "left": -10,
        "right": -10,
        "top": -10,
        "bottom": -10,
        "zIndex": -1,
        "borderRadius": "inherit",
        "boxShadow": "inset 0 10px 10px rgba(0,0,0,0.13)",
        "WebkitFilter": "blur(1px)",
        "MozFilter": "blur(1px)",
        "MsFilter": "blur(1px)",
        "OFilter": "blur(1px)",
        "filter": "blur(1px)"
    },
    "switch input:checked ~ label": {
        "boxShadow": "inset 0 2px 3px rgba(255,255,255,0.13),    0 5px 8px rgba(0,0,0,0.35),    0 3px 10px 4px rgba(0,0,0,0.2)",
        "color": "#0000ff"
    },
    "switch icon-off:after": {
        "content": "",
        "display": "block",
        "position": "relative",
        "width": "50%",
        "height": "50%",
        "left": "30%",
        "top": "30%",
        "zIndex": -1,
        "marginTop": "-35%",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": "-35%",
        "borderRadius": "50%",
        "background": "linear-gradient(#cbc7bc, #d2cbc3)",
        "boxShadow": "0 -2px 5px rgba(255,255,255,0.05),    0 2px 5px rgba(255,255,255,0.1)"
    }
});