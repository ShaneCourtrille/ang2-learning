System.register(['angular2/core', 'ng2-bs3-modal/ng2-bs3-modal', './project'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_bs3_modal_1, project_1;
    var ProjectEditorModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            },
            function (project_1_1) {
                project_1 = project_1_1;
            }],
        execute: function() {
            ProjectEditorModalComponent = (function () {
                function ProjectEditorModalComponent() {
                    this.statuses = ['Not Started', 'In Progress', 'Complete'];
                    this.cancelled = false;
                }
                ProjectEditorModalComponent.prototype.open = function () {
                    this.cancelled = false;
                    this.modal.open();
                };
                ProjectEditorModalComponent.prototype.close = function () {
                    this.modal.close();
                };
                Object.defineProperty(ProjectEditorModalComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.project); },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', project_1.Project)
                ], ProjectEditorModalComponent.prototype, "project", void 0);
                __decorate([
                    core_1.ViewChild('modal'), 
                    __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
                ], ProjectEditorModalComponent.prototype, "modal", void 0);
                ProjectEditorModalComponent = __decorate([
                    core_1.Component({
                        selector: 'project-editor',
                        directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES],
                        templateUrl: '/app/projects/project-editor.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProjectEditorModalComponent);
                return ProjectEditorModalComponent;
            }());
            exports_1("ProjectEditorModalComponent", ProjectEditorModalComponent);
        }
    }
});
//# sourceMappingURL=project-editor.component.js.map