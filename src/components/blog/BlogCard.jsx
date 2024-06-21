import React from 'react'

const BlogCard = ({title, content, img1, img2, img3, imgComp1, imgComp2, imgComp3}) => {
  return (
    <div className='flex flex-col justify-between h-[378px] bg-[#997D6C] rounded-[35px] p-8'>
        <h1 className='text-[24px] text-white'>{title}</h1>
        <p className='text-[14px] text-white'>{content}</p>
        <div className='flex items-baseline justify-between'>
            <div className='flex flex-row items-center justify-between w-[75%]'>
                <div className='flex flex-col gap-[.5rem] items-center'>
                    {img1 && <img src={img1} alt="image 1" />}
                    {imgComp1}
                </div>
                <div className='flex flex-col gap-[.5rem] items-center'>
                    {img2 && <img src={img2} alt="image 2" />}
                    {imgComp2}
                </div>
                <div className='flex flex-col gap-[.5rem] items-center'>
                    {img3 && <img src={img3} alt="image 3" />}
                    {imgComp3}
                </div>
            </div>
            <button className='text-[20px] self-baseline text-white underline'>More</button>
        </div>
    </div>
  )
}

export default BlogCard