import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Input,
    Select,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import React from "react";
  
  function Signup() {
    return (
      <Box
        w={["full", "md"]}
        p={[8, 10]}
        mt={[20, "10vh"]}
        mx="auto"
        border={["none", "1px"]}
        borderColor={["", "gray.300"]}
        borderRadius={10}
      >
        <VStack spacing={4} align="flex-start" w="full">
          <VStack spacing={1} align={['flex-start', 'center']} w='full'>
            <Heading>Signup</Heading>
            <Text>
              <Link to="/login">Already have an account? Login</Link>
            </Text>
          </VStack>
          <FormControl>
            <FormLabel>E-mail Address</FormLabel>
            <Input rounded="none" variant="filled"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" rounded="none" variant="filled"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" rounded="none" variant="filled"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Role</FormLabel>
            <Select placeholder="Role">
              <option value='option1'>1</option>
              <option value='option1'>2</option>
              <option value='option1'>3</option>
            </Select>
          </FormControl>
          <Button
            rounded="none"
            colorScheme="blue"
            w={["full", "auto"]}
            alignSelf="end"
          >
            Signup
          </Button>
        </VStack>
      </Box>
    );
  }
  
  export default Signup;
  