import { useState } from 'react'
import { Button, Flex, HStack, Input, Tag, TagCloseButton, TagLabel, VStack, useToast } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import getAlertTemplate from '../helpers/getAlertTemplate';
import useTasks from '../hooks/useTasks';
import Filter from './Filter';

const AddTask = ({ addTask }) => {

  const toast =  useToast();
  const [content, setContent] = useState('');
  const [labelList, setLabelList] = useState([]);
  const [label, setLabel] = useState('');
  const [statusInputTask, setStatusInputTask] = useState(true);
  const { tasks } = useTasks();

  const saveTask = () => {

    const isValidContent = !!tasks.find(ele => ele.description.trim() === content.trim());
    
    if ( isValidContent ) return toast( getAlertTemplate( 'This task is already created' , 'warning'));

    const taskText = content.trim();

    if (!taskText) {

      toast( getAlertTemplate( 'You have to write a task first' , 'warning'),  );
      setStatusInputTask(false);
      return setContent('');
    }


    const task = {
        id: uuidv4(),
        description: taskText,
        state: false,
        finishedAt: null,
        labels: labelList,
    };

    setLabelList([]);
    addTask(task);
    setLabel('');
    setContent('');
  }

  const deleteLabel = ( item ) => {
    const oldList = labelList;
    const newList = oldList.filter(label => label.id !== item );
    return setLabelList(newList);      
  }

  const addLabel = ( ) => {

    if( label.length === 0 ){ 

      return toast( getAlertTemplate( 'Please fill the label input' ) );
    }

    const isValid = (!labelList.find(ele => ele.value === label));

    if(isValid){

      setLabelList([
        ...labelList, 
        {
          id: uuidv4(), 
          value: label
        }
      ]);

      setLabel('');

    }else{

      return toast( getAlertTemplate( 'Label already created' ));
    }
  }

  if (content && !statusInputTask) {
    setStatusInputTask(true);
  }

  return (
    <VStack alignItems='start'>
      <HStack mt='4'>
        <Input
          h='46'
          borderColor={!statusInputTask ? 'red.300' : 'transparent'}
          variant='filled'
          placeholder='Write a task'
          value={content}
          onChange={(e) => setContent(e.target.value)}/>
        <Button
          onClick={saveTask}
          colorScheme='blue'
          px='8'
          pl='10'
          pr='10'
          h='46' 
          type='submit'>
              Add
        </Button>
        <Filter />
      </HStack>
      { content && 
        <VStack mt='10' mb='8px' width="100%" justifyContent="space-between">
          <HStack width="100%">
            <Input
              h='35px'
              variant='filled'
              placeholder='Add labels'
              value={label}
              onChange={(e) => setLabel(e.target.value)}/>
            <Button
              onClick={addLabel}
              colorScheme='purple'
              px='8'
              pl='10'
              pr='10'
              h='35px' 
              >
                  Add label
            </Button>
          </HStack>

          <Flex spacing={4} flex  flexWrap={'wrap'} maxW={'400px'}>
            {labelList.map(( element ) => (
              <Tag                    
                my='5px'
                mx='5px'
                size={'md'}
                key={element.id}
                borderRadius='full'
                variant='solid'
                colorScheme='purple'
              >
                <TagLabel>{ element.value }</TagLabel>
                <TagCloseButton onClick={() => deleteLabel( element.id )}/>
              </Tag>
            ))}
          </Flex>
        </VStack>
      }
    </VStack>
  );
}

export default AddTask;
