import React from 'react'
const avatars = [
    {
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      profileUrl: "https://fakeurl.com/user1",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      profileUrl: "https://fakeurl.com/user2",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      profileUrl: "https://fakeurl.com/user3",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      profileUrl: "https://fakeurl.com/user4",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      profileUrl: "https://fakeurl.com/user5",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      profileUrl: "https://fakeurl.com/user6",
    },
  ];
  

  
   
const Hero = () => {
  return (
    <div className=' text-center flex flex-col w-full h-full items-center justify-center'>
        <a target="_blank" rel="noopener noreferrer" className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white text-richblack-900 p-0.5 text-sm transition-transform hover:-rotate-2" href="https://www.producthunt.com/">
            <span className="rounded-full bg-[#3979da] px-2 py-0.5 font-medium text-white">HEY!</span>
            <span className="ml-1.5 mr-1 inline-block">We're live on Product Hunt!</span>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
        </a>
      <h1 className=' text-6xl font-bold max-w-3xl font-sans py-7 capitalize'>
      Get testimonials from your customers with ease
      </h1>
      <p className=' font-medium text-center max-w-3xl text-pure-greys-600 font-sans pb-7'>
      Collecting testimonials is hard, we get it! So we built Testimonial.
       In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.
      </p>
      <button className='rounded-full bg-[#3979da] border-pure-greys-300 px-8 py-3 font-sans font-semibold mx-auto'>
Get Started For Free
      </button>
      <p className=' text-pure-greys-700 text-xs py-2'>It's 100% free to start. No credit card required!</p>
      <p className=' text-pure-greys-800  py-2'>Trusted by 4000+ entrepreneurs, creators & freelancers</p>
      <div className="flex -space-x-4 rtl:space-x-reverse">
        {avatars.map((avatar, index) => (
            <img key={index} className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={avatar.imageUrl} alt="" />
        ))}
        <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
      </div>
</div>
      
     
   
  )
}


export default Hero
