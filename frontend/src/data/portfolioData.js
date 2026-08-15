/**
 * ============================================================
 *  EDIT YOUR PORTFOLIO HERE — this is the ONLY file you need
 *  to touch to update your content. No backend, no database,
 *  no admin login. Change the text below, save, and redeploy.
 * ============================================================
 */

export const profile = {
  name: 'Sundar S', // TODO: put your full name as you want it on resume/LinkedIn
  title: 'Motivated & Aspiring DevOps/Cloud Engineer',
  intro:
    ' Overall 4+ years of experience backed by  2+ years of Technical Support professional experience transitioning into DevOps and Cloud Engineering.\n\n' +
    ' Skilled in AWS, Terraform, Jenkins, Docker, and Kubernetes fundamentals, with hands-on project experience in CI/CD automation and cloud infrastructure.\n\n',
  about:
    'An aspiring DevOps Engineer with an overall 4+ years of professional experience, including 2+ years in Technical Support, where I gained strong expertise in IT infrastructure, networking, system troubleshooting, and enterprise support. My experience includes managing networking devices, monitoring network infrastructure for high availability, resolving complex technical issues, and supporting enterprise environments with a focus on reliability and operational excellence. \n\n' +
    'Working in technical support gave me a deep understanding of how critical stable infrastructure is to business operations. Over time, I became increasingly interested in not only resolving production issues but also building, automating, and optimizing the systems behind them. This curiosity inspired my transition into the DevOps domain. \n\n' + 
    'To build a strong foundation, I completed structured DevOps training and dedicated significant time to hands-on practice. I have developed practical skills in AWS, Azure, Linux, Git, GitHub, Jenkins, Docker, Kubernetes, Terraform, Ansible, Prometheus, and Grafana, with a strong focus on Infrastructure as Code, CI/CD automation, containerization, and cloud-native technologies.',
  
  resumeUrl: '',
  githubUrl: 'https://github.com/sundar-techops',
  linkedinUrl: 'https://www.linkedin.com/in/sundar-techops',
  email: 'sundar.techops@gmail.com',
  location: 'Chennai, India',
};

export const skills = [
  { id: 1, name: 'AWS (EC2, S3, RDS, IAM)', category: 'Cloud', proficiency: 75 },
  { id: 2, name: 'Terraform', category: 'Cloud', proficiency: 70 },
  { id: 3, name: 'Azure Fundamentals', category: 'Cloud', proficiency: 50 },

  { id: 4, name: 'Jenkins', category: 'CI/CD', proficiency: 75 },
  { id: 5, name: 'GitHub Actions', category: 'CI/CD', proficiency: 55 },
  { id: 6, name: 'Docker', category: 'CI/CD', proficiency: 75 },

  { id: 7, name: 'Kubernetes', category: 'Containers & Orchestration', proficiency: 75 },
  { id: 8, name: 'Amazon EKS', category: 'Containers & Orchestration', proficiency: 60 },

  { id: 9, name: 'Bash Scripting', category: 'Scripting', proficiency: 70 },
  { id: 10, name: 'Python', category: 'Scripting', proficiency: 60 },

  { id: 11, name: 'Linux Administration', category: 'Systems', proficiency: 80 },
  { id: 12, name: 'Git & GitHub', category: 'Systems', proficiency: 80 },
];

export const projects = [
  {
    id: 1,
    title: 'CI/CD Pipeline (Jenkins, Maven, Docker, EKS)',
    description:
      'End-to-end CI/CD pipeline built with Jenkins, SonarQube, Maven, and Docker, deploying to Amazon EKS. Includes an AI pipeline assistant (Anthropic API) for build diagnostics and automated release notes.',
    link: 'https://github.com/sundar-techops/sundar-techops-DevOps-CI-CD-Project-using-AWS-EC2-instance.git',
    imageUrl: 'https://slidebazaar.com/wp-content/uploads/2025/06/CI-CD-Pipeline-PowerPoint-Template-Dark.jpg',
  },
  {
    id: 2,
    title: 'Multi-Tier AWS Infrastructure (Terraform)',
    description:
      'Production-style multi-tier infrastructure on AWS provisioned entirely with Terraform — EC2, RDS, and a WordPress deployment, covering VPC design, security groups, and modular IaC.',
    link: 'https://github.com/sundar-techops/Hosting-Wordpress-project-using-Terraform-and-EC2-instance-MariaDB.git',
    imageUrl: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/336040372/original/e950936adb4c096a746167368789ef146371f0c0/build-your-whole-aws-infrastructure-in-terraform.png',
  },
  {
    id: 3,
    title: 'AWS S3 Automation',
    description:
      'Automation scripts for S3 bucket management — lifecycle policies, backups, and event-driven workflows, built to reduce manual cloud storage operations.',
    link: 'https://github.com/sundar-techops/aws-s3-terraform-project-using-terraform.git',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.JMspq1z3Vm2m00ioNzUtEgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
   {
    id: 3,
    title: 'GitOps Deployment — Argo CD | Kubernetes | GitHub  (GitOps & Auto-Healing)',
    description:
      '•	Deployed Argo CD on a Kubernetes cluster and connected it to a GitHub repository (sundar-techops/devops-argocd-gitops) to implement a fully automated GitOps delivery pipeline — directly matching the Argo CD and auto-healing infrastructure requirements of this role.',
    link: 'https://github.com/sundar-techops/devops-argocd-gitops.git',
    imageUrl: 'https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2109019071/p460263.jpg',
  },
];

export const experiences = [
  {
    id: 1,
    role: 'Technical Support Engineer',
    company: 'Vatanix Technologies',
    startDate: 'Apr 2024',
    endDate: 'Jul 2026',
    description:
      'Providing technical support and troubleshooting for production systems, working closely with customer environments and escalations — experience that now drives my transition into DevOps and infrastructure automation.',
  },
  {
    id: 2,
    role: 'U/W Executive', // TODO
    company: 'Star Health & Allied Insurance Co. Ltd.',
    startDate: 'Oct 2021', // TODO
    endDate: 'Apr 2024', // TODO
    description:
      '•	Coordinated with internal teams to resolve policy processing issues within SLA timelines. Maintained accurate records while handling high-volume operational tasks. Ensured compliance with organizational processes and documentation standards.',
  },
];
