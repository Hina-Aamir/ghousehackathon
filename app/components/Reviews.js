import Image from 'next/image'

const Reviews =({image,name,profession,date,description})=>{
    return(
         <div>{/*main div starts */}
<div className='flex'>
<div className='p-4'> <Image src={image} alt="profile" width={200} height={200} /></div>
<div>   
  <div className="grid grid-cols-2   gap-4 m-4">
 <div className=""><h4>{name}</h4><p>{profession}</p></div>

 <div className='flex justify-end'>
<div className=""><h6>{date}</h6>
<div className="flex space-x-2">
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          src="/assets/star.png"
          alt="Star"
          width={20}
          height={20}
        />
      ))}
    </div></div>
    </div>

</div>

<div className='m-4'>{description}</div>


</div>


</div>


        </div>
    )
}





export default Reviews