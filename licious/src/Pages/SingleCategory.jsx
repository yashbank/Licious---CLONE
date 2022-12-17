import { Grid } from "@chakra-ui/layout";
// import Cards from "./Cards";
import CardinCategory from "../Components/CardinCategory";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function SingleCategory ()


{
    const Data = [
        { title:"Chicken Thigh Boneless",img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ffd4144f-25a7-6f26-2d90-9a9db0332dda/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp", Price:"₹ 339", desc:"Fresh Nakhre for fresh, juicy and tender thigh cuts"},
         { title:"",img:"", Price:"", desc:""},
         { title:"",img:"", Price:"", desc:""},
         { title:"",img:"", Price:"", desc:""},
         { title:"",img:"", Price:"", desc:""},
         { title:"",img:"", Price:"", desc:""},
         { title:"",img:"", Price:"", desc:""},
         { title:"",img:"", Price:"", desc:""},
        
        
        ]



    return (
        <div>
            <Navbar/>
        <Grid templateColumns="repeat(3, 1fr) " gap={2} >
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            <CardinCategory />
            
        </Grid>
        <Footer/>
        </div>
    )
}
export default SingleCategory


