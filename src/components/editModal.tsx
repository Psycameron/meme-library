import { FC } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import EditForm from "./editForm";

interface IEditModalProps {
  id: string;
  updateMemes: () => Promise<void>;
}

const EditModal: FC<IEditModalProps> = ({ id, updateMemes }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Edit
      </Button>

      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Meme properties
              </ModalHeader>
              <ModalBody>
                <EditForm id={id} onClose={onClose} updateMemes={updateMemes} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
