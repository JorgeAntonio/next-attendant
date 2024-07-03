interface IProps {
    title: string,
    img: string,
    description: string
}


export const ImageCard = ({title, img, description}:IProps) => {
    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <img className='h-48 w-full object-cover' src={img} alt={title} />
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-green-600'>{title}</h3> 
        <p className='text-gray-600'>{description.length > 0 ? description : 'no descripcion'}</p>
      </div>
    </div>
    )
}