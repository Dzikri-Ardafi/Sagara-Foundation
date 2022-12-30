import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/Landing.vue";
import About from "../views/AboutView.vue";
import Program from "../views/Program.vue";
import Donations from "../views/Donation.vue";
import Volunteer from "../views/Volunteer.vue";
import VolunteerForm from "../components/Page/VolunteerForm.vue";
import VolunteerFormCompany from "../components/Page/VolunteerFormCompany.vue";
import Beneficiaries from "../views/Beneficiaries.vue";
import Blogs from "../views/Blogs.vue";
import LoginPage from "../views/LoginPage.vue";
import SignUpPage from "../views/SignUpPage.vue";
import VolunteerIndividual from "../views/VolunteerIndividual.vue";
import Verification from "../views/VerificationPage.vue";
import InternshipForm from "../views/InternshipForm.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage,
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
  },
  {
    path: "/program",
    name: "Program",
    component: Program,
  },
  {
    path: "/donation",
    name: "Donation",
    component: Donations,
  },
  {
    path: "/volunteer",
    name: "Volunteer",
    component: Volunteer,
  },
  {
    path: "/volunteer-individual",
    name: "VolunteerIndividual",
    component: VolunteerIndividual,
  },
  {
    path: "/volunteer/form",
    name: "Volunteer",
    component: VolunteerForm,
  },
  {
    path: "/volunteer/form-company",
    name: "Volunteer",
    component: VolunteerFormCompany,
  },
  {
    path: "/beneficiaries",
    name: "Beneficiaries",
    component: Beneficiaries,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/sign-up",
    name: "SignUpPage",
    component: SignUpPage,
  },
  {
    path: "/verfikasi-email",
    name: "VerificationPage",
    component: Verification,
  },
  {
    path: "/internship",
    name: "Internship Form",
    component: InternshipForm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
