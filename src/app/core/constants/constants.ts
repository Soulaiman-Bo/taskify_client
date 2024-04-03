export const constants = {
  CURRENT_TOKEN: 'CURRENT_TOKEN',
};

const apiurl = 'http://127.0.0.1:8000/api';


export const apiEndpoint = {

    AuthEndpoint: {
      login: `${apiurl}/login`,
      logout: `${apiurl}/logout`,
      register: `${apiurl}/register`,
      refresh: `${apiurl}/refresh`,
    },

    TodoEndpoint: {
      createTask: `${apiurl}/tasks`,
      getAllTask: `${apiurl}/tasks`,
    },
  };
  