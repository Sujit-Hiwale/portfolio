"use client";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Trippy",
      desc: "A cross-platform travel and event planning application that enables users to create personalized trip itineraries, discover local events, manage travel budgets, and collaborate with other travelers through a unified platform.",
      link: "https://github.com/Sujit-Hiwale/trippy",
      image: "https://thriftynomads.com/wp-content/uploads/2016/07/shutterstock_293482196.jpg"
    },
    {
      title: "Automated Attendance System",
      desc: "An AI-powered attendance management system using face recognition to automatically record attendance, backed by a secure backend with real-time dashboards and detailed reporting features.",
      link: "https://github.com/Sujit-Hiwale/Automated-Attendance",
      image: "https://www.quest-me.com/wp-content/uploads/2024/09/5-KEY-BENEFITS-OF-A-SCHOOL-QUEUE-MANAGEMENT-SYSTEM-91.jpg"
    },
    {
      title: "Job Community Portal",
      desc: "A full-stack job marketplace platform connecting recruiters and job seekers, featuring advanced search and filtering, real-time notifications, role-based access, and integrated communication tools.",
      link: "https://github.com/Sujit-Hiwale/Job_Community_Portal",
      image: "https://thumbs.dreamstime.com/b/group-diverse-multiethnic-people-different-jobs-45366121.jpg"
    },
    {
      title: "HelpLink",
      desc: "A web-based social impact platform that allows users to request help or volunteer support, designed to efficiently connect individuals in need with volunteers through a centralized system.",
      link: "https://github.com/Sujit-Hiwale/helplink",
      image: "https://mindfulmethodsforlife.com/wp-content/uploads/2024/06/How-Helping-Others-Helps-Us.jpg"
    },
    {
      title: "Movie Booking System",
      desc: "A full-stack movie ticket booking application that enables users to browse movies and showtimes, book seats, and manage reservations, with an admin dashboard for theatres, scheduling, and revenue analytics.",
      link: "https://github.com/Sujit-Hiwale/Movie_Booking_System",
      image: "https://blog.cdn.cmarix.com/blog/wp-content/uploads/2020/03/Everything-About-Online-Movie-Ticket-Booking-App-and-Website-Development-02.png"
    },
    {
      title: "Mini Drone + Object Detection",
      desc: "An ESP32-CAM–based autonomous mini drone integrating onboard object detection using optimized edge AI models for real-time visual inference on constrained hardware.",
      image: "https://news.mit.edu/sites/default/files/images/201707/MIT-Minidrone.jpg"
    }
  ];

  return (
    <>
      <div className="h-32 md:h-40" style={{  paddingTop: "8rem" }}></div>

      <section
        id="projects"
        className="bg-[#0d0d0d] text-white mt-20 pt-40 pb-52 px-6 min-h-[130vh]"
      >
        <div className="max-w-[1200px] mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-20 
          bg-gradient-to-r from-[#61dafb] to-[#bb00ff] bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <br />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10 w-full">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
