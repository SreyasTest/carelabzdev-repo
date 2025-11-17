
"use client";

import HomeCounter from "@/components/Homecounter";
import { GET_BLOG, GET_HOME_BANNER } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";
import { TextGenerateEffect } from "@/lib/ui/text-generate-effect";
import Aos from "aos";
import { useEffect, useState } from "react";


export default function Home() {

  const [homeData,setHomeData]=useState();
  const [blogData,setBlogData]=useState();

  const STRAPI_URL = "https://proper-hug-7f40206151.media.strapiapp.com";


    useEffect(() => {
    Aos.init({ 
      once: true,     // animate only once
    });
  }, []);


   const fetchedData = async()=> {
    try{
    const res= await client.query({
                  query: GET_HOME_BANNER,
                 });

      const res1= await client.query({
         query: GET_BLOG,
      })          
       setBlogData(res1.data.blogs);
       console.log("Blog data:", res1.data.blogs);

    console.log("Home banner data:", res.data.homes[0].background_video.url);
   setHomeData(res.data.homes[0]);
    }catch(err){
      console.log("Error fetching home banner data:", err);
    }
   }

useEffect(() => {
  const fetchData = async () => {
    await fetchedData();
  };

  fetchData();
}, []);


console.log("Home Data",homeData);
console.log("Blaoger",blogData?.[0].title);



  return (
    <>
 
      <div className="section-1-homeBanner h-screen w-full flex flex-col  justify-center top-20 relative bg-gray-400 sm:h-screen ">
          {homeData && homeData.background_video && (
            <video
              key={homeData.background_video.url}  // VERY IMPORTANT
              className="absolute inset-0 w-full h-full object-cover z-0 block"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={homeData.background_video.url} type="video/mp4" />
            </video>
          )}

          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        <div className="homeBanner flex flex-col  items-center justify-center  z-10  ">
          <div className="homeHead w-full flex items-center justify-center text-[1.8rem]  leading-[2.5rem] text-center font-bold p-4
          sm:p-6 md:text-[2.8rem] md:leading-[3rem] ">
          <h1
            className="w-[70%] text-white md:w-[40%] md:p-5"
            dangerouslySetInnerHTML={{ __html: homeData?.title || "" }}
          ></h1>

          </div>

          <div className="homeBanner-descr w-full flex justify-center items-center">
              {homeData?.description && (
              <div className="text-center w-[90%] text-white px-5 py-3 fontz sm:w-[60%] sm:flex sm:justify-center md:w-[50%]">
                <TextGenerateEffect words={homeData.description} />
              </div>
            )}
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className="homeBanner-bttn w-full flex justify-center py-8">
            <button className="gradient-bg py-2 px-4 rounded-[6px] fontz text-white
            xl:py-3 xl:px-6">REQUEST A QUOTE</button>
          </div>



       
       <div className="homeBanner-cards flex items-center justify-center py-10 w-full">
  <div className="cards w-full p-5 grid grid-cols-1 gap-10 justify-items-center
    sm:grid-cols-2 lg:grid-cols-4 lg:w-[90%] xl:w-[70%] 2xl:w-[50%]">

    {homeData?.stats?.map((stat, idx) => (
      <div
        key={idx}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000 + idx * 200} // stagger duration for effect
        className="card1 bg-white w-[80%] h-[150px] rounded-b-[10px] gradient-border-top text-center flex flex-col items-center justify-center fontz lg:w-full xl:h-[200px]"
      >
        <HomeCounter 
          end={stat.number} 
          duration={2} 
        />
        <p className="font-bold text-[1rem]">{stat.label}</p>
      </div>
    ))}

  </div>
</div>



        </div>
      </div>

          <div className="bg-amber-400 w-full h-full flex items-center justify-center">
          <div className="w-[50%] h-[90%] bg-amber-50">
          <p>{blogData?.[0]?.description}</p>
          <h1 className="text-3xl font-bold">
          {blogData?.[0]?.title}
          </h1>         
          <img src={blogData?.[0]?.featureImage?.url} />
          <div 
          dangerouslySetInnerHTML={{ __html: blogData?.[0]?.content }}
          ></div>

        </div>
      </div>
      

    </>
  );
}
