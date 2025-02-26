import React from "react";
import { useRoutes } from "react-router-dom";

// Importing pages
import Home from "pages/Home";
// import NotFound from "pages/NotFound";
import Prototype from "pages/Prototype";
import ViewAllPatients from "pages/Viewallpatients";
import DoctorDashboard from "pages/DoctorDashboard";
import ContactUs from "pages/Contactus";
import DoctorProfile from "pages/Doctorprofile";
import NewPatientForm from "pages/Newpatientform";
import PatientNewProfile from "pages/Patientnewprofile";
import ViewReports from "pages/Viewreports";
import UploadXRay from "pages/Uploadxray";
import DiagnosisReport from "pages/Diagnosisreport";
import KSS from "pages/KSS";
// import ProgressTracking from "pages/Progresstracking";
import TreatmentReport from "pages/Treatmentreport";
// import ProgressReport from "pages/Progressreport";

const ProjectRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "prototype", element: <Prototype /> },
    { path: "viewallpatients", element: <ViewAllPatients /> },
    { path: "doctordashboard", element: <DoctorDashboard /> },
    { path: "contactus", element: <ContactUs /> },
    { path: "doctorprofile", element: <DoctorProfile /> },
    { path: "newpatientform", element: <NewPatientForm /> },
    { path: "patientnewprofile", element: <PatientNewProfile /> },
    { path: "viewreports", element: <ViewReports /> },
    { path: "uploadxray", element: <UploadXRay /> },
    { path: "diagnosisreport", element: <DiagnosisReport /> },
    { path: "kss", element: <KSS /> },
    { path: "progresstracking", element: <ProgressTracking /> },
    { path: "treatmentreport", element: <TreatmentReport /> },
    { path: "progressreport", element: <ProgressReport /> },
  ]);

  return element;
};

export default ProjectRoutes;
