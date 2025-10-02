// auth.js
export function login(username, password) {
  if (username === 'admin' && password === '1234') {
    return { token: 'fake-jwt-token' };
  }
  throw new Error('Invalid credentials'); // BREAKING CHANGE!
}

export function logout() {
  console.log('User logged out');
}