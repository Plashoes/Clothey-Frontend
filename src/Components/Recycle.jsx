
function Recycle() {
  return (
    <div className='bg-[#f1f1ef] container mx-auto px-12 py-12 flex flex-col-reverse md:flex-row md:items-center'>
      <div className='md:basis-1/2'>
        <p className='text-[#979a9b] text-center md:text-left md:text-xl mb-16'>Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam sapien pulvinar laoreet vulputate sem aliquet phasellus egestas felis, est, vulputate morbi massa mauris vestibulum dui odio.</p>
        <div className='flex justify-between items-center'>
          <img className='w-[60px] md:w-[100px]' src="/images/recycled-shoe-badge-1.svg" alt="" />
          <img className='w-[60px] md:w-[100px]' src="/images/recycled-shoe-badge-2.svg" alt="" />
          <img className='w-[60px] md:w-[100px]' src="/images/recycled-shoe-badge-3.svg" alt="" />
        </div>
      </div>
      <div className='flex justify-center md:justify-end items-center mb-8 md:mb-0 md:basis-1/2'>
        <img className='rounded-full border-2 border-dashed border-[#979a9b] w-[200px] lg:w-[330px] md:w-[200px]' src="/images/recycled-shoe-store-recycled-circle-iamge.jpg" alt="" />
      </div>
    </div>
  )
}

export default Recycle