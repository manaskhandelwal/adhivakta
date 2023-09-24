export const DATA = {
  edu: [
    {
      id: 1,
      name: "Bennett University",
      address:
        " Plot Nos 8, 11, TechZone 2, Greater Noida, Uttar Pradesh 201310",
      description:
        "Bennett University, is a private university, located in Greater Noida, India, established by the Act of State Legislature of Uttar Pradesh as a private university and is empowered to award degrees as specified under section 22 of the UGC Act to the students studying in its main campus in regular mode with the approval of Statutory Bodies/Councils, wherever required",
    },
    {
      id: 2,
      name: "Banaras Hindu University",
      address:
        "Banaras Hindu University Campus, Varanasi, Uttar Pradesh 221005",
      description:
        "Faculty of Law, Banaras Hindu University also known as the Law School, BHU is a faculty in the Banaras Hindu University, Varanasi, India which offers undergraduate, postgraduate and doctorate courses in legal education. It was founded in 1924",
    },
    {
      id: 3,
      name: " National Law School of India University, Bangalore",
      address:
        "Gnana Bharathi Main Rd, opp. NAAC, Teachers Colony, Naagarabhaavi, Bengaluru, Karnataka 560072",
      description:
        "National Law School of India University, or simply National Law School, is a public law school and a National Law University located in Bangalore. Considered the best law school in India, it has topped all indices relating to law schools. Laid foundation by then Chief Justice Y. V.",
    },
    {
      id: 4,
      name: "Gujarat National University",
      address:
        "5M36+F8P, Attalika Avenue Knowledge Corridor, PDPU Rd, Koba, Gujarat 382421",
      description:
        "The Gujarat National Law University is a pre-eminent public law school and a National Law University established under the Gujarat National Law University Act, 2003 in the state of Gujarat",
    },
  ],
  awards: [
    {
      id: 1,
      name: "Pro bono Initiative of the year",
      description:
        "The award recognizes initiatives taken by law firms to make a positive difference in the lives of others and contribute to the betterment of society out of goodwill by a law firm",
    },
    {
      id: 2,
      name: "Civil Aviation",
      description:
        "The award recognizes legal teams who have handled civil aviation transactions(airline operators and manufacturers only), including contract negotiations, mergers and acquisitions, licensing agreements, and other legal matters related to online business activities. The team will be recognized for introducing innovative legal solutions and strategies tailored which should demonstrate their clear understanding of the dynamic space. The application must clearly demonstrate the legal team's expertise in providing strategic guidance, fostering compliance, and ensuring the company's operations align with legal standards while enabling business growth",
    },
    {
      id: 3,
      name: "General Counsel of the Year",
      description:
        "The award recognizes the achievements and dedication of a legal visionary who has redefined the role of General Counsel in an organization/ brand through their extensive experience and outstanding contributions. He/she should be consistent in demonstrating unwavering dedication, legal expertise, and strategic brilliance in his role as General Counsel. His/her meticulous due diligence, expert negotiations, and comprehensive risk assessments should have contributed to the successful integration of diverse entities, strengthening the organization's market position",
    },
  ],
  locations: [
    {
      id: 1,
      name: "Mumbai",
    },
    {
      id: 2,
      name: "Bangalore",
    },
    {
      id: 3,
      name: "Lucknow",
    },
    {
      id: 4,
      name: "Ahmedabad",
    },
    {
      id: 5,
      name: "Srinagar",
    },
    {
      id: 6,
      name: "Visakhapatnam",
    },
    {
      id: 7,
      name: "Guwahati",
    },
  ],
  specialization: [
    {
      id: 1,
      name: "Criminal Lawyer",
      description:
        "A criminal lawyer is an attorney who either defends or prosecutes individuals or organisations involved in criminal cases",
    },
    {
      id: 2,
      name: "Corporate Lawyer",
      description:
        "A corporate lawyer, works on various legal issues related to corporate business practices. They often handle business, legal and financial functions for their client",
    },
    {
      id: 3,
      name: "Civil Lawyer",
      description:
        "A civil lawyer is a law professional who deals with disputes that come under civil law. Civil law is applicable to issues related t property and business disputes, family disputes, and torts",
    },
    {
      id: 4,
      name: "Patent Lawyer",
      description:
        "Patent attorneys are experts in preparing and filing patent applications and representing clients in court for patent-related matters such as infringement, licensing, and re-examination.t",
    },
  ],
  services: [
    {
      id: 1,
      title: "Legal Consultancy",
      description:
        "Legal consultants are attorneys hired by law firms to assist with a particular case or legal matter. They are often experts in a specific field of law, such as real estate, business, or health care. This qualifies them to be a consultant for firms that may not have a lot of experience in a particular kind of law.",
    },
    {
      id: 2,
      title: "Affidavaits",
      description:
        "The term ‘affidavit’ stands for a sworn statement which is made in writing and necessarily under an oath or affirmation before an authorised officer or magistrate",
    },
    {
      id: 2,
      title: "Affidavaits",
      description:
        "The term ‘affidavit’ stands for a sworn statement which is made in writing and necessarily under an oath or affirmation before an authorised officer or magistrate",
    },
    {
      id: 3,
      title: "Non-Disclosure Agreement(NDA)",
      description:
        "A non-disclosure agreement (NDA), also known as a confidentiality agreement, is a legally binding contract in which one party agrees to give a second party confidential information about its business or products and the second party agrees not to share this information with anyone else for a specified period of time.",
    },
    {
      id: 4,
      title: "Patent service",
      description:
        "Patent Service(s) means (i) any method, process, procedure or service that, but for the license granted herein, would infringe the Patent Rights, or (ii) any method, process, procedure, or service that results in the manufacture of a Patent Product, as defined in Section 1.23.",
    },
  ],
  badges: [
    {
      id: 1,
      title: "Advocate On Record (AOR)",
      description:
        "An Advocate on Record (AOR) is a lawyer who has been authorized by the Supreme Court of India to represent clients in that court. AORs have the exclusive right to file and argue cases in the Supreme Court on behalf of their clients.",
      image: "",
    },
    {
      id: 2,
      title: "Retired Judge of High Court",
      description: "Retired Judge of High Court",
      image: "",
    },
  ],

  lsp: [
    {
      name: "Sunil Verma",
      profilePhoto: "m",
      location: 1,
      title: "Advocate",
      exeperience: 12 * 2, // in months
      education: 1,
      awards: [{ id: 1, recivedOn: "18/03/2020", certificate: "" }],
      services: [{ id: 1, priceStart: 6500 }],
      specialization: [1],
      badges: [],
      pastRecord: [
        {
          title: "Ramesh Chandra vs Anna Mathew",
          status: "FINISHED",
        },
        {
          title: "T.Xavier vs The State of Goa",
          status: "FINISHED",
        },
        {
          title: "M.C Dasai vs Union of India",
          status: "FINISHED",
        },
      ],
    },
    {
      name: "Gauri Saxena",
      profilePhoto: "f",
      location: 3,
      title: "Advocate",
      exeperience: 12 * 4, // in months
      education: 2,
      awards: [{ id: 1, recivedOn: "08/11/2013", certificate: "" }],
      services: [{ id: 1, priceStart: 3500 }],
      specialization: [1],
      badges: [],
      pastRecord: [
        {
          title: "Shaina Khanna vs Pratik Bhose",
          status: "FINISHED",
        },
        {
          title: "State vs Sonal Anand",
          status: "FINISHED",
        },
        {
          title: "Fatima Khan vs Mariam Kazi",
          status: "ONGOING",
        },
      ],
    },
    {
      name: "Angad Kapoor",
      profilePhoto: "m",
      location: 2,
      title: "Retired Judge",
      exeperience: 12 * 30, // in months
      education: 2,
      awards: [{ id: 1, recivedOn: "20/05/2009", certificate: "" }],
      services: [{ id: 1, priceStart: 12000 }],
      specialization: [1],
      badges: [2],
      pastRecord: [
        {
          title: "R.K Jain vs Union Of India and Ors",
          status: "FINISHED",
        },
        {
          title: "Shri Ashok Tanwar&Anr vs State of H.P",
          status: "FINISHED",
        },
        {
          title: "Secr. Min of H&W vs S.C Malte",
          status: "FINISHED",
        },
        {
          title: "P.Ramakrishnam Rahu vs Union of India",
          status: "FINISHED",
        },
      ],
    },
    {
      name: "Aditya Bansal",
      profilePhoto: "m",
      location: 1,
      title: "Senior Advocate",
      exeperience: 12 * 12, // in months
      education: 3,
      awards: [{ id: 3, recivedOn: "20/05/2014", certificate: "" }],
      services: [{ id: 1, priceStart: 7500 }],
      specialization: [1],
      badges: [1],
      pastRecord: [
        {
          title: "State vs Adhiraj Sainani ",
          status: "FINISHED",
        },
      ],
    },
    {
      name: "Veer Singh",
      profilePhoto: "m",
      location: 6,
      title: "Advocate",
      exeperience: 12 * 3, // in months
      education: 3,
      awards: [{ id: 3, recivedOn: "20/05/2014", certificate: "" }],
      services: [{ id: 1, priceStart: 7500 }],
      specialization: [1],
      badges: [],
      pastRecord: [
        {
          title: "State vs Vaibhav singh",
          status: "FINISHED",
        },
        {
          title: "State vs Ayush Gupta",
          status: "FINISHED",
        },
        {
          title: "Errie Construction pvt.ltd vs Harsh Ullas Nair",
          status: "Ongoing",
        },
      ],
    },
    {
      name: "Faizal Shah",
      profilePhoto: "m",
      location: 1,
      title: "Document Writer",
      exeperience: 12 * 2, // in months
      education: 4,
      awards: [{ id: 3, recivedOn: "20/05/2014", certificate: "" }],
      services: [{ id: 1, priceStart: 7500 }],
      specialization: [1],
      badges: [],
      pastRecord: [
        {
          title: "Ahuja Family Inheritance",
          status: "FINISHED",
        },
      ],
    },
  ],
};
