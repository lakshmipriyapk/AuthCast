// Ensure DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const pendingList = document.getElementById("pending");
    const doneList = document.getElementById("done");

    // ✅ Function to create and add new task
    function createTask(text) {
        if (text.trim() === "") {
            alert("Please enter a task!");  // Prevent empty task
            return;
        }

        const task = document.createElement("div");
        task.classList.add("task");
        task.textContent = text;

        // Append task to Pending section
        pendingList.appendChild(task);
        taskInput.value = "";  // Clear input field
    }

    // ✅ Handle "Add Task" button click
    addTaskBtn.addEventListener("click", () => {
        createTask(taskInput.value);
    });

    // ✅ Handle "Enter" key press for adding tasks
    taskInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            createTask(taskInput.value);
        }
    });

    // ✅ Dragula.js drag-and-drop functionality
    dragula([pendingList, doneList])
        .on('drag', (el) => {
            el.classList.add('is-dragging');  // Highlight when dragging
        })
        .on('drop', (el) => {
            el.classList.remove('is-dragging');  // Remove highlight on drop
        })
        .on('over', (el, container) => {
            container.classList.add('over');  // Add effect when dragged over
        })
        .on('out', (el, container) => {
            container.classList.remove('over');
        });
});