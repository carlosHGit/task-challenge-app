import { Heading, IconButton, VStack, useColorMode, Text, HStack, Badge } from "@chakra-ui/react";

import AddTask from './components/Task';
import { FaSun, FaMoon} from 'react-icons/fa'
import useTasks from "./hooks/useTasks";
import TaskList  from "./layouts/TaskList";

const TaskListApp = () => {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const activeInfo = ['Description', 'Label', 'State'];
  const {
    active,
    addTask,
    all, 
    completed,
    missing
  } = useTasks();

   return(
    <VStack p={4} minH='100vh' pb={28}>
      <IconButton 
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='md'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />

      <Heading
        p='5'
        fontWeight='extrabold'
        size='xl'
        bgGradient='linear(to-l, teal.300, blue.500)'
        bgClip='text'
      >
        Tasks List
      </Heading>
      <HStack alignItems={'start'} spacing='10px'>
        <Badge ml='1' fontSize='0.8em' colorScheme='blue'>
          <Text>Total: { all }</Text> 
        </Badge>
        <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
          <Text>Completed: { completed }</Text> 
        </Badge>
        <Badge ml='1' fontSize='0.8em' colorScheme='teal'>
          <Text>To Complete: { missing }</Text>
        </Badge>
      </HStack>
      <AddTask addTask={addTask} />
      <TaskList />
      { active !== null  &&  
        <HStack alignItems={'start'} spacing='10px'>
            <Badge ml='1' fontSize='0.8em' colorScheme='green'>
            <Text>Active Filter BY { activeInfo[active] }</Text> 
          </Badge>
        </HStack>
      }
    </VStack>
  );
}

export default TaskListApp;
