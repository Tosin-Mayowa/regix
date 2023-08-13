import { Flex, Image, Text, Button, useMediaQuery } from "@chakra-ui/react";
import React from 'react';
import Logo from "../Assets/logo.png";
import Homebg from "../Assets/Home.png";
import { useLocation, useNavigate } from "react-router-dom";
const Home=()=>{
 const navigate = useNavigate();
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
  const [isSmallerThan740] = useMediaQuery("(max-width: 740px)");
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
  const [isSmallerThan530] = useMediaQuery("(max-width: 530px)");
   const {state}=useLocation();
  
  console.log(state)
  
  return (
    <>
      <Flex flexDir="column" width="100vw" height="100vh" background="#15616D">
        {/* header */}
        <Flex
          width="100%"
          height="100px"
          px="3rem"
          justifyContent="space-between"
        >
          <Flex
            width="30%"
            height="100%"
            px={["3px", "5px", "20px"]}
            justifyContent="space-between"
          >
            <Image
              src={Logo}
              alt="logo"
              objectFit="cover"
              width={["50px", "70px", "100px"]}
              height={["50px", "70px", "100px"]}
            />
            {state === "Developer" ? (
              <Button
                variant="link"
                alignSelf="center"
                fontWeight="700"
                fontSize={
                  isSmallerThan900
                    ? "12px"
                    : isSmallerThan1024
                    ? "15px"
                    : "18px"
                }
                lineHeight={
                  isSmallerThan900
                    ? "15px"
                    : isSmallerThan1024
                    ? "18px"
                    : "22px"
                }
                color="#fff"
                onClick={() => navigate("/developer")}
                _hover={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Dashboard
              </Button>
            ) : (
              ""
            )}
          </Flex>

          <Button
            alignSelf="center"
            fontWeight="700"
            fontSize={
              isSmallerThan900 ? "12px" : isSmallerThan1024 ? "15px" : "18px"
            }
            lineHeight={
              isSmallerThan900 ? "15px" : isSmallerThan1024 ? "18px" : "22px"
            }
            color="primary.main"
            onClick={() => navigate("/login")}
            _hover={{
              textDecoration: "none",
            }}
          >
            Developer
          </Button>
        </Flex>
        {/* end header */}
        <Flex
          flexDir={["column", "row"]}
          justifyContent="space-between"
          height="calc(100vh-100px)"
        >
          <Flex
            alignSelf="center"
            flexDir="column"
            width="100%"
            height={["700px","550px","550px"]}
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
            <Flex
              background="#F47C25"
              width={["80px", "130px", "150px"]}
              height="5px"
            ></Flex>
            <Text
              fontSize={["12px", "15px", "20px"]}
              lineHeight={["15px", "18px", "22px"]}
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
              padding={["0.5rem 1rem", "1rem 1.5rem", "1rem 2rem"]}
              fontWeight="500"
              fontSize={["12px", "15px", "18px"]}
              lineHeight={["15px", "18px", "22px"]}
              width="50%"
              height={["2.5rem", "2.5rem", "3rem"]}
              background="#F47C25"
              _hover={{
                background: "#F47C25",
              }}
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Flex>
          <Flex display={["none","flex","flex"]} width="50%" height="100%">
            <Image
              alignSelf="flex-start"
              justifySelf="center"
              src={Homebg}
              alt="homebg"
              objectFit="cover"
              width={["500px","800px"]}
              height={["400px","700px"]}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Home;