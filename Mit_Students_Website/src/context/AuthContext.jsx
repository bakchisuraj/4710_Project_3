// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/firebase"; // Adjust the path if needed
import { onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(); // Export the context

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Logout function to handle user sign-out
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to access AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
