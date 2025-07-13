export const skillsData = {
  languages: [
    { name: "JavaScript", level: 95, icon: "SiJavascript" },
    { name: "TypeScript", level: 85, icon: "SiTypescript" },
    { name: "C Programming", level: 80, icon: "SiC" },
    { name: "Java", level: 70, icon: "SiJava" },
    { name: "Python", level: 65, icon: "SiPython" }
  ],
  frontend: [
    { name: "React.js", level: 95, icon: "SiReact" },
    { name: "Next.js", level: 90, icon: "SiNextdotjs" },
    { name: "React Redux", level: 90, icon: "SiRedux" },
    { name: "HTML5", level: 95, icon: "SiHtml5" },
    { name: "CSS3", level: 90, icon: "SiCss3" },
    { name: "Tailwind CSS", level: 95, icon: "SiTailwindcss" },
    { name: "AG Grid", level: 85, icon: "SiDatadog" }
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "SiNodedotjs" },
    { name: "Express.js", level: 90, icon: "SiExpress" },
    { name: "REST APIs", level: 85, icon: "SiPostman" },
    { name: "GraphQL", level: 70, icon: "SiGraphql" }
  ],
  databases: [
    { name: "PostgreSQL", level: 90, icon: "SiPostgresql" },
    { name: "MongoDB", level: 75, icon: "SiMongodb" },
    { name: "MySQL", level: 80, icon: "SiMysql" },
    { name: "Redis", level: 65, icon: "SiRedis" }
  ],
  cloud: [
    { name: "Microsoft Azure", level: 50, icon: "SiMicrosoftazure" },
    { name: "AWS", level: 50, icon: "SiAmazonaws" },
    { name: "Docker", level: 50, icon: "SiDocker" },
    { name: "Azure DevOps", level: 50, icon: "SiAzuredevops" },
    { name: "CI/CD", level: 50, icon: "SiGithubactions" }
  ],
  tools: [
    { name: "Git", level: 90, icon: "SiGit" },
    { name: "GitHub", level: 90, icon: "SiGithub" },
    { name: "VS Code", level: 95, icon: "SiVisualstudiocode" },
    { name: "Postman", level: 85, icon: "SiPostman" },
    { name: "MongoDB Compass", level: 80, icon: "SiMongodb" },
    { name: "PgAdmin", level: 85, icon: "SiPostgresql" },
    { name: "HeidiSQL", level: 75, icon: "SiMysql" }
  ]
};

export const skillCategories = [
  {
    title: "Languages",
    skills: skillsData.languages,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frontend",
    skills: skillsData.frontend,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Backend",
    skills: skillsData.backend,
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Databases",
    skills: skillsData.databases,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cloud & DevOps",
    skills: skillsData.cloud,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Tools",
    skills: skillsData.tools,
    color: "from-pink-500 to-rose-500"
  }
];
