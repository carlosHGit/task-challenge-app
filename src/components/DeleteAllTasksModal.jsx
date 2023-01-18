import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import useTasks from '../hooks/useTasks'

  const DeleteAllTasksModal = () => {

    const { deleteAllTasks } = useTasks();

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button
          colorScheme='gray'
          px='8'
          h='45'
          color='gray.500'
          mt='8'
          onClick={onOpen}
          >
          Delete all task's
        </Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>
              Do you really want to delete all the task's?
          </ModalHeader>
          <ModalFooter>
          <Button mr={3} onClick={onClose}>No</Button>
          <Button colorScheme='blue' onClick={() => deleteAllTasks()}>
              Yes
          </Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
      </>
    )
  }

export default DeleteAllTasksModal;
