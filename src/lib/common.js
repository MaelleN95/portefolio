import axios from 'axios';
import { API_ROUTES } from '../utils/constants';

export function storeInLocalStorage(token, userId) {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item);
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getFromLocalStorage('token');
    const userId = getFromLocalStorage('userId');
    if (!token) {
      return defaultReturnObject;
    }
    return { authenticated: true, user: { userId, token } };
  } catch (err) {
    console.error("getAuthenticatedUser, une erreur s'est produite :", err);
    return defaultReturnObject;
  }
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
    return await axios({
      method: 'post',
      url: `${API_ROUTES.CONTACT_FORM}`,
      data: form,
    });
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}

// Projects management
function formatProjects(projectArray) {
  return projectArray.map((project) => {
    const newProject = { ...project };
    return newProject;
  });
}

export async function getProjects() {
  try {
    const { response } = await axios.get(API_ROUTES.PROJECTS);
    const projects = formatProjects(response.data);
    return projects;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getProject(id) {
  try {
    const response = await axios.get(`${API_ROUTES.PROJECTS}/${id}`);
    const project = response.data;
    return project;
  } catch (err) {
    console.error(err);
    return null;
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
