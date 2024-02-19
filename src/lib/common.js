import axios from 'axios';
import { API_ROUTES } from '../utils/constants';

export function storeInLocalStorage(token, userId, userType, loginTime) {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
  localStorage.setItem('userType', userType);
  localStorage.setItem('loginTime', loginTime);
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item);
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getFromLocalStorage('token');
    const userId = getFromLocalStorage('userId');
    const userType = getFromLocalStorage('userType');
    const loginTime = parseInt(getFromLocalStorage('loginTime'));
    if (!token) {
      return defaultReturnObject;
    }
    if (userType !== 'admin') {
      return defaultReturnObject;
    }

    const timeElapsedMinutes = (new Date() - loginTime) / (1000 * 60);
    console.log('Temps depuis dernière interaction : ', timeElapsedMinutes);
    if (timeElapsedMinutes > 5) {
      localStorage.clear();
      alert('session expirée');
      return defaultReturnObject;
    } else {
      storeInLocalStorage(
        getFromLocalStorage('token'),
        getFromLocalStorage('userId'),
        getFromLocalStorage('userType'),
        Date.now()
      );
    }

    return {
      authenticated: true,
      user: { userId, token, userType, loginTime },
    };
  } catch (err) {
    console.error("getAuthenticatedUser, une erreur s'est produite :", err);
    return defaultReturnObject;
  }
}

// Connexion management
export async function LogIn(data) {
  const res = await axios.post(API_ROUTES.LOGIN, {
    email: data.username,
    password: data.pw,
  });
  return res;
}

// Contact form management
export async function addContactResponse(data) {
  const form = {
    firstName: data.nom,
    name: data.prenom,
    email: data.email,
    message: data.msg,
  };

  try {
    return await axios.post(API_ROUTES.CONTACT_FORM, { data: form });
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}

// Projects management
function formatProjects(data) {
  return data.map((projectData) => {
    const newProject = { ...projectData };
    return newProject;
  });
}

export async function getProjects() {
  try {
    const res = await axios.get(API_ROUTES.PROJECTS);
    const project = formatProjects(res.data);
    return project;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getProject(id) {
  try {
    const res = await axios.get(`${API_ROUTES.PROJECTS}/${id}`);
    const project = res.data;
    return project;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function addProject(data) {
  const project = {
    title: data.name,
    projectId: data.name,
    description: data.descr,
    hardSkills: data.hardSkills,
    date: parseInt(data.date, 10),
    mission: data.mission,
    skills: data.developedSkills,
    linkGitHub: data.gitHubLink,
    linkDeployedSite: data.deployedLink,
  };
  const bodyFormData = new FormData();
  bodyFormData.append('project', JSON.stringify(project));
  bodyFormData.append('image', data.file);

  try {
    return await axios.post(API_ROUTES.PROJECTS, bodyFormData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}

export async function deleteProject(id) {
  try {
    await axios.delete(`${API_ROUTES.PROJECTS}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
