import {Injectable} from 'angular2/core';
import {PROJECTS} from './mock-projects';

@Injectable()
export class ProjectService {
    getProjects() {
        return Promise.resolve(PROJECTS);
    }
}