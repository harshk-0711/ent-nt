let jobData = {
  job_roles: [
    {
      role: "Software Engineer",
      description: "Responsible for developing and maintaining software applications.",
      applicants: [
        {
          name: "Aarav Sharma",
          applied_date: "2024-01-10",
          email_id: "aarav.sharma@example.in",
          contact_no: "1234567890",
          status: "Shortlisted",
          skills: ["Java", "Spring Boot", "Microservices"],
          experience: "3 years"
        },
        {
          name: "Bhavna Patel",
          applied_date: "2024-01-12",
          email_id: "bhavna.patel@example.in",
          contact_no: "2345678901",
          status: "Interview Scheduled",
          skills: ["JavaScript", "React", "Node.js"],
          experience: "4 years"
        }
      ]
    },
    {
      role: "Data Scientist",
      description: "Analyzes and interprets complex data to help organizations make informed decisions.",
      applicants: [
        {
          name: "Chirag Mehta",
          applied_date: "2024-02-01",
          email_id: "chirag.mehta@example.in",
          contact_no: "4567890123",
          status: "Shortlisted",
          skills: ["Python", "Machine Learning", "Data Visualization"],
          experience: "3 years"
        },
        {
          name: "Deepika Reddy",
          applied_date: "2024-02-03",
          email_id: "deepika.reddy@example.in",
          contact_no: "5678901234",
          status: "Interview Scheduled",
          skills: ["R", "SQL", "Data Mining"],
          experience: "4 years"
        },
        {
          name: "Esha Kapoor",
          applied_date: "2024-02-05",
          email_id: "esha.kapoor@example.in",
          contact_no: "6789012345",
          status: "Offered",
          skills: ["Python", "NLP", "Deep Learning"],
          experience: "5 years"
        }
      ]
    },
    {
      role: "Frontend Developer",
      description: "Builds and implements the user interface of web applications.",
      applicants: [
        {
          name: "Fahad Khan",
          applied_date: "2024-03-10",
          email_id: "fahad.khan@example.in",
          contact_no: "7890123456",
          status: "Interview Scheduled",
          skills: ["HTML", "CSS", "JavaScript"],
          experience: "2 years"
        },
        {
          name: "Gauri Desai",
          applied_date: "2024-03-12",
          email_id: "gauri.desai@example.in",
          contact_no: "8901234567",
          status: "Shortlisted",
          skills: ["React", "Vue.js", "TypeScript"],
          experience: "3 years"
        },
        {
          name: "Harshita Nair",
          applied_date: "2024-03-15",
          email_id: "harshita.nair@example.in",
          contact_no: "9012345678",
          status: "Rejected",
          skills: ["Angular", "Sass", "Bootstrap"],
          experience: "2.5 years"
        }
      ]
    },
    {
      role: "Product Manager",
      description: "Oversees product development from conception to launch, coordinating with various teams.",
      applicants: [
        {
          name: "Ishaan Verma",
          applied_date: "2024-04-01",
          email_id: "ishaan.verma@example.in",
          contact_no: "1112345678",
          status: "Interview Scheduled",
          skills: ["Product Management", "Agile", "Scrum"],
          experience: "6 years"
        },
        {
          name: "Jaya Singh",
          applied_date: "2024-04-03",
          email_id: "jaya.singh@example.in",
          contact_no: "2223456789",
          status: "Shortlisted",
          skills: ["Roadmap Planning", "Stakeholder Management", "Data Analysis"],
          experience: "5 years"
        }
      ]
    },
    {
      role: "DevOps Engineer",
      description: "Responsible for automating and streamlining operations and processes for software development.",
      applicants: [
        {
          name: "Karan Joshi",
          applied_date: "2024-05-05",
          email_id: "karan.joshi@example.in",
          contact_no: "3334567890",
          status: "Shortlisted",
          skills: ["AWS", "Docker", "Kubernetes"],
          experience: "4 years"
        },
        {
          name: "Lavanya Iyer",
          applied_date: "2024-05-07",
          email_id: "lavanya.iyer@example.in",
          contact_no: "4445678901",
          status: "Interview Scheduled",
          skills: ["Azure", "CI/CD", "Terraform"],
          experience: "3 years"
        },
        {
          name: "Manish Gupta",
          applied_date: "2024-05-09",
          email_id: "manish.gupta@example.in",
          contact_no: "5556789012",
          status: "Offered",
          skills: ["Linux", "Jenkins", "Shell Scripting"],
          experience: "5 years"
        }
      ]
    }
  ]
};

export const addJobRole = (role, description) => {
  jobData.job_roles.push({ role, description, applicants: [] });
};

export default jobData;
