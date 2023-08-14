

import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PinInputField,
  PinInput,
  HStack,
  useMediaQuery,
  Flex,
  Box,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";


export default ()=>{
const navigate = useNavigate();
const location = useLocation();
const [value, setValue] = useState("");
const [isLoading, setIsLoading] = useState("");
const reset = useCallback(() => setValue(""), []);
const handleChange = (value: string) => {
  setValue(value);
};

// const verify = useCallback(async () => {
//   setIsLoading(true);
//   const resp = await axiosPrivate.post("/auth/otp/verify", {
//     type: "ACCOUNT_EMAIL_VERIFY",
//     code: value,
//   });
//   setIsLoading(false);
//   if (resp) {
//     navigate("/login");
//   }
// }, [value, location]);

    return (
      <>
        <Flex
          width="100vw"
          height="100vh"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex flexDir="column" width="61.8%" height="100%" alignSelf="center">
            <Flex
              flexDir="column"
              width={["18rem", "20rem", "23.375rem"]}
              height={["7rem", "8rem", "8.5rem"]}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Flex
                width="100%"
                height={["2rem", "3rem", "3.75rem"]}
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  flexShrink="0"
                  color="#1F1F1F"
                  fontWeight="600"
                  fontSize={["12px", "15px", "18px"]}
                  lineHeight={["14px", "18px", "22px"]}
                >
                  Verification
                </Text>
                <Text
                  flexShrink="0"
                  color="#ABA7A7"
                  fontWeight="600"
                  fontSize={["11px", "14px", "16px"]}
                  lineHeight={["10px", "12px", "14px"]}
                >
                  enter the verification code sent to your email
                </Text>
              </Flex>
              <HStack alignSelf="center">
                <PinInput
                  placeholder=""
                  value={value}
                  onChange={handleChange}
                  focusBorderColor="primary.main"
                >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Flex>
            <Button
              mt={["20px", "30px", "45px"]}
              alignSelf={["center", "flex-start"]}
              padding={["0.5rem 1.5rem", "1rem 2rem", "1rem 2rem"]}
              width={["15rem", "20rem", "25rem", "31.5rem"]}
              height={["2rem", "2.5rem", "3.5rem"]}
              background="#F47C25"
              borderRadius="4px"
              fontWeight="500"
              fontSize={["12px", "15px", "18px"]}
              lineHeight={["14px", "18px", "22px"]}
              color="#fff"
              textAlign="center"
              isLoading={isLoading ? true : false}
              loadingText="Loading"
              spinnerPlacement="start"
              variant="filled"
              //   onClick={() => {
              //     verify();
              //     reset();
              //   }}
              _hover={{
                background: "#F47C25",
              }}
              isDisabled={!value}
            >
              Verify
            </Button>
            <Flex alignSelf="center" mt={["30px", "40px", "45px"]}>
              <Text
                flexShrink="0"
                fontWeight="500"
                color="#000000"
                fontSize="16px"
                lineHeight="22px"
              >
                Did not receive OTP?
              </Text>
              <Button
                variant="link"
                ml="10px"
                fontWeight="600"
                color="#F47C25"
                fontSize="16px"
                lineHeight="22px"
                _hover={{
                  background: "#F47C25",
                  textDecration: "none",
                }}
              >
                Resend
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
}