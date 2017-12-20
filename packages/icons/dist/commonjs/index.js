"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var ux_icon_theme_1 = require("./ux-icon-theme");
exports.UxIconTheme = ux_icon_theme_1.UxIconTheme;
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('@aurelia-ux/icons/ux-icon')
    ]);
}
exports.configure = configure;
