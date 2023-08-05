import React, { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Flex,
  Box,
  Button,
  Image,
  Text,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
// import { useAuth } from "../lib/hooks/useAuth";
export const Login=()=>{
// const { auth, setAuth } = useAuth();
const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
const [isSmallerThan740] = useMediaQuery("(max-width: 740px)");
const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
const [isSmallerThan530] = useMediaQuery("(max-width: 530px)");
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLoading, setIsLoading] = useState(false);
    return (
      <>
        <Flex
          width="100vw"
          height="100vh"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            flexDir="column"
            
            width="61.8%"
            height="100%"
            pt={isSmallerThan740 ? "2rem" : isSmallerThan1024 ? "3rem" : "5rem"}
            px={
              isSmallerThan740
                ? "2rem"
                : isSmallerThan1024
                ? "3rem"
                : "6.4375rem"
            }
          >
            <Text
            alignSelf="center"
              color="#595956"
              flexShrink="0"
              fontWeight="700"
              fontSize={
                isSmallerThan740 ? "15px" : isSmallerThan1024 ? "18px" : "24px"
              }
              lineHeight={
                isSmallerThan740 ? "15px" : isSmallerThan1024 ? "18px" : "22px"
              }
            >
              GREEN FIELD INTERNATIONAL
            </Text>
            <Flex width="30rem" alignSelf="center" mt="40px" flexDir="column">
              <Text
                color="#595956"
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
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mt="0.5rem"
                width="100%"
                height="2.6rem"
                background="rgba(6, 0, 137, 0.05)"
                border="1px solid #ABA7A7"
                borderRadius="4px"
                fontWeight="500"
                fontSize="16px"
                lineHeight="22px"
                color="#1F1F1F"
                focusBorderColor="primary.main"
              />
            </Flex>
            <Flex width="30rem" alignSelf="center" mt="20px" flexDir="column">
              <Text
                color="#595956"
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
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                width="100%"
                height="2.6rem"
                background="rgba(6, 0, 137, 0.05)"
                border="1px solid #ABA7A7"
                borderRadius="4px"
                fontWeight="500"
                fontSize="16px"
                lineHeight="22px"
                color="#1F1F1F"
                focusBorderColor="primary.main"
              />
            </Flex>
            <Button
              alignSelf="center"
              mt="60px"
              padding="16px 32px"
              width="30rem"
              height="2.6rem"
              isLoading={isLoading ? true : false}
              loadingText="Loading"
              background="#F47C25"
              variant={isLoading ? "outline" : "filled"}
              spinnerPlacement="start"
              borderRadius="4px"
              fontWeight="500"
              //   onClick={() => login()}
              fontSize="18px"
              lineHeight="22px"
              color="#fff"
              textAlign="center"
              isDisabled={!(email && password && email.includes("@"))}
              _hover={{
                background: "#F47C25",
              }}
            >
              Sign in
            </Button>
            <Flex
              alignSelf="center"
              mt="2rem"
              width="30rem"
              justifyContent="space-between"
            >
              <Text
                cursor="pointer"
                fontSize="18px"
                fontWeight="700"
                color="primary.main"
              >
                <Link to="/forgot-password" className="Link1">
                  Forgot Password ?
                </Link>
              </Text>
              <Flex>
                <Text fontSize="18px">Don’t have an account?</Text>

                <Text
                  cursor="pointer"
                  fontSize="18px"
                  ml="3px"
                  color="primary.main"
                >
                  {" "}
                  <Link to="/register" className="Link1">
                    Sign up
                  </Link>
                </Text>
              </Flex>
            </Flex>
            
          </Flex>
        </Flex>
      </>
    );
}