// // import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import Login from '@/features/auth/components/LoginForm';
// // import Register from '@/features/auth/components/RegisterForm';
// // import Dashboard from '@/features/tasks/components/TaskList'; // Ejemplo de página privada
// // import { useAuth } from '@/features/auth/hooks/useAuth';

// const PrivateRoute = ({ children }: { children: JSX.Element }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// };

// const PublicRoute = ({ children }: { children: JSX.Element }) => {
//   const { user } = useAuth();
//   return !user ? children : <Navigate to="/dashboard" replace />;
// };

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
//         <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

//         {/* Private Routes */}
//         <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

//         {/* Default redirect */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;
