

document.querySelector(".button-container")
    .addEventListener("click", () => {
        console.log(" I was ckicked");
        let text = document.getElementById("filter-jobs").value;
        getJobs().then(jobs =>{
            let filteredJobs= filterjobs(jobs,text);
            showJobs(filteredJobs);
        })
    })

function getJobs(){
    return fetch("data.json")
        .then(response => response.json())
        .then(data => {           
            return data
        })
}
function filterjobs(jobs, searchText){
    if(searchText){
        let filteredjobs =jobs.filter(job => {
            if(job.roleName.toLowerCase().includes(searchText)
            || job.type.toLowerCase().includes(searchText)
            || job.company.toLowerCase().includes(searchText)
            || job.requirements.content.toLowerCase().includes(searchText)) {
                return true;
            } else {
                return false;
            }
        })
         return filteredjobs;
    }else {
        return jobs;
    }  
}

function showJobs(jobs){
    let jobsContainer = document.querySelector(".jobs-container");
    console.log(jobsContainer);
    let jobsHTML = "";
   jobs.forEach(job =>{
        console.log(job)
        jobsHTML += `
        <div class="Job-tile">

        <div class="top">

            <img src="${job.logo}"/>

        <span class="material-icons more horiz">more_horiz</span>
    
    </div>
    
    <div class="rolename">
    
    <span>${job.roleName}</span>
    
    </div>
    
    <div class="description">
    
    <span>${job.requirements.content} </span>
    </div>
    <div class="buttons">
    
    <div class="button apply-now">
     Apply Now
     </div>
    
    <div class="button">
        message
     </div>
     </div>
    </div>
        `
    })
    console.log(jobsHTML);
    jobsContainer.innerHTML = jobsHTML;
}

getJobs().then(data => {
    showJobs(data);
});