import {Injectable} from 'angular2/core';
import {PROJECTS} from './mock-projects';
import {Project} from './project';

@Injectable()
export class ProjectService {
    private _projects: Project[];
    
    constructor() {
        console.log('Initializing service projects');
        
        this._projects = PROJECTS.slice();       
    }
    
    getProjects() {
        console.log('Getting projects');
        
        return Promise.resolve(this._projects);
    }
    
    saveProject(project: Project) {
        if(project.id == -1)
        {
            project.id = this._projects.length + 1;
            this._projects.push(project);
        }
        else 
        {
            var idx = this._projects.findIndex(prj => project.id == prj.id);
            
            this._projects[idx] = project;
        }
    }
}