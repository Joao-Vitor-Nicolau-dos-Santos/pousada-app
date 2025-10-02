export function login(username, password) {
  if (username === 'admin' && password === '1234') {
    return { success: true, token: 'fake-jwt-token' };
  }
  return { success: false, message: 'Invalid credentials' };
}

export function logout() {
  console.log('User logged out');
}