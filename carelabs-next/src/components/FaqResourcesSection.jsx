"use client";

import { useState } from "react";
import { ChevronDown, FileText, Download } from "lucide-react";
import { cn } from "@/lib/utils";

// FAQ Data
// const faqData = [
//   {
//     question: "How long does a typical power system study take?",
//     answer:
//       "A typical power system study takes 2-4 weeks depending on the complexity of your facility and the scope of analysis required. We'll provide a detailed timeline during the initial consultation."
//   },
//   {
//     question: "What data do you need from us to get started?",
//     answer:
//       "We typically need single-line diagrams, equipment specifications, load data, and any existing study reports. Our Data Collection Template provides a comprehensive checklist of required information."
//   },
//   {
//     question: "Which software tools does Carelabs use?",
//     answer:
//       "We use industry-leading software including ETAP, SKM PowerTools, and PSCAD for power system analysis. Our engineers are certified in multiple platforms to ensure accurate and reliable results."
//   },
//   {
//     question: "Is on-site support included in the study?",
//     answer:
//       "Yes, on-site support can be included based on your project requirements. We can arrange site visits for data collection, equipment inspection, and results presentation as needed."
//   },
//   {
//     question: "Do you provide ongoing support after delivering the study?",
//     answer:
//       "Absolutely. We offer ongoing support packages that include periodic reviews, updates for system changes, and emergency consulting services to ensure your power system remains optimized."
//   }
// ];

// Technical Resources
// const technicalResources = [
//   {
//     title: "Sample Study Report",
//     type: "PDF",
//     size: "2.4 MB",
//     icon: FileText
//   },
//   {
//     title: "Analysis Checklist",
//     type: "PDF",
//     size: "850 KB",
//     icon: FileText
//   },
//   {
//     title: "Data Collection Template",
//     type: "XLSX",
//     size: "124 KB",
//     icon: FileText
//   }
// ];

// FAQ Item
// const FaqItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div className="border-b border-border">
//       <button
//         onClick={onClick}
//         className="w-full py-5 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
//       >
//         <span className="font-semibold text-foreground pr-4">{question}</span>
//         <ChevronDown
//           className={cn(
//             "h-5 w-5 text-muted-foreground transition-transform flex-shrink-0",
//             isOpen && "rotate-180"
//           )}
//         />
//       </button>
//       {isOpen && (
//         <div className="pb-5 text-muted-foreground leading-relaxed">
//           {answer}
//         </div>
//       )}
//     </div>
//   );
// };
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        //className="w-full py-5 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
        className="
        w-full py-5 flex items-center justify-between text-left
        transition-colors duration-300
        group
        "
      >
        {/* <span className="font-semibold text-foreground pr-4">{question}</span> */}
      <span
       className="
       text-lg
       font-semibold pr-4
       group-hover:text-blue-600
       transition-colors duration-300
      "
      >
     {question}
     </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform flex-shrink-0",
            "group-hover:text-blue-600",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="pb-5 text-gray-600 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

// Resource Card
// const ResourceCard = ({ title, type, size, icon: Icon }) => {
//   return (
//     <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
//       <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
//         <Icon className="h-5 w-5 text-accent" />
//       </div>
//       <div className="flex-1">
//         <h3 className="font-semibold text-foreground mb-1">{title}</h3>
//         <p className="text-sm text-muted-foreground">
//           {type}, {size}
//         </p>
//       </div>
//       <Download className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
//     </div>
//   );
// };

// const ResourceCard = ({ label, format, icon }) => {
//   return (
//     <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
//       <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
//         <i className={icon || "fa-solid fa-file"}></i>
//       </div>

//       <div className="flex-1">
//         <h3 className="font-semibold text-foreground mb-1">{label}</h3>
//         <p className="text-sm text-muted-foreground">{format}</p>
//       </div>

//       <Download className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
//     </div>
//   );
// };

// const ResourceCard = ({ label, format, icon }) => {
//   return (
//     <div
//       className="
//         bg-white rounded-2xl p-6 shadow
//         flex items-start gap-4
//         transition-all duration-300 cursor-pointer
//         hover:shadow-lg hover:-translate-y-1
//       "
//     >
//       {/* Icon */}
//       <div
//         className="
//           w-14 h-14 flex items-center justify-center
//           rounded-xl bg-blue-50
//           text-blue-600 text-xl
//         "
//       >
//         <i className={icon || "fa-solid fa-file"}></i>
//       </div>

//       {/* Text */}
//       <div className="flex-1">
//         <h3 className="font-semibold text-base mb-1">{label}</h3>
//         <p className="text-sm text-gray-500">{format}</p>
//       </div>

//       {/* Download Icon */}
//       <Download
//         className="
//           h-5 w-5 text-gray-400
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-300
//         "
//       />
//     </div>
//   );
// };

const ResourceCard = ({ label, format, icon }) => {
  return (
    <div
      className="
        flex items-center gap-4 p-3 
        rounded-xl transition-all duration-300 cursor-pointer
        hover:-translate-y-[2px]
        border-none
      "
    >
      {/* Icon Box */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl">
        <i className={icon || 'fa-solid fa-file'}></i>
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="font-semibold">{label}</p>
        <p className="text-xs text-gray-500">{format}</p>
      </div>

      <Download className="h-5 w-5 text-gray-400" />
    </div>
  );
};



// Main Component
export default function FaqResourcesSection({ service }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    // <section>
    //   <div className="min-h-[80vh] w-full flex items-center justify-center">
    //     <div className="w-[95%] md:w-[85%] lg:w-[90%] 2xl:w-[75%] py-10 rounded-4xl flex flex-col items-center bg-card">
          
    //       {/* TOP TITLE */}
    //       <div className="w-full flex items-center justify-center text-center mb-10 px-4">
    //         <div className="flex flex-col items-center gap-3">
    //           <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
    //             <span className="text-primary">FAQs</span>
    //             {" & "}
    //             <span className="gradient-text">Technical Resources</span>
    //           </p>
    //           <p className="text-sm sm:text-md md:text-lg w-[95%] sm:w-[80%] text-center text-muted-foreground">
    //             Common questions about power system analysis and helpful resources to support your project planning.
    //           </p>
    //         </div>
    //       </div>

    //       {/* MAIN AREA */}
    //       <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
    //         {/* FAQ SECTION */}
    //         <div className="lg:col-span-2">
    //           <div className="space-y-1">
    //             {faqData.map((faq, index) => (
    //               <FaqItem
    //                 key={index}
    //                 question={faq.question}
    //                 answer={faq.answer}
    //                 isOpen={openIndex === index}
    //                 onClick={() =>
    //                   setOpenIndex(openIndex === index ? null : index)
    //                 }
    //               />
    //             ))}
    //           </div>
    //         </div>

    //         {/* RESOURCES */}
    //         <div className="lg:col-span-1">
    //           <div className="bg-card border border-border rounded-2xl p-6 sticky top-8">
    //             <h2 className="text-xl font-bold text-foreground mb-6">
    //               Technical Resources
    //             </h2>
    //             <div className="space-y-2">
    //               {technicalResources.map((resource, index) => (
    //                 <ResourceCard key={index} {...resource} />
    //               ))}
    //             </div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </section>

     <section>
      <div className="min-h-[80vh] w-full flex items-center justify-center">
        <div className="w-[95%] md:w-[85%] lg:w-[90%] 2xl:w-[75%] py-10 rounded-4xl flex flex-col items-center bg-card">

          {/* TOP TITLE */}
          <div className="w-full text-center mb-10 px-4">
            {/* <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-primary">{service?.faqTitle}</span>
            </p> */}

            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">

    {/* FAQs - Orange Gradient */}
    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
      {service?.faqTitle?.split("&")[0]?.trim()}
    </span>

    {/* & - Navy */}
    <span className="mx-2 text-[#0F172A]">&</span>

    {/* Technical Resources - Blue Gradient */}
    <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
      {service?.faqTitle?.split("&")[1]?.trim()}
    </span>

  </p>

            <p className="text-sm sm:text-md md:text-lg w-[95%] sm:w-[80%] mx-auto text-muted-foreground mt-3 text-gray-500">
              {service?.faqSubtitle}
            </p>
          </div>

          {/* MAIN AREA */}
          <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* FAQ LEFT SIDE */}
            <div className="lg:col-span-2 space-y-1">
              {service?.questions?.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.questionName}
                  answer={faq.questionAns}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>

            {/* TECH RESOURCES RIGHT SIDE */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-8">

                <h2 className="text-xl font-bold text-foreground mb-6">
                  {service?.technicalTitle}
                </h2>

                <div className="space-y-2">
                  {service?.technicalItems?.map((item, index) => (
                    <ResourceCard
                      key={index}
                      label={item.label}
                      format={item.format}
                      icon={item.icon}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
