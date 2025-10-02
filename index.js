// index.js
import { login, logout } from './auth.js';

console.log('Pousada App iniciado');

try {
  const user = login('admin', '1234');
  console.log('Login bem-sucedido:', user.token);
  setTimeout(logout, 2000);
} catch (err) {
  console.error('Falha no login:', err.message);
}