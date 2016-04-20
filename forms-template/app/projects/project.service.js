System.register(['angular2/core', './mock-projects'], function(exports_1, context_1) {
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
    var core_1, mock_projects_1;
    var ProjectService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_projects_1_1) {
                mock_projects_1 = mock_projects_1_1;
            }],
        execute: function() {
            ProjectService = (function () {
                function ProjectService() {
                    console.log('Initializing service projects');
                    this._projects = mock_projects_1.PROJECTS.slice();
                }
                ProjectService.prototype.getProjects = function () {
                    console.log('Getting projects');
                    return Promise.resolve(this._projects);
                };
                ProjectService.prototype.saveProject = function (project) {
                    if (project.id == -1) {
                        this._projects.push(project);
                    }
                    else {
                        var idx = this._projects.findIndex(function (prj) { return project.id == prj.id; });
                        this._projects[idx] = project;
                    }
                };
                ProjectService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ProjectService);
                return ProjectService;
            }());
            exports_1("ProjectService", ProjectService);
        }
    }
});
//# sourceMappingURL=project.service.js.map