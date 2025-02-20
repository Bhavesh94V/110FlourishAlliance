import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Infomative from "../ServicesDetails/Service-MiniSlider-Imgs/Infomative.jpg";
import blogimg1 from "../assets/imgs/Blog/blogimg1.jpg";
import blogimg2 from "../assets/imgs/Blog/blogimg2.jpg";
import blogimg3 from "../assets/imgs/Blog/blogimg3.jpg";
import blogimg4 from "../assets/imgs/Blog/blogimg4.jpg";
import blogimg5 from "../assets/imgs/Blog/blogimg5.jpg";
import blogimg6 from "../assets/imgs/Blog/blogimg6.jpg";
import img1 from "../assets/imgs/Blog/img1.jpg";
import img2 from "../assets/imgs/Blog/img2.jpg";
import img3 from "../assets/imgs/Blog/img3.jpg";
import {
  FaUniversity, FaBriefcase, FaPlane, FaBuilding, FaNewspaper,
  FaTicketAlt, FaComments, FaGlobe
} from "react-icons/fa";
import Footer from "../components/Footer";
import LogosSection from "../components/LogosSection ";


const BlogPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Set posts per page to 6 (to show 6 blogs per page)

  const tabs = [
    { name: "All", href: "#", current: activeTab === "All" },
    { name: "Company", href: "#", current: activeTab === "Company" },
    { name: "Success Stories", href: "#", current: activeTab === "Success Stories" },
  ];

  const featuredPost = {
    title: "Easiest Countries to Get a Study Visa in 2025",
    description:
      "Planning to study abroad? Discover the top countries with easy study visa approvals, low tuition fees, and high-quality education. Learn about eligibility, documentation, and visa success tips.",
    description2:
      "Planning to study abroad? Discover the top countries with easy study visa approvals, low tuition fees, and high-quality education. Learn about eligibility, documentation, and visa success tips. Find out which countries offer post-study work opportunities, scholarship programs, and the best student-friendly environments to help you make the right decision for your future. Explore the latest immigration policies, part-time job opportunities for international students, and tips on adapting to a new culture while studying abroad.",
    category: "Study Visa Trends",
    date: "Feb 4, 2025",
    image: Infomative,
  };


  const posts = [
    {
      id: 1,
      title1: "Reprehenderit laboris labore except",
      title: "Flourish Alliance",
      disc: "A study visa consultancy service assists individuals who wish to study abroad...",
      category: "Company",
      date: "Oct 19, 2022",
      image: blogimg1,
    },
    {
      id: 2,
      title1: "Ut labore elit incididunt incididunt",
      title: "Flourish Alliance",
      disc: "A study visa consultancy service assists individuals who wish to study abroad...",
      category: "Success Stories",
      date: "Oct 19, 2022",
      image: blogimg2,
    },
    {
      id: 3,
      title1: "Another Blog Post blog",
      title: "Flourish Alliance",
      disc: "A study visa consultancy service assists individuals who wish to study abroad...",
      category: "Success Stories",
      date: "Oct 20, 2022",
      image: blogimg3,
    },
    {
      id: 4,
      title1: "Blog Post 4",
      title: "Flourish Alliance",
      disc: "More blog content about study visa consultancy services...",
      category: "Company",
      date: "Oct 21, 2022",
      image: img3,
    },
    {
      id: 5,
      title1: "Blog Post 5",
      title: "Flourish Alliance",
      disc: "Another interesting blog post about trends in the industry...",
      category: "Success Stories",
      date: "Oct 22, 2022",
      image: img1,
    },
    {
      id: 6,
      title1: "Blog Post 5",
      title: "Flourish Alliance",
      disc: "Another interesting blog post about trends in the industry...",
      category: "Company",
      date: "Oct 22, 2022",
      image: img2,
    },
    {
      id: 7,
      title1: "Blog Post 4",
      title: "Flourish Alliance",
      disc: "More blog content about study visa consultancy services...",
      category: "Success Stories",
      date: "Oct 21, 2022",
      image: blogimg4,
    },
    {
      id: 8,
      title1: "Blog Post 5",
      title: "Flourish Alliance",
      disc: "Another interesting blog post about trends in the industry...",
      category: "Success Stories",
      date: "Oct 22, 2022",
      image: blogimg5,
    },
    {
      id: 9,
      title1: "Blog Post 5",
      title: "Flourish Alliance",
      disc: "Another interesting blog post about trends in the industry...",
      category: "Company",
      date: "Oct 22, 2022",
      image: blogimg6,
    },
  ];

  const filteredPosts =
    activeTab === "All" ? posts : posts.filter((post) => post.category === activeTab);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };



  const perks = [
    {
      icon: <FaUniversity className="text-2xl text-danger text-[28px]" />,
      title: "Study Visa Guidance",
      description: "Get step-by-step assistance on study visa applications, top universities, scholarships, and eligibility requirements.",
    },
    {
      icon: <FaBriefcase className="text-2xl text-danger text-[28px]" />,
      title: "Work Visa Assistance",
      description: "Expert guidance on securing a work visa, finding high-demand jobs, and understanding country-specific work permit rules.",
    },
    {
      icon: <FaPlane className="text-2xl text-danger text-[28px]" />,
      title: "Visitor & Tourist Visa",
      description: "Explore hassle-free tourist and visitor visa services to help you travel to your dream destinations smoothly.",
    },
    {
      icon: <FaBuilding className="text-2xl text-danger text-[28px]" />,
      title: "Business & Investment Visa",
      description: "Get expert advice on investment visas, business migration, and entrepreneurial opportunities abroad.",
    },
    {
      icon: <FaNewspaper className="text-2xl text-danger text-[28px]" />,
      title: "Immigration News & Updates",
      description: "Stay updated with the latest immigration laws, policy changes, and government regulations worldwide.",
    },
    {
      icon: <FaTicketAlt className="text-2xl text-danger text-[28px]" />,
      title: "Travel & Air Ticketing",
      description: "Book affordable international flights with our travel assistance and get exclusive travel deals.",
    },
    // {
    //   icon: <FaComments className="text-2xl text-danger text-[28px]" />,
    //   title: "Visa Interview Tips & Success Stories",
    //   description: "Learn from real visa success stories and get expert tips to crack your visa interview with confidence.",
    // },
    // {
    //   icon: <FaGlobe className="text-2xl text-danger text-[28px]" />,
    //   title: "PR & Citizenship Guidance",
    //   description: "Get expert advice on permanent residency (PR) and citizenship programs for top countries worldwide.",
    // },
  ];


  return (
    <div className="AboutPageMain md:mt-5 pt-5 bg-transparent" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="about-section-container mt-5">
        <div className="min-h-screen bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-danger display-3 mb-4 ms-9" style={{ fontWeight: '600' }}>
              Blogs and News
            </h3>
            <div className="my-12">
              <div className="relative overflow-hidden rounded-xl bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-bold text-gray-900">{featuredPost.title}</h2>
                      <p className="mt-4 text-gray-500">{featuredPost.description}</p>
                      <p className="mt-4 text-gray-500">{featuredPost.description2}</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center rounded-full bg-pink-50 px-2 py-1 text-xs font-medium text-pink-600">
                          {featuredPost.category}
                        </span>
                        <span className="ml-2 text-sm text-gray-500">{featuredPost.date}</span>
                      </div>
                    </div>
                  </div>
                  <img src={Infomative} alt="" />
                </div>
              </div>
            </div>

            <div className="flex w-full justify-between align-baseline my-8">
              <div className="text-center">
                <h1 className="text-4xl font-semibold text-gray-900">Blogs</h1>
              </div>

              {/* Tabs */}
              <div className="flex justify-center gap-2 px-4">
                {
                  tabs.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => handleTabClick(tab.name)}
                      className={`rounded-full px-2 py-0 text-sm font-medium transition-all duration-300 ${activeTab === tab.name ? "bg-danger text-white" : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                      {tab.name}
                    </button>
                  ))}
              </div>
            </div>

            <div className="container py-3 blog">
              {/* <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
                <h4 className="FromBlog">From Blog</h4>
                <h1 className="mb-2 BlogMainTitle BlogTitle">News And Updates</h1>
                <p className="mb-0 text-start">Discover a world where ideas ignite, stories inspire, and knowledge transforms...</p>
              </div> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  displayedPosts.map((blog, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-xl shadow-lg blog-item"
                    >
                      <div className="blog-img">
                        <img src={blog.image} className="w-full h-full object-cover" alt={`Blog ${index + 1}`} />
                        <div className="blog-categiry py-2 px-4">
                          <span>{blog.category}</span>
                        </div>
                      </div>
                      <div className="blog-content p-4">
                        <div className="flex justify-between mb-3 text-[22px] text-[#B21E24]">
                          <h3>{blog.title}</h3>
                          <span className="text-[16px]"><i className="fa fa-calendar text-[#B21E24]"></i> {blog.date}</span>
                        </div>
                        <Link to="#" className="h4 d-inline-block mb-3 text-lg font-bold text-gray-900 hover:text-indigo-600">
                          {blog.title}
                        </Link>
                        <p className="mb-3 text-gray-600">{blog.disc}</p>
                        <Link to={`/Blog/${blog.id}`} className="btn  liquid border-[#B21E24] border-2 font-semibold"> Read More <i className="fa fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <button
                className={`rounded-lg p-2 ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-gray-700"}`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                ◀
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`rounded-lg px-3 py-2 text-sm ${currentPage === index + 1 ? "bg-danger text-white" : "text-gray-500 hover:text-gray-700"
                    }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={`rounded-lg p-2 ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-gray-700"
                  }`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                ▶
              </button>
            </div>

          </div>
        </div>
      </div>



      <div className="py-5 flex flex-col justify-center items-center bg-[#B21E24] p-4">
        <h1 className="text-white text-4xl font-bold mb-6">Perks</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {
            perks.map((perk, index) => (
              <div
                key={index}
                className="bg-white hover:scale-95 transition-all rounded-2xl shadow-lg p-6 flex flex-col items-start"
              >
                <div className="mb-4">{perk.icon}</div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{perk.title}</h2>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))
          }
        </div>
      </div>

      <LogosSection></LogosSection>
      <Footer></Footer>

    </div>
  );
};

export default BlogPage;
