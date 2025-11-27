"use client";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Trippy",
      desc: "Trippy is a cross-platform travel and event-planning app that lets users plan personalized trips, discover local events, track budgets and coordinate with like-minded travelers — all in one unified platform.",
      link: "https://github.com/Sujit-Hiwale/trippy",
      image: "https://thriftynomads.com/wp-content/uploads/2016/07/shutterstock_293482196.jpg"
    },
    {
      title: "Automated Attendance System",
      desc: "Face recognition-based attendance tracking with secure backend, real-time dashboards, and comprehensive reporting.",
      link: "https://github.com/Sujit-Hiwale/Automated-Attendance",
      image: "https://www.quest-me.com/wp-content/uploads/2024/09/5-KEY-BENEFITS-OF-A-SCHOOL-QUEUE-MANAGEMENT-SYSTEM-91.jpg"
    },
    {
      title: "Job Community Portal",
      desc: "Full-stack job marketplace connecting recruiters and candidates with advanced search, real-time chat, and notifications.",
      link: "https://github.com/Sujit-Hiwale/Job_Community_Portal",
      image: "https://thumbs.dreamstime.com/b/group-diverse-multiethnic-people-different-jobs-45366121.jpg"
    },
    {
      title: "HelpLink",
      desc: "HelpLink is a web-app that allows users to request and offer help via a centralised platform — making it easier to connect people in need with volunteers or supporters.",
      link: "https://github.com/Sujit-Hiwale/helplink",
      image: "https://mindfulmethodsforlife.com/wp-content/uploads/2024/06/How-Helping-Others-Helps-Us.jpg"
    },
    {
      title: "Movie Booking System",
      desc: "Movie Booking System is a web app where users can browse movies, showtimes, and book tickets, while admins can manage movies, theatres, and bookings. It also provides a dashboard to track analytics like bookings and revenue.",
      link: "https://github.com/Sujit-Hiwale/Movie_Booking_System",
      image: "https://blog.cdn.cmarix.com/blog/wp-content/uploads/2020/03/Everything-About-Online-Movie-Ticket-Booking-App-and-Website-Development-02.png"
    },
    {
      title: "Mini Drone + Object Detection",
      desc: "ESP32-CAM powered autonomous drone with onboard object detection using optimized edge AI models.",
      image: "https://news.mit.edu/sites/default/files/images/201707/MIT-Minidrone.jpg"
    }
  ];

  return (
    <>
      {/* FORCE TOP SPACE (cannot be overridden) */}
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
