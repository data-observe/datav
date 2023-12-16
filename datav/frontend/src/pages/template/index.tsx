import {
  Box,
  Center,
  HStack,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useStore } from '@nanostores/react'
import React from 'react'
import { locale } from 'src/i18n/i18n'

const TemplateStore = () => {
  const lang = useStore(locale)
  return (
    <Box>
      <VStack spacing='2' alignItems='center' p='4'>
        <Center>
          <Image src='/public/rocket.svg' alt='rocket' width={150} />
        </Center>
        <Center>
          <Text className='color-text' fontWeight={550} fontSize={30}>
            Template Store
          </Text>
        </Center>
        <Center>
          <Text fontWeight={500} fontSize={18} maxW={550}>
            Choose one template to quickly create a panel, a dashboard or even a
            whole application.
          </Text>
        </Center>
      </VStack>
      <Center>
        <Tabs position='relative' variant='unstyled' size='lg'>
          <TabList>
            <Tab>Application</Tab>
            <Tab>Dashboard</Tab>
            <Tab>Panel</Tab>
          </TabList>
          <TabIndicator
            mt='-1.5px'
            height='3px'
            bg='brand.500'
            borderRadius='1px'
          />
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </Box>
  )
}

export default TemplateStore
