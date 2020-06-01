import config from './config';

export function updateTask (taskId, taskFields) {
    fetch(`${config.serverUrl}/tasks/${taskId}`, {
      method: 'PATCH',
      body: JSON.stringify(taskFields),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('An error occurred while attempting to update the task')
      }
    })
    .catch(e => console.log(e));
  }