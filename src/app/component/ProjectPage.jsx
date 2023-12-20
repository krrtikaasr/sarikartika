"use client";
import React, { useState } from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";

const projectData = [
    {
      id: 1,
      title: "MIT App Inventor",
      description: "My first project was making an App, and I made a classical music topic with several famous figures and description, quiz, and my social medias.",
      image: "/assets/project/mit_app.jpg",
      tag: ["All", "Mobile"],
    },
    {
      id: 2,
      title: "HTML, CSS, JavaScript E-Commerce Website",
      description: "I made this project at a bootcamp. I took the theme of the website as a patisserie. It contains Home Page where the favourite menu are displayed, and the promos that were available. and there are order form, and a page where I describe myself.",
      image: "/assets/project/kartini_patisserie.jpg",
      tag: ["All", "Web"],
    },
    {
      id: 3,
      title: "Scratch Quiz Game",
      description: "This is scratch mini quiz game, where the topic is general knowledge, and have 5 questions. Each questions that were answered correctly will get point 10+, otherwise the point will reduced by 10.",
      image: "/assets/project/scratch_timedoor.jpg",
      tag: ["All", "Web"],
    },
    {
      id: 4,
      title: "HTML, CSS, JavaScript Portfolio",
      description: "This is my 4th project from school, I created this website to introduce myself to my teacher in the Entrepreneurship subject and Web and Mobile Device Programming.",
      image: "/assets/project/portfolio_pribadi.jpg",
      tag: ["All", "Web"],
    },
    {
      id: 5,
      title: "Cinema XXI",
      description: "This is the first group project I got in Web and Mobile Device Programming subject. It has 4 pages, which was contained Home Page that I made, Cafe menus, Order Form, and my team profile.",
      image: "/assets/project/cinema_xxi.jpg",
      tag: ["All", "Web"],
    },
    {
      id: 6,
      title: "UI/UX Design Figma Language Learning App",
      description: "This is my second project in Entrepreneurship subject, which I created an Application design. I took the theme of this application as a language learning app. It has 4 different languages, they are Germany, English, French, and Japanese. I used Figma to make it, and it has 63 frames.",
      image: "/assets/project/figma_pkk.jpg",
      tag: ["All", "Mobile"],
    },
];

// Di komponen ProjectPage
const ProjectPage = () => {
  const [tag, setTag] = useState ("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectData.filter((project) =>
    project.tag.includes(tag)
  );
    return (
      <section id='projects'>
       <h2 className='text-center text-4xl text-white mt-4 font-bold '>My Projects</h2>
       <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"} 
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag === "Web"} 
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Mobile" 
            isSelected={tag === "Mobile"} 
          />
       </div>
       <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProject.map((project) => (
          <ProjectCards 
          key={project.id} 
          title={project.title} 
          description={project.description} 
          image={project.image} 
          />
        ))}
        </div>
      </section>
    );
  };
  
export default ProjectPage;