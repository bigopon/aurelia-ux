var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-pal", "aurelia-binding", "aurelia-dependency-injection", "@aurelia-ux/core", "./ux-input-theme"], function (require, exports, aurelia_templating_1, aurelia_pal_1, aurelia_binding_1, aurelia_dependency_injection_1, core_1, ux_input_theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = new ux_input_theme_1.UxInputTheme();
    var UxInput = /** @class */ (function () {
        function UxInput(element, styleEngine) {
            this.element = element;
            this.styleEngine = styleEngine;
            this.autofocus = null;
            this.disabled = false;
            this.readonly = false;
            this.value = undefined;
            styleEngine.ensureDefaultTheme(theme);
        }
        UxInput.prototype.bind = function () {
            var _this = this;
            if (this.autofocus || this.autofocus === '') {
                setTimeout(function () {
                    _this.textbox.focus();
                }, 0);
            }
            if (this.element.hasAttribute('required')) {
                this.textbox.setAttribute('required', '');
                this.element.removeAttribute('required');
            }
            if (this.element.hasAttribute('placeholder')) {
                var attributeValue = this.element.getAttribute('placeholder');
                if (attributeValue) {
                    this.textbox.setAttribute('placeholder', attributeValue);
                    this.element.removeAttribute('placeholder');
                }
            }
            if (this.element.hasAttribute('step')) {
                var attributeValue = this.element.getAttribute('step');
                if (attributeValue) {
                    this.textbox.setAttribute('step', attributeValue);
                    this.element.removeAttribute('step');
                }
            }
            if ([
                'text',
                'password',
                'number',
                'email',
                'url',
                'tel',
                'search'
            ].includes(this.type)) {
                this.textbox.setAttribute('type', this.type);
            }
            if (this.min) {
                this.textbox.setAttribute('min', this.min.toString());
            }
            if (this.max) {
                this.textbox.setAttribute('max', this.max.toString());
            }
            if (this.minlength) {
                this.textbox.setAttribute('minlength', this.minlength.toString());
            }
            if (this.maxlength) {
                this.textbox.setAttribute('maxlength', this.maxlength.toString());
            }
            if (this.disabled || this.disabled === '') {
                this.textbox.setAttribute('disabled', '');
            }
            if (this.readonly || this.readonly === '') {
                this.textbox.setAttribute('readonly', '');
            }
            this.themeChanged(this.theme);
        };
        UxInput.prototype.themeChanged = function (newValue) {
            if (newValue != null && newValue.themeKey == null) {
                newValue.themeKey = 'input';
            }
            this.styleEngine.applyTheme(newValue, this.element);
        };
        UxInput.prototype.disabledChanged = function (newValue) {
            if (newValue === true || newValue === '') {
                this.textbox.setAttribute('disabled', 'true');
            }
            else {
                this.textbox.removeAttribute('disabled');
            }
        };
        UxInput.prototype.readonlyChanged = function (newValue) {
            if (newValue === true || newValue === '') {
                this.textbox.setAttribute('readonly', 'true');
            }
            else {
                this.textbox.removeAttribute('readonly');
            }
        };
        UxInput.prototype.typeChanged = function (newValue) {
            if (newValue !== 'text' && newValue !== 'password' && newValue !== 'number') {
                this.type = 'text';
            }
        };
        UxInput.prototype.valueChanged = function (newValue) {
            if (this.type === 'number' && !isNaN(newValue) && newValue !== '') {
                if (this.min && newValue < this.min) {
                    this.value = this.min;
                }
                if (this.max && newValue > this.max) {
                    this.value = this.max;
                }
                if (isNaN(newValue)) {
                    this.value = '';
                }
            }
        };
        UxInput.prototype.onFieldBlur = function () {
            this.element.classList.remove('focused');
            this.element.dispatchEvent(aurelia_pal_1.DOM.createCustomEvent('blur', { bubbles: true }));
        };
        UxInput.prototype.onFieldFocus = function () {
            this.element.classList.add('focused');
            this.element.dispatchEvent(aurelia_pal_1.DOM.createCustomEvent('focus', { bubbles: true }));
        };
        __decorate([
            aurelia_templating_1.bindable
        ], UxInput.prototype, "autofocus", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxInput.prototype, "disabled", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxInput.prototype, "maxlength", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxInput.prototype, "minlength", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxInput.prototype, "min", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxInput.prototype, "max", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxInput.prototype, "readonly", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxInput.prototype, "theme", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxInput.prototype, "type", void 0);
        __decorate([
            aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
        ], UxInput.prototype, "value", void 0);
        UxInput = __decorate([
            aurelia_dependency_injection_1.inject(Element, core_1.StyleEngine),
            aurelia_templating_1.customElement('ux-input')
        ], UxInput);
        return UxInput;
    }());
    exports.UxInput = UxInput;
});
