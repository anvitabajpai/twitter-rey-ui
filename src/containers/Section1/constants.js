import { createConstants } from '../../utils/constants';

const ORDER_ID = "e663669f-f066-4eff-a3c4-bcd6e7b170d0";
const URL = `http://localhost:9000/i9/section1/${ORDER_ID}`;

const WFD_LOAD_I9SECTION1_CONTROLLER = createConstants(
  'i9ui/I9Section1Form/WFD_LOAD_I9SECTION1_CONTROLLER',
);

const WFD_LOAD_I9SECTION1_DATA = `${URL}`;

const WFD_SAVE_I9SECTION1_DATA = '//localhost:9000/i9/section1';


/*const WFD_LOAD_I9SECTION1_COUNTRIES = createConstants(
  'collection-ui/EmploymentForm/WFD_LOAD_EMPLOYMENT_COUNTRIES',
);

const WFD_LOAD_I9SECTION1_REGION = createConstants(
  'collection-ui/EmploymentForm/WFD_LOAD_EMPLOYMENT_REGION',
);

const WFD_SAVE_I9SECTION1_DATA = createConstants(
  'i9ui/I9Section1Form/WFD_SAVE_I9SECTION1_DATA',
);*/

const I9SECTION1_FORM_NAME = 'Section1Content';

const host = window.location.hostname;
const isLocal = host.indexOf('sterlingdirect.com') === -1;

const GET_BG_INVITE_ID = isLocal
  ? 'https://mockbin.dev.sterlingbackcheck.com/bin/231a1bf0-4e5e-4a25-a55a-0772c712e28b'
  : 'LinkedDocuments/GetBGEInviteID';

const ENDPOINTS = {
  GET_BG_INVITE_ID,
};

export {
  WFD_LOAD_I9SECTION1_CONTROLLER,
  WFD_LOAD_I9SECTION1_DATA,
  WFD_SAVE_I9SECTION1_DATA,
  //WFD_LOAD_I9SECTION1_COUNTRIES,
  //WFD_LOAD_I9SECTION1_REGION,
  //WFD_SAVE_I9SECTION1_DATA,
  ENDPOINTS,
  I9SECTION1_FORM_NAME,
  URL
};
