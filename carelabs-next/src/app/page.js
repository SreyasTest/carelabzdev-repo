
"use client";

import HomeCounter from "@/components/Homecounter";
import HomeServices from "@/components/HomeServices";
import {GET_HOME_SECTION_1 } from "@/lib/api-Collection";
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
                  query: GET_HOME_SECTION_1,
                 });
    console.log("Home banner data:", res.data.homes[0]);
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


if (!homeData) return null;
  return (
    <>
     <div className="home-cover relative top-[80px]  w-full h-[calc(100vh-80px)]  flex flex-col items-center justify-center  ">
      {/* .section 1 */}
      <div className="w-[60%] h-[85%] bg-gray-50 rounded-4xl flex items-center justify-center navbar-shadow">
          <div className="w-[90%]  h-[90%] flex flex-col items-center justify-evenly ">

            <div className="flex justify-center items-center">
              <button className="px-5 py-2 border-2 border-blue-400  rounded-full">
                <a>{homeData.heading}</a>
              </button>
            </div>

        <div className="w-full text-7xl flex items-center justify-center text-center px-8">
          <div className="w-[60%] font-bold py-4">
            <p className=""
              style={{ letterSpacing: "1px" }}
                dangerouslySetInnerHTML={{
                  __html: homeData.title
                }}
              />
          </div>
        
        </div>


        <div className="w-full flex items-center justify-center text-center px-8">
             <div className="w-[90%] text-xl py-3">
                <p className="text-[#65758B]">{homeData.description}</p>
             </div>
        </div>

        <div className=" w-full flex items-center justify-center py-4">
          <div className="w-[60%] flex  items-center justify-evenly">
                    <button className="bg-[#FF7038] text-white py-2 px-6 rounded-full">
                    <a href={homeData.btn1_link}>{homeData.btn1_text}</a>
                  </button>
                   <button className="bg-[#FF7038] text-white py-2 px-6 rounded-full">
                      <a href={homeData.btn2_link}>{homeData.btn2_text}</a>
                  </button>
          </div>

        </div>

     <div className="w-full flex items-center justify-evenly  py-4">
        {homeData.stats?.map((item) => (
          <div
            key={item.id}
            className="w-[31%]  flex flex-col items-center justify-center p-6 rounded-2xl card-shadow"
          >
            <p className="text-5xl font-bold  text-blue-500">{item.number} </p>
            <p className="text-sm py-1 text-[#65758B]">{item.label}</p>
          </div>
        ))}
      </div>


          </div>
          
      </div>
     </div>


     <div className="w-full  h-[250px]"></div>

     <section>
            <div className="text  w-full h-auto flex flex-col items-center justify-center ">
              <div className="w-[50%] bg-white flex items-center justify-center text-center flex-col gap-5 ">
                <h1 className='text-sm  px-6 py-2  rounded-full border-[1px] border-blue-500'>Our Services</h1>
                <p className='text-6xl gradient-text'>Comprehensive Power Solutions</p>
                <p className='px-9 text-[20px] text-[#65758B]'>From analysis to optimization, we deliver end-to-end power system solutions backed by cutting-edge technology and decades of expertise.</p>

              </div>
               
            </div>
      <HomeServices/>
     </section>

      

    </>
  );
}
