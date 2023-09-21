document.addEventListener("DOMContentLoaded", function () {
    const deadlineInput = document.getElementById("deadline");

    // Set the default date format to dd-mm-yyyy
    const defaultDate = new Date();
    const dd = String(defaultDate.getDate()).padStart(2, "0");
    const mm = String(defaultDate.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = defaultDate.getFullYear();
    const defaultDateString = `${yyyy}-${mm}-${dd}`;
    deadlineInput.value = defaultDateString;
    const taskInput = document.getElementById("task");
    const categoryInput = document.getElementById("category");
    // const deadlineInput = document.getElementById("deadline");
    const priorityInput = document.getElementById("priority");
    const labelsInput = document.getElementById("labels");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("tasks");
    taskList.className = "task-List";

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const category = categoryInput.value;
        const deadline = deadlineInput.value;
        const priority = priorityInput.value;
        const labels = labelsInput.value.split(",").map(label => label.trim());

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.className = "task-item";
            taskItem.innerHTML = `
            <div class = "dead">
            <div>
                <span>${taskText}</span>
                <span class='cat'>Category: ${category}</span>
                <span class = 'cat'>Deadline: ${deadline}</span>
                <span class = 'cat'>Priority: ${priority}</span>
                <span class = 'cat'>Labels: ${labels.join(", ")}</span>
            </div>
            <div class = "deletediv">
                <button class="delete cat">Delete</button>
            </div>
            </div>
            `;

            const deleteButton = taskItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });

            taskList.appendChild(taskItem);
            taskInput.value = "";
            categoryInput.value = "Work"; // Reset category to default
            deadlineInput.value = ""; // Reset deadline to default
            priorityInput.value = "High"; // Reset priority to default
            labelsInput.value = ""; // Clear labels input
        }
    });
});
