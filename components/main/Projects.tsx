import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-20">
        <ProjectCard
          src="/project-portfolio.png"
          title="Modern Next.js Portfolio Website"
          description="Designed and developed a dynamic portfolio website to showcase my professional achievements, projects, and expertise.Implemented sleek and user-friendly design principles to enhance user experience and engagement."
          keywords="Next.Js, Framer Motion, Tailwind CSS"
          github="https://github.com/sksunil0608/my-portfolio"
        />
        <ProjectCard
          src="/project-vchat.png"
          title="VChat-Connect with your loved ones"
          description="Developed a real time chat application where user can send message and attachments.Incorporated load balancing techniques to ensure optimal performance integrated message archiving system for seamless user experience."
          keywords="NodeJs, ReactJs, Sequelize, Express.JS, Socket.IO, Typescript, Tailwind CSS, JWT, Axios, CronJobs,AWS"
          github="https://github.com/sksunil0608/chatapp"
        />
        <ProjectCard
          src="/project-expense-tracker.png"
          title="Expense Tracker - Track your daily expenses"
          description="Developed Expense Tracker app where user can track and manage their expenses. Implemented premium feature in it, user can pay using razorpay and enjoy premium feature. Know your expenses."
          keywords="NodeJS, Express.JS, MongoDB, HTML, CSS, Javascript, Bootstrap, Axios, Sendgrid, JWT, Razorpay API, Jenkins, AWS"
          github="https://github.com/sksunil0608/ExpenseTracker"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project-tick-tack-toe.png"
          title="Tick-Tack-Toe Game - Have Dare to win"
          description="Tic-tac-toe is an instance of an m,n,k-game, where two players alternate taking turns on an m×n board until one of them gets k in a row. It is a very famous mathematical puzzle game."
          keywords="ReactJS"
          github="https://tic_tac_toe_game_sksunil0608.surge.sh"
        />
        <ProjectCard
          src="/project-shopping-website.png"
          title="Shopping Website"
          description="Shopping website project is a website to showcase your products. User can add, edit, or delete the products to cart and buy it."
          keywords="NodeJS, MongoDB, CRUD Operaitons, Typescript"
          github="NA"
        />
        <ProjectCard
          src="/project-seller-dashboard.png"
          title="Seller Admin Dashboard"
          description="Seller admin dashboard is a very basic website where seller can add the products and it will show in the website. Basic CRUD operations are used in this project."
          keywords="HTML, CSS, Javascript, Axios, REST API"
          github="NA"
        />
      </div>
    </div>
  );
};

export default Projects;
