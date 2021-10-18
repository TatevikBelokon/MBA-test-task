const programs = document.querySelector('.program');
const url = 'https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses';

for (let i = 40; i < 60; i+=4){
    fetch(url)
        .then(response => response.json())
        .then(result=>displayPrograms(result.data[i].title, result.data[i].specializedSubjects))
        .catch(err=>console.log(err));
}

function displayPrograms (titleTxt, specializedSubjects) {
    createProgramTitle (titleTxt); 
    let programMain = createProgramMain();

    let moduleOne = createModule(programMain, '1 модуль');    
    let subjectsOne = createProgramSubjects (programMain);  
    //добавить к модулю '+'/'-''    
    moduleOne.onclick = function(){
        moduleOne.classList.toggle("program__modul_change");
        subjectsOne.classList.toggle("hide");
    }     
    for (let i = 0; i < 5; i++ ){
        createSubject (subjectsOne, specializedSubjects[i]);        
    }  

    let moduleTwo = createModule(programMain, '2 модуль');
    let subjectsTwo = createProgramSubjects (programMain);
    moduleTwo.onclick = function(){
        moduleTwo.classList.toggle("program__modul_change");
        subjectsTwo.classList.toggle("hide");
    } 
    for (let i = 5; i <= 9; i++ ){
        createSubject (subjectsTwo, specializedSubjects[i]);        
    }  
}

function createProgramTitle (titleTxt) {
    let title = document.createElement('h2');
    title.className = 'program__title';
    title.innerHTML = titleTxt;
    programs.append(title);
}

function createProgramMain() {
    let programMain = document.createElement('div');
    programMain.className = 'program__main';    
    programs.append(programMain);
    return programMain;
}

function createModule (node, moduleTxt){
    let moduleBlock =  document.createElement('h4');
    moduleBlock.className = 'program__modul';
    moduleBlock.innerHTML = moduleTxt;
    node.append(moduleBlock);
    return moduleBlock;
 }

function createProgramSubjects (node){
    let subjects =  document.createElement('ul');
    subjects.className = 'program_specializedSubjects';
    node.append(subjects);
    return subjects;
}

function createSubject (node, subjectTxt){
    let subject =  document.createElement('li');   
    subject.innerHTML = subjectTxt;
    node.append(subject);
}