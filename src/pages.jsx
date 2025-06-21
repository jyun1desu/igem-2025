import Home from './pages/Home';
import Members from './pages/Team/MeetTheTeam';
import Description from './pages/Project/Description';
import Fallback from './pages/Fallback';
import Design from './pages/Project/Design';

const Pages = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    component: Home,
    lead: "Your iGEM Journey Begins Here! We wish you a successful and rewarding season!",
  },
  {
    name: "Team",
    folder: [
      {
        name: "Members",
        title: "Meet Our Team",
        path: "/team",
        component: Members,
        lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Fallback,
        lead: "Accurate attribution is essential in the iGEM Competition. It ensures that the judges can properly assess your team's contributions and recognize the support provided by external collaborators. This page is dedicated to fulfilling the Attributions requirement for judging.",
      },
      {
        name: "Sponsors",
        title: "Sponsors",
        path: "/sponsors",
        component: Fallback,
        lead: "Accurate attribution is essential in the iGEM Competition. It ensures that the judges can properly assess your team's contributions and recognize the support provided by external collaborators. This page is dedicated to fulfilling the Attributions requirement for judging.",
      },
    ],
  },
  {
    name: "Project",
    folder: [
      {
        name: "Description",
        title: "Project Description",
        path: "/description",
        component: Description,
        lead: "Describe how and why you chose your iGEM project.",
      },
      {
        name: "Design",
        title: "Project Design",
        path: "/design",
        component: Design,
      },
      {
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Fallback,
        lead: "Demonstrate engineering success in a technical aspect of your project by going through at least one iteration of the engineering design cycle.",
      },
      {
        name: "Application",
        title: "Application",
        path: "/application",
        component: Fallback,
      },
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Fallback,
        lead: "Make a useful contribution for future iGEM teams and document it on this page.",
      },
    ],
  },
  {
    name: "Wet Lab",
    folder: [
      {
        name: "Experiments",
        title: "Experiments Results",
        path: "/experiments",
        component: Fallback,
      },
      {
        name: "Proof of Concept",
        title: "Proof of Concept",
        path: "/proof-of-concept",
        component: Fallback,
      },
      {
        name: "Laboratory Notebook",
        title: "Laboratory Notebook",
        path: "/notebook",
        component: Fallback,
      },
      {
        name: "Safety",
        title: "Safety",
        path: "/safety-and-security",
        component: Fallback,
        lead: "Detail the safety and security considerations of your project, adressing potential risks and outlining the measures taken to mitigate them.",
      },
    ],
  },
  {
    name: "Dry Lab",
    folder: [
      {
        name: "3WJ Probe Design",
        title: "3WJ Probe Design",
        path: "/3wj-probe",
        component: Fallback,
      },
      {
        name: "Split G4 Design",
        title: "Split G4 Design",
        path: "/split-g4",
        component: Fallback,
      },
      {
        name: "Electrochemical Reader",
        title: "Electrochemical Reader",
        path: "/reader",
        component: Fallback,
      },
    ],
  },
  {
    name: "Our Model",
    folder: [
      {
        name: "Our Model",
        title: "Our Model",
        path: "/model",
        component: Fallback,
      },
    ],
  },
  {
    name: "Human Practice",
    folder: [
      {
        name: "Interview",
        title: "Interview",
        path: "/interview",
        component: Fallback,
      },
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Fallback,
      },
      {
        name: "Meet Up",
        title: "Meet Up",
        path: "/meet-up",
        component: Fallback,
      },
      {
        name: "Entrepreneur",
        title: "Entrepreneur",
        path: "/entrepreneur",
        component: Fallback,
      },
      {
        name: "SDGs",
        title: "SDGs",
        path: "/sdgs",
        component: Fallback,
      },
      {
        name: "Integrated HP",
        title: "Integrated HP",
        path: "/integrated-hp",
        component: Fallback,
      },
    ],
  },
];

export default Pages;
