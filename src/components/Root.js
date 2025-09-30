import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
function RootLayout() {
  return (
    <AuthProvider>
      <main>
        <Outlet />
      </main>
    </AuthProvider>
  );
}
export default RootLayout;