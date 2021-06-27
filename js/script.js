

document.querySelector(".button-container")
    .addEventListener("click", () => {
        console.log(" I was ckicked");
        let text = document.getElementById("filter-jobs").value;
        console.log(text);
    })

function getJobs() {
    return fetch("data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data
        })
}

function showJobs(jobs) {
    console.log("Jobs in showjobs", jobs);
    let jobsContainer = document.querySelector(".job-container");
    console.log(jobsContainer);
    let jobsHTML = ""


    jobs.forEach(job =>{
        console.log(job)
        jobs += `
        <div class="Job-tile">

        < div class="top" >

            <img src="${job.logo}" />

        < span class="material-icons

    more horiz">more_horiz</span>
    
    </div >
    
    <div class="rolename">
    
    <span> ${job.roleName}</span>
    
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
    console.log(jobsHTML)
    jobsContainer.innerHTML = jobsHTML;
}

getJobs().then(data =>{
    showJobs(data);
});