// constants

const headers = () => {
  return {'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: localStorage.getItem('token') }
};

const signup_headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const URL_ROOT = 'http://localhost:3001';
const API_ROOT = `${URL_ROOT}/api/v1`;

// auth fetches

const signup = (signupBody) => {
  return fetch(`${URL_ROOT}/signup`, {
    method: 'POST',
    headers: signup_headers,
    body: JSON.stringify({user: signupBody})
  }).then(res => res.json());
};

const login = (email, password) => {
  return fetch(`${URL_ROOT}/login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ email, password })
  }).then(res => res.json());
};

const getLoggedInUser = () => {
  return fetch(`${URL_ROOT}/current_user`, {
    headers: headers()
  }).then(res => res.json())
};

// users

const getUsers = () => {
  return fetch(`${API_ROOT}/users`, {
    headers: headers()
  }).then(res => res.json());
};

const getUser = (uid) => {
  return fetch(`${API_ROOT}/users/${uid}`, {
    headers: headers()
  }).then(res => res.json());
};

const patchUser = (uid, patchUserBody) => {
  return fetch(`${API_ROOT}/users/${uid}`, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify({ user: patchUserBody })
  }).then(res => res.json());
};

// follows

const postFollow = (follower_id, followed_id) => {
  return fetch(`${API_ROOT}/connections`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ follower_id, followed_id })
  }).then(res => res.json());
};

const postUnfollow = (follower_id, followed_id) => {
  return fetch(`${API_ROOT}/unfollow`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ follower_id, followed_id })
  }).then(res => res.json());
};

const getFollowing = (uid) => {
  return fetch(`${API_ROOT}/users/${uid}/following`, {
    headers: headers()
  }).then(res => res.json());
};

const getFollowers = (uid) => {
  return fetch(`${API_ROOT}/users/${uid}/followers`, {
    headers: headers()
  }).then(res => res.json());
};

// flaps

const getFlaps = () => {
  return fetch(`${API_ROOT}/flaps`, {
    headers: headers()
  }).then(res => res.json());
};

const getFlap = (fid) => {
  return fetch(`${API_ROOT}/flaps/${fid}`, {
    headers: headers()
  }).then(res => res.json());
};

const postFlap = (content, user_id, parent) => {
  return fetch(`${API_ROOT}/flaps`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ content, user_id, parent })
  }).then(res => res.json());
};

const patchFlap = (fid) => {
  return fetch(`${API_ROOT}/flaps/${fid}`, {
    method: 'PATCH',
    headers: headers()
  }).then(res => res.json());
};

export default {
  auth: {
    signup,
    login,
    getLoggedInUser
  },
  flaps: {
    getFlaps,
    getFlap,
    postFlap,
    patchFlap
  },
  users: {
    getUsers,
    getUser,
    patchUser,
  },
  follows: {
    postFollow,
    postUnfollow,
    getFollowing,
    getFollowers
  }
};
