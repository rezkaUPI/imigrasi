// components/ProtectedRoute.js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Modal from "./Modal";

const ProtectedRoute = ({ children, roles }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (roles && !roles.includes(user.role)) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [user, roles, router]);

  const closeModal = () => {
    setShowModal(false);
    router.push("/inputData");
  };

  return (
    <>
      {user && (!roles || roles.includes(user.role)) ? children : null}
      <Modal isOpen={showModal} onClose={closeModal}>
        <h2>You are not allowed to access this page.</h2>
      </Modal>
    </>
  );
};

export default ProtectedRoute;
