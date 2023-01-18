import { HStack, Box, VStack,  Flex,  Text, StackDivider, Tag, TagLabel} from '@chakra-ui/react'
import {
  DeleteTaskModal,
  DeleteAllTasksModal,
  UpdateTaskModal,
}  from '../components';
import { getDayMonthYear, sliceText } from '../helpers'
import useTasks from '../hooks/useTasks';

const TaskList = () => {

  const {
    setActive,
    filter,
    tasks,
    deleteTask,
    deleteAllTasks,
    checkTask,
    updateTask,
  } = useTasks();

  let tasksShowed = '';

  if( filter.length === 0 ){
    tasksShowed = tasks;
    setActive(null);
  }else {
    tasksShowed = filter;
  }

  if ( !tasks.length ) {
    return (
      <>
        <Box>
          <Text
            p='5'
            fontSize={20}
            as='p'
            fontWeight='semibold'
            bgGradient='linear(to-r, blue.500, blue.500)'
            bgClip='text'
          >
            Your task list is empty
          </Text>
        </Box>
      </>
    );
  }

    return (
    <VStack
      m='10'
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='5'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
      alignItems='stretch'
      >
      
      { tasksShowed.map( ( task ) => (
        <VStack key={task.id}  >
          <HStack
            w='100%'
            key={task.id}
            opacity={task.state === true ? '0.2' : '1'}
            as={task.state === true ? 's' : 'span'}
            >
            <Text
                w='100%'
                p='8px'
                borderRadius='lg'
                cursor='pointer'
                onClick={ () => checkTask(task.id) }
                >
                { sliceText(task.description) } 
            </Text>
            {   task.state &&         
              <Text
                  w='100%' 
                  p='8px'
                  borderRadius='lg'
                  cursor='pointer'
                  onClick={ () => checkTask(task.id) }
                  >
                  {  getDayMonthYear( task.finishedAt ) } 
              </Text>
            }
            <DeleteTaskModal task={ task } deleteTask={ deleteTask }/>
            <UpdateTaskModal task={ task } updateTask={ updateTask } />
          </HStack>
          { (task.labels.length > 0) && 
            <Flex spacing={4} flex  flexWrap={'wrap'}>
              {task.labels.map(( element ) => (
                <Tag                    
                  my='5px'
                  mx='5px'
                  size={'md'}
                  key={element.id}
                  borderRadius='full'
                  variant='solid'
                  colorScheme={ task.state ? 'gray' : 'purple'}
                >
                  <TagLabel>{ element.value }</TagLabel>
                </Tag>
              ))}
            </Flex>
          }
        </VStack>
      ))}    

      <Flex>
        <DeleteAllTasksModal deleteAllTasks={deleteAllTasks} />
      </Flex>
    </VStack>
  );
  }

export default TaskList;
