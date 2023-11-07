"use client";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";
const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
        <Modal
            title = " Test Modal"
            description="Test description"
            isOpen
            onChange={()=>{}}
        >
            test Children
        </Modal>
    </>
  )
}
export default ModalProvider;
