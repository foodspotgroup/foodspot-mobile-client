const common = {
  login: "LoginScreen",
  registration: "RegistrationScreen",
  app: "App",
};

const app = {
  home: "Home",
  events: "Events",
  requests: "Requests",
  profile: "Profile",
  volunteer: "Volunteer",
};

// TODO Request and Event creation and updating are modals

// Subpages (make this unique)
const home = {
  listView: "HomeListView",
  mapView: "HomeMapView",
};

const events = {
  userEvents: "UserEvents",
  organisedEvents: "OrganisedEvents",
  eventHistory: "EventHistory",
  eventProgress: "EventProgress",
  attendeeList: "AttendeeList",
};

const requests = {
  requestMap: "RequestMap",
};

const profile = {
  userProfile: "UserProfile",
  statistics: "Statistics",
};

const volunteer = {
  attending: "Attending",
  helpOut: "HelpOut",
};

const SCREEN_NAMES = {
  app,
  common,
  events,
  requests,
  home,
  profile,
  volunteer,
};

export default SCREEN_NAMES;
