import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './src/store/authStore';
import Navbar from './src/components/layout/Navbar';
import Login from './src/pages/auth/Login';
import Register from './src/pages/auth/Register';
import BrandDashboard from './src/pages/brand/BrandDashboard';
import InfluencerProfile from './src/pages/influencer/InfluencerProfile';
import InfluencerProfileWizard from './src/pages/influencer/InfluencerProfileWizard';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, user } = useAuthStore();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

// Public Route Component (redirect if authenticated)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  
  if (isAuthenticated) {
    // Redirect based on user role
    if (user?.role === 'brand') {
      return <Navigate to="/brand/dashboard" replace />;
    } else {
      return <Navigate to="/influencer/profile" replace />;
    }
  }
  
  return children;
};

function App() {
  const { initializeAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/login" 
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } 
          />
          <Route 
            path="/register" 
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } 
          />
          
          {/* Protected Brand Routes */}
          <Route 
            path="/brand/dashboard" 
            element={
              <ProtectedRoute requiredRole="brand">
                <BrandDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Protected Influencer Routes */}
          <Route 
            path="/influencer/profile" 
            element={
              <ProtectedRoute requiredRole="influencer">
                <InfluencerProfile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/influencer/profile-wizard" 
            element={
              <ProtectedRoute requiredRole="influencer">
                <InfluencerProfileWizard />
              </ProtectedRoute>
            } 
          />
          
          {/* Default Routes */}
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                user?.role === 'brand' ? (
                  <Navigate to="/brand/dashboard" replace />
                ) : (
                  <Navigate to="/influencer/profile" replace />
                )
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;