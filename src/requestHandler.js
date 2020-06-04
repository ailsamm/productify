import config from './config';

export function getRandomId(){
    return new Date().getTime() & 0xffff;
}

export function fetchData(){
    return Promise.all([
        fetch(`${config.serverUrl}/teams`),
        fetch(`${config.serverUrl}/projects`),
        fetch(`${config.serverUrl}/users-info`),
        fetch(`${config.serverUrl}/users-login`),
        fetch(`${config.serverUrl}/tasks`),
      ])
      .then(([teamsRes, projectsRes, usersInfoRes, usersLoginRes, tasksRes]) => {
          if (!teamsRes.ok) {
            throw new Error("Could not fetch teams")
          }
          if (!projectsRes.ok) {
            throw new Error("Could not fetch projects")
          }
          if (!usersInfoRes.ok) {
            throw new Error("Could not fetch users info")
          }
          if (!usersLoginRes.ok) {
            throw new Error("Could not fetch users login")
          }
          if (!tasksRes.ok) {
            throw new Error("Could not fetch tasks")
          }
          return Promise.all([
            teamsRes.json(), 
            projectsRes.json(),
            usersInfoRes.json(),
            usersLoginRes.json(),
            tasksRes.json()
          ]);
      })
}

export function updateTaskInDb(taskId, taskFields) {
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

export function deleteTaskInDb(taskId) {
    fetch(`${config.serverUrl}/tasks/${taskId}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('An error occurred while attempting to delete the task')
        }
      })
      .catch(e => console.log(e));
}

export function addNewUser2(userInfo, userLogin) {
    Promise.all([
            fetch(`${config.serverUrl}/users-info/`, {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                'content-type': 'application/json'
            },
        }),
            fetch(`${config.serverUrl}/users-login/`, {
                method: 'POST',
                body: JSON.stringify(userLogin),
                headers: {
                    'content-type': 'application/json'
                },
            })
        ])
        .then(([usersInfoRes, usersLoginRes]) => {
            if (!usersInfoRes.ok) {
                throw new Error('An error occurred while attempting to add new user info')
            }
            if (!usersLoginRes.ok) {
                throw new Error('An error occurred while attempting to add new user login')
            }
        })
        .catch(e => console.log(e));
}

export function addNewUser(userInfo, userLogin) {
        fetch(`${config.serverUrl}/users-info/`, {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(usersInfoRes => {
            if (!usersInfoRes.ok) {
                throw new Error('An error occurred while attempting to add new user info')
            }
            fetch(`${config.serverUrl}/users-login/`, {
                method: 'POST',
                body: JSON.stringify(userLogin),
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(usersLoginRes => {
                if (!usersLoginRes.ok) {
                    throw new Error('An error occurred while attempting to add new user login')
                }
            })
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));   
}

export function updateUserInfoInDb(userId, userInfoFields){
    fetch(`${config.serverUrl}/users-info/${userId}`, {
        method: 'PATCH',
        body: JSON.stringify(userInfoFields),
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(userInfoRes => {
        if (!userInfoRes.ok) {
          throw new Error('An error occurred while attempting to update user info')
        }
    })
    .catch(e => console.log(e));
}

