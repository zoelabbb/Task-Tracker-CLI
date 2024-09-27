const fs = require('fs');
const path = require('path');
const tasksFilePath = path.join(__dirname, 'tasks.json');

// Membuat file JSON jika tidak ada
if (!fs.existsSync(tasksFilePath)) {
    fs.writeFileSync(tasksFilePath, JSON.stringify([]));
}

// Fungsi untuk menambahkan task
function addTask(description) {
    const tasks = JSON.parse(fs.readFileSync(tasksFilePath));
    const newTask = {
        id: tasks.length + 1,
        description: description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    tasks.push(newTask);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 4));
    console.log(`Task added successfully (ID: ${newTask.id})`);
}

// Fungsi untuk memperbarui task
function updateTask(id, newDescription) {
    const tasks = JSON.parse(fs.readFileSync(tasksFilePath));
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.description = newDescription;
        task.updatedAt = new Date().toISOString();
        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 4));
        console.log(`Task updated successfully (ID: ${id})`);
    } else {
        console.log(`No task found with ID ${id}`);
    }
}

// Fungsi untuk menghapus task
function deleteTask(id) {
    let tasks = JSON.parse(fs.readFileSync(tasksFilePath));
    tasks = tasks.filter(task => task.id !== id);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 4));
    console.log(`Task deleted successfully (ID: ${id})`);
}

// Fungsi untuk menandai status task
function markTaskStatus(id, status) {
    const tasks = JSON.parse(fs.readFileSync(tasksFilePath));
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = status;
        task.updatedAt = new Date().toISOString();
        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 4));
        console.log(`Task marked as ${status} (ID: ${id})`);
    } else {
        console.log(`No task found with ID ${id}`);
    }
}

// Fungsi untuk listing task
function listTasks(status) {
    const tasks = JSON.parse(fs.readFileSync(tasksFilePath));
    const filteredTasks = (status === 'all') ? tasks : tasks.filter(task => task.status === status);

    if (filteredTasks.length > 0) {
        filteredTasks.forEach(task => {
            console.log(`ID: ${task.id}, Description: ${task.description}, Status: ${task.status}, Created At: ${task.createdAt}`);
        });
    } else {
        console.log(`No tasks found with status: ${status}`);
    }
}

// Mendapatkan argumen dari command line
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'add':
        addTask(args[1]);
        break;
    case 'update':
        updateTask(parseInt(args[1]), args[2]);
        break;
    case 'delete':
        deleteTask(parseInt(args[1]));
        break;
    case 'mark-in-progress':
        markTaskStatus(parseInt(args[1]), 'in-progress');
        break;
    case 'mark-done':
        markTaskStatus(parseInt(args[1]), 'done');
        break;
    case 'list':
        listTasks(args[1] || 'all');
        break;
    default:
        console.log('Unknown command');
}
