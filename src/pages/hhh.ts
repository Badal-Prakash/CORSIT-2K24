import { ExternalLink } from "react-external-link";
import { FaLinkedinIn } from "react-icons/fa";

const people = [
  {
    id: 1,
    name: "OJAS SANGRA",
    linkedin: "https://www.linkedin.com/in/ojas-sangra-942351220",
    image: "./../../public/img/IMG_20230210_200320.jpg",
    role: "Chairman",
  },
  {
    id: 2,
    name: "ASHISH MAHANTH",
    linkedin: "https://www.linkedin.com/in/ashish-mahanth-887b0721b",
    image: "./../../public/img/Ashish.jpg",
    role: "Vice Chairman",
  },
  {
    name: "ADITYA DUBEY",
    linkedin: "https://www.linkedin.com/in/aditya-dubey-18927b152/",
    image: "./../../public/img/AdityaD.jpg",
    role: "Treasurer",
  },

  {
    name: "SAMEER KUMAR",
    linkedin: "https://www.linkedin.com/in/sameer-shetty-478481217",
    image: "./../../public/img/sameer.jpg",
    role: "Tech Lead",
  },

  {
    name: "KUNAL",
    linkedin: "https://www.linkedin.com/in/kunal-chanda-104a63226",
    image: "./../../public/img/Kunal.jpg",
    role: "Forth Year",
  },
  {
    name: "TANNISHTHA NANDY",
    linkedin: "https://www.linkedin.com/in/tannistha-nandy-22b8401b9",
    image: "./../../public/img/Tannistha Nandy .jpg",
    role: "Forth Year",
  },

  {
    name: "YASHASWINI",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./../../public/img/YashaswiniK_1.jpg",
    role: "Forth Year",
  },
  {
    name: "AYUSHMAN SHARMA",
    linkedin: "https://www.linkedin.com/in/ayushman-sharma-b43623213/",
    image: "./../../public/img/AyushmanSharma.jpeg",
    role: "Forth Year",
  },
  {
    name: "JEEVITHA",
    linkedin: "https://www.linkedin.com/in/jeevitha-k-a-744405229",
    image: "./../../public/img/1si20ec039_jeevitha.jpg",
    role: "Forth Year",
  },
  {
    name: "UJJAWAL SINGH ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./../../public/img/UJJAWALSINGH.png",
    role: "Treasurer",
  },
  {
    name: "SHARANYA BHAT",
    linkedin: "https://www.linkedin.com/in/sharanya-bhat-b2070a239",
    image: "../../../public/img/SharanyaBhat.jpg",
    role: "Third Year",
  },
  {
    name: "ASHUTOSH MALVIYA",
    linkedin: "https://www.linkedin.com/in/ashumalviya",
    image: "../../../public/img/Ashutosh Malviya.jpg",
    role: "Third Year",
  },
  {
    name: "KUMAR HARSH",
    linkedin: "https://www.linkedin.com/in/kumar-harsh-39bb2b249",
    image: "../../../public/img/KumarHarsh.jpg",
    role: "Third Year",
  },
  {
    name: "RISHAV SHEKHAR",
    linkedin: "https://www.linkedin.com/in/rishav-shekhar-a21279232",
    image: "../../../public/img/rishav.jpg",
    role: "Third Year",
  },
  {
    name: "HARSH GAURAV",
    linkedin: "https://www.linkedin.com/in/harsh-gaurav-1434b624b",
    image: "../../../public/img/Harsh Gaurav.jpg",
    role: "Third Year",
  },
  {
    name: "LEKHANA PATEL",
    linkedin: "https://www.linkedin.com/in/lekhana-patel-3b8986225",
    image: "../../../public/img/IMG_20230216_144211.jpg",
    role: "Third Year",
  },
  {
    name: "NAMRATA BHARADWAJ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "../../../public/img/namrata.jpg",
    role: "Third Year",
  },
  {
    name: "SIDDHANT RAJ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "../../../public/img/SIDDHANT RAJ.jpg",
    role: "Third Year",
  },
  {
    name: "JATIN SHARMA",
    linkedin: "https://www.linkedin.com/in/jatin-sharma-669590142",
    image: "../../../public/img/JATIN SHARMA (1).jpg",
    role: "Third Year",
  },
  {
    name: "SURAJ ARIBENCHI",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "../../../public/img/Suraj Aribenchi.jpg",
    role: "Third Year",
  },
  {
    name: "VIVEK M",
    linkedin: "https://www.linkedin.com/in/vivekinnovator",
    image: "../../../public/img/Vivek M (EEE).jpg",
    role: "Third Year",
  },
  {
    name: "AADARSH SHRINIWAS",
    linkedin: "https://www.linkedin.com/in/aadarsh-shriniwas-512047227",
    image: "../../../public/img/Aadarsh.jpeg.jpg",
    role: "Third Year",
  },
  {
    name: "VAISHALI CHOUDHARY",
    linkedin: "https://www.linkedin.com/in/b-vaishali-choudhary-671075239",
    image: "../../../public/img/B Vaishali Choudhary .jpg",
    role: "Third Year",
  },
  {
    name: "ADITI JOSHI",
    linkedin: "https://www.linkedin.com/in/aditi-joshi-5a260b229",
    image: "../../../public/img/Aditi Joshi ECE.jpg",
    role: "Third Year",
  },
  {
    name: "MAYANK PANDEY",
    linkedin: "https://www.linkedin.com/in/mayank-pandey-1a16b7240",
    image: "../../../public/img/Mayank Pandey .jpg",
    role: "Third Year",
  },

  {
    name: "BADAL",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "../../../public/img/badal.jpeg",
    role: "Third Year",
  },
  {
    name: "ARYAN",
    linkedin: "https://www.linkedin.com/in/aryan-kapoor-86535724b",
    image: "../../../public/img/Aryan.jpg",
    role: "Third Year",
  },
  {
    name: "CHAITHRA H R",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "../../../public/img/_Chaithra HR , AIML.jpg",
    role: "Second Year",
  },
  {
    name: "KETAKI JOJANE",
    linkedin: "https://www.linkedin.com/in/ketaki-jojane-a030a7265",
    image: "../../../public/img/Ketaki.jpg",
    role: "Second Year",
  },
  {
    name: "OM",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "../../../public/img/_Om .jpg",
    role: "Second Year",
  },
  {
    name: "AISHWARYA ACHARYA P K",
    linkedin: "https://www.linkedin.com/in/aishwarya-acharya-pk-a9b661258",
    image: "../../../public/img/Aishwarya Acharya PK ,ISE.jpg",
    role: "Second Year",
  },
  {
    name: "MUDIT SHEKHAR",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "../../../public/img/Mudit shekhar , EEE.jpg",
    role: "Second Year",
  },
  {
    name: "NEETHU",
    linkedin: "https://www.linkedin.com/in/neethu-546b23264",
    image: "../../../public/img/Neethu.jpg",
    role: "Second Year",
  },
  {
    name: "NM SAI LIKHITHA",
    linkedin: "https://www.linkedin.com/in/sailikhithanm",
    image: "../../../public/img/NM Sai Likhitha.jpg",
    role: "Second Year",
  },
  {
    name: "VARSHA",
    linkedin: "https://www.linkedin.com/in/varsha-t-k-415b25264",
    image: "../../../public/img/varsha.jpg",
    role: "Second Year",
  },
  {
    name: "YATIN BHATIA",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "../../../public/img/YATIN BHATIA.jpg",
    role: "Second Year",
  },
  {
    name: "GURU SRISHA",
    linkedin: "https://www.linkedin.com/in/guru-srisha-45a699263/",
    image: "../../../public/img/Guru Srisha.jpg",
    role: "Second Year",
  },
  {
    name: "ANANYA C R",
    linkedin: "https://www.linkedin.com/in/c-r-ananya-71a052259",
    image: "../../../public/img/Ananya.jpg",
    role: "Second Year",
  },
];

const Team = () => {
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-slate-900 text-white z-50">
        <h2 className="text-3xl text-center font-bold tracking-tight text-white-900 sm:text-4xl ">
          Our Team
        </h2>
        <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-3 gap-8 ">
          {people.map((person, i) => (
            // eslint-disable-next-line react/jsx-key
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-slate-600 ">
              <img
                key={i}
                className="aspect-square obje w-70 h-56 rounded-xl mx-auto mt-[-3rem] bg-white object-cover "
                src={person.image}
                alt="/"
              />
              <h2 className="text-xl font-semibold text-center py-6">
                {person.name}
              </h2>
              <ExternalLink
                className="flex text-blue-700 justify-center"
                href={person.linkedin}
              >
                <FaLinkedinIn size={30} />
              </ExternalLink>
              <div className="text-center font-medium">
                <p className="  py-2 border-b mx-8 mt-3">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
