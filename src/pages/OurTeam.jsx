import { ExternalLink } from "react-external-link";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import UJJAWAL from "../../public/img/Fourth_year/Ujjawal_4yr.jpg";
import SHARANYA from "../../public/img/Fourth_year/SharanyaBhat.jpg";
import ASHUTOSH from "../../public/img/Fourth_year/Ashutosh Malviya.jpg";
import KUMAR from "../../public/img/Fourth_year/KumarHarsh.jpg";
import RISHAV from "../../public/img/Fourth_year/rishav.jpg";
import HARSH from "../../public/img/Fourth_year/Harsh Gaurav.jpg";
import LEKHANA from "../../public/img/Fourth_year/IMG_20230216_144211.jpg";
import NAMRATA from "../../public/img/Fourth_year/namrata.jpg";
import SIDDHANT from "../../public/img/Fourth_year/Siddhant Raj.jpeg";
import JATIN from "../../public/img/Fourth_year/Jatin.jpg";
import SURAJ from "../../public/img/Fourth_year/_Suraj Aribenchi.jpeg";
import VIVEK from "../../public/img/Fourth_year/Vivek M (EEE).jpg";
import AADARSH from "../../public/img/Fourth_year/Aadarsh Shriniwas.jpg";
import VAISHALI from "../../public/img/Fourth_year/B Vaishali Choudhary .jpg";
import ADITI from "../../public/img/Fourth_year/Aditi Joshi ECE.jpg";
import MAYANK from "../../public/img/Fourth_year/Mayank Pandey .jpg";
import BADAL from "../../public/img/Fourth_year/badal.jpeg";
import ARYAN from "../../public/img/Fourth_year/Aryan.jpg";
import CHAITHRA from "../../public/img/Third_year/_Chaithra HR , AIML.jpg";
import KETAKI from "../../public/img/Third_year/_Ketaki.jpg";
import OM from "../../public/img/Third_year/_Om .jpg";
import MUDIT from "../../public/img/Third_year/Mudit shekhar , EEE.jpg";
import AISHWARYA from "../../public/img/Third_year/Aishwarya Acharya.jpeg";
import NEETHU from "../../public/img/Third_year/Neethu.jpg";
import LIKHITHA from "../../public/img/Third_year/NM Sai Likhitha.jpg";
import YATIN from "../../public/img/Third_year/YATIN BHATIA.jpg";
import VARSHA from "../../public/img/Third_year/varsha.jpg";
import GURU from "../../public/img/Third_year/Guru Srisha.jpg";
import ANANYA from "../../public/img/Third_year/Ananya.jpg";
import Pavan from "../../public/img/Third_year/Pavan.jpeg";
import Aditya_agr from "../../public/img/Third_year/aditya agarwal.jpg";
import Jahnvi from "../../public/img/Second_year/_Jahnvi.jpeg";
import Advaita from "../../public/img/Second_year/Advaita Amrit.jpeg";
import Pratik from "../../public/img/Second_year/_Pratik Gautam.jpeg";
import Anaya from "../../public/img/Second_year/Anaya Singh.jpeg";
import Tarun from "../../public/img/Second_year/_Tarun Muragodnavar.jpg";
import Aryan from "../../public/img/Second_year/Aryan kumar Sinha.jpeg";
import SHASHANK from "../../public/img/Second_year/Shashank H.jpeg";
import Jishnu from "../../public/img/Second_year/jishnu.jpg";
import Kritika from "../../public/img/Second_year/Kritika.jpeg";
import Aditya from "../../public/img/Second_year/Aditya lochan.jpeg";
import DHRUVA from "../../public/img/Second_year/Dhruva D.jpeg";
import insta from "./../../public/img/link/link.png";
import Shravya from "../../public/img/Second_year/Shravya.jpg";
import RISHABH from "../../public/img/Second_year/_RISHABH SINGH.jpg";
import Yash from "../../public/img/Second_year/Yash Jadhav.jpg";
import PURBAYAN from "../../public/img/Third_year/_PURBAYAN BISWAS.jpg";
import VRITIKA from "./../../public/img/Third_year/VRITIKA VITHAL SAVUKAR.jpg";
const people = [
  {
    name: "JATIN SHARMA",
    linkedin: "https://www.linkedin.com/in/jatin-sharma-669590142",
    image: JATIN,
    role: "Chairman",
  },
  {
    name: "UJJAWAL SINGH ",
    linkedin: "https://www.linkedin.com/in/ujjawal-singh-4a4817229",
    image: UJJAWAL,
    role: "Vice-Chairman",
  },
  {
    name: "KUMAR HARSH",
    linkedin: "https://www.linkedin.com/in/kumar-harsh-39bb2b249",
    image: KUMAR,
    role: "Treasurer",
  },
  {
    name: "NAMRATA BHARADWAJ",
    linkedin: "https://www.linkedin.com/in/namratabharadwaj/",
    image: NAMRATA,
    role: "Treasurer",
  },
  {
    name: "SHARANYA BHAT",
    linkedin: "https://www.linkedin.com/in/sharanya-bhat-b2070a239",
    image: SHARANYA,
    role: "Web Dev Lead",
  },
  {
    name: "AADARSH SHRINIWAS",
    linkedin: "https://www.linkedin.com/in/aadarsh-shriniwas-512047227",
    image: AADARSH,
    role: "Android Dev Lead",
  },
  {
    name: "SIDDHANT RAJ",
    linkedin: "https://www.linkedin.com/in/siddhant-raj-3a804a2a9/",
    image: SIDDHANT,
    role: "Tech Lead",
  },
  {
    name: "ADITI JOSHI",
    linkedin: "https://www.linkedin.com/in/aditi-joshi-5a260b229",
    image: ADITI,
    role: "Photoshop Lead",
  },
  {
    name: "LEKHANA PATEL",
    linkedin: "https://www.linkedin.com/in/lekhana-patel-3b8986225",
    image: LEKHANA,
    role: "Digital Lead",
  },
  {
    name: "ASHUTOSH MALVIYA",
    linkedin: "https://www.linkedin.com/in/ashumalviya",
    image: ASHUTOSH,
    role: "Fourth Year",
  },

  {
    name: "RISHAV SHEKHAR",
    linkedin: "https://www.linkedin.com/in/rishav-shekhar-a21279232",
    image: RISHAV,
    role: "Fourth Year",
  },
  {
    name: "HARSH GAURAV",
    linkedin: "https://www.linkedin.com/in/harsh-gaurav-1434b624b",
    image: HARSH,
    role: "Fourth Year",
  },
  {
    name: "SURAJ ARIBENCHI",
    linkedin: "https://www.linkedin.com/in/suraj-aribenchi-9b5340239/",
    image: SURAJ,
    role: "Fourth Year",
  },
  {
    name: "VIVEK M",
    linkedin: "https://www.linkedin.com/in/vivekindev/",
    image: VIVEK,
    role: "Fourth Year",
  },

  {
    name: "VAISHALI CHOUDHARY",
    linkedin: "https://www.linkedin.com/in/b-vaishali-choudhary-671075239",
    image: VAISHALI,
    role: "Fourth Year",
  },

  {
    name: "MAYANK PANDEY",
    linkedin: "https://www.linkedin.com/in/mayank-pandey-1a16b7240",
    image: MAYANK,
    role: "Fourth Year",
  },

  {
    name: "BADAL PRAKASH NARAYAN",
    linkedin: "https://www.linkedin.com/in/badal-prakash-narayan-a68b5a239/",
    image: BADAL,
    role: "Fourth Year",
  },
  {
    name: "ARYAN",
    linkedin: "https://www.linkedin.com/in/aryan-kumar-86535724b/",
    image: ARYAN,
    role: "Fourth Year",
  },
  {
    name: "CHAITHRA H R",
    linkedin: "https://www.linkedin.com/in/chaithra-hr/",
    image: CHAITHRA,
    role: "Third Year",
  },
  {
    name: "KETAKI JOJANE",
    linkedin: "https://www.linkedin.com/in/ketaki-jojane/",
    image: KETAKI,
    role: "Third Year",
  },
  {
    name: "OM",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: OM,
    role: "Third Year",
  },
  {
    name: "AISHWARYA ACHARYA P K",
    linkedin: "https://www.linkedin.com/in/aishwarya-acharya-pk-a9b661258",
    image: AISHWARYA,
    role: "Third Year",
  },
  {
    name: "MUDIT SHEKHAR",
    linkedin: "https://www.linkedin.com/in/mudit-shekhar-339465331/",
    image: MUDIT,
    role: "Third Year",
  },
  {
    name: "NEETHU",
    linkedin: "https://www.linkedin.com/in/neethu-546b23264",
    image: NEETHU,
    role: "Third Year",
  },
  {
    name: "NM SAI LIKHITHA",
    linkedin: "https://www.linkedin.com/in/sailikhithanm",
    image: LIKHITHA,
    role: "Third Year",
  },
  {
    name: "VARSHA",
    linkedin: "https://www.linkedin.com/in/varsha-t-k-415b25264",
    image: VARSHA,
    role: "Third Year",
  },
  {
    name: "YATIN BHATIA",
    linkedin: "https://www.linkedin.com/in/yatin-bhatia-45682a250/",
    image: YATIN,
    role: "Third Year",
  },
  {
    name: "GURU SRISHA",
    linkedin: "https://www.linkedin.com/in/guru-srisha-45a699263/",
    image: GURU,
    role: "Third Year",
  },
  {
    name: "ANANYA C R",
    linkedin: "https://www.linkedin.com/in/c-r-ananya-71a052259",
    image: ANANYA,
    role: "Third Year",
  },
  {
    name: "Pavan J",
    linkedin: "https://www.linkedin.com/in/pavan-j-2a9965255/",
    image: Pavan,
    role: "Third Year",
  },
  {
    name: "Purbayan Biswas",
    linkedin:"https://www.linkedin.com/in/purbayan-biswas-49b767210/",
    image: PURBAYAN,
    role: "Third Year",
  },
  {
    name: "Aditya Agarwal",
    linkedin: "https://www.linkedin.com/in/aditya-agarwal-3175ab259",
    image: Aditya_agr,
    role: "Third Year",
  },
  {
    name: "Vritika Savukar ",
    linkedin: "https://www.linkedin.com/in/vritika-savukar-71885b266/",
    image: VRITIKA,
    role: "Third Year",
  },
  {
    name: "Jahnvi Sharma ",
    linkedin: "https://www.linkedin.com/in/jahnvi-sharma-41b877243/",
    image: Jahnvi,
    role: "Second Year",
  },
  {
    name: "Advaita Amrit ",
    linkedin:
      "https://www.linkedin.com/in/advaita-amrit/",
    image: Advaita,
    role: "Second Year",
  },
  {
    name: "Pratik Gautam  ",
    linkedin:
      "https://www.linkedin.com/in/pratik-gautam-412b9029a/",
    image: Pratik,
    role: "Second Year",
  },
  {
    name: "Anaya Singh",
    linkedin: "https://www.linkedin.com/in/anaya-singh-386140302/",
    image: Anaya,
    role: "Second Year",
  },
  {
    name: "Tarun S Muragodnavar ",
    linkedin: "https://www.linkedin.com/in/tarun-muragodnavar-40b80627b",
    image: Tarun,
    role: "Second Year",
  },
  {
    name: "Aryan Kumar Sinha ",
    linkedin:
      "https://www.linkedin.com/in/aryan-kumar-sinha-59b3aa2aa/",
    image: Aryan,
    role: "Second Year",
  },
  {
    name: "SHASHANK H",
    linkedin:
      "https://www.linkedin.com/in/shashank-h-27997b202/",
    image: SHASHANK,
    role: "Second Year",
  },
  {
    name: "Jishnu Khargharia",
    linkedin: "http://www.linkedin.com/in/jishnukhargharia",
    image: Jishnu,
    role: "Second Year",
  },
  {
    name: "Kritika",
    linkedin: "https://www.linkedin.com/in/kritika-438581266",
    image: Kritika,
    role: "Second Year",
  },
  {
    name: "Aditya Lochan",
    linkedin:
      "https://www.linkedin.com/in/aditya-lochan-a119a71a2/",
    image: Aditya,
    role: "Second Year",
  },
  {
    name: "DHRUVA D ",
    linkedin:
      "https://www.linkedin.com/in/dhruva-d-7b40b0253/",
    image: DHRUVA,
    role: "Second Year",
  },
  {
    name: "Shravya GS",
    linkedin:
      "https://www.linkedin.com/in/shravya-gs-572214302/",
    image: Shravya,
    role: "Second Year",
  },
  {
    name: "RISHABH SINGH",
    linkedin:
      "https://www.linkedin.com/in/rishabh-s-542b02271/",
    image: RISHABH,
    role: "Second Year",
  },
  {
    name: "Yash Jadhav",
    linkedin:
      "https://www.linkedin.com/in/yash-jadhav-7ba599264/",
    image: Yash,
    role: "Second Year",
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
