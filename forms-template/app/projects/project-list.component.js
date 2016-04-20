System.register(['angular2/core', './project', './project.service', './project-editor.component'], function(exports_1, context_1) {
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
    var core_1, project_1, project_service_1, project_editor_component_1;
    var ProjectListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (project_1_1) {
                project_1 = project_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            },
            function (project_editor_component_1_1) {
                project_editor_component_1 = project_editor_component_1_1;
            }],
        execute: function() {
            ProjectListComponent = (function () {
                function ProjectListComponent(_projectService) {
                    this._projectService = _projectService;
                    this.projects = [];
                }
                ProjectListComponent.prototype.editProject = function (project) {
                    var projectToEdit = Object.assign({}, project);
                    this.selectedProject = projectToEdit;
                    this.modal.open();
                };
                ProjectListComponent.prototype.newProject = function () {
                    var project = new project_1.Project(-1, '', 'Not Started');
                    this.selectedProject = project;
                    this.modal.open();
                };
                ProjectListComponent.prototype.saveProject = function (project) {
                    this._projectService.saveProject(project);
                    this._refreshProjectList();
                };
                ProjectListComponent.prototype._refreshProjectList = function () {
                    var _this = this;
                    this._projectService.getProjects().then(function (projects) { return _this.projects = projects; });
                };
                ProjectListComponent.prototype.ngOnInit = function () {
                    this._refreshProjectList();
                };
                __decorate([
                    core_1.ViewChild(project_editor_component_1.ProjectEditorModalComponent), 
                    __metadata('design:type', project_editor_component_1.ProjectEditorModalComponent)
                ], ProjectListComponent.prototype, "modal", void 0);
                ProjectListComponent = __decorate([
                    core_1.Component({
                        selector: 'project-list',
                        templateUrl: '/app/projects/project-list.component.html',
                        directives: [project_editor_component_1.ProjectEditorModalComponent],
                        providers: [project_service_1.ProjectService]
                    }), 
                    __metadata('design:paramtypes', [project_service_1.ProjectService])
                ], ProjectListComponent);
                return ProjectListComponent;
            }());
            exports_1("ProjectListComponent", ProjectListComponent);
        }
    }
});
//# sourceMappingURL=project-list.component.js.map