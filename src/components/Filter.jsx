import { Button, Checkbox, HStack, Heading, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import useTasks from '../hooks/useTasks'


function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { filterTasks, setActive } = useTasks();
  const [contentFilter, setContentFilter] = useState('');
  const [labelFilter, setLabelFilter] = useState('');
  const [stateFilter, setStateFilter] = useState(false);
  const [index, setIndex] = useState();
  const btnRef = React.useRef();


  const onSave = () => {
    if(contentFilter.trim() === '' &&  index === 0){
      setActive(null);
      filterTasks('reset');
      return onClose();
    }
    if(labelFilter.trim() === '' &&  index === 1) { 
      setActive(null);
      filterTasks('reset');
      return onClose();
    }

    const filter =  [contentFilter, labelFilter, stateFilter ]   ; 
    filterTasks( index, filter[index]);
    
    setIndex(0);
    setContentFilter('');
    setLabelFilter('');
    setStateFilter(false);
    onClose();

  }

  return (
    <>
      <Button
        ref={btnRef} 
        colorScheme='teal' 
        onClick={onOpen}
        px='8'
        pl='10'
        pr='10'
        h='46'>
          Filter
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
             <Heading>Filters</Heading>
             <Text>Filter all the tasks by:</Text>
          </DrawerHeader>
          <DrawerBody>
          <Tabs onChange={(index) => setIndex(index)} variant='soft-rounded' colorScheme='blue'>
            <TabList>
              <Tab>Content</Tab>
              <Tab>Label</Tab >
              <Tab>State</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Input
                  variant='filled'
                  h='46'
                  placeholder='Filter by task name'
                  my={'5px'}
                  value={contentFilter} 
                  onChange={(e) => setContentFilter(e.target.value)} />
              </TabPanel>
              <TabPanel>
                <Input
                  variant='filled'
                  h='46'
                  placeholder='Filter by task label'
                  my={'5px'} 
                  value={labelFilter} 
                  onChange={(e) => setLabelFilter(e.target.value)} />
              </TabPanel>
              <TabPanel>
                <Checkbox 
                  isChecked={stateFilter}
                  onChange={() => setStateFilter(!stateFilter)}>
                  Completed
                </Checkbox>
              </TabPanel>
            </TabPanels>
          </Tabs>
            <HStack mt={'100px'} justifyContent={'center'}>
              <Button  variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={onSave} >Save</Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Filter;