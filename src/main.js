const projects = {
    project1: {
        title: "Artificial Intelligence Sample",
        description: "Description text Project 1",
        steps: [
            "Step 1",
            "Step 2",
            "Step 3"
        ],
        dashboard:
            "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjI0N2E2NTUtOTNiYS00ZGVlLWI3ODgtNDJjMWQ5ZjQwNmVkIiwidCI6ImJhMDQyYTFlLWUzMGMtNDY2ZS1hODViLWQ1MTBlMThmMjdhNiJ9"
    },

    project2: {
        title: "Project 2 Dashboard",
        description: "Description text Project 2",
        steps: [
            "Import data",
            "Data cleaning",
            "Dashboard creation"
        ],
        dashboard:
            "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjI0N2E2NTUtOTNiYS00ZGVlLWI3ODgtNDJjMWQ5ZjQwNmVkIiwidCI6ImJhMDQyYTFlLWUzMGMtNDY2ZS1hODViLWQ1MTBlMThmMjdhNiJ9"
    },

    project3: {
        title: "Project 3 Dashboard",
        description: "Description text Project 3",
        steps: [
            "Step 1",
            "Step 2",
            "Step 3"
        ],
        dashboard:
            "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjI0N2E2NTUtOTNiYS00ZGVlLWI3ODgtNDJjMWQ5ZjQwNmVkIiwidCI6ImJhMDQyYTFlLWUzMGMtNDY2ZS1hODViLWQ1MTBlMThmMjdhNiJ9"
    },

    project4: {
        title: "Project 4 Dashboard",
        description: "Description text Project 4",
        steps: [
            "Step 1",
            "Step 2",
            "Step 3"
        ],
        dashboard:
            "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjI0N2E2NTUtOTNiYS00ZGVlLWI3ODgtNDJjMWQ5ZjQwNmVkIiwidCI6ImJhMDQyYTFlLWUzMGMtNDY2ZS1hODViLWQ1MTBlMThmMjdhNiJ9"
    },

    project5: {
        title: "Project 5 Dashboard",
        description: "Description text Project 5",
        steps: [
            "Step 1",
            "Step 2",
            "Step 3"
        ],
        dashboard:
            "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjI0N2E2NTUtOTNiYS00ZGVlLWI3ODgtNDJjMWQ5ZjQwNmVkIiwidCI6ImJhMDQyYTFlLWUzMGMtNDY2ZS1hODViLWQ1MTBlMThmMjdhNiJ9"
    }
};

function insert_content(id) {

    // reset menu active state
    document.querySelectorAll('.menu li')
        .forEach(item => {
            item.classList.remove('active');
        });

    // activate selected item
    document.getElementById(id)
        .classList.add('active');

    const content = document.getElementById('content');

    // CV page
    if (id === 'cv') {

        content.innerHTML = `
            <iframe
                class="cv-frame"
                src="./CV_Nahum_Hijaz_2026.pdf">
            </iframe>
        `;

        return;
    }

    // project page
    const project = projects[id];

    const stepsHTML = project.steps
        .map(step => `<li>${step}</li>`)
        .join('');

    content.innerHTML = `
        <div class="dashboard-background">
            <h3>DASHBOARD DISPLAY</h3>

            <iframe
                title="${project.title}"
                src="${project.dashboard}"
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>

        <div class="task-background">

            <div class="task-description">
                <h3>TASK DESCRIPTION</h3>
                <p>${project.description}</p>
            </div>

            <div class="dev-steps">
                <h3>DEVELOPMENT STEPS</h3>
                <ul>
                    ${stepsHTML}
                </ul>
            </div>

        </div>
    `;
}