import abc from "../assets/bmw.jpeg"

const Banner = () => {
  return (
   <div className="banner">
     <img style={{display:"block", width:"100%",height:"400px"}} src={abc} alt="spidy" />
   </div>
  )
}

export default Banner