import React, { useCallback, useReducer,useState,useMemo } from 'react'
import reducer from '../reducers/registerReducer';
import { Link } from "react-router-dom";
import '../Style/style.css'
import {
  Flex,
  Box,
  Image,
  Button,
  Text,
  FormControl,
  Heading,
  Input,
  
  useMediaQuery,
  
} from '@chakra-ui/react';
import Logo from "../Assets/logo.png";
import office from "../Assets/office.png";
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
// import reducer from '../reducers/signupReducer'


import { getCountries, getStates } from 'country-state-picker';
import { AutoLocation } from '../Components/AutoLocation';
const initialState = {
  
  bussAdd: '',
  stateVal: '',
  country: '',
  phn: '',
  bussName: '',
  bussType: '',
  bussEmail: '',

  password: ''
}


const Register=()=>{
 const [isNext, setIsNext] = useState(false);
 const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
 const [isSmallerThan740] = useMediaQuery("(max-width: 740px)");
 const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
 const [isSmallerThan530] = useMediaQuery("(max-width: 530px)");
 const [stateOptions, setStateptions] = useState([]);
  const [places, setPlaces] = useState({});
 const navigate = useNavigate();
 const [state, dispatch] = useReducer(reducer, initialState);
 const [isLoading, setIsLoading] = useState(false);
 const options = getCountries().map(({ name, code }) => ({
   value: code,
   label: name,
 }));
 const genderOptions = [
   { value: "M", label: "Male" },
   { value: "F", label: "Female" },
 ];
const getPlaces=(val)=>setPlaces(val)
 const colorStyles = {
   control: (styles, { isFocused }) => {
     return {
       ...styles,
       marginTop: "0.5rem",
       height: "3rem",
       fontSize: "15px",
       lineHeight: "22px",
       background: "rgba(6, 0, 137, 0.05)",

       borderColor: isFocused ? "#F9C567" : "",
       color: "#fff",
     };
   },
   
 };

 // const passReg=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//  const reset = useCallback(() => dispatch({ type: "reset", payload: "" }), []);

 const lowerCase = /[a-z]/;
 const upper = /[A-Z]/;
 const numb = /[0-9]/;
 const {
    
    bussAdd,
    stateVal,
    country,
    phn,
    bussName,
    bussType,
    bussEmail,
   
    password
  } = state;

    return (
      <>
        <Flex
          flexDir="column"
          width="100vw"
          height="58rem"
          background="#15616D"
        >
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

          {/* Body */}
          <Flex
            width="100%"
            height="calc(57.75rem-100px)"
            px="4rem"
            justifyContent="space-between"
          >
            <Flex width="40%" height="100%">
              <Image
                alignSelf="flex-start"
                justifySelf="center"
                src={office}
                alt="homebg"
                objectFit="cover"
                width="500px"
                height="500px"
              />
            </Flex>
            {/* form wrapper */}
            <Flex width="40%" flexDir="column">
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                width="100%"
                height="100%"
              >
                {/* bussName */}
                <Flex maxWidth="100%" flexDir="column">
                  <Text
                    color="#fff"
                    flexShrink="0"
                    fontWeight="500"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "18px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                  >
                    Business name
                  </Text>
                  <Input
                    mt={["0.1rem", "0.3rem", "0.5rem"]}
                    value={bussName}
                    onChange={(e) =>
                      dispatch({
                        type: "business name",
                        payload: e.target.value,
                      })
                    }
                    placeholder="Enter a name"
                    color="#fff"
                    fontWeight="450"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "15px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                    maxWidth="100%"
                    height={
                      isSmallerThan740
                        ? "2.5rem"
                        : isSmallerThan1024
                        ? "2.5rem"
                        : "3rem"
                    }
                    background="rgba(6, 0, 137, 0.05)"
                    _placeholder={{
                      color: "text.100",
                    }}
                  />
                </Flex>
                {/* end bussName */}

                {/* bussType */}
                <Flex maxWidth="100%" flexDir="column" mt="0.5rem">
                  <Text
                    color="#fff"
                    flexShrink="0"
                    fontWeight="500"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "18px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                  >
                    Business type
                  </Text>
                  <Input
                    isReadOnly
                    mt={["0.1rem", "0.3rem", "0.5rem"]}
                    placeholder="Logistics"
                    value="Education"
                    onChange={(e) =>
                      dispatch({ type: "Buss Type", payload: e.target.value })
                    }
                    color="#fff"
                    fontWeight="450"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "15px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                    maxWidth="100%"
                    height={
                      isSmallerThan740
                        ? "2.5rem"
                        : isSmallerThan1024
                        ? "2.5rem"
                        : "3rem"
                    }
                    background="rgba(6, 0, 137, 0.05)"
                    _placeholder={{
                      color: "text.100",
                    }}
                  />
                </Flex>
                {/* end bussType */}

                {/* bussEmail */}
                <Flex maxWidth="100%" flexDir="column" mt="0.5rem">
                  <Text
                    color="#fff"
                    flexShrink="0"
                    fontWeight="500"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "18px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                  >
                    Business Email
                  </Text>
                  <Input
                    mt={["0.1rem", "0.3rem", "0.5rem"]}
                    placeholder="enter email"
                    value={bussEmail}
                    onChange={(e) =>
                      dispatch({ type: "Buss Email", payload: e.target.value })
                    }
                    color="#fff"
                    fontWeight="450"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "15px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                    maxWidth="100%"
                    height={
                      isSmallerThan740
                        ? "2.5rem"
                        : isSmallerThan1024
                        ? "2.5rem"
                        : "3rem"
                    }
                    background="rgba(6, 0, 137, 0.05)"
                    _placeholder={{
                      color: "text.100",
                    }}
                  />
                </Flex>
                {/* end bussEmail */}

                {/* bussAddress */}
                <Flex maxWidth="100%" flexDir="column" mt="0.5rem">
                  <Text
                    color="#fff"
                    flexShrink="0"
                    fontWeight="500"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "18px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                  >
                    Business Address
                  </Text>
                  <AutoLocation
                    lg="3.5rem"
                    padding="0px 12px"
                    bRadius="4px"
                    lineLg="22px"
                    lineMd="18px"
                    lineSm="15px"
                    color="#fff"
                    fntW="450"
                    fntLg="15px"
                    fntMd="13px"
                    fntSm="10px"
                    mtLg="0.5"
                    mtMd="0.3rem"
                    mtSm="0.1rem"
                    pholder="text.100"
                    bg="rgba(6, 0, 137, 0.05)"
                    plHolderText="Enter address"
                    focusBorder="primary.main"
                    getPlaces={getPlaces}
                  />
                  {/* <Input
                    mt={["0.1rem", "0.3rem", "0.5rem"]}
                    placeholder="Enter an Address"
                    value={bussAdd}
                    onChange={(e) =>
                      dispatch({
                        type: "Buss Address",
                        payload: e.target.value,
                      })
                    }
                    color="#fff" 
                    fontWeight="450"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "15px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                    maxWidth="100%"
                    height={
                      isSmallerThan740
                        ? "2.5rem"
                        : isSmallerThan1024
                        ? "2.5rem"
                        : "3rem"
                    }
                    background="rgba(6, 0, 137, 0.05)"
                    _placeholder={{
                      color: "text.100",
                    }}
                  /> */}
                </Flex>
                {/* end bussAddress */}

                {/* state */}
                <Flex maxWidth="100%" flexDir="column" mt="0.5rem">
                  <Text
                    color="#fff"
                    flexShrink="0"
                    fontWeight="500"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "18px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                  >
                    Country
                  </Text>
                  <Select
                    options={options}
                    value={country}
                    onChange={(country) => {
                      dispatch({ type: "country", payload: country });
                      const states = getStates(country.value).map((state) => ({
                        value: state,
                        label: state,
                      }));
                      setStateptions(states);
                    }}
                    styles={colorStyles}
                  />
                </Flex>
                {/* end state */}

                {/* Country */}
                <Flex maxWidth="100%" flexDir="column" mt="0.5rem">
                  <Text
                    color="#fff"
                    flexShrink="0"
                    fontWeight="500"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "18px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                  >
                    State
                  </Text>
                  <Select
                    options={stateOptions}
                    value={stateVal}
                    onChange={(stateVal) =>
                      dispatch({ type: "state val", payload: stateVal })
                    }
                    styles={colorStyles}
                  />
                </Flex>
                {/* end country */}
                {/* password */}
                <Flex
                  maxWidth="100%"
                  height="7.5rem"
                  flexDir="column"
                  mt="0.5rem"
                >
                  <Text
                    color="#fff"
                    flexShrink="0"
                    fontWeight="500"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "18px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                  >
                    Create password
                  </Text>
                  <Input
                    type="password"
                    mt={["0.1rem", "0.3rem", "0.5rem"]}
                    value={password}
                    onChange={(e) =>
                      dispatch({ type: "password", payload: e.target.value })
                    }
                    placeholder="******"
                    color="#fff"
                    fontWeight="450"
                    fontSize={
                      isSmallerThan740
                        ? "10px"
                        : isSmallerThan1024
                        ? "13px"
                        : "15px"
                    }
                    lineHeight={
                      isSmallerThan740
                        ? "15px"
                        : isSmallerThan1024
                        ? "18px"
                        : "22px"
                    }
                    maxWidth="100%"
                    height={
                      isSmallerThan740
                        ? "2.5rem"
                        : isSmallerThan1024
                        ? ""
                        : "3rem"
                    }
                    background="rgba(6, 0, 137, 0.05)"
                    _placeholder={{
                      color: "text.100",
                    }}
                  />
                  <Flex mt="1.4375rem" height="1rem">
                    <Box
                      borderRadius="50%"
                      width="16px"
                      height="16px"
                      background="#F47C25"
                    ></Box>
                    <Text
                      alignSelf="center"
                      ml="9px"
                      color="#fff"
                      flexShrink="0"
                      fontWeight="300"
                      fontSize={
                        isSmallerThan740
                          ? "10px"
                          : isSmallerThan1024
                          ? "13px"
                          : "12px"
                      }
                      lineHeight={
                        isSmallerThan740
                          ? "15px"
                          : isSmallerThan1024
                          ? "18px"
                          : "22px"
                      }
                    >
                      Password should be at least 8 character long
                    </Text>
                  </Flex>
                </Flex>
                {/* end password */}
              </Flex>
              <Button
                mt="1rem"
                color="#fff"
                borderRadius="4px"
                padding={
                  isSmallerThan740 ? "" : isSmallerThan1024 ? "" : "1rem 2rem"
                }
                fontWeight="500"
                fontSize={
                  isSmallerThan740
                    ? "12px"
                    : isSmallerThan1024
                    ? "15px"
                    : "18px"
                }
                lineHeight={
                  isSmallerThan740
                    ? "15px"
                    : isSmallerThan1024
                    ? "18px"
                    : "22px"
                }
                maxWidth="100%"
                height={
                  isSmallerThan740
                    ? "2.5rem"
                    : isSmallerThan1024
                    ? "2.5rem"
                    : "3rem"
                }
                background="#F47C25"
                isLoading={isLoading ? true : false}
                loadingText="Loading"
                spinnerPlacement="start"
                variant={isLoading ? "outline" : "filled"}
                //   onClick={() => {
                //     sendSignUp();
                //     reset();
                //   }}
                _hover={{
                  background: "#F47C25",
                }}
              >
                Sign up
              </Button>
              <Flex
                flexWrap="wrap"
                maxWidth={
                  isSmallerThan740 ? "" : isSmallerThan1024 ? "" : "36.75rem"
                }
                height="2.75rem"
                mt="1rem"
              >
                <Text
                  color="#fff"
                  fontWeight="450"
                  fontSize={
                    isSmallerThan740
                      ? "12px"
                      : isSmallerThan1024
                      ? "15px"
                      : "18px"
                  }
                  lineHeight={
                    isSmallerThan740
                      ? "15px"
                      : isSmallerThan1024
                      ? "18px"
                      : "22px"
                  }
                >
                  By clicking Continue, you acknowledge that you have read and
                  accepted the{" "}
                  <Link to="/service" className="Link1">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="Link1">
                    Privacy Policy
                  </Link>{" "}
                </Text>
              </Flex>
            </Flex>
            {/* end form wrapper */}
          </Flex>
          {/* end Body */}
        </Flex>
      </>
    );
}
export default Register;
