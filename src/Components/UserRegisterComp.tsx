import {
  Flex,
  Image,
  Text,
  Button,
  useMediaQuery,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from 'react'
import ParentForm from "./ParentForm";
export default ()=>{

    return (
      <>
        <Tabs mt="30px" width="sm" alignSelf="center" border="2px solid white">
          <TabList>
            <Tab
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#fff"
              _selected={{
                
                borderBottom: " 4px solid #F47C25",
              }}
            >
              Parent
            </Tab>
            <Tab
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#fff"
              _selected={{ borderBottom: " 4px solid #F47C25" }}
            >
              Teacher
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel><ParentForm/></TabPanel>
            <TabPanel>two</TabPanel>
          </TabPanels>
        </Tabs>
      </>
    );
}