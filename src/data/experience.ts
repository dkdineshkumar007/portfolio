export const experienceData = [
  {
    id: 1,
    company: "iCustomer",
    position: "Fullstack Engineer",
    duration: "July 2025 - Present",
    location: "India",
    type: "Full-time",
    description: "Building AI-native enterprise products for marketing automation — a PLG platform serving marketers and an autonomous decisioning application powered by multi-agent systems.",
    responsibilities: [
      "Architected multi-agent systems using Mastra AI to automate customer journey workflows, reducing manual intervention by 40%",
      "Built and launched a PLG (Product-Led Growth) platform currently serving 300+ active users",
      "Developing an autonomous AI decisioning platform using NestJS microservices with OODA loop architecture (Observe, Orient, Decide, Act)",
      "Implemented CRM and marketing integrations with Klaviyo, Google Ads, Meta Ads, LinkedIn Ads, and Apollo for audience activation",
      "Built event-driven microservices using RabbitMQ message queues for async signal processing and job orchestration",
      "Built data enrichment pipelines to enrich incomplete audience lists with third-party data sources",
      "Designed React-based Human-in-the-loop interfaces allowing users to verify and edit AI reasoning steps in real-time",
      "Actively mentoring interns in fullstack and AI development, continuing a training tradition from previous role"
    ],
    technologies: ["NestJS", "Next.js", "React.js", "Node.js", "TypeScript", "PostgreSQL", "RabbitMQ", "Redis", "Mastra AI", "AWS S3", "Socket.io", "Klaviyo API", "Google Ads API", "Meta Ads API", "LinkedIn Ads API"],
    achievements: [
      "Launched PLG platform serving 300+ active users",
      "Reduced manual customer journey interventions by 40% through AI multi-agent automation",
      "Architected and built end-to-end autonomous AI decisioning OS with OODA loop orchestration",
      "Mentoring interns in fullstack and AI development — continuing the intern training journey beyond Aroopa"
    ]
  },
  {
    id: 2,
    company: "Aroopa Technologies Pvt Ltd",
    position: "Associate Software Developer",
    duration: "July 2024 - July 2025",
    location: "India",
    type: "Full-time",
    description: "Leading full-stack development initiatives and mentoring junior developers while working on complex enterprise solutions.",
    responsibilities: [
      "Developed and maintained web applications using React.js, React Redux, Node.js, and Express.js",
      "Designed and implemented responsive user interfaces with React.js and Tailwind CSS",
      "Integrated React Redux for state management and implemented actions, reducers, and selectors",
      "Utilized AG Grid extensively to implement advanced data table functionalities such as sorting, filtering, and pagination",
      "Developed an integrated solution for Inventory Management, Warehouse Management, and Orders Management",
      "Implemented features for managing inventory, tracking shipments, and generating packing lists",
      "Developed features for order creation, order status tracking, and generating order reports",
      "Integrated PostgreSQL with the web application backend, ensuring seamless data flow and synchronization",
      "Utilized PostgreSQL database for data management and incorporated trigger functions and advanced queries for enhanced functionality",
      "Conducted code reviews, identified and fixed bugs, and improved application performance by 30%",
      "Trained and mentored 25 interns — structured onboarding, code reviews, and hands-on project guidance",
      "Utilized Git for version control, Azure Repos for repository management, and Azure DevOps for CI/CD pipelines",
      "Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "React Redux", "Tailwind CSS", "AG Grid", "Azure DevOps", "Git"],
    achievements: [
      "Successfully delivered multiple enterprise-level modules",
      "Improved application performance by 30%",
      "Trained and mentored 25 interns, guiding them from onboarding to production contributions",
      "Led code review processes ensuring high code quality standards"
    ]
  },
  {
    id: 3,
    company: "Aroopa Technologies Pvt Ltd",
    position: "Full Stack Developer Intern",
    duration: "March 2023 - June 2024",
    location: "India",
    type: "Internship",
    description: "Started as an intern and quickly progressed to handling complex full-stack development tasks across multiple project modules.",
    responsibilities: [
      "Developed and maintained web applications using React.js, React Redux, Node.js, and Express.js",
      "Designed responsive user interfaces with modern CSS frameworks",
      "Implemented state management solutions using React Redux",
      "Worked with PostgreSQL for database operations and query optimization",
      "Participated in code reviews and followed best practices for software development",
      "Collaborated with senior developers to understand project requirements",
      "Contributed to multiple project modules including inventory and order management systems"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "React Redux", "HTML", "CSS", "JavaScript"],
    achievements: [
      "Successfully completed internship with excellent performance",
      "Contributed to major project modules",
      "Promoted to full-time Associate Developer role"
    ]
  }
];


export const projectModules = [
  {
    id: 1,
    name: "Purchase Order Module",
    type: "Bulk PO and Dropship PO",
    description: "Implemented features for creating, managing, and tracking purchase orders, ensuring seamless procurement processes.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "AG Grid"],
    features: [
      "Bulk purchase order creation",
      "Dropship purchase order management",
      "Order tracking and status updates",
      "Automated procurement workflows"
    ]
  },
  {
    id: 2,
    name: "Catalog Module",
    type: "Advanced Products Management",
    description: "Implemented features for managing single products and kit products, allowing efficient inventory stock management with multiple warehouse locations.",
    technologies: ["React.js", "PostgreSQL", "AG Grid"],
    features: [
      "Single and kit product management",
      "Multi-warehouse inventory tracking",
      "Available quantity monitoring",
      "Reserved quantity management"
    ]
  },
  {
    id: 3,
    name: "Inventory Module",
    type: "Multi-location Inventory Management",
    description: "Implemented inventory across different warehouse locations with features to add, remove, and move inventory between locations.",
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    features: [
      "Multi-location inventory tracking",
      "Inventory movement between warehouses",
      "Real-time stock updates",
      "Inventory audit trails"
    ]
  },
  {
    id: 4,
    name: "Supplier Module",
    type: "Supplier Management System",
    description: "Efficient management of both SPS (Strategic Preferred Suppliers) and non-SPS suppliers with comprehensive supplier information maintenance.",
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    features: [
      "SPS and non-SPS supplier categorization",
      "Supplier information management",
      "Supplier performance tracking",
      "Supplier communication tools"
    ]
  },
  {
    id: 5,
    name: "Shipment Module",
    type: "Shipment Creation and Management",
    description: "Creating and managing shipments for purchase orders with comprehensive tracking capabilities.",
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    features: [
      "Shipment creation for purchase orders",
      "Shipment tracking and monitoring",
      "Delivery status updates",
      "Shipment documentation"
    ]
  },
  {
    id: 6,
    name: "Picking List Module",
    type: "Interactive Picking System",
    description: "Developed a real-time and interactive UI guiding users to the best locations for picking products using live user and product location data on a 2D layout.",
    technologies: ["React.js", "Real-time APIs", "2D Mapping"],
    features: [
      "Real-time location tracking",
      "Interactive 2D warehouse layout",
      "Optimized picking routes",
      "Live inventory location updates"
    ]
  },
  {
    id: 7,
    name: "Shipping Module",
    type: "Multi-carrier Shipping Integration",
    description: "Implemented shipping label and invoice generation through multiple shipping service integrations, including UPS, USPS, and FedEx.",
    technologies: ["React.js", "Node.js", "UPS API", "USPS API", "FedEx API"],
    features: [
      "Multi-carrier shipping integration",
      "Automated label generation",
      "Invoice creation and management",
      "Shipping cost calculation"
    ]
  },
  {
    id: 8,
    name: "Dropship Module",
    type: "Advanced Order Processing",
    description: "Developed functionalities for split and combined order dropship processing with complex order management capabilities.",
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    features: [
      "Split order processing",
      "Combined order management",
      "Dropship automation",
      "Order fulfillment tracking"
    ]
  },
  {
    id: 9,
    name: "Order Management",
    type: "Multi-channel Integration",
    description: "Integrated order fetching from multiple sales channels such as Amazon, Shopify, and Walmart, along with seamless import and synchronization.",
    technologies: ["React.js", "Node.js", "Amazon API", "Shopify API", "Walmart API"],
    features: [
      "Multi-channel order integration",
      "Automated order synchronization",
      "Order status management",
      "Cross-platform inventory sync"
    ]
  },
  {
    id: 10,
    name: "PLG Platform",
    type: "Product-Led Growth for Marketers",
    description: "Built a full-featured Product-Led Growth platform for marketers, serving 300+ active users, with audience segmentation, multi-platform ad activation, and data enrichment pipelines.",
    technologies: ["Next.js", "React.js", "Node.js", "PostgreSQL", "Redis", "TypeScript", "Klaviyo API", "Google Ads API", "Meta Ads API"],
    features: [
      "Audience segmentation and cohort management",
      "Multi-platform ad account activation (Google, Meta, LinkedIn)",
      "Data enrichment pipelines for incomplete audience lists",
      "Real-time analytics dashboard with multi-channel insights"
    ]
  },
  {
    id: 11,
    name: "Decision OS",
    type: "Autonomous AI Decisioning Platform",
    description: "Architected an AI-native decisioning platform for marketers using OODA loop architecture — multi-agent systems observe signals, orient context, decide actions, and execute autonomously.",
    technologies: ["NestJS", "Mastra AI", "RabbitMQ", "PostgreSQL", "Redis", "Socket.io", "TypeScript", "AWS S3"],
    features: [
      "Multi-agent orchestration using Mastra AI with persistent memory",
      "OODA loop: real-time signal ingestion, pattern detection, LLM-based decisioning",
      "Human-in-the-loop React UI for reviewing and editing AI reasoning steps",
      "Event-driven microservices with RabbitMQ for async signal processing"
    ]
  },
  {
    id: 12,
    name: "Audience Intelligence Hub",
    type: "Multi-Platform Audience Management",
    description: "Built the integrations service powering a unified audience intelligence layer — connecting CRM, ad platforms, email tools, and B2B prospecting APIs into a single activation surface.",
    technologies: ["Express.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Klaviyo API", "Apollo API", "LinkedIn Ads API", "Meta Ads API"],
    features: [
      "14+ platform integrations: LinkedIn, Meta, Google, Reddit, Klaviyo, Apollo, Mailshake",
      "Unified token management and data synchronization across platforms",
      "CSV import/export and bulk audience activation workflows",
      "Webhook handling and rate-limited API access management"
    ]
  }
];
