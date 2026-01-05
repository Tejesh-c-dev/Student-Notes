const API_BASE_URL = 'http://localhost:3000/api';

// Auth API calls
export const authAPI = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    return data;
  },

  register: async (username, email, password, confirmpassword) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, confirmpassword }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }
    return data;
  },

  changePassword: async (email, oldPassword, newPassword) => {
    const response = await fetch(`${API_BASE_URL}/change-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, oldPassword, newPassword }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Password change failed');
    }
    return data;
  },
};

// Notes API calls
export const notesAPI = {
  getAllNotes: async () => {
    const response = await fetch(`${API_BASE_URL}/notes`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch notes');
    }
    return data;
  },

  getNote: async (id) => {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch note');
    }
    return data;
  },

  createNote: async (title, content) => {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to create note');
    }
    return data;
  },

  deleteNote: async (id) => {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete note');
    }
    return data;
  },
};
