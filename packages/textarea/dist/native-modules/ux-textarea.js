var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, bindable } from 'aurelia-templating';
import { DOM } from 'aurelia-pal';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, normalizeBooleanAttribute } from '@aurelia-ux/core';
import { UxTextareaTheme } from './ux-textarea-theme';
var theme = new UxTextareaTheme();
var UxTextarea = /** @class */ (function () {
    function UxTextarea(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.autofocus = null;
        this.autoResize = null;
        this.disabled = false;
        this.readonly = false;
        this.value = undefined;
        styleEngine.ensureDefaultTheme(theme);
    }
    UxTextarea.prototype.bind = function () {
        var _this = this;
        if (this.theme != null) {
            this.themeChanged(this.theme);
        }
        if (this.autofocus || this.autofocus === '') {
            setTimeout(function () {
                _this.textbox.focus();
            }, 0);
        }
        if (this.element.hasAttribute('placeholder')) {
            var attributeValue = this.element.getAttribute('placeholder');
            if (attributeValue) {
                this.textbox.setAttribute('placeholder', attributeValue);
                this.element.removeAttribute('placeholder');
            }
        }
        if (this.element.hasAttribute('required')) {
            this.textbox.setAttribute('required', '');
            this.element.removeAttribute('required');
        }
        if (this.cols) {
            this.textbox.setAttribute('cols', this.cols.toString());
            this.element.removeAttribute('cols');
        }
        if (this.rows) {
            this.textbox.setAttribute('rows', this.rows.toString());
            this.element.removeAttribute('rows');
        }
        if (this.minlength) {
            this.textbox.setAttribute('minlength', this.minlength.toString());
        }
        if (this.maxlength) {
            this.textbox.setAttribute('maxlength', this.maxlength.toString());
        }
        if (normalizeBooleanAttribute('disabled', this.disabled)) {
            this.textbox.setAttribute('disabled', '');
        }
        if (normalizeBooleanAttribute('readonly', this.readonly)) {
            this.textbox.setAttribute('readonly', '');
        }
    };
    UxTextarea.prototype.disabledChanged = function (newValue) {
        if (normalizeBooleanAttribute('disabled', newValue)) {
            this.textbox.setAttribute('disabled', '');
        }
        else {
            this.textbox.removeAttribute('disabled');
        }
    };
    UxTextarea.prototype.readonlyChanged = function (newValue) {
        if (normalizeBooleanAttribute('readonly', newValue)) {
            this.textbox.setAttribute('readonly', '');
        }
        else {
            this.textbox.removeAttribute('readonly');
        }
    };
    UxTextarea.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'textarea';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxTextarea.prototype.valueChanged = function () {
        if (this.autoResize !== null) {
            this.textbox.style.height = 'auto';
            this.textbox.style.height = this.textbox.scrollHeight + 2 + "px";
        }
    };
    UxTextarea.prototype.onFieldBlur = function () {
        this.element.classList.remove('focused');
        this.element.dispatchEvent(DOM.createCustomEvent('blur', { bubbles: true }));
    };
    UxTextarea.prototype.onFieldFocus = function () {
        this.element.classList.add('focused');
        this.element.dispatchEvent(DOM.createCustomEvent('focus', { bubbles: true }));
    };
    __decorate([
        bindable
    ], UxTextarea.prototype, "autofocus", void 0);
    __decorate([
        bindable
    ], UxTextarea.prototype, "autoResize", void 0);
    __decorate([
        bindable
    ], UxTextarea.prototype, "cols", void 0);
    __decorate([
        bindable
    ], UxTextarea.prototype, "disabled", void 0);
    __decorate([
        bindable
    ], UxTextarea.prototype, "maxlength", void 0);
    __decorate([
        bindable
    ], UxTextarea.prototype, "minlength", void 0);
    __decorate([
        bindable
    ], UxTextarea.prototype, "readonly", void 0);
    __decorate([
        bindable
    ], UxTextarea.prototype, "rows", void 0);
    __decorate([
        bindable
    ], UxTextarea.prototype, "theme", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay })
    ], UxTextarea.prototype, "value", void 0);
    UxTextarea = __decorate([
        inject(Element, StyleEngine),
        customElement('ux-textarea')
    ], UxTextarea);
    return UxTextarea;
}());
export { UxTextarea };
