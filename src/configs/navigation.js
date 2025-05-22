export const NAVS = {
  HOME: "home",
  TEAM: "team",
  PROJECT: "project",
  WET_LAB: "wetLab",
  DRY_LAB: "dryLab",
  OUR_MODEL: "ourModel",
  HUMAN_PRACTICE: "humanPractice",
};

export const navConfig = {
  [NAVS.HOME]: {
    id: [NAVS.HOME],
    label: "Home",
    href: "/",
  },
  [NAVS.TEAM]: {
    id: [NAVS.TEAM],
    label: "Team",
    href: "/team",
    children: [
      { label: "Meet the Team", slug: "meet" },
      { label: "Sponsors", slug: "sponsors" },
      { label: "Attributions", slug: "attributions" },
    ],
  },
  [NAVS.PROJECT]: {
    id: [NAVS.PROJECT],
    label: "Project",
    href: "/project",
    children: [
      { label: "Project Description", slug: "description" },
      { label: "Project Design", slug: "design" },
      { label: "Engineering Success", slug: "success" },
      { label: "Application", slug: "application" },
      { label: "Contribution", slug: "contribution" },
    ],
  },
  [NAVS.WET_LAB]: {
    id: [NAVS.WET_LAB],
    label: "Wet Lab",
    href: "/wet-lab",
    children: [
      { label: "Experimental Results", slug: "results" },
      { label: "Three-way Junction (3WJ)", slug: "3wj" },
      { label: "Split G-quadruplex", slug: "g4" },
      { label: "Electrochemical signals", slug: "signals" },
      { label: "Proof of Concept", slug: "proof" },
      { label: "Laboratory Notebook", slug: "notebook" },
      { label: "Safety", slug: "safety" },
    ],
  },
  [NAVS.DRY_LAB]: {
    id: [NAVS.DRY_LAB],
    label: "Dry Lab",
    href: "/dry-lab",
    children: [
      { label: "3WJ Probe Design", slug: "3wj-probe" },
      { label: "Split G4 Design", slug: "split-g4" },
      { label: "Electrochemical Reader", slug: "reader" },
    ],
  },
  [NAVS.OUR_MODEL]: {
    id: [NAVS.OUR_MODEL],
    label: "Our Model",
    href: "/our-model",
  },
  [NAVS.HUMAN_PRACTICE]: {
    id: [NAVS.HUMAN_PRACTICE],
    label: "Human Practice",
    href: "/human-practice",
    children: [
      { label: "Education", slug: "education" },
      { label: "Interview", slug: "interview" },
      { label: "Volunteer", slug: "volunteer" },
      { label: "Entrepreneurship", slug: "entrepreneurship" },
    ],
  },
};
