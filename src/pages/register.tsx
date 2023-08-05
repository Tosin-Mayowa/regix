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
import correct from "../Assets/signUp/correct.png";
import error from "../Assets/signUp/error.png";
import empty from "../Assets/signUp/default.png";
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
    
    fullName,
    stateVal,
    country,
   email,
   company_name,
    company_phone_num,
    company_email,
company_address,
    password
  } = state;

    return (
      <>
        <Flex
          flexDir="column"
          width="100vw"
          height="78rem"
          background="#15616D"
        >
          {/* header */}
          <Flex
            width="100%"
            height="100px"
            px={["6.5rem", "5.5rem", "4.5rem"]}
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
              onClick={() => navigate("/")}
              _hover={{
                textDecoration: "none",
              }}
            >
              {" <- Back"}
            </Button>
          </Flex>

          {/* Body */}
          <Flex
            width="100%"
            height="calc(85.75rem-100px)"
            px="4rem"
            alignItems={
              isSmallerThan740 ? "center" : isSmallerThan1024 ? "center" : ""
            }
            justifyContent={
              isSmallerThan740
                ? "center"
                : isSmallerThan1024
                ? "center"
                : "space-between"
            }
          >
            <Flex
              width="50%"
              height="100%"
              display={
                isSmallerThan740 ? "none" : isSmallerThan1024 ? "none" : "flex"
              }
            >
              <Image
                alignSelf="flex-start"
                justifySelf="center"
                src={office}
                alt="homebg"
                objectFit="cover"
                width={
                  isSmallerThan740
                    ? "200px"
                    : isSmallerThan1024
                    ? "400px"
                    : "500px"
                }
                height="500px"
              />
            </Flex>
            {/* form wrapper */}
            <Flex width="40%" height="100%" flexDir="column">
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                width="100%"
                height="60rem"
              >
                {/* fullName */}
                <Flex width="100%" flexDir="column">
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
                    Full Name
                  </Text>
                  <Input
                    mt={["0.5rem", "0.7rem", "0.7rem"]}
                    value={fullName}
                    onChange={(e) =>
                      dispatch({
                        type: "full name",
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
                    width="100%"
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

                {/* personal email */}
                <Flex width="100%" flexDir="column" mt="0.5rem">
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
                    Email
                  </Text>
                  <Input
                    mt={["0.5rem", "0.7rem", "0.7rem"]}
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      dispatch({ type: "email", payload: e.target.value })
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
                    width="100%"
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
                {/* end email */}

                {/* company name */}
                <Flex width="100%" flexDir="column" mt="0.5rem">
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
                    Company Name
                  </Text>
                  <Input
                    mt={["0.5rem", "0.7rem", "0.7rem"]}
                    placeholder="enter email"
                    value={company_name}
                    onChange={(e) =>
                      dispatch({ type: "comp name", payload: e.target.value })
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
                    width="100%"
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
                {/* end company name */}

                {/* company num */}
                <Flex width="100%" flexDir="column" mt="0.5rem">
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
                    Company PhoneNumber
                  </Text>

                  <Input
                    mt={["0.5rem", "0.7rem", "0.7rem"]}
                    placeholder="Enter an Address"
                    value={company_phone_num}
                    onChange={(e) =>
                      dispatch({
                        type: "comp number",
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
                    width="100%"
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
                {/* end  */}

                {/* comp email */}

                <Flex width="100%" flexDir="column" mt="0.5rem">
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
                    Company email
                  </Text>

                  <Input
                    mt={["0.5rem", "0.7rem", "0.7rem"]}
                    placeholder="Enter an Address"
                    value={company_email}
                    onChange={(e) =>
                      dispatch({
                        type: "comp email",
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
                    width="100%"
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

                {/* end email */}

                {/* company address */}
                <Flex width="100%" flexDir="column" mt="0.5rem">
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
                    Company Address
                  </Text>

                  <Input
                    mt={["0.5rem", "0.7rem", "0.7rem"]}
                    placeholder="Enter an Address"
                    value={company_address}
                    onChange={(e) =>
                      dispatch({
                        type: "comp address",
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
                    width="100%"
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
                {/* end company addr */}
                {/* country */}
                <Flex width="100%" flexDir="column" mt="0.5rem">
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
                  height="8.5rem"
                  flexDir="column"
                  mt="0.5rem"
                >
                  <Flex flexDir="column" width="100%" height="4.875rem">
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
                      mt={["0.5rem", "0.7rem", "0.7rem"]}
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
                          ? "2.5rem"
                          : "3rem"
                      }
                      background="rgba(6, 0, 137, 0.05)"
                      _placeholder={{
                        color: "text.100",
                      }}
                    />
                  </Flex>
                  <Flex
                    mt={["0.3rem", "0.6rem", "1rem"]}
                    width={
                      !password
                        ? "16.1875rem"
                        : password.length >= 8
                        ? "6rem"
                        : "15rem"
                    }
                    height="1.375rem"
                    justifyContent="space-between"
                  >
                    <Image
                      src={
                        !password
                          ? empty
                          : password.length >= 8
                          ? correct
                          : error
                      }
                      alt="Sendrail"
                      width="16px"
                      height="16px"
                      objectFit="cover"
                      alignSelf="center"
                    />
                    <Text
                      color="#fff"
                      flexShrink="0"
                      fontWeight="300"
                      fontSize={
                        isSmallerThan900
                          ? "10px"
                          : isSmallerThan1024
                          ? "13px"
                          : "12px"
                      }
                      lineHeight={
                        isSmallerThan900
                          ? "15px"
                          : isSmallerThan1024
                          ? "18px"
                          : "22px"
                      }
                    >
                      {!password
                        ? "Password should be at least 8 character long"
                        : password.length >= 8
                        ? "Valid Password"
                        : "Invalid password,at least 8 character long"}
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
                mt={["0.3rem", "0.6rem", "1rem"]}
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
