import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Carousel from "../Components/Carousel"
import Cards from "../Components/Cards"
import { Heading } from '@chakra-ui/react'
import Knowtheliciousway from "../Components/knowtheliciousway"
function Home()
{

    const cardImages = [{text:"Today's Deals",img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"},
{text:"Chicken",img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png"},
{text:"Fish and SeaFood",img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png"},
{text:"Mutton",img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png"},
{text:"Ready to Cook",img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png"},
{text:"Prawns", img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png"},
{text:"Cold Cuts", img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png"},
{text:"Spreads", img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png"},
{text:"Eggs", img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png"},
{text:"Biryani And Kebabs", img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png"},
{text:"Plant based Meat", img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png"},
{text:"Meat Masala", img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png"},
]
    return(
        <>
        <Navbar/>
        <Carousel/>
        <Heading style={{marginLeft:"70px"}}>Shop by categories</Heading>
        <Heading style={{marginLeft:"70px",color:"grey"}} as='h5' size='sm'>
        Freshest meats just for you
  </Heading>


        <div style={{display:"grid", gridTemplateColumns: "300px 300px 300px 300px", gap:"20px", justifyContent:"center", padding:"20px"}}>

       {
        cardImages.map((e)=>{
            return <Cards img = {e.img} text={e.text}/>
        })
       }
       <Knowtheliciousway/>
            
        
        </div>
        <Footer/>
        </>

    )

}
export default Home