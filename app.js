// app.js
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Add the task to Firestore
    db.collection('tasks').add({
      text: taskText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
      // Clear the input field
      taskInput.value = '';
    })
    .catch((error) => {
      console.error('Error adding task: ', error);
    });
  }
});

// Real-time listener for tasks
db.collection('tasks')
  .orderBy('timestamp', 'desc')
  .onSnapshot((snapshot) => {
    taskList.innerHTML = '';
    snapshot.forEach((doc) => {
      const task = doc.data();
      const li = document.createElement('li');
      li.textContent = task.text;
      taskList.appendChild(li);
    });
  });
