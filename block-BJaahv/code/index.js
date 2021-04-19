// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects


//- [ ] Using function to create object

let projectMethods = {
    getProjects : function(){
        return project.noOfProjects
    },
    changeName : function(newName){
        return project.name = newName
    },
    incrementProject : function(){
        return project.noOfProjects+=1
    },
    decrementProject : function(){
        return project.noOfProjects-=1
    }
}

function createProjects(name, id, noOfProjects){
    let project = {}
    project.name = name
    project.id = id
    project.noOfProjects = noOfProjects
    return project
}

//- [ ] Using Object.create (prototypal pattern)
let projectMethods = {
    getProjects : function(){
        return project.noOfProjects
    },
    changeName : function(newName){
        return project.name = newName
    },
    incrementProject : function(){
        return project.noOfProjects+=1
    },
    decrementProject : function(){
        return project.noOfProjects-=1
    }
}


function createProjects(name, id, noOfProjects){
    let project = Object.create(projectMethods)
    project.name = name
    project.id = id
    project.noOfProjects = noOfProjects
    return project
}

//- [ ] Using Pseudoclassical Way

function createProjects(name, id, noOfProjects){
    let project ={}
    project.name = name
    project.id = id
    project.noOfProjects = noOfProjects
    
}

createProjects.prototype = {
    getProjects : function(){
        return this.noOfProjects
    },
    changeName : function(newName){
        return this.name = newName
    },
    incrementProject : function(){
        return this.noOfProjects+=1
    },
    decrementProject : function(){
        return this.noOfProjects-=1
    }
}

//- [ ] Using Class

class Project{
    constructor(name, id, noOfProjects){
        this.name = name
        this.id = id
        this.noOfProjects = noOfProjects
    }
    getProjects(){
        return this.noOfProjects
    }
    changeName(newName){
        return this.name = newName
    }
    incrementProject(){
        return this.noOfProjects+=1
    }
    decrementProject(){
        return this.noOfProjects-=1
    }
}






















