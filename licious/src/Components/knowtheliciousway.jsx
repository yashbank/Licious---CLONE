import { Card, CardHeader, CardBody, CardFooter, SimpleGrid,Heading,Text,Button } from '@chakra-ui/react'
function Knowtheliciousway()
{
    return(
        <div style={{display:"flex"}}>
            
        <SimpleGrid spacing={1} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' style={{display:"flex", justifyContent:"center"}}>
  <Card>
    <CardHeader>
      <Heading size="md"> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
         </div>
    )
    
}
export default Knowtheliciousway