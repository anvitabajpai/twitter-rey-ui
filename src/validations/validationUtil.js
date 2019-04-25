class ValidationUtil {

    /* ============================ ORDER FORM CUSTOM ERROR CONSTS =========================== */

    /* ----- REQUIRED ERROR CONSTS ------*/

    ERROR_HIRE_DATE_REQUIRED = 'Hire Date is required';
    ERROR_ORDER_TYPE_REQUIRED = 'Order Type is required';
    ERROR_INITIATOR_FIRST_NAME_REQUIRED = 'First Name of Initiator is required';
    ERROR_INITIATOR_MIDDLE_NAME_REQUIRED = 'Middle Name of Initiator is required';
    ERROR_INITIATOR_LAST_NAME_REQUIRED = 'Last Name of Initiator is required';
    ERROR_INITIATOR_EMAIL_REQUIRED = 'Email of Initiator is required';
    ERROR_CANDIDATE_FIRST_NAME_REQUIRED = 'First Name of Candidate is required';
    ERROR_CANDIDATE_MIDDLE_NAME_REQUIRED = 'Middle Name of Candidate is required';
    ERROR_CANDIDATE_LAST_NAME_REQUIRED = 'Last Name of Candidate is required';
    ERROR_CANDIDATE_EMAIL_REQUIRED = 'Email of Candidate is required';
    ERROR_VERIFIER_FIRST_NAME_REQUIRED = 'First Name of Verifier is required';
    ERROR_VERIFIER_MIDDLE_NAME_REQUIRED = 'Middle Name of Verifier is required';
    ERROR_VERIFIER_LAST_NAME_REQUIRED = 'Last Name of Verifier is required';
    ERROR_VERIFIER_EMAIL_REQUIRED = 'Email of Verifier is required';

    /* ============================ SECTION 1 CUSTOM ERROR CONSTS =========================== */

    /* ----- REQUIRED ERROR CONSTS ------*/

    ERROR_FIRST_NAME_REQUIRED = 'First Name is required';
    ERROR_MIDDLE_NAME_REQUIRED = 'Middle Name is required';
    ERROR_LAST_NAME_REQUIRED = 'Last Name is required';
    ERROR_OTHER_LAST_NAME_REQUIRED = 'Other Last Name is required';
    ERROR_DATE_OF_BIRTH_REQUIRED = 'Date of Birth is required';
    ERROR_SSN_REQUIRED = 'Social Security Number is required. If you do not have an SSN, check "Awaiting SSN"';
    ERROR_ADDRESS_LINE_REQUIRED = 'Address is required';
    ERROR_UNIT_REQUIRED = 'Apartment is required';
    ERROR_CITY_REQUIRED = 'City is required';
    ERROR_COUNTRY_REQUIRED = 'Country is required';
    ERROR_STATE_REQUIRED = 'State is required';
    ERROR_ZIP_CODE_REQUIRED = 'Zip Code is required';
    ERROR_EMAIL_REQUIRED = 'Email is required';
    ERROR_PHONE_NUMBER_REQUIRED = 'Phone is required';
    ERROR_ELIGIBILITY_TYPE_REQUIRED = 'Attestation is required';
    ERROR_EMP_AUTH_DOC_REQUIRED = 'Employment Authorization Document is required';
    ERROR_DOC_TYPE_REQUIRED = 'Document Type is required';
    ERROR_ALIEN_ID_REQUIRED = 'Alien Registration Number/USCIS Number is required';
    ERROR_FORM_I94_REQUIRED = 'Form I-94 Admission Number is required';
    ERROR_FOREIGN_PP_REQUIRED = 'Foreign Passport Number is required';
    ERROR_ISSUING_COUNTRY_REQUIRED = 'Country of issuance is required';
    ERROR_EXPIRATION_DATE_REQUIRED = 'Work Authorization Expiration Date is required';
    ERROR_ACKNOWLEDGEMENT_REQUIRED = 'I Acknowledge is required';

    /* ----- VALIDATION ERROR CONSTS ------*/

    ERROR_FIRST_NAME_VALIDATION = 'Up to 25 alphabetic characters, spaces, single quotes and hyphens are allowed';
    ERROR_MIDDLE_NAME_VALIDATION = 'Only alphabetic characters, spaces, single quotes and hyphens are allowed';
    ERROR_LAST_NAME_VALIDATION = 'Up to 40 alphabetic characters, spaces, single quotes and hyphens are allowed';
    ERROR_OTHER_LAST_NAME_VALIDATION = 'Up to 40 alphabetic characters, spaces, single quotes and hyphens are allowed';
    ERROR_SSN_VALIDATION = 'Must be 9 digits';
    ERROR_EMAIL_VALIDATION = 'Invalid email address';
    ERROR_PHONE_NUMBER_VALIDATION = 'Must be 10 digits';
    ERROR_ZIP_CODE_VALIDATION = 'Must be 5 digits';
    ERROR_ALIEN_ID_VALIDATION = 'Must be 9 numeric characters';
    ERROR_FOREIGN_PP_VALIDATION = 'Passport Number must be 6-12 characters A-Z and 0-9';
    ERROR_FORM_I94_VALIDATION = 'Must be 11 numeric characters';

    /* ============================ SECTION 2 CUSTOM ERROR CONSTS =========================== */

    /* ----- REQUIRED ERROR CONSTS ------*/

    ERROR_DOCUMENT_TYPE_REQUIRED = 'Document Type is required';
    ERROR_LISTA_DOCUMENT_TYPE_REQUIRED = 'List A Document Type is required';
    ERROR_LISTB_DOCUMENT_TYPE_REQUIRED = 'List B Document Type is required';
    ERROR_LISTC_DOCUMENT_TYPE_REQUIRED = 'List C Document Type is required';
    ERROR_USPASSPORT_NUMBER_REQUIRED = 'Passport or Passport Card Number is required';
    ERROR_ISSUING_AUTHORITY_REQUIRED = 'Issuing Authority Required'
    ERROR_USPASSPORT_EXPIRY_DATE_REQUIRED = 'Missing U.S. Passport expiration date';
    ERROR_POSITION_REQUIRED = 'Title of Employer or Authorized Representative is required';
    ERROR_ORG_NAME_REQUIRED = 'Employer\'s Business or Organization Name is required';
    ERROR_GIVEN_NAME_REQUIRED = 'Given Name is required';
    ERROR_FAMILY_NAME_REQUIRED = 'Family Name is required';

    /*  ---------------------- Required Validations ----------------------- */

    validateRequired(value, errorMessage) {
        if (value === undefined || value === '') {
            return errorMessage;
        }
    }

    /*  ---------------------- Regex Validations ----------------------- */

    validateFirstName(value, errorMessage) {
        if (value && !(/^[a-zA-Z.-]{1,25}$/).test(value)) {
            return errorMessage;
        }
    }

    validateMiddleName(value, errorMessage) {
        if (value && !(/^[a-zA-Z-]*$/).test(value)) {
            return errorMessage;
        }
    }

    validateLastName(value, errorMessage) {
        if (value && !(/^[a-zA-Z.-]{1,40}$/).test(value)) {
            return errorMessage;
        }
    }

    validateEmail(value, errorMessage) {
        if (value && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return errorMessage;
        }
    }

    validateSSN(value, errorMessage) {
        if (value && !(/^[0-9]{9}$/g).test(value)) {
            return errorMessage;
        }
    }

    validatePhoneNum(value, errorMessage) {
        if (value && !(/^[0-9]{10}$/g).test(value)) {
            return errorMessage;
        }
    }

    validateZipCode(value, errorMessage) {
        if (value && !(/^[0-9]{5}$/g).test(value)) {
            return errorMessage;
        }
    }

    validateForeignPP(value, errorMessage) {
        if (value && !/^[A-Z0-9]{6,12}$/i.test(value)) {
            return errorMessage;
        }
    }

    validateFormI94(value, errorMessage) {
        if (value && !(/^[0-9]{11}$/g).test(value)) {
            return errorMessage;
        }
    }

    validateAlienId(value, errorMessage) {
        if (value && !(/^[0-9]{9}$/g).test(value)) {
            return errorMessage;
        }
    }
}

export default ValidationUtil;