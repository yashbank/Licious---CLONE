import { Grid } from "@chakra-ui/layout";
// import Cards from "./Cards";
import CardinCategory from "../Components/CardinCategory";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function SingleCategory ()
<<<<<<< HEAD
{
=======


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



>>>>>>> 2c6bd50d961072af61ce41437336a503551f2211
    return (
        <div>
            <Navbar/>
        <Grid templateColumns="repeat(3, 1fr) " gap={2} >
<<<<<<< HEAD
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
=======
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
            
>>>>>>> 2c6bd50d961072af61ce41437336a503551f2211
        </Grid>
        <Footer/>
        </div>
    )
}
<<<<<<< HEAD
export default SingleCategory
=======
export default SingleCategory


>>>>>>> 2c6bd50d961072af61ce41437336a503551f2211
