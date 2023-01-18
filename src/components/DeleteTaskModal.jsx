import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi'  

const DeleteTask = ( { task, deleteTask } ) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
          icon={<FiTrash2 />}
          isRound='true'
          onClick={onOpen}
      />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>
              Do you really want to delete this task?
          </ModalHeader>
          <ModalBody>
              <Text>{task.body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>No</Button>
            <Button colorScheme='blue' onClick={() => deleteTask(task.id, onClose)}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteTask;
