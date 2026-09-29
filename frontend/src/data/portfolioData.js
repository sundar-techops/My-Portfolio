/**
 * ============================================================
 *  EDIT YOUR PORTFOLIO HERE — this is the ONLY file you need
 *  to touch to update your content. No backend, no database,
 *  no admin login. Change the text below, save, and redeploy.
 * ============================================================
 */

export const profile = {
  name: 'Sundar S', // TODO: put your full name as you want it on resume/LinkedIn
  title: 'DevOps/Cloud Engineer',
  intro:
    'Result Driven DevOps Engineer with hands-on experience in AWS cloud infrastructure, Terraform (IaC), CI/CD pipelines, Docker, and Kubernetes.' ,
  
   about:
    'DevOps Engineer with 4+ years of professional experience, with a strong background in enterprise support, infrastructure operations, problem-solving, and service delivery. Experienced in working with cross-functional teams, handling incidents and user issues within SLA timelines, and maintaining reliable day-to-day operations. Strong understanding of IT processes, documentation, troubleshooting, and continuous improvement. Hands-on experience in cloud and DevOps projects, with a focus on automation, reliability, and efficient delivery. A proactive and adaptable professional with a strong willingness to learn new technologies and contribute effectively to team and organizational goals. ,
  
  resumeUrl: 'https://drive.google.com/file/d/126pQOdep2eqKweuPeqXgnMuGbETvXNT3/view?usp=drivesdk',
  githubUrl: 'https://github.com/sundar-techops',
  linkedinUrl: 'https://www.linkedin.com/in/sundar-techops',
  email: 'sundar.techops@gmail.com',
  location: 'Chennai, India',
};

export const skills = [
  { id: 1, name: 'AWS (EC2, S3, EBS, VPC, IAM, RDS, NAT Gateway, Security Groups, EKS, AWS ECR)', category: 'Cloud', proficiency: 75 },
  { id: 2, name: 'Terraform', category: 'Cloud', proficiency: 70 },
  { id: 3, name: 'Azure Fundamentals', category: 'Cloud', proficiency: 50 },

  { id: 4, name: 'Jenkins', category: 'CI/CD', proficiency: 75 },
  { id: 5, name: 'GitHub Actions', category: 'CI/CD', proficiency: 70 },
  { id: 6, name: 'Docker', category: 'CI/CD', proficiency: 75 },
  { id: 7, name: 'Maven', category: 'CI/CD', proficiency: 75 },
  { id: 8, name: 'SonarQube', category: 'CI/CD', proficiency: 80 },

  { id: 9, name: 'Kubernetes', category: 'Containers & Orchestration', proficiency: 70 },
  { id: 10, name: 'Amazon EKS', category: 'Containers & Orchestration', proficiency: 70 },

  { id: 11, name: 'Bash Scripting', category: 'Scripting', proficiency: 70 },
  { id: 12, name: 'Python', category: 'Scripting', proficiency: 60 },

  { id: 13, name: 'Linux Administration', category: 'Systems', proficiency: 80 },
  { id: 14, name: 'Git & GitHub', category: 'Systems', proficiency: 80 },

  { id: 15, name: 'Claude AI', category: 'AI Integration', proficiency: 85 },

  { id: 16, name: 'Prometheus', category: 'Monitoring & Observability', proficiency: 85 },
  { id: 17, name: 'Grafana', category: 'Monitoring & Observability', proficiency: 85 },
  { id: 18, name: 'kube-prometheus-stack', category: 'Monitoring & Observability', proficiency: 85 },
];

export const projects = [
  {
    id: 1,
    title: 'Employee Management API — Production CI/CD Pipeline with AI Integration',
    description:
      '•	Architected and built a 7-stage Jenkins declarative pipeline (GitHub webhook → Maven build → SonarQube analysis → Quality Gate → Docker build → EKS deploy → AI release notes) cutting manual deployment time from ~2.5 hours to under 10 minutes \n\n' +
      '•	Deployed containerised Spring Boot microservice to Amazon EKS using rolling updates with liveness/readiness probes and Horizontal Pod Autoscaler (2–6 replicas); exposed via AWS Elastic Load Balancer on ap-south-1 \n\n' +
      '•	Enforced automated SonarQube quality gate as a pipeline blocker — broken or low-quality code is rejected before Docker build, preventing defects from reaching production. \n\n' +
      '•	Containerised application using a multi-stage Dockerfile (Maven+JDK build stage → Alpine JRE runtime) reducing final image size from ~800 MB to ~180 MB \n\n' +
      '•	Integrated Anthropic Claude API as an AI pipeline assistant — automatically diagnoses Jenkins build failures from console logs (root cause + fix in <60 seconds) and generates categorised release notes on every successful deployment \n\n' +
      '•	Configured Prometheus + Grafana monitoring stack via Helm in EKS; Spring Boot Actuator exposes live metrics (HTTP rate, JVM heap, response time) scraped every 15 seconds \n\n',
    link: 'https://github.com/sundar-techops/Employee-Management-CI-CD-Pipeline-Project-using-AI.git',
    imageUrl: 'https://cdn.shopaccino.com/igmguru/images/what-is-claude-ai-3616144407135393-12569002461457366.webp'
  },  
  {
    id: 2,
    title: 'MyShop — End-to-End production style CI/CD Pipeline project on AWS EKS',
    description:
      '•	Designed and implemented a 10-stage CI/CD pipeline using Jenkins that automatically builds, tests, scans, and deploys a Spring Boot e-commerce application to AWS EKS on every GitHub push — zero manual intervention. \n\n' +
      '•	Containerized the application using multi-stage Docker builds (reducing image size from ~500MB to ~150MB), pushed to AWS ECR, and deployed via Helm with rolling updates achieving zero-downtime deployments. \n\n' +
      '•	Configured SonarQube Quality Gate and OWASP Dependency Check as pipeline blockers — no code reaches production unless it passes both security and quality thresholds. \n\n' +
      '•	Provisioned AWS EKS cluster using eksctl with 2 worker nodes, HPA autoscaling (2–5 pods based on CPU), and AWS ALB Ingress exposing the application publicly on the internet \n\n' +
      '•	Set up Prometheus + Grafana monitoring stack on Kubernetes with custom alert rules for pod crash loops, high CPU, and zero-replica scenarios — alerts routed to Slack via Alertmanager. \n\n',
    link: 'https://github.com/sundar-techops/myapp-End-to-End-CI-CD-Pipeline-using-K8s.git',
    imageUrl: 'https://www.jeeviacademy.com/wp-content/uploads/2026/02/Screenshot-2026-02-13-120459.png'
  },
  {
    id: 3,
    title: 'Multi-Tier AWS Infrastructure (Terraform)',
    description:
      'Production-style multi-tier infrastructure on AWS provisioned entirely with Terraform — EC2, RDS, and a WordPress deployment, covering VPC design, security groups, and modular IaC.',
    link: 'https://github.com/sundar-techops/Hosting-Wordpress-project-using-Terraform-and-EC2-instance-MariaDB.git',
    imageUrl: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/336040372/original/e950936adb4c096a746167368789ef146371f0c0/build-your-whole-aws-infrastructure-in-terraform.png',
  },
  {
    id: 4,
    title: 'AWS S3 Automation',
    description:
      'Automation scripts for S3 bucket management — lifecycle policies, backups, and event-driven workflows, built to reduce manual cloud storage operations.',
    link: 'https://github.com/sundar-techops/aws-s3-terraform-project-using-terraform.git',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.JMspq1z3Vm2m00ioNzUtEgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
   {
    id: 5,
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
    role: 'Technical Support Engineer', // TODO
    company: 'Vatanix Technologies',
    startDate: 'Apr 2024',
    endDate: 'Jun 2026',
    description:
      '•	Joined as a Technical Support Engineer and worked closely with the DevOps team, supporting CI/CD, containerization and AWS deployment activities for the enterprise application. \n\n' +
      '•	Supported the DevOps team in building and maintaining a 7-stage Jenkins Declarative CI/CD pipeline covering GitHub checkout, Maven build, JUnit testing, SonarQube analysis, Quality Gate validation, Docker image creation and deployment to Amazon EKS.\n\n' +
      '•	Worked on GitHub Webhook integration with Jenkins so that pipelines trigger automatically whenever developers push code changes to the repository. \n\n' +
      '•	Worked with SonarQube and JaCoCo in Jenkins, using Quality Gates as deployment controls to stop code that did not meet the defined quality requirements.\n\n' +
      '•	Worked on Docker multi-stage builds that reduced image size from approximately 800 MB to 180 MB, and automated image tagging and pushing of versioned images to Amazon ECR.\n\n' +
      '•	Worked with Kubernetes/EKS deployments, rolling updates, readiness and liveness probes, HPA and application exposure through AWS load balancing.\n\n' +
      '•	Supported Kubernetes application configuration using ConfigMaps, Secrets and Namespaces, and used kubectl to check pod status, logs and events during issues.\n\n' +
      '•	Supported Prometheus and Grafana monitoring for application, JVM, pod and infrastructure metrics, and raised alerts and issues to the DevOps team.\n\n' +
      '•	Handled day-to-day support on Linux servers and AWS resources (EC2, Security Groups, load balancers), checking logs, service status and connectivity problems.\n\n' +
      '•	Troubleshot CI/CD, Docker and Kubernetes deployment issues by analyzing build and application logs and applying corrective actions, and documented the fixes so the team could reuse them.\n\n',
  },
  {
    id: 2,
    role: 'Executive - Technical & Underwriting', // TODO
    company: 'Star Health & Allied Insurance Co. Ltd.',
    startDate: 'Oct 2021', // TODO
    endDate: 'Mar 2024', // TODO
    description:
      '•	Provided technical and end-user support for enterprise users and assisted in resolving hardware, software and connectivity-related issues.\n\n' +
      '•	Troubleshot desktop, laptop, operating-system and application-related issues and restored user functionality within defined SLA timelines.\n\n' +
      '•	Supported Microsoft Outlook configuration, email access, profile setup and common mail-related issues.\n\n' +
      '•	Assisted users with network connectivity problems involving LAN, Wi-Fi and enterprise network access.\n\n' +
      '•	Supported configuration and troubleshooting of network devices and connectivity in the enterprise environment.\n\n' +
      '•	Monitored network and infrastructure availability and escalated recurring or complex issues to the appropriate technical teams.\n\n' +
      '•	Performed user-access and endpoint troubleshooting while following organizational security and access-control procedures.\n\n' +
      '•	Maintained incident records, troubleshooting details and resolution information for operational tracking.\n\n' +
      '•	Worked with internal teams to investigate incidents and ensure timely resolution according to defined service requirements.\n\n' +
      '•	Followed IT support processes, SLA requirements and escalation procedures for priority incidents.\n\n' +
      '•	Maintained effective communication with users and internal teams throughout the incident lifecycle and provided status updates until resolution.\n\n',

  },
];
