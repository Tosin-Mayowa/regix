import { Flex, Image,Text,Button } from '@chakra-ui/react'
import React from 'react';
import Logo from "../Assets/logo.png";
import Homebg from "../Assets/Home.png";
import { useNavigate } from "react-router-dom";
const Home=()=>{
 const navigate = useNavigate();
    return (
      <>
        <Flex flexDir="column" width="100vw" height="100%" background="#15616D">
          {/* header */}
          <Flex width="100%" height="100px" px="3rem">
            <Image
              src={Logo}
              alt="logo"
              objectFit="cover"
              width="100px"
              height="100px"
            />
          </Flex>
          {/* end header */}
          <Flex justifyContent="space-between" height="calc(100vh-100px)">
            <Flex
              alignSelf="center"
              flexDir="column"
              width="59%"
              height="550px"
              flexWrap="wrap"
              padding="2rem"
              justifyContent="space-between"
            >
              {/* <Text
                fontSize="40px"
                lineHeight="22px"
                fontWeight="700"
                color="#F47C25"
              >
                Regix
              </Text> */}
              <Flex background="#F47C25" width="150px" height="5px"></Flex>
              <Text
                fontSize="20px"
                lineHeight="22px"
                fontWeight="500px"
                letterSpacing="1px"
                color="white"
              >
                Regix is an educational management and administration system for
                enhancing school performance.It holds many crucial functions to
                ensure school management run smoothly. The teachers, staff and
                other external parties can collaborate easily through a
                centralized platform.It also bridges communication between the
                school, students and parents. Some of the essential features on
                Regix are: Attendance record,Effortless fee payment,effective
                communication,parent access,students and school vehicle
                tracker,Inventory management, and many more
              </Text>
              <Flex background="#F47C25" width="150px" height="5px"></Flex>
              <Button
                color="#fff"
                borderRadius="4px"
                padding="1rem 2rem"
                fontWeight="500"
                fontSize="18px"
                lineHeight="22px"
                width="50%"
                height="3rem"
                background="#F47C25"
                _hover={{
                  background: "#F47C25",
                }}
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </Flex>
            <Flex width="50%" height="100%">
              <Image
                alignSelf="flex-start"
                justifySelf="center"
                src={Homebg}
                alt="homebg"
                objectFit="cover"
                width="800px"
                height="700px"
              />
            </Flex>
          </Flex>
        </Flex>
      </>
    );
}

export default Home;