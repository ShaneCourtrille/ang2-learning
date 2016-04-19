System.register(['./project'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var project_1;
    var PROJECTS;
    return {
        setters:[
            function (project_1_1) {
                project_1 = project_1_1;
            }],
        execute: function() {
            exports_1("PROJECTS", PROJECTS = [
                new project_1.Project('Form Template Example', 'Complete'),
                new project_1.Project('Model Template Example', 'Not Started')
            ]);
        }
    }
});
//# sourceMappingURL=mock-projects.js.map