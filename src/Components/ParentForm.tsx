
import React, { useState, useCallback, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import reducer from '../reducers/parentReducer'
import Select from "react-select";
import {
  Flex,
  Box,
  Button,
  Image,
  Text,
  Input,
  useMediaQuery,
  Textarea,
} from "@chakra-ui/react";
import { getCountries, getStates } from "country-state-picker";
type Options={value:string,label:string}
export default ()=>{
    const [isLoading, setIsLoading] = useState(false);
const [state, dispatch] = useReducer(reducer, {
  gender: "",
  child_name: "",
  parent_address: "",
  parent_phone_num: "",
  class_value: "",
  parent_email: "",
  child_age: "",
  country: "",
  stateVal: "",
  password: "",
  health_status:''
});
const [isNext,setIsNext]=useState(true);
const [isNext2,setIsNext2]=useState(false);
const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
const [isSmallerThan740] = useMediaQuery("(max-width: 740px)");
const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
const [isSmallerThan530] = useMediaQuery("(max-width: 530px)");
 const options = getCountries().map(({ name, code }) => ({
   value: code,
   label: name,
 }));
 const genderOptions = [
   { value: "M", label: "Male" },
   { value: "F", label: "Female" },
 ];

 const classOptions = [
   { value: "M", label: "KG 1" },
   { value: "F", label: "KG 2" },
   { value: "F", label: "NUR 1" },
   { value: "F", label: "NUR 2" },
   { value: "F", label: "Basic 1" },
   { value: "F", label: "Basic 2" },
   { value: "F", label: "Basic 3" },
   { value: "F", label: "Basic 4" },
   { value: "F", label: "Basic 5" },
   { value: "F", label: "Jss 1" },
   { value: "F", label: "Jss 2" },
   { value: "F", label: "Jss 3" },
   { value: "F", label: "SS 1" },
   { value: "F", label: "SS 2" },
   { value: "F", label: "SS 3" },
 ];
const [stateOptions, setStateptions] = useState([]);
 const colorStyles = {
   control: (styles: any) => {
     return {
       ...styles,
       
       fontSize: "15px",
       lineHeight: "22px",
       height: "2.6rem",
       background: "#FFFFFF",
       borderRadius: "4px",
       marginTop:"0.5rem",
     };
   },
 };

 const { gender,
  child_name,
  parent_name,
  parent_address,
  parent_phone_num,
  class_value,
  password,
  health_status,
  parent_email,
   country,
  stateVal,
  child_age,}=state;
    return (
      <>
        <Flex flexDir="column" width="100%">
          <Text
            alignSelf="center"
            color="#fff"
            flexShrink="0"
            fontWeight="700"
            fontSize={
              isSmallerThan740 ? "15px" : isSmallerThan1024 ? "18px" : "24px"
            }
            lineHeight={
              isSmallerThan740 ? "15px" : isSmallerThan1024 ? "18px" : "22px"
            }
          >
            Register Your Child
          </Text>
          {isNext ? (
            <>
              <Flex width="100%" alignSelf="center" mt="40px" flexDir="column">
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
                  Child's Name
                </Text>
                <Input
                  placeholder="Enter name"
                  value={child_name}
                  onChange={(child_name) =>
                    dispatch({ type: "child name", payload: child_name })
                  }
                  mt="0.5rem"
                  width="100%"
                  height="2.6rem"
                  background="#fff"
                  border="1px solid #ABA7A7"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#1F1F1F"
                  focusBorderColor="primary.main"
                />
              </Flex>
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
                  Age
                </Text>
                <Input
                  mt="0.5rem"
                  placeholder="Enter Your child's Age"
                  value={child_age}
                  onChange={(child_age) =>
                    dispatch({ type: "Age", payload: child_age })
                  }
                  width="100%"
                  height="2.6rem"
                  background="#fff"
                  border="1px solid #ABA7A7"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#1F1F1F"
                  focusBorderColor="primary.main"
                />
              </Flex>
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
                  Gender
                </Text>
                <Select
                  value={gender}
                  styles={colorStyles}
                  onChange={(gender) =>
                    dispatch({ type: "gender", payload: gender })
                  }
                  options={genderOptions}
                />
              </Flex>
            </>
          ) : isNext2 ? (
            <>
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
                  Class
                </Text>
                <Select
                  value={class_value}
                  options={classOptions}
                  onChange={(class_value) =>
                    dispatch({ type: "class value", payload: class_value })
                  }
                  styles={colorStyles}
                />
              </Flex>
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
                  Parent's Name
                </Text>
                <Input
                  mt="0.5rem"
                  background="#fff"
                  placeholder="Enter Parent's Name"
                  value={parent_name}
                  onChange={(parent_name) =>
                    dispatch({ type: "parent name", payload: parent_name })
                  }
                  width="100%"
                  height="2.6rem"
                  border="1px solid #ABA7A7"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#1F1F1F"
                  focusBorderColor="primary.main"
                />
              </Flex>
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
                  Parent's Telephone
                </Text>
                <Input
                  mt="0.5rem"
                  background="#fff"
                  placeholder="Enter Your Phone number"
                  value={parent_phone_num}
                  onChange={(parent_phone_num) =>
                    dispatch({
                      type: "parent number",
                      payload: parent_phone_num,
                    })
                  }
                  width="100%"
                  height="2.6rem"
                  border="1px solid #ABA7A7"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#1F1F1F"
                  focusBorderColor="primary.main"
                />
              </Flex>
              
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
                  Parent's Email
                </Text>
                <Input
                  mt="0.5rem"
                  background="#fff"
                  placeholder="Enter email"
                  value={parent_email}
                  onChange={(parent_email) =>
                    dispatch({ type: "parent email", payload: parent_email })
                  }
                  width="100%"
                  height="2.6rem"
                  border="1px solid #ABA7A7"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#1F1F1F"
                  focusBorderColor="primary.main"
                />
              </Flex>
            </>
          ) : (
            <>
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
                  Address
                </Text>
                <Input
                  mt="0.5rem"
                  background="#fff"
                  placeholder="Enter Your Address"
                  value={parent_address}
                  onChange={(parent_address) =>
                    dispatch({
                      type: "parent address",
                      payload: parent_address,
                    })
                  }
                  width="100%"
                  height="2.6rem"
                  border="1px solid #ABA7A7"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#1F1F1F"
                  focusBorderColor="primary.main"
                />
              </Flex>
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
                  Password
                </Text>
                <Input
                  mt="0.5rem"
                  background="#fff"
                  placeholder="Enter Your Address"
                  value={password}
                  onChange={(password) =>
                    dispatch({ type: "password", payload: password })
                  }
                  width="100%"
                  height="2.6rem"
                  border="1px solid #ABA7A7"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#1F1F1F"
                  focusBorderColor="primary.main"
                />
              </Flex>
              <Flex width="100%" alignSelf="center" mt="20px" flexDir="column">
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
                  Child's Health Status
                </Text>
                <Textarea
                  background="#fff"
                  value={health_status}
                  onChange={(health_status) =>
                    dispatch({ type: "child health", payload: health_status })
                  }
                  placeholder="Enter Information About the Child's Health"
                  size="sm"
                />
              </Flex>
            </>
          )}
          {isNext ? (
            <Button
              mt={["", "", "2rem"]}
              color="#fff"
              borderRadius="4px"
              padding={
                isSmallerThan900 ? "" : isSmallerThan1024 ? "" : "1rem 2rem"
              }
              fontWeight="500"
              fontSize={
                isSmallerThan900 ? "12px" : isSmallerThan1024 ? "15px" : "18px"
              }
              lineHeight={
                isSmallerThan900 ? "15px" : isSmallerThan1024 ? "18px" : "22px"
              }
              maxWidth="100%"
              height={
                isSmallerThan900
                  ? "2rem"
                  : isSmallerThan1024
                  ? "2rem"
                  : "2.6rem"
              }
              background="#F47C25"
              onClick={() => {
                setIsNext(false);
                setIsNext2(true)
              }}
              _hover={{
                background: "#F47C25",
              }}
            >
              Next
            </Button>
          ) : isNext2 ? (
            <Button
              mt={["", "", "2rem"]}
              color="#fff"
              borderRadius="4px"
              padding={
                isSmallerThan900 ? "" : isSmallerThan1024 ? "" : "1rem 2rem"
              }
              fontWeight="500"
              fontSize={
                isSmallerThan900 ? "12px" : isSmallerThan1024 ? "15px" : "18px"
              }
              lineHeight={
                isSmallerThan900 ? "15px" : isSmallerThan1024 ? "18px" : "22px"
              }
              maxWidth="100%"
              height={
                isSmallerThan900
                  ? "2rem"
                  : isSmallerThan1024
                  ? "2rem"
                  : "2.6rem"
              }
              background="#F47C25"
              onClick={() =>{
                 setIsNext(false);
                setIsNext2(false)
              }}
              _hover={{
                background: "#F47C25",
              }}
            >
              Next
            </Button>
          ) : (
            <Button
              mt={["", "", "2rem"]}
              color="#fff"
              borderRadius="4px"
              padding={
                isSmallerThan900 ? "" : isSmallerThan1024 ? "" : "1rem 2rem"
              }
              fontWeight="500"
              fontSize={
                isSmallerThan900 ? "12px" : isSmallerThan1024 ? "15px" : "18px"
              }
              lineHeight={
                isSmallerThan900 ? "15px" : isSmallerThan1024 ? "18px" : "22px"
              }
              maxWidth="100%"
              height={
                isSmallerThan900
                  ? "2.5rem"
                  : isSmallerThan1024
                  ? "2.5rem"
                  : "3rem"
              }
              isLoading={isLoading ? true : false}
              loadingText="Loading"
              spinnerPlacement="start"
              variant={isLoading ? "outline" : "filled"}
              //   onClick={() => {
              //     sendSignUp();
              //     reset();
              //   }}
              background="#F47C25"
              _hover={{
                background: "#F47C25",
              }}
            >
              Sign up
            </Button>
          )}
        </Flex>
      </>
    );
}