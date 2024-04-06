import { ExternalLink } from "react-external-link";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import ojas from "./../../public/img/Fourth_year/ojas.jpg";
import ashish_m from "../../public/img/Fourth_year/Ashish.jpg";
import aditya_d from "../../public/img/Fourth_year/AdityaD.jpg";
// import sameer_s from "../../public/img/Fourth_year/sameer.jpg";
import sameer_s from "./../../public/img/Fourth_year/Sameer.jpg";
import TANNISHTHA from "../../public/img/Fourth_year/Tannistha Nandy .jpg";
import KUNAL from "../../public/img/Fourth_year/Kunal.jpg";
import YASHASWINI from "../../public/img/Fourth_year/YashaswiniK_1.jpg";
import AYUSHMAN from "../../public/img/Fourth_year/AyushmanSharma.jpeg";
import JEEVITHA from "../../public/img/Fourth_year/1si20ec039_jeevitha.jpg";
import UJJAWAL from "../../public/img/Third_year/UJJAWALSINGH.png";
import SHARANYA from "../../public/img/Third_year/SharanyaBhat.jpg";
import ASHUTOSH from "../../public/img/Third_year/Ashutosh Malviya.jpg";
import KUMAR from "../../public/img/Third_year/KumarHarsh.jpg";
import RISHAV from "../../public/img/Third_year/rishav.jpg";
import HARSH from "../../public/img/Third_year/Harsh Gaurav.jpg";
import LEKHANA from "../../public/img/Third_year/IMG_20230216_144211.jpg";
import NAMRATA from "../../public/img/Third_year/namrata.jpg";
import SIDDHANT from "../../public/img/Third_year/SIDDHANT RAJ.jpg";
import JATIN from "../../public/img/Third_year/JATIN SHARMA (1).jpg";
import SURAJ from "../../public/img/Third_year/ Suraj Aribenchi.jpeg";
import VIVEK from "../../public/img/Third_year/Vivek M (EEE).jpg";
import AADARSH from "../../public/img/Third_year/Aadarsh Shriniwas.jpg";
import VAISHALI from "../../public/img/Third_year/B Vaishali Choudhary .jpg";
import ADITI from "../../public/img/Third_year/Aditi Joshi ECE.jpg";
import MAYANK from "../../public/img/Third_year/Mayank Pandey .jpg";
import BADAL from "../../public/img/Third_year/badal.jpeg";
import ARYAN from "../../public/img/Third_year/Aryan.jpg";
import CHAITHRA from "../../public/img/Second_year/_Chaithra HR , AIML.jpg";
import KETAKI from "../../public/img/Second_year/_Ketaki.jpg";
import OM from "../../public/img/Second_year/_Om .jpg";
import MUDIT from "../../public/img/Second_year/Mudit shekhar , EEE.jpg";
import AISHWARYA from "../../public/img/Second_year/Aishwarya Acharya PK ,ISE.jpg";
import NEETHU from "../../public/img/Second_year/Neethu.jpg";
import LIKHITHA from "../../public/img/Second_year/NM Sai Likhitha.jpg";
import YATIN from "../../public/img/Second_year/YATIN BHATIA.jpg";
import VARSHA from "../../public/img/Second_year/varsha.jpg";
import GURU from "../../public/img/Second_year/Guru Srisha.jpg";
import ANANYA from "../../public/img/Second_year/Ananya.jpg";
import Pavan from "../../public/img/Second_year/Pavan J.jpeg";
import Aditya_agr from "../../public/img/Second_year/aditya agarwal.jpg";
import ABHISHEK from "../../public/img/First_year/ abhishek kumar.jpeg";
import Jahnvi from "../../public/img/First_year/ Jahnvi.jpeg";
import Advaita from "../../public/img/First_year/Advaita Amrit.jpeg";
import Pratik from "../../public/img/First_year/ Pratik Gautam.jpeg";
import Anaya from "../../public/img/First_year/Anaya Singh.jpeg";
import Tarun from "../../public/img/First_year/ Tarun Muragodnavar.jpg";
import Aryan from "../../public/img/First_year/Aryan kumar Sinha.jpeg";
import SHASHANK from "../../public/img/First_year/Shashank H.jpeg";
import Jishnu from "../../public/img/First_year/Jishnu Khargharia.jpg";
import Kritika from "../../public/img/First_year/Kritika.jpeg";
import Aditya from "../../public/img/First_year/Aditya lochan.jpeg";
import DHRUVA from "../../public/img/First_year/Dhruva D.jpeg";
import insta from "./../../public/img/link/link.png";

const people = [
  {
    id: 1,
    name: "OJAS SANGRA",
    linkedin: "https://www.linkedin.com/in/ojas-sangra-942351220",
    image: ojas,
    role: "Chairman",
  },
  {
    id: 2,
    name: "ASHISH MAHANTH",
    linkedin: "https://www.linkedin.com/in/ashish-mahanth-887b0721b",
    image: ashish_m,
    role: "Vice Chairman",
  },
  {
    name: "ADITYA DUBEY",
    linkedin: "https://www.linkedin.com/in/aditya-dubey-18927b152/",
    image: aditya_d,
    role: "Treasurer",
  },

  {
    name: "SAMEER KUMAR",
    linkedin: "https://www.linkedin.com/in/sameer-shetty-478481217",
    image: sameer_s,
    role: "Tech Lead",
  },

  {
    name: "KUNAL",
    linkedin: "https://www.linkedin.com/in/kunal-chanda-104a63226",
    image: KUNAL,
    role: "Fourth Year",
  },
  {
    name: "TANNISHTHA NANDY",
    linkedin: "https://www.linkedin.com/in/tannistha-nandy-22b8401b9",
    image: TANNISHTHA,
    role: "Fourth Year",
  },

  {
    name: "YASHASWINI",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: YASHASWINI,
    role: "Fourth Year",
  },
  {
    name: "AYUSHMAN SHARMA",
    linkedin: "https://www.linkedin.com/in/ayushman-sharma-b43623213/",
    image: AYUSHMAN,
    role: "Fourth Year",
  },
  {
    name: "JEEVITHA",
    linkedin: "https://www.linkedin.com/in/jeevitha-k-a-744405229",
    image: JEEVITHA,
    role: "Fourth Year",
  },
  {
    name: "UJJAWAL SINGH ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: UJJAWAL,
    role: "Treasurer",
  },
  {
    name: "SHARANYA BHAT",
    linkedin: "https://www.linkedin.com/in/sharanya-bhat-b2070a239",
    image: SHARANYA,
    role: "Third Year",
  },
  {
    name: "ASHUTOSH MALVIYA",
    linkedin: "https://www.linkedin.com/in/ashumalviya",
    image: ASHUTOSH,
    role: "Third Year",
  },
  {
    name: "KUMAR HARSH",
    linkedin: "https://www.linkedin.com/in/kumar-harsh-39bb2b249",
    image: KUMAR,
    role: "Third Year",
  },
  {
    name: "RISHAV SHEKHAR",
    linkedin: "https://www.linkedin.com/in/rishav-shekhar-a21279232",
    image: RISHAV,
    role: "Third Year",
  },
  {
    name: "HARSH GAURAV",
    linkedin: "https://www.linkedin.com/in/harsh-gaurav-1434b624b",
    image: HARSH,
    role: "Third Year",
  },
  {
    name: "LEKHANA PATEL",
    linkedin: "https://www.linkedin.com/in/lekhana-patel-3b8986225",
    image: LEKHANA,
    role: "Third Year",
  },
  {
    name: "NAMRATA BHARADWAJ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: NAMRATA,
    role: "Third Year",
  },
  {
    name: "SIDDHANT RAJ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: SIDDHANT,
    role: "Third Year",
  },
  {
    name: "JATIN SHARMA",
    linkedin: "https://www.linkedin.com/in/jatin-sharma-669590142",
    image: JATIN,
    role: "Third Year",
  },
  {
    name: "SURAJ ARIBENCHI",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: SURAJ,
    role: "Third Year",
  },
  {
    name: "VIVEK M",
    linkedin: "https://www.linkedin.com/in/vivekinnovator",
    image: VIVEK,
    role: "Third Year",
  },
  {
    name: "AADARSH SHRINIWAS",
    linkedin: "https://www.linkedin.com/in/aadarsh-shriniwas-512047227",
    image: AADARSH,
    role: "Third Year",
  },
  {
    name: "VAISHALI CHOUDHARY",
    linkedin: "https://www.linkedin.com/in/b-vaishali-choudhary-671075239",
    image: VAISHALI,
    role: "Third Year",
  },
  {
    name: "ADITI JOSHI",
    linkedin: "https://www.linkedin.com/in/aditi-joshi-5a260b229",
    image: ADITI,
    role: "Third Year",
  },
  {
    name: "MAYANK PANDEY",
    linkedin: "https://www.linkedin.com/in/mayank-pandey-1a16b7240",
    image: MAYANK,
    role: "Third Year",
  },

  {
    name: "BADAL",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: BADAL,
    role: "Third Year",
  },
  {
    name: "ARYAN",
    linkedin: "https://www.linkedin.com/in/aryan-kapoor-86535724b",
    image: ARYAN,
    role: "Third Year",
  },
  {
    name: "CHAITHRA H R",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: CHAITHRA,
    role: "Second Year",
  },
  {
    name: "KETAKI JOJANE",
    linkedin: "https://www.linkedin.com/in/ketaki-jojane-a030a7265",
    image: KETAKI,
    role: "Second Year",
  },
  {
    name: "OM",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: OM,
    role: "Second Year",
  },
  {
    name: "AISHWARYA ACHARYA P K",
    linkedin: "https://www.linkedin.com/in/aishwarya-acharya-pk-a9b661258",
    image: AISHWARYA,
    role: "Second Year",
  },
  {
    name: "MUDIT SHEKHAR",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: MUDIT,
    role: "Second Year",
  },
  {
    name: "NEETHU",
    linkedin: "https://www.linkedin.com/in/neethu-546b23264",
    image: NEETHU,
    role: "Second Year",
  },
  {
    name: "NM SAI LIKHITHA",
    linkedin: "https://www.linkedin.com/in/sailikhithanm",
    image: LIKHITHA,
    role: "Second Year",
  },
  {
    name: "VARSHA",
    linkedin: "https://www.linkedin.com/in/varsha-t-k-415b25264",
    image: VARSHA,
    role: "Second Year",
  },
  {
    name: "YATIN BHATIA",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: YATIN,
    role: "Second Year",
  },
  {
    name: "GURU SRISHA",
    linkedin: "https://www.linkedin.com/in/guru-srisha-45a699263/",
    image: GURU,
    role: "Second Year",
  },
  {
    name: "ANANYA C R",
    linkedin: "https://www.linkedin.com/in/c-r-ananya-71a052259",
    image: ANANYA,
    role: "Second Year",
  },
  {
    name: "Pavan J",
    linkedin: "https://www.linkedin.com/in/pavan-j-2a9965255/",
    image: Pavan,
    role: "Second Year",
  },
  {
    name: "Aditya Agarwal",
    linkedin: "https://www.linkedin.com/in/aditya-agarwal-3175ab259",
    image: Aditya_agr,
    role: "Second Year",
  },
  {
    name: "ABHISHEK",
    linkedin:
      "https://www.linkedin.com/in/abhishek-6640b42b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: ABHISHEK,
    role: "First Year",
  },
  {
    name: "Jahnvi Sharma ",
    linkedin: "",
    image: Jahnvi,
    role: "First Year",
  },
  {
    name: "Advaita Amrit ",
    linkedin:
      "https://www.linkedin.com/in/advaita-amrit?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Advaita,
    role: "First Year",
  },
  {
    name: "Pratik Gautam  ",
    linkedin:
      "https://www.linkedin.com/in/pratik-gautam-412b9029a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Pratik,
    role: "First Year",
  },
  {
    name: "Anaya Singh",
    linkedin: "",
    image: Anaya,
    role: "First Year",
  },
  {
    name: "Tarun S Muragodnavar ",
    linkedin: "https://www.linkedin.com/in/tarun-muragodnavar-40b80627b",
    image: Tarun,
    role: "First Year",
  },
  {
    name: "Aryan Kumar Sinha ",
    linkedin:
      "https://www.linkedin.com/in/abhishek-6640b42b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Aryan,
    role: "First Year",
  },
  {
    name: "SHASHANK H",
    linkedin:
      "https://www.linkedin.com/in/abhishek-6640b42b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: SHASHANK,
    role: "First Year",
  },
  {
    name: "Jishnu Khargharia",
    linkedin: "http://www.linkedin.com/in/jishnukhargharia",
    image: Jishnu,
    role: "First Year",
  },
  {
    name: "Kritika",
    linkedin: "https://www.linkedin.com/in/kritika-438581266",
    image: Kritika,
    role: "First Year",
  },
  {
    name: "Aditya Lochan",
    linkedin:
      "https://www.linkedin.com/in/aditya-lochan-a119a71a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Aditya,
    role: "First Year",
  },
  {
    name: "DHRUVA D ",
    linkedin:
      "https://www.linkedin.com/in/dhruva-d-7b40b0253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: DHRUVA,
    role: "First Year",
  },
];

const Team = () => {
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-slate-800 text-white z-50">
        <h2 className="text-3xl text-center font-bold tracking-tight text-white-900 sm:text-4xl ">
          Meet The Brains
        </h2>
        <div className="max-w-[1240px]  my-14 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8  ">
          {people.map((person, i) => (
            <div className="flex items-center justify-center" key={i}>
              <div className="max-w-xs w-[300px] hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <div className="bg-slate-300 shadow-xl rounded-lg py-3">
                  <div className="photo-wrapper p-2">
                    <img
                      className="w-32 h-32 rounded-full mx-auto"
                      src={person.image}
                      alt="image"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8 uppercase">
                      {person.name}
                    </h3>
                    <div className="text-center text-fuchsia-500 text-lg font-semibold">
                      <p
                        className=" bg-white text-transparent
                       bg-gradient-to-r
                        from-violet-600
                        to-indigo-600
                        bg-clip-text uppercase "
                      >
                        {person.role}
                      </p>{" "}
                    </div>
                    <table className="text-xs my-3">
                      <tbody></tbody>
                    </table>

                    <div className="flex justify-center text-center my-3">
                      <ExternalLink
                        className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                        href={person.linkedin}
                      >
                        <img src={insta} alt="linkdin" className="link-icon " />
                      </ExternalLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
