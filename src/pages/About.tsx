import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card/Card";
import { client } from "../lib/sanity";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

function About() {
  const [modalOpen, setModalOpen] = useState(false);
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["leadership"],
  //   queryFn: () => client.fetch(`*[_type=='leadership']`),
  // });

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Card onClick={toggleModal} />
      <Modal open={modalOpen} onClose={toggleModal}>
        <Card />
        THIS IS A MODAL!
      </Modal>
    </div>
  );
}

export default About;
