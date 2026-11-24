export type Member = {
  /** Honorific as printed on the physical ID card ("Mr." / "Ms." / empty). */
  honorific?: string;
  firstName: string;
  lastName: string;
  role: string;
  empId: string;
  /** File in /public/team: leave null to render the "seat open" card. */
  photo: string | null;
  /** Short line shown on the flipped side of the card. */
  focus: string;
};

/**
 * Names, roles and EMP IDs are transcribed from the official
 * "ID Card Design" artwork. Replace `photo` / `focus` as people join.
 */
export const team: Member[] = [
  {
    honorific: "Mr.",
    firstName: "Deepak",
    lastName: "Bidare",
    role: "Chief Operating Officer",
    empId: "EF1001",
    photo: "/team/deepak-bidare.jpg",
    focus: "Operations, delivery governance and company-wide execution.",
  },
  {
    honorific: "Mr.",
    firstName: "Pramod",
    lastName: "Kayast",
    role: "Sr. Product Development Engineer",
    empId: "EF1006",
    photo: "/team/pramod-kayast.jpg",
    focus: "Concept-to-production development of new industrial products.",
  },
    {
    honorific: "Mr.",
    firstName: "Harsh",
    lastName: "Toge",
    role: "Product Development Engineer (Electronics)",
    empId: "EF1015",
    photo: "/team/harsh-toge.jpg",
    focus: "Embedded electronics, control systems and instrumentation.",
  },
  {
    honorific: "Mr.",
    firstName: "Pankaj",
    lastName: "Bhopte",
    role: "Senior Research Technician",
    empId: "EF1017",
    photo: "/team/pankaj-bhopte.jpg",
    focus: "Fabrication, machining and shop-floor problem solving.",
  },
  
  {
    honorific: "Mr.",
    firstName: "Preet",
    lastName: "Joshi",
    role: "Research Engineer",
    empId: "EF1012",
    photo: "/team/preet-joshi.jpg",
    focus: "Applied research, prototyping and design validation.",
  },
  {
    honorific: "Mr.",
    firstName: "Shubham",
    lastName: "Jain",
    role: "Research Engineer",
    empId: "EF1013",
    photo: "/team/shubham-jain.jpg",
    focus: "Test engineering, data analysis and process improvement.",
  },

  {
    honorific: "Mr.",
    firstName: "Piyush",
    lastName: "Rajput",
    role: "Research Technician",
    empId: "EF1016",
    photo: "/team/piyush-rajput.jpg",
    focus: "Build, assembly and hands-on rig work in the lab.",
  },

];
