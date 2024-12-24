import Image from  'next/image'
const Recent =({image,model,brand,price,date})=>{
   return(
    <div className='flex bg-white'>
<div className='p-4'><Image src={image} alt="model nO." width={132}height={70}/>

</div>


<div className="container mx-auto p-4">
  <div className="grid grid-cols-2 sm:grid-cols-2   gap-4 m-4 text-sm">
 <div className=""><h4 className="text-bold-3xl">{model}</h4><p>{brand}</p></div>
<div className="text-right"><h6>{date}</h6><h4>{price}</h4></div> 
</div>
</div>
    </div>
   )

}
export default Recent;