import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import ansa from "./../../public/img/Alumini/Ansa.jpg";
import asra from "./../../public/img/Alumini/Asra.png";
import gaurav from "./../../public/img/Alumini/Gaurav Kumar.jpg";
import rahul from "./../../public/img/Alumini/Rahul Kumar.jpg";
import rajeev from "./../../public/img/Alumini/Rajeev Ranjan.jpg";
import rohan from "./../../public/img/Alumini/RohanJadhav.jpg";
import shivu from "./../../public/img/Alumini/Shivu P.jpg";
import amaan from "./../../public/img/Alumini/amanaa.jpeg";
import anushant from "./../../public/img/Alumini/anushant.jpg";
import keshav from "./../../public/img/Alumini/keshav.jpg";
import kundan from "./../../public/img/Alumini/kundan - K k.jpeg";
import meghraj from "./../../public/img/Alumini/meghraj.jpeg";
import pradhan from "./../../public/img/Alumini/pradhan.jpg";
import shaswat from "./../../public/img/Alumini/shashwat.jpg";
import shristi from "./../../public/img/Alumini/shrishti.jpeg";
import tanmay from "./../../public/img/Alumini/Tanmay.jpg";
import shubham from "./../../public/img/Alumini/shubham.png";
import vivek from "./../../public/img/Alumini/vivekMoha.jpg";
import abhinav from "./../../public/img/Alumini/abhinav.jpeg";
import pankaj from "./../../public/img/Alumini/pankaj.jpeg";
import shaksham from "./../../public/img/Alumini/shaksham.jpeg";
import manojna from "./../../public/img/Alumini/manojna.jpeg";
import vivk from "./../../public/img/Alumini/vivk.jpeg";
import prince from "./../../public/img/Alumini/prince.jpeg";
import anurag from "./../../public/img/Alumini/anurag.jpeg";
import nitish from "./../../public/img/Alumini/nitish.jpeg";
import nalini from "./../../public/img/Alumini/nalini.jpeg";
import krishnakant from "./../../public/img/Alumini/raj.jpeg";
import ranjeet from "./../../public/img/Alumini/Ranjeet.jpg";
import amit from "./../../public/img/Alumini/amit.jpeg";
import ankit from "./../../public/img/Alumini/Ankit Gourav.jpg";
import VM from "./../../public/img/Alumini/Vishal.jpg";
import Sb from "./../../public/img/Alumini/Sudhamshu.jpg";
import Harshitha from "./../../public/img/Alumini/Harshitha.jpg";
import HarshKanth from "./../../public/img/Alumini/HARSHKANT.jpeg";
import hrishi from "./../../public/img/Alumini/Hrishikesh.jpg";
import amang from "./../../public/img/Alumini/Aman.jpg";
import razee from "./../../public/img/Alumini/Razee.jpg";
import utk from "./../../public/img/Alumini/Utkarsh Sahay.jpg";
import shrutiB from "./../../public/img/Alumini/Shruti.jpg";
import ks from "./../../public/img/Alumini/Kshitiz Singh.jpg";
import aditiD from "./../../public/img/Alumini/Aditi.jpg";
import sumanth from "./../../public/img/Alumini/Sumanth Jain.jpg";
import adityRaj from "./../../public/img/Alumini/ADITYA RAJ.jpg";
import AdithyaD from "./../../public/img/Alumini/AdityaD.jpg";
import Ashish from "./../../public/img/Alumini/Ashish.jpg";
import AyushmanSharma from "./../../public/img/Alumini/AyushmanSharma.jpeg";
import Jeevitha from "./../../public/img/Alumini/Jeevitha.jpg";
import Kunal from "./../../public/img/Alumini/Kunal.jpg";
import ojas from "./../../public/img/Alumini/ojas.jpg";
import Sameer from "./../../public/img/Alumini/Sameer.jpg";
import TannisthaNandy from "./../../public/img/Alumini/Tannistha Nandy .jpg";
import YashaswiniK_1 from "./../../public/img/Alumini/YashaswiniK_1.jpg";


const people = [
  {
    name: "Ranjeet Kumar Chaurasiya",
    role: "Informatica SME at Kyndryl India",
    email: "",
    ima: ranjeet,
    git: "",
    linkedin: "https://www.linkedin.com/in/ranjeetchaurasiya",
  },
  {
    name: "Ankit Gourav",
    role: "Deep Learning Engineer at Blaize",
    email: "",
    ima: ankit,
    git: "",
    linkedin: "https://www.linkedin.com/in/ankit-gourav-b611b7192/",
  },

  {
    name: "Vivek Kumar",
    role: "Full-Stack devloper @ Airbus",
    email: "",
    ima: vivk,
    git: "",
    linkedin: "https://www.linkedin.com/in/vivek-kumar-877348105/",
  },
  {
    name: "Prince Kumar",
    role: "Senior Software Engineer @ Juniper Networks",
    email: "",
    ima: prince,
    git: "",
    linkedin: "https://www.linkedin.com/in/prince-kumar-45a19a10a/",
  },
  {
    name: "Anurag Shahwal",
    role: "Senior Manager at Morgan Stanley",
    email: "",
    ima: anurag,
    git: "",
    linkedin: "https://www.linkedin.com/in/anurag-shahwal/",
  },
  {
    name: "Nitish Kumar",
    role: "MDM Developer(Reltio)",
    email: "",
    ima: nitish,
    git: "",
    linkedin: "https://www.linkedin.com/in/nitish-kumar-49741a141/",
  },
  {
    name: "Nalini Singh",
    role: "Software Engineer 3 at Walmart",
    email: "",
    ima: nalini,
    git: "",
    linkedin: "https://www.linkedin.com/in/nalini-singh-82a97412b/",
  },
  {
    name: "Rajeev Ranjan",
    role: "Software Engineer at Nvidia",
    email: "Ranjan.rajeev1609@gmail.com",
    ima: rajeev,
    git: "",
    linkedin: "https://www.linkedin.com/in/rajeev-ranjan-426b241b0/",
  },
  {
    name: "Vivek Mohla",
    role: "Escalation engineer Microsoft ",
    email: "vivekmohla31@gmail.com",
    ima: vivek,
    git: "",
    linkedin: "https://www.linkedin.com/in/vivek-mohla-83a44115a",
  },
  {
    name: "Shubham Shekhar",
    role: "Lead Developer (AI, Fullstack)",
    email: "shubhamshekhar576@gmail.com",
    ima: shubham,
    git: "https://github.com/Shubham567",
    linkedin: "https://www.linkedin.com/in/shekhar567/",
  },
  {
    name: "Gaurav Kumar",
    role: "Manager - Advance Automation and Robotics",
    email: "gaurav.1si11ee016@gmail.com",
    ima: gaurav,
    git: "",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar-60277b9a",
  },
  {
    name: "Rahul Kumar",
    role: "Alumni",
    email: "rahul.1si15ee029@gmail.com",
    ima: rahul,
    git: "",
    linkedin: "https://www.linkedin.com/in/rahul-kr96",
  },

  {
    name: "Rohan Jadhav",
    role: "Software developer ",
    email: "jadhavrohan534@gmail.com",
    ima: rohan,
    git: "",
    linkedin: "https://www.linkedin.com/in/rohan-jadhav-717385186",
  },

  {
    name: "Pradhan V",
    role: "Technical specialist ",
    email: "pradhan772@gmail.com",
    ima: pradhan,
    git: "",
    linkedin: "https://www.linkedin.com/in/pradhan4v",
  },

  {
    name: "KESHAV KUMAR MISHRA",
    role: "Commercial Pilot",
    email: "kkm01.1998@gmail.com",
    ima: keshav,
    git: "",
    linkedin: "https://www.linkedin.com/in/kkmhere",
  },

  {
    name: "Pankaj M Thakur",
    role: "Network Consulting Engineer - II at Cisco",
    email: "",
    ima: pankaj,
    git: "",
    linkedin: "https://www.linkedin.com/in/pankajthakur62/",
  },
  {
    name: "Abhinav Kumar",
    role: "Full Stack Developer @Speridian Technologies",
    email: "",
    ima: abhinav,
    git: "",
    linkedin: "https://www.linkedin.com/in/abhinav-kumar-804473196/",
  },
  {
    name: "Amit Anand",
    role: "System Engineer at Mahindra Group",
    email: "",
    ima: amit,
    git: "",
    linkedin: "https://www.linkedin.com/in/amitanand509/",
  },
  {
    name: "Krishnkant Jaiswal",
    role: "SDE-1 At Pick Your Trail",
    email: "",
    ima: krishnakant,
    git: "",
    linkedin: "https://www.linkedin.com/in/krishnkant-jaiswal-04578214a/",
  },
  {
    name: "Kundan Kumar",
    role: "Alumni, UPSC Civil Services",
    email: "kundan.bvm@gmail.com",
    ima: kundan,
    git: "kundank123",
    linkedin: "https://www.linkedin.com/in/kundan-kumar-78a6a0145",
  },

  {
    name: "Shaksham Sinha",
    role: "SDE 1 @ yellow.ai",
    email: "",
    ima: shaksham,
    git: "",
    linkedin: "https://www.linkedin.com/in/shaksham-sinha-788a19190/",
  },
  {
    name: "Manojna Rao",
    role: "Associate Engineer @ L&T Technology Services Limited",
    email: "",
    ima: manojna,
    git: "",
    linkedin: "https://www.linkedin.com/in/manojna-rao-002892141/",
  },
  {
    name: "Anushant Bhushan",
    role: "Full Stack Engineer",
    email: "anushant.2k16@gmail.com",
    ima: anushant,
    git: "",
    linkedin: "https://www.linkedin.com/in/anushant-bhushan-354bb4184",
  },
  {
    name: "Amaan Zia",
    role: "Test Solutions Engineer at Micron Technology ",
    email: "amaanzia1si17ec004@gmail.com",
    ima: amaan,
    git: "",
    linkedin: "",
  },
  {
    name: "Asra Sadik",
    role: "Alumni",
    email: "asramdsadik@gmail.com",
    ima: asra,
    git: "",
    linkedin: "https://www.linkedin.com/in/asrasadik/",
  },
  {
    name: "Shivaneeth P",
    role: "Associate software developer",
    email: "shivu61133@gmail.com",
    ima: shivu,
    git: "",
    linkedin: "",
  },
  {
    name: "Shashwat Shrivastava",
    role: "Decision Analytics Associate at ZS Associates",
    email: "shashwat.shrivastava21@gmail.com",
    ima: shaswat,
    git: "",
    linkedin:
      "https://www.linkedin.com/mwlite/in/shashwat-shrivastava-6a49021a8",
  },
  {
    name: "Srishti Gupta",
    role: " IAM Analyst @vmware",
    email: "2362001srishti@gmail.com",
    ima: shristi,
    git: "",
    linkedin: "https://www.linkedin.com/in/srishti-gupta-02b6b71b3",
  },
  {
    name: "Megharaj Goudar",
    role: "Junior Manager (JSW Steel)",
    email: "megharajgoudar1999@gmail.com",
    ima: meghraj,
    git: "",
    linkedin: "https://www.linkedin.com/in/megharaj-goudar-8b5232193",
  },
  {
    name: "Ansa S Mathew",
    role: " DC Analyst in Deloitte USI ",
    email: "ansasmathew@gmail.com",
    ima: ansa,
    git: "",
    linkedin: "https://www.linkedin.com/in/ansa-s-mathew/",
  },
  {
    name: "Tanmay M",
    role: " Software developer",
    email: "tanmaym2k@gmail.com",
    ima: tanmay,
    git: "",
    linkedin: "https://www.linkedin.com/in/tanmaytan",
  },
  {
    name: "Vishal Mishra",
    linkedin: "https://www.linkedin.com/in/vishal-kumar-575724206",
    ima: VM,
    role: "Enterprise Software Engineer at Wolters Kluwer",
  },
  {
    id: 2,
    name: "Sudhamshu Bhatta S",
    linkedin: "https://www.linkedin.com/in/sudhamshu-bhat",
    ima: Sb,
    role: "Software Engineer at Tally Solutions",
  },
  {
    name: "Harshitha M",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: Harshitha,
    role: "Assistant Development Engineer at Signify Innovation Labs",
  },
  {
    name: "Hrishikesh Pradhan",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: hrishi,
    role: "Full Stack Developer at Siemens Healthineers",
  },
  {
    name: "Aman Gupta",
    linkedin: "https://www.linkedin.com/in/aman-gupta-b420751b2/",
    ima: amang,
    role: "GET at Mercedes Benz R&D",
  },
  {
    name: "Aditi Dubey",
    linkedin: "https://www.linkedin.com/in/aditi-dubey-0007",
    ima: aditiD,
    role: "Software Engineer at JP Morgan Chase & Co.",
  },
  {
    name: "Kshitiz Singh",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: ks,
    role: "Alumni",
  },

  {
    name: "Aditya Raj",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: adityRaj,
    role: "Software developer at RedBus",
  },
  {
    name: "Utkarsh Sahay",
    linkedin: "https://www.linkedin.com/in/utkarsh-sahay-84ab5a222",
    ima: utk,
    role: "Cloud Engineer at Aptean",
  },
  {
    name: "Razee Shrivastav",
    linkedin: "https://www.linkedin.com/in/razee-srivastav-90034b244",
    ima: razee,
    role: "Software Development Engineer at Amadeus Software Labs",
  },
  {
    name: "Harshkant",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: HarshKanth,
    role: "Alumni",
  },
  {
    name: "Shruti Bharadwaj",
    linkedin: "https://www.linkedin.com/in/shruti-bhardwaj-266344220",
    ima: shrutiB,
    role: "Alumni",
  },
  {
    name: "Sumanth Jain",
    linkedin: "https://www.linkedin.com/in/sumanth-jain-v-b-9a3188218",
    ima: sumanth,
    role: "DevOps Engineer at Light & Wonder",
  },
  {
    name: "Ojas Sangra",
    linkedin: "https://www.linkedin.com/in/ojas-sangra05/",
    ima: ojas,
    role: "Oracle - Associate Applications Developer",
  },
  {
    name: "Ashish Mahanth",
    linkedin: "https://www.linkedin.com/in/ashish-mahanth-887b0721b/",
    ima: Ashish,
    role: "Microchip -Software Engineer 1",
  },
  {
    name: "Kunal",
    linkedin: "https://www.linkedin.com/in/kunal-chanda-104a63226/",
    ima: Kunal,
    role: "Oracle - Associate Engineer",
  },
  {
    name: "Sameer Kumar",
    linkedin: "https://www.linkedin.com/in/sameer-shetty-478481217/",
    ima: Sameer,
    role: "Contentstack - Associate Software Engineer",
  },
  {
    name: "Ayushman Sharma",
    linkedin: "https://www.linkedin.com/in/ayushmansrma/",
    ima: AyushmanSharma,
    role: "Delloite - Analyst",
  },
  {
    name: "Jeevitha",
    linkedin: "https://www.linkedin.com/in/jeevitha-k-a-744405229/",
    ima: Jeevitha,
    role: "Oracle - Associate application developer",
  },
  {
    name: "Tannistha Nandy",
    linkedin: "https://www.linkedin.com/in/tannistha-nandy-568a8131a/",
    ima: TannisthaNandy,
    role: "Toshiba - Associate software engineer",
  },
  {
    name: "Yashaswini",
    linkedin: "https://www.linkedin.com/in/yashaswini-kodi-924258227/",
    ima: YashaswiniK_1,
    role: "Saks Cloud Services - Cloud Engineer",
  },
  {
    name: "Aditya Dubey",
    linkedin: "",
    ima: AdithyaD,
    role: "Alumini",
  },
];

export default function Alumni() {
  const ref = useRef(null);
  const mainControll = useAnimation();

  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      mainControll.start("visible");
    } else {
      mainControll.start("hidden");
    }
  }, [isInView]);
  return (
    <div className="bg-slate-800 text-white py-24 sm:py-32">
      <div className="pt-4 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet our Alumni
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            "Continuing the Legacy: Corsit Alumni Making their Mark!"
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person, i) => (
            <li ref={ref} key={i}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.ima}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-sky-600">
                    {person.role}
                  </p>
                  <a href={person.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
