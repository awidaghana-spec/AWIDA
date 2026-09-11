export interface Director {
  id: string;
  name: string;
  title: string;
  image: string;
  tags: string[];
  bio: string[];
}

export const DIRECTORS: Director[] = [
  {
    id: "ruth-sekleh",
    name: "Ruth Sekleh",
    title: "Director",
    image: "/directors/Ruth.png",
    tags: ["Human Resource Management", "Corporate Communication", "Personnel Administration", "GAFM (USA)"],
    bio: [
      "Ruth Sekleh brings over a decade of experience across human resource management, public relations, and organizational development.",
      "She holds a background in Psychology and Linguistics from the University of Ghana, alongside specialized training in Human Resource Management and Organizational Behavior from the Global Academy of Finance and Management (USA).",
      "Her professional career spans roles in commercial marketing management, coordination with the Ghana Education Service, and international development project support.",
      "At AWIDA, Ruth provides strategic leadership in human capital, organizational governance, cross-cultural communication, and diaspora engagement."
    ]
  },
  {
    id: "daniel-oku-adamah",
    name: "Daniel Oku Adamah",
    title: "Director",
    image: "/directors/Adama-2.jpg",
    tags: ["Public Service Administration", "Workforce Governance", "GIMPA"],
    bio: [
      "Daniel Oku Adamah brings decades of administrative insight, public service expertise, and institutional governance to the African West Indies Diaspora Alliance (AWIDA).",
      "His career includes extensive public-sector leadership and operational management, followed by a distinguished tenure of nearly four decades within the Ghana Civil Service.",
      "Formally trained in Human Resource Management at the Ghana Institute of Management and Public Administration (GIMPA), Daniel contributes critical guidance to AWIDA in institutional management, regulatory compliance, and workforce governance across alliance initiatives."
    ]
  },
  {
    id: "john-kwabena-arthur",
    name: "John Kwabena Arthur",
    title: "Director",
    image: "/directors/Authur.png",
    tags: ["Environmental Research", "Sustainable Development", "GAEC & MESTI", "Climate Policy & ADR"],
    bio: [
      "John Kwabena Arthur is an educator, environmental researcher, and administrator with over three decades of public-sector and scientific experience.",
      "He holds a Master of Philosophy in Nuclear and Environmental Protection from the University of Ghana, as well as a Bachelor of Education in Physics and Integrated Science.",
      "His career includes substantial research at the Ghana Atomic Energy Commission (GAEC)—where he also served as Scientific Secretary—and administrative service at the Ministry of Environment, Science, Technology, and Innovation (MESTI).",
      "A trained alternative dispute resolution (ADR) mediator and active researcher in sustainable technologies, John steers AWIDA's environmental stewardship, climate resilience strategies, and sustainable development programs connecting Africa and the Caribbean."
    ]
  },
  {
    id: "priscilla-akpabey",
    name: "Priscilla Akpabey",
    title: "Director",
    image: "/directors/Priscilla.jpg",
    tags: ["Investment Operations", "Financial Strategy", "Cross-Border Trade", "MBA Finance"],
    bio: [
      "Priscilla Akpabey is an operations and finance professional with extensive multinational experience across investment operations, corporate banking, and cross-border trade administration.",
      "She holds an MBA in Finance from Rockhurst University, an MA in Economics from the University of Missouri–Kansas City, and a Bachelor of Science in Computer Science.",
      "Priscilla’s career includes key roles in portfolio operations and investment accounting in the United States, commercial banking, international account coordination for major consumer brands, and enterprise HR systems.",
      "At AWIDA, she leads financial strategy, cross-border economic initiatives, and systems optimization to advance trade partnerships, economic literacy, and investment linkages between Africa and the diaspora."
    ]
  },
  {
    id: "emmanuel-gemegah",
    name: "Emmanuel Gemegah",
    title: "Director",
    image: "/directors/Gamega.png",
    tags: ["Public Administration", "Local Governance", "Stakeholder Engagement", "Conflict & Peace Studies"],
    bio: [
      "Emmanuel Gemegah is a public administrator, educator, and governance professional with extensive leadership across local government and institutional development.",
      "He holds a Master of Arts in Human Rights, Conflict, and Peace Studies from the University of Education, Winneba, and a Bachelor of Science in Entomology & Wildlife from the University of Cape Coast.",
      "Emmanuel’s career includes serving as the Municipal Chief Executive (Mayor) for the Keta Municipal Assembly, coordinating regional workforce programs under NABCO, and managing basic and secondary academic institutions.",
      "At AWIDA, he contributes strategic expertise in public-sector relations, stakeholder engagement, community governance, and cross-regional civic partnerships across Africa and the Caribbean diaspora."
    ]
  }
];
