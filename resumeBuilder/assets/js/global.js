/**
 *  Classes to save resume details
 */

class IndividualData {
    constructor(f_name, l_name, email, phone, address) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}

class Objective {
    constructor(objective) {
        this.objective = objective;
    }
}

class Skills {
    constructor(skills) {
        this.skills = skills;
    }
}

class Experience {
    constructor(id, company_name, role, f_date, t_date, responsibilities) {
        this.id = id;
        this.company_name = company_name;
        this.role = role;
        this.f_date = f_date;
        this.t_date = t_date;
        this.responsibilities = responsibilities;
    }
}

class Project {
    constructor(id, proj_name, proj_desc, proj_link) {
        this.id = id;
        this.proj_name = proj_name;
        this.proj_desc = proj_desc;
        this.proj_link = proj_link;
    }
}

class Degree {
    constructor(id, degree) {
        this.id = id;
        this.degree = degree;
    }
}

class Data {


    static resume_data = [

    ]

}
/**
 *  UI Class
 */

class UIdisplay {


    /**
     * Retrives all buttons from DOM
     */

    static get_all_btns() {

        let all_btns = document.getElementsByTagName('button');        
        return {
            all_btns
        }

    }

    /**
     * Next and Prev buttons functionality
     */

    static next(btn_ele) {
        btn_ele.parentElement.classList.add('hide');
        btn_ele.parentElement.nextElementSibling.classList.remove('hide');
    }

    static prev(btn_ele) {
        btn_ele.parentElement.classList.add('hide');
        btn_ele.parentElement.previousElementSibling.classList.remove('hide');
    }

    /**
     * Adds the next div element when next button
     * is clicked.
     */

    static display_elements(element) {

        let div = '';
        let individ_div = element.parentElement.nextElementSibling;

        if (element.id == 'btn-det-1' && (individ_div.children[2] == null)) {
            div += `<h1 class="heading">Objective</h1>
                    <textarea name="" id="objective-textarea" cols="70" rows="10">
                    </textarea>`;
        } else if (element.id == 'btn-obj-1' && (individ_div.children[2] == null)) {
            div += `<h1 class="heading">Skills</h1>
                    <textarea name="" id="skills-textarea" cols="70" rows="10">
                    </textarea>`;
        } else if (element.id == 'btn-skl-1' && (individ_div.children[4] == null)) {
            div += `<div class="exp-comp-role-date">                                            
                        <div>
                            <label for="company" id="company">Company Name</label>
                            <input type="text">
                            <label for="role" id="role">Role</label>
                            <input type="text">
                        </div>
                        <div>
                            <label for="from-date" id=from-date>From Date</label>
                            <input type="text">
                            <label for="to-date" id="to-date">To Date</label>
                            <input type="text">
                        </div>                
                        <h3>Responsibilities</h3>
                        <textarea name="" id="" cols="70" rows="10"></textarea>  
                    </div>`;
        } else if (element.id == 'btn-exp-1' && (individ_div.children[4] == null)) {
            div += `<div class="proj-name-desc-link">
                        <div>
                            <label for="pname">Project Name</label><br>
                            <input type="text" size="25" id="proj-name">
                        </div>
                        <div>
                            <label for="pdescription">Description</label><br>
                            <textarea name="" id="proj-desc" cols="80" rows="10"></textarea>
                        </div>
                        <div>
                            <label for="plink">Project link</label><br>
                            <input type="text" id="proj-link" size="82">
                        </div>
                    </div>`;
        } else if (element.id == 'btn-proj-1' && (individ_div.children[4] == null)) {
            div += `<div class="degree">
                        <label for="">Degree</label><br>
                        <input type="text" id="edu" size="80"><br>                
                    </div>`;

        } else if (element.id == 'btn-edu-1') {
            UIdisplay.update_data();

        }
        individ_div.lastElementChild.insertAdjacentHTML('beforebegin', div);
    }

    /**
     * Adds additional experience, projects, degree div
     */

    static add_div(element, id) {

        let add_ele = element.parentElement.children[3].outerHTML + '<button class="btn-del" id="delete-' + id + '">Delete</button>';
        element.insertAdjacentHTML('beforebegin', add_ele);

        let del = document.getElementById('delete-' + id);
        del.addEventListener('click', function (e) {
            del.previousElementSibling.remove();
            del.previousElementSibling.nextElementSibling.remove();
        });
    }

    /**
     * Updating the storage 
     */
    static update_data(button) {

        /*===== Individual details ======*/

        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let address = document.getElementById('address').value;
        let individual_details = new IndividualData(fname, lname, email, phone, address);
        Data.resume_data["individual_details"] = individual_details;
        

        /*===== Objective details ======*/

        let update_obj_data = document.getElementById('objective');
        let obj = update_obj_data.children[2].value;
        let objective = new Objective(obj);
        Data.resume_data["objective"] = objective;
        
        /*===== Skills details ======*/

        let update_skill_data = document.getElementById('skills');
        let skill = update_skill_data.children[2].value;
        let skills = new Skills(skill);
        Data.resume_data["skills"] = skills;

        /*===== Experience details ======*/

        let exp_comp_role_date = document.getElementsByClassName('exp-comp-role-date');
        Data.resume_data.experiences = [];
        let exp_count = 0;

        for (let x_exp of exp_comp_role_date) {
            let company_name_val = x_exp.children[0].children[1].value;
            let role_val = x_exp.children[0].children[3].value;
            let from_date = x_exp.children[1].children[1].value;
            let to_date = x_exp.children[1].children[3].value;
            let exp_resp = x_exp.children[3].value;            
            let experience = new Experience(exp_count, company_name_val, role_val, from_date, to_date, exp_resp.split('.').join('</br>'));
            Data.resume_data.experiences.push(experience);
            exp_count++;
        }

        /*===== Project details ======*/

        let proj_name_desc_link = document.getElementsByClassName('proj-name-desc-link');
        Data.resume_data.projects = [];
        let proj_count = 0;

        for (let x_proj of proj_name_desc_link) {
            let proj_name = x_proj.children[0].children[2].value;
            let proj_desc = x_proj.children[1].children[2].value;
            let proj_link = x_proj.children[2].children[2].value;
            let project = new Project(proj_count, proj_name, proj_desc, proj_link);
            Data.resume_data.projects.push(project);
            proj_count++;
        }

        /*===== Education details ======*/

        let degree = document.getElementsByClassName('degree');
        Data.resume_data.education = [];
        let deg_count = 0;

        for (let x_deg of degree) {
            let deg_name = x_deg.children[2].value;
            let degree = new Degree(deg_count, deg_name);
            Data.resume_data.education.push(degree);            
            deg_count++;
        }        

        UIdisplay.update_resume();
    }



    /**
     * Displaying data on resume
     */

    static update_resume() {



        let data = Data.resume_data;         
        
        let resume_one = '';
        let resume_one_div = document.getElementById('model-resume-2');

        resume_one += `<div id="r-personal-details">
                        <p id="r-name">${data.individual_details.f_name} ${data.individual_details.l_name}</p>
                            <ul id="r-addr-info">
                                <li id="r-city">${data.individual_details.address}</li>
                                <li id="r-email">${data.individual_details.email}</li>
                                <li id="r-phone">${data.individual_details.phone}</li>                                    
                            </ul>
                        </div> 
                        <div id="r-objective" class="r-div">
                            <h3 class="r-heading">OBJECTIVE</h3>
                            <hr>
                            <p class="r-ptext">
                            ${data.objective.objective}
                            </p>
                        </div>

                        <div id="r-skills" class="r-div">
                            <h3 class="r-heading">SKILLS</h3>
                            <hr>
                        <p class="r-ptext"> ${data.skills.skills}</p>
                        </div>                       
                        `;                        
        resume_one_div.insertAdjacentHTML('beforeend', resume_one);

        /*============ Appending experiences div ===============*/
        let experiences_div = '<h3 class="r-heading" id="r-exp-heading">EXPERIENCE</h3>';
        for ( var x  in data.experiences){                                 
            experiences_div += `<div id="r-experience" class="r-div">
                                                             
                                    <hr>
                                    <ul id="r-exp-company-role" class="r-ptext">

                                    <li>Company: <span id="r-company">${data.experiences[x].company_name}</span></li>
                                        <li>Role: <span id="r-role">${data.experiences[x].role}</span></li>
                                    </ul>
                                    <ul id="r-exp-date">    
                                        <li>${data.experiences[x].f_date}${data.experiences[x].t_date}</li>
                                    </ul>
                                    <h3>Responsibilities</h3>
                                    <ul id="r-resp-list">   
                                        ${data.experiences[x].responsibilities}
                                    </ul>
                                </div>`;
        }        
        resume_one_div.insertAdjacentHTML('beforeend', experiences_div);

        /*============ Appending projects div ===============*/
        let projects_div = '<h3 class="r-heading" id="r-proj-heading">PROJECTS</h3>';
        for (var x in data.projects){
            projects_div += `<div id="r-projects" class="r-div">
                                <hr>
                                <p class="r-ptext" id="r-proj-name">${data.projects[x].proj_name}</p>
                                <p id="r-proj-desc">${data.projects[x].proj_desc}</p>
                                <p id="r-proj-link"><i class="fas fa-link"></i>${data.projects[x].proj_link}</p>
                            </div>                            
                            `;
        }        
        resume_one_div.insertAdjacentHTML('beforeend', projects_div);

        /*============ Appending education div ===============*/
        let degrees_div = '<h3 class="r-heading" id="r-edu-heading">EDUCATION</h3>';        
        for (var x in data.education){
            degrees_div += `<div id="r-experience" class="r-div">                                
                                <hr>
                                <p class="r-ptext">${data.education[x].degree}</p>
                            </div>`;
        }
        resume_one_div.insertAdjacentHTML('beforeend', degrees_div);
        
        /** 
         * Delete the div if no child eklements are present.
         */        
        let del_ind = data.individual_details;
        let del_obj = data.objective;
        let del_skl = data.skills;
        let del_exp =  data.experiences[0];
        let del_proj = data.projects[0];
        let del_edu = data.education[0];


        if (del_ind.f_name.length == 0 && del_ind.l_name.length == 0 &&
            del_ind.email.length == 0 && del_ind.phone.length == 0 &&
            del_ind.address.length == 0) {
                let del_ind_div = document.getElementById('r-personal-details');
                del_ind_div.parentElement.removeChild(del_ind_div);
            }
        
        if (del_obj.objective.length == 20) {
            let del_obj_div = document.getElementById('r-objective');
            del_obj_div.parentElement.removeChild(del_obj_div);
        }

        if (del_skl.skills.length == 20) {
            let del_skl_div = document.getElementById('r-skills');
            del_skl_div.parentElement.removeChild(del_skl_div);
        }

        if (del_exp.company_name.length == 0 &&
            del_exp.role.length == 0 &&
            del_exp.f_date.length == 0 &&
            del_exp.t_date.length == 0 &&
            del_exp.responsibilities.length == 0) {
                let del_exp_heading = document.getElementById('r-exp-heading');                                
                del_exp_heading.parentElement.removeChild(del_exp_heading.nextElementSibling);
                del_exp_heading.parentElement.removeChild(del_exp_heading);
            }
        
        if (del_proj.proj_name.length == 0 &&
            del_proj.proj_desc.length == 0 &&
            del_proj.proj_link.length == 0 ) {
                let del_proj_heading = document.getElementById('r-proj-heading');
                del_proj_heading.parentElement.removeChild(del_proj_heading.nextElementSibling);
                del_proj_heading.parentElement.removeChild(del_proj_heading);
            }
        
        if (del_edu.degree.length == 0) {
            let del_edu_heading = document.getElementById('r-edu-heading');
                del_edu_heading.parentElement.removeChild(del_edu_heading.nextElementSibling);
                del_edu_heading.parentElement.removeChild(del_edu_heading);
        }
       
}
}

class Global {

    static add_listeners() {

        let btns = UIdisplay.get_all_btns().all_btns;
        let id = 0;

        for (var x of btns) {
            if (x.className == 'next-btn') {
                x.addEventListener('click', function (e) {
                    UIdisplay.next(e.toElement);
                    UIdisplay.display_elements(e.toElement);
                });
            } else if (x.className == 'prev-btn') {
                x.addEventListener('click', function (e) {
                    UIdisplay.prev(e.toElement);
                });
            } else if (x.className == 'add-btn') {
                x.addEventListener('click', function (e) {
                    UIdisplay.add_div(e.toElement, id);
                    id++;
                })
            }

        }

    }
}

Global.add_listeners();