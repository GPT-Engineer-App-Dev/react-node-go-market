import { Box, Flex, Input, Button, Text, Badge, VStack, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaEnvelope, FaUser } from "react-icons/fa";

const developers = [
  { id: 1, name: "John Doe", location: "New York, USA", technologies: ["React", "Node.js"] },
  { id: 2, name: "Jane Smith", location: "Berlin, Germany", technologies: [".NET", "Go"] },
  { id: 3, name: "Carlos Ruiz", location: "Madrid, Spain", technologies: ["JavaScript", "React"] },
];

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <VStack spacing={8} p={5}>
      <Box textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          Welcome to Particles
        </Text>
        <Text fontSize="md">A marketplace for software talent specialized in web technologies.</Text>
      </Box>
      <Flex gap="2">
        <Input placeholder="Search developers..." size="md" />
        <Button leftIcon={<FaSearch />} colorScheme="blue">
          Search
        </Button>
      </Flex>
      <VStack spacing={4} align="stretch">
        {developers.map((dev) => (
          <Box key={dev.id} p={5} shadow="md" borderWidth="1px" bg={bg} color={color}>
            <HStack justifyContent="space-between">
              <HStack>
                <Image borderRadius="full" boxSize="50px" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ0NjM2MzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" />
                <VStack align="start">
                  <Text fontWeight="bold">{dev.name}</Text>
                  <Text fontSize="sm">{dev.location}</Text>
                </VStack>
              </HStack>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
                Message
              </Button>
            </HStack>
            <HStack spacing={2} mt={2}>
              {dev.technologies.map((tech) => (
                <Badge key={tech} colorScheme="green">
                  {tech}
                </Badge>
              ))}
            </HStack>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default Index;
