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
      "At African-Caribbean Manufacturing Ltd, Ruth provides strategic leadership in human capital, corporate communication, and personnel administration."
    ]
  },
  {
    id: "daniel-oku-adamah",
    name: "Daniel Oku Adamah",
    title: "Director",
    image: "/directors/Adama.jpg",
    tags: ["Public Service Administration", "Workforce Governance", "GIMPA"],
    bio: [
      "Daniel Oku Adamah brings decades of administrative insight, public service expertise, and industrial foundational knowledge to African-Caribbean Manufacturing Ltd.",
      "His career includes early machine shop operations at ALFA Manufacturing Company Ltd, followed by a distinguished tenure of nearly four decades within the Ghana Civil Service.",
      "Formally trained in Human Resource Management at the Ghana Institute of Management and Public Administration (GIMPA), Daniel contributes critical guidance in workforce governance, institutional management, and regulatory compliance."
    ]
  },
  {
    id: "john-kwabena-arthur",
    name: "John Kwabena Arthur",
    title: "Director",
    image: "/directors/Authur.png",
    tags: ["Environmental Research", "Nuclear Protection", "GAEC & MESTI", "Biochar Technology"],
    bio: [
      "John Kwabena Arthur is an educator, environmental researcher, and administrator with over three decades of public-sector and scientific experience.",
      "He holds a Master of Philosophy in Nuclear and Environmental Protection from the University of Ghana, as well as a Bachelor of Education in Physics and Integrated Science.",
      "His career includes substantial research at the Ghana Atomic Energy Commission (GAEC)—where he also served as Scientific Secretary—and administrative service at the Ministry of Environment, Science, Technology, and Innovation (MESTI).",
      "A trained alternative dispute resolution (ADR) mediator and active researcher in biochar technology, John steers the company’s environmental stewardship, technical standards, and sustainable manufacturing practices."
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
      "She leads African-Caribbean Manufacturing Ltd in financial strategy, systems optimization, and international business operations."
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
      "At African-Caribbean Manufacturing Ltd, he contributes strategic expertise in public-sector relations, stakeholder engagement, community governance, and operational compliance."
    ]
  }
];
