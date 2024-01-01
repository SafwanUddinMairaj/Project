
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HStack,
  Heading,
  Stack,
  UnorderedList,
  ListItem,
  Link,
  Button,
} from "@chakra-ui/react";
//import { ArrowForwardIcon } from "@chakra-ui/icons";



const Homepage = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (
      // <>
      //   <div  onClick={onClick} className="userrole-decisionbutton flex flex-column align-center justify-center">
      //     <h1 className="userrole-decisionbutton-heading">{heading}</h1>
      //     <h3 className="userrole-decisionbutton-text">{text}</h3>
      //   </div>
      // </>
      <>
        <Stack
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
         
          width={{ base: "180px", md: "250px", lg: "300px" }}
          height={{ base: "150px", md: "200px", lg: "250px" }}
  
    
          backgroundColor={"#00bfff"}
          padding={"10px"}
          borderRadius={"10px"}
          cursor={"pointer"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"white"}
          style={{
            backgroundColor: isHovered ? "#007FFF" : "#00bfff",
          }}
          margin={"10px"}
        >
          <Heading
            fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
            textAlign={"center"}
            fontWeight={"medium"}
          >
            {heading}
          </Heading>
          <Text
            fontSize={{ base: "0.8rem", md: "1rem", lg: "1.3rem" }}
            textAlign={"center"}
          >
            {text}
          </Text>
        </Stack>
      </>
    );
  };

export default Homepage;
