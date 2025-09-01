export const routes = [
  { path: "/", name: "Home", elementKey: "Landing" },
  { path: "/find", name: "Find Pet", elementKey: "FindPet" },
  { path: "/report", name: "Report Pet", elementKey: "ReportPet" },
  { path: "/pet/:id", name: "Pet Details", elementKey: "PetDetails", hideInNav: true },
  { path: "/ngo", name: "NGO / Partners", elementKey: "NGOListing" },
  { path: "/profile", name: "Profile", elementKey: "Profile" },
  { path: "/about", name: "About", elementKey: "About" },
  { path: "/support", name: "Support", elementKey: "Support" },
];
