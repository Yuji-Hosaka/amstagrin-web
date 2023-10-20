import { useState } from "react";
import Modal from "../../components/Modal";
import PostForm from "./PostForm";

function Button({ children, onClick }) {
  return (
    <div
      className="bg-gray-200 flex-1 rounded-full text-gray-500 px-3 py-1.5 cursor-pointer flex items-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button></Button>

      <Modal
        title="Create Post"
        open={isOpen}
        maxWidth={32}
        onClose={() => setIsOpen(false)}
      >
        <PostForm />
      </Modal>
    </>
  );
}
