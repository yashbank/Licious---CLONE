import { Grid } from "@chakra-ui/layout";
// import Cards from "./Cards";
import CardinCategory from "../Components/CardinCategory";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function SingleCategory ()
{
    return (
        <div>
            <Navbar/>
        <Grid templateColumns="repeat(3, 1fr) " gap={2} >
            <CardinCategory/>
            <CardinCategory/>
            <CardinCategory/>
            <CardinCategory/>
            <CardinCategory/>
            <CardinCategory/>
            <CardinCategory/>
            <CardinCategory/>
            <CardinCategory/>
            <CardinCategory/>
        </Grid>
        <Footer/>
        </div>
    )
}
export default SingleCategory