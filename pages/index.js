// import { SimpleGrid, Box, Button, Flex, Heading, Input, useColorMode, useColorModeValue} from '@chakra-ui/react'
import Head from 'next/head'
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";

//  const IndexPage = () => {
//   const { toggleColorMode} = useColorMode()
//   const formBackground = useColorModeValue("gray.100", "gray.700")
//   return (
//   <Flex height="100vh" alignItems="center" justifyContent="center">
//     <Flex direction="column" background={formBackground} p={12} rounded={6}>
//      <Heading mb={6}>Log in</Heading>
//       <Input placeholder="lazar@chakra-ui.com" variant="filled" mb={3} type="email"/>
//       <Input placeholder="***********" variant="filled" mb={6} type="password"/>
//       <Button mb={6} colorScheme="teal">Log in</Button>
//       <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
//     </Flex>
//   </Flex>
//   )
//  }

// export default IndexPage



export default function Home({results}) {
  console.log(results);
  return (
    <div>
    <Header/>
    <Navbar/>
    <Results results={results}/>
    </div>
   
    
    )
}

export async function getServerSideProps(context){
  const genre = context.query.genre || "fetchTrending";
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre].url}`)
  .then(response => response.json());

  return {
    props: {
      results: request.results, 
    },
  };
}