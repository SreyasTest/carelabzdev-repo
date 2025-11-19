// import React from 'react'

// const HomeServices = () => {
//   return (
//     <div>
//       <div className='w-full h-full lg:h-screen  flex items-center justify-center'>
//         <div className=" flex-col lg:flex-row xl:w-full 2xl:w-[70%] h-[80%]  flex items-center justify-center ">

//             <div className=" w-full lg:w-[35%] h-full  flex flex-col justify-start items-center p-3 gap-5">

//                 <div className="w-[75%] lg:w-[90%] h-[80px] rounded-2xl bg-white p-5 flex justify-center flex-col card-shadow">
//                     <p className='text-2xl font-bold'>Power System Analysis</p>
//                     <p className='text-[14px]'>Click to explore details</p>
//                 </div>
//                  <div className="w-[75%] lg:w-[90%] h-[80px] rounded-2xl bg-white p-5 flex justify-center flex-col card-shadow">
//                     <p className='text-2xl font-bold'>Power System Analysis</p>
//                     <p className='text-[14px]'>Click to explore details</p>
//                 </div>
//                    <div className="w-[75%] lg:w-[90%] h-[80px] rounded-2xl bg-white p-5 flex justify-center flex-col card-shadow">
//                     <p className='text-2xl font-bold'>Power System Analysis</p>
//                     <p className='text-[14px]'>Click to explore details</p>
//                 </div>
//                    <div className="w-[75%] lg:w-[90%] h-[80px] rounded-2xl bg-white p-5 flex justify-center flex-col card-shadow">
//                     <p className='text-2xl font-bold'>Power System Analysis</p>
//                     <p className='text-[14px]'>Click to explore details</p>
//                 </div>
//                  <div className="w-[75%] lg:w-[90%] h-[80px] rounded-2xl bg-white p-5 flex justify-center flex-col card-shadow">
//                     <p className='text-2xl font-bold'>Power System Analysis</p>
//                     <p className='text-[14px]'>Click to explore details</p>
//                 </div>
//                   <div className="w-[75%] lg:w-[90%] h-[80px] rounded-2xl bg-white p-5 flex justify-center flex-col card-shadow">
//                     <p className='text-2xl font-bold'>Power System Analysis</p>
//                     <p className='text-[14px]'>Click to explore details</p>
//                 </div>

//             </div>
//             <div className="w-[] lg:w-[65%] h-full  flex p-3 justify-center  ">
//                 <div className="w-full h-[90%]  rounded-3xl bg-white card-shadow">
//                  <div
//                     className="relative w-full h-[40%] rounded-t-3xl overflow-hidden bg-cover bg-center flex flex-col  justify-end p-5 gap-3"
//                     style={{ backgroundImage: `url('https://proper-hug-7f40206151.media.strapiapp.com/service2_9d7db5d882.jpg')` }}
//                     >
 

//                         <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10"></div>
//                         <div className="z-20 mb-5 flex flex-col  justify-end  gap-4">
//                            <p className='text-3xl font-bold '>Power System Analysis</p>
//                            <p className=''>Comprehensive analysis and optimization of electrical power systems using advanced computational methods.</p>
//                         </div>
                     
                        
//                     </div>

//                     <div className="w-full h-[60%] rounded-b-3xl flex flex-col justify-around  px-8">
//                         <hr className='w-[15%] rounded-full h-[2px] gradient-bg border-none'/>
//                         <div className="">
//                         <p class="mb-2 font-semibold">Key Features</p>
//                         <ul class="grid grid-cols-2 gap-2 list-disc list-inside">
//                             <li>Demand Response</li>
//                             <li>Load Shifting</li>
//                             <li>Energy Storage</li>
//                             <li>Peak Management</li>
//                         </ul>
//                         </div>

//                         <div className="">
//                                <p class="mb-2 font-semibold">PERFORMANCE METRICS</p>

//                                <div className="flex  items-center justify-evenly ">
//                                 <div className="flex  items-center justify-center flex-col">
//                                     <p className='text-2xl font-bold'>35% Savings</p>
//                                     <p className='text-[14px]'>Energy Costs Reduced</p>

//                                 </div>
//                                 <div className="flex  items-center justify-center flex-col">
//                                     <p className='text-2xl font-bold'>35% Savings</p>
//                                     <p className='text-[14px]'>Energy Costs Reduced</p>
//                                 </div>
//                                 <div className="flex  items-center justify-center flex-col">
//                                   <p className='text-2xl font-bold'>35% Savings</p>
//                                     <p className='text-[14px]'>Energy Costs Reduced</p>
//                                 </div>
//                                </div>

//                         </div>

//                         <div className=" flex gap-5">
//                             <button className=' px-8 py-3 bg-[#FF7038] rounded-full text-white font-bold'>
//                                 <a href="">Request Demo</a>
//                             </button>
//                            <button className=' px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full'>
//                             <a href="">Learn more</a>
//                             </button>
//                         </div>

//                     </div>
//                 </div>
//             </div>
           
//         </div>

//       </div>
//     </div>
//   )
// }

// export default HomeServices


import React from 'react'

const HomeServices = () => {
  return (
    <div className="w-full min-h-screen  py-8 lg:py-0">
      <div className="w-full h-full lg:h-screen flex items-center justify-center px-4">
        <div className="flex flex-col lg:flex-row xl:w-full 2xl:w-[70%] lg:h-[80%] gap-4 lg:gap-0">

            {/* Service Cards Column */}
            <div className="w-full lg:w-[35%] h-full flex flex-col justify-start items-center p-3 gap-3 lg:gap-5 overflow-y-auto">

                <div className="w-full sm:w-[85%] lg:w-[90%] min-h-[70px] lg:h-[80px] rounded-2xl bg-white p-4 lg:p-5 flex justify-center flex-col shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold">Power System Analysis</p>
                    <p className="text-xs sm:text-sm lg:text-[14px] text-gray-600">Click to explore details</p>
                </div>
                
                <div className="w-full sm:w-[85%] lg:w-[90%] min-h-[70px] lg:h-[80px] rounded-2xl bg-white p-4 lg:p-5 flex justify-center flex-col shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold">Grid Management</p>
                    <p className="text-xs sm:text-sm lg:text-[14px] text-gray-600">Click to explore details</p>
                </div>
                
                <div className="w-full sm:w-[85%] lg:w-[90%] min-h-[70px] lg:h-[80px] rounded-2xl bg-white p-4 lg:p-5 flex justify-center flex-col shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold">Energy Optimization</p>
                    <p className="text-xs sm:text-sm lg:text-[14px] text-gray-600">Click to explore details</p>
                </div>
                
                <div className="w-full sm:w-[85%] lg:w-[90%] min-h-[70px] lg:h-[80px] rounded-2xl bg-white p-4 lg:p-5 flex justify-center flex-col shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold">Load Forecasting</p>
                    <p className="text-xs sm:text-sm lg:text-[14px] text-gray-600">Click to explore details</p>
                </div>
                
                <div className="w-full sm:w-[85%] lg:w-[90%] min-h-[70px] lg:h-[80px] rounded-2xl bg-white p-4 lg:p-5 flex justify-center flex-col shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold">Renewable Integration</p>
                    <p className="text-xs sm:text-sm lg:text-[14px] text-gray-600">Click to explore details</p>
                </div>
                
                <div className="w-full sm:w-[85%] lg:w-[90%] min-h-[70px] lg:h-[80px] rounded-2xl bg-white p-4 lg:p-5 flex justify-center flex-col shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold">Smart Monitoring</p>
                    <p className="text-xs sm:text-sm lg:text-[14px] text-gray-600">Click to explore details</p>
                </div>

            </div>

            {/* Detail Panel */}
            <div className="w-full lg:w-[65%] h-auto lg:h-full flex p-3 justify-center">
                <div className="w-full h-full rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col">
                    
                    {/* Hero Section */}
                    <div
                        className="relative w-full h-[250px] sm:h-[300px] lg:h-[40%] bg-cover bg-center flex flex-col justify-end p-5 sm:p-6 lg:p-8 gap-3"
                        style={{ backgroundImage: `url('https://proper-hug-7f40206151.media.strapiapp.com/service2_9d7db5d882.jpg')` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent z-10"></div>
                        <div className="z-20 mb-2 sm:mb-4 lg:mb-5 flex flex-col justify-end gap-2 sm:gap-3 lg:gap-4">
                            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">Power System Analysis</p>
                            <p className="text-sm sm:text-base lg:text-lg">Comprehensive analysis and optimization of electrical power systems using advanced computational methods.</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full flex-1 flex flex-col justify-between gap-4 sm:gap-6 p-5 sm:p-6 lg:p-8">
                        
                        <hr className="w-[15%] rounded-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 border-none"/>
                        
                        {/* Key Features */}
                        <div>
                            <p className="mb-3 font-semibold text-sm sm:text-base">Key Features</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-sm sm:text-base">
                                <li>Demand Response</li>
                                <li>Load Shifting</li>
                                <li>Energy Storage</li>
                                <li>Peak Management</li>
                            </ul>
                        </div>

                        {/* Performance Metrics */}
                        <div>
                            <p className="mb-3 font-semibold text-sm sm:text-base">PERFORMANCE METRICS</p>
                            <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-evenly gap-4 sm:gap-2">
                                <div className="flex items-center justify-center flex-col text-center">
                                    <p className="text-xl sm:text-2xl font-bold">35% Savings</p>
                                    <p className="text-xs sm:text-sm text-gray-600">Energy Costs Reduced</p>
                                </div>
                                <div className="flex items-center justify-center flex-col text-center">
                                    <p className="text-xl sm:text-2xl font-bold">99% Uptime</p>
                                    <p className="text-xs sm:text-sm text-gray-600">System Reliability</p>
                                </div>
                                <div className="flex items-center justify-center flex-col text-center">
                                    <p className="text-xl sm:text-2xl font-bold">50% Faster</p>
                                    <p className="text-xs sm:text-sm text-gray-600">Response Time</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7038] rounded-full text-white font-bold hover:bg-[#ff5722] transition-colors">
                                <a href="#demo">Request Demo</a>
                            </button>
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-50 transition-colors">
                                <a href="#learn">Learn more</a>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default HomeServices
