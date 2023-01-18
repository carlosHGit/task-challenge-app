import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    useDisclosure,
    IconButton,
    Heading,
    Checkbox,
    HStack
  } from '@chakra-ui/react'
  import { useState, useRef } from 'react';
  import { FiEdit } from 'react-icons/fi'

const UpdateTaskModal = ({ task, updateTask }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [body, setBody] = useState('');
    const initialRef = useRef();
    const [isChecked, setIsChecked] = useState(task.state);

    return (
      <>
        <IconButton
            icon={<FiEdit />}
            isRound='true'
            onClick={onOpen}
        />
        <Modal
          isCentered
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent w='90%'>
            <ModalHeader>
              <HStack flex alignItems={'center'} justifyContent={'space-evenly'}>
                <Heading>Update Task</Heading>
                <Checkbox
                  colorScheme='teal'
                  isChecked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}>
                    Completed
                </Checkbox>
              </HStack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input
                  ref={initialRef}
                  placeholder='Write a task'
                  defaultValue={task.description}
                  onChange={(e) => setBody(e.target.value)}
                  onFocus={(e) => setBody(e.target.value)} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>Cancel</Button>
              <Button
                colorScheme='blue'
                onClick={() => updateTask(task.id, isChecked , body, onClose)}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default UpdateTaskModal;
