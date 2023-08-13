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
import React from "react";
import Logo from "../Assets/logo.png";
import Homebg from "../Assets/Home.png";
import { useNavigate,useParams } from "react-router-dom";
import UserRegisterComp from "../Components/UserRegisterComp";
export default () => {
  const navigate = useNavigate();
  const {companyName}=useParams()
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
  const [isSmallerThan740] = useMediaQuery("(max-width: 740px)");
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
  const [isSmallerThan530] = useMediaQuery("(max-width: 530px)");

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
        <Image
          src={Logo}
          alt="logo"
          objectFit="cover"
          width="100px"
          height="100px"
        />

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
          Sign in
        </Button>
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
         justifyContent="center"
        >
          {/* <Text
                fontSize="40px"
                lineHeight="22px"
                fontWeight="700"
                color="#F47C25"
              >
                Regix
              </Text> */}
          <Text
            fontSize="50px"
            lineHeight="22px"
            fontWeight="800px"
            letterSpacing="1px"
            color="white"
            
          >
            Welcome To
          </Text>
          <Text
          mt={["","","2rem"]}
            fontSize="30px"
            lineHeight="22px"
            fontWeight="500px"
            letterSpacing="1px"
            color="white"
          >
           {companyName}
          </Text>

        
        </Flex>
        <Flex width="50%" height="100%" flexDir="column">
          <Text
          mt={["","","20px"]}
            fontSize="20px"
            lineHeight="22px"
            fontWeight="500px"
            letterSpacing="1px"
            color="white"
            alignSelf="center"
          >
           Register
          </Text>
<UserRegisterComp/>
        </Flex>
      </Flex>
    </Flex>
  </>
);
};
