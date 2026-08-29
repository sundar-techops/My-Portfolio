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
    'Motivated and detail-oriented aspiring DevOps Engineer with hands-on project experience in AWS cloud infrastructure, Terraform (IaC), CI/CD pipelines, Docker containerization, and Kubernetes orchestration.' +
  
   about:
    'Aspiring DevOps Engineer transitioning from 2+ years of Technical Support experience into DevOps. My background in IT infrastructure, networking, system troubleshooting, and enterprise support has given me a strong foundation in reliability and operations. \n\n' +
    'I am now focused on DevOps and have built hands-on experience with AWS, Azure, Linux, Git, Jenkins, Docker, Kubernetes, Terraform, Ansible, Prometheus, and Grafana, with a focus on CI/CD automation, Infrastructure as Code, containerization, cloud infrastructure, and monitoring. \n\n' + 
    'I applied  my skills through hands-on projects, including an end-to-end CI/CD implementation on AWS EKS covering automated build, testing, security scanning, containerization, deployment, monitoring, and alerting.\n\n' ,
  
  resumeUrl: 'https://drive.google.com/file/d/1JIhVHYAbvlrVFURtUIRrWfqKgB1N6Jxo/view?usp=drive_link',
  githubUrl: 'https://github.com/sundar-techops',
  linkedinUrl: 'https://www.linkedin.com/in/sundar-techops',
  email: 'sundar.techops@gmail.com',
  location: 'Chennai, India',
};

export const skills = [
  { id: 1, name: 'AWS (EC2, S3, EBS, VPC, IAM, RDS, NAT Gateway, Security Groups, EKS)', category: 'Cloud', proficiency: 75 },
  { id: 2, name: 'Terraform', category: 'Cloud', proficiency: 70 },
  { id: 3, name: 'Azure Fundamentals', category: 'Cloud', proficiency: 50 },

  { id: 4, name: 'Jenkins', category: 'CI/CD', proficiency: 75 },
  { id: 5, name: 'GitHub Actions', category: 'CI/CD', proficiency: 70 },
  { id: 6, name: 'Docker', category: 'CI/CD', proficiency: 75 },

  { id: 7, name: 'Kubernetes', category: 'Containers & Orchestration', proficiency: 70 },
  { id: 8, name: 'Amazon EKS', category: 'Containers & Orchestration', proficiency: 70 },

  { id: 9, name: 'Bash Scripting', category: 'Scripting', proficiency: 70 },
  { id: 10, name: 'Python', category: 'Scripting', proficiency: 60 },

  { id: 11, name: 'Linux Administration', category: 'Systems', proficiency: 80 },
  { id: 12, name: 'Git & GitHub', category: 'Systems', proficiency: 80 },
];

export const projects = [
  {
    id: 1,
    title: 'MyShop — End-to-End production style CI/CD Pipeline project on AWS EKS',
    description:
      '•	Designed and implemented a 10-stage CI/CD pipeline using Jenkins that automatically builds, tests, scans, and deploys a Spring Boot e-commerce application to AWS EKS on every GitHub push — zero manual intervention. \n\n' +
      '•	Containerized the application using multi-stage Docker builds (reducing image size from ~500MB to ~150MB), pushed to AWS ECR, and deployed via Helm with rolling updates achieving zero-downtime deployments. \n\n' +
      '•	Configured SonarQube Quality Gate and OWASP Dependency Check as pipeline blockers — no code reaches production unless it passes both security and quality thresholds. \n\n' +
      '•	Provisioned AWS EKS cluster using eksctl with 2 worker nodes, HPA autoscaling (2–5 pods based on CPU), and AWS ALB Ingress exposing the application publicly on the internet \n\n' +
      '•	Set up Prometheus + Grafana monitoring stack on Kubernetes with custom alert rules for pod crash loops, high CPU, and zero-replica scenarios — alerts routed to Slack via Alertmanager. \n\n',
    link: 'https://github.com/sundar-techops/myapp-End-to-End-CI-CD-Pipeline-using-K8s.git',
    imageUrl: '',
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
