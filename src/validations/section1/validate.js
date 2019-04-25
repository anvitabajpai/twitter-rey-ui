import ValidationUtil from '../validationUtil';
export default function(values) {

    var validationUtil = new ValidationUtil();
    const errors = {'formI9' : {
        'section1':{
            'address':{
            }
        }
    }};

    /* ----- CONDITIONAL CONTROL FIELDS CONSTS ------*/
    const AAW = 'AAW';
    const LPR = 'LPR';
    const ALIEN_REG_NUM = 'alienRegNum';
    const FORM_I94 = 'formI94';
    const FOREIGN_PP = 'foreignpp';

    const requiredFields = [
        'formI9.section1.givenName',
        'formI9.section1.familyName',
        'formI9.section1.middleInitial',
        'formI9.section1.otherFamilyNames',
        'formI9.section1.dob',
        'formI9.section1.ssn',
        'formI9.section1.address.line1',
        'formI9.section1.address.line2',
        'formI9.section1.address.municipality',
        'formI9.section1.address.countryCode',
        'formI9.section1.address.regionCode',
        'formI9.section1.address.postalCode',
        'formI9.section1.email',
        'formI9.section1.phone',
        'formI9.section1.eligibilityType',
        'formI9.section1.acknowledgement',
        'formI9.section1.empAuthDoc',
        'formI9.section1.docType',
        'formI9.section1.alienNumber',
        'formI9.section1.i94Number',
        'formI9.section1.foreignPassportNo',
        'formI9.section1.issuingCountry',
        'formI9.section1.expirationDate',

        /* NA Required Fields */
        'formI9.section1.middleInitialNA',
        'formI9.section1.otherFamilyNamesNA',
        'formI9.section1.awaitingSSN',
        'formI9.section1.address.line2NA',
        'formI9.section1.emailNA',
        'formI9.section1.phoneNA',
        'formI9.section1.expirationDateNA'
    ];

    requiredFields.forEach(field => {

        const valueFieldName = "values." + field;
        let valuePopulated = false;
        try {
            const value = eval(valueFieldName);
            if (value !== undefined && value !== false && value !== '') {
                valuePopulated = true;
            }
        } catch (e) {
            // Do nothing as the value doesn't exist
        }

        if (!valuePopulated) {
            switch (field) {
                case 'formI9.section1.givenName':
                    errors.formI9.section1.givenName = validationUtil.ERROR_FIRST_NAME_REQUIRED;
                    break;
                case 'formI9.section1.familyName':
                    errors.formI9.section1.familyName = validationUtil.ERROR_LAST_NAME_REQUIRED;
                    break;
                case 'formI9.section1.dob':
                    errors.formI9.section1.dob = validationUtil.ERROR_DATE_OF_BIRTH_REQUIRED;
                    break;
                case 'formI9.section1.address.line1':
                    errors.formI9.section1.address.line1 = validationUtil.ERROR_ADDRESS_LINE_REQUIRED;
                    break;
                case 'formI9.section1.address.municipality':
                    errors.formI9.section1.address.municipality = validationUtil.ERROR_CITY_REQUIRED;
                    break;
                case 'formI9.section1.address.countryCode':
                    errors.formI9.section1.address.countryCode = validationUtil.ERROR_COUNTRY_REQUIRED;
                    break;
                case 'formI9.section1.address.regionCode':
                    errors.formI9.section1.address.regionCode = validationUtil.ERROR_STATE_REQUIRED;
                    break;
                case 'formI9.section1.address.postalCode':
                    errors.formI9.section1.address.postalCode = validationUtil.ERROR_ZIP_CODE_REQUIRED;
                    break;
                case 'formI9.section1.eligibilityType':
                    errors.formI9.section1.eligibilityType = validationUtil.ERROR_ELIGIBILITY_TYPE_REQUIRED;
                    break;
                case 'formI9.section1.expirationDate':
                    errors.formI9.section1.expirationDate = validationUtil.ERROR_EXPIRATION_DATE_REQUIRED;
                    break;
                case 'formI9.section1.acknowledgement':
                    errors.formI9.section1.acknowledgement = validationUtil.ERROR_ACKNOWLEDGEMENT_REQUIRED;
                    break;

                /* TextBox & Checkbox combo fields */
                case 'formI9.section1.address.line2':
                    errors.formI9.section1.address.line2 = validationUtil.ERROR_UNIT_REQUIRED;
                    break;
                case 'formI9.section1.ssn':
                    errors.formI9.section1.ssn = validationUtil.ERROR_SSN_REQUIRED;
                    break;
                case 'formI9.section1.middleInitial':
                    errors.formI9.section1.middleInitial = validationUtil.ERROR_MIDDLE_NAME_REQUIRED;
                    break;
                case 'formI9.section1.otherFamilyNames':
                    errors.formI9.section1.otherFamilyNames = validationUtil.ERROR_OTHER_LAST_NAME_REQUIRED;
                    break;
                case 'formI9.section1.email':
                    errors.formI9.section1.email = validationUtil.ERROR_EMAIL_REQUIRED;
                    break;
                case 'formI9.section1.phone':
                    errors.formI9.section1.phone = validationUtil.ERROR_PHONE_NUMBER_REQUIRED;
                    break;
                default:
                    break;
            }
        } else {

            /* -----------------------   Required Validation for conditionally rendered fields ----------------------------------------------- */

            errors.formI9.section1.empAuthDoc = validationUtil.validateRequired(values.formI9.section1.empAuthDoc,validationUtil.ERROR_EMP_AUTH_DOC_REQUIRED);
            errors.formI9.section1.foreignPassportNo = validationUtil.validateRequired(values.formI9.section1.foreignPassportNo,validationUtil.ERROR_FOREIGN_PP_REQUIRED);
            errors.formI9.section1.i94Number = validationUtil.validateRequired(values.formI9.section1.i94Number,validationUtil.ERROR_FORM_I94_REQUIRED);
            errors.formI9.section1.alienNumber = validationUtil.validateRequired(values.formI9.section1.alienNumber,validationUtil.ERROR_ALIEN_ID_REQUIRED);
            errors.formI9.section1.issuingCountry = validationUtil.validateRequired(values.formI9.section1.issuingCountry,validationUtil.ERROR_ISSUING_COUNTRY_REQUIRED);
            errors.formI9.section1.docType = validationUtil.validateRequired(values.formI9.section1.docType,validationUtil.ERROR_DOC_TYPE_REQUIRED);

            /* -----------------------   Regex Validation -------------------------------------- */

            errors.formI9.section1.givenName = values.formI9.section1.givenName ? validationUtil.validateFirstName(values.formI9.section1.givenName, validationUtil.ERROR_FIRST_NAME_VALIDATION) : errors.formI9.section1.givenName ;
            errors.formI9.section1.middleInitial = values.formI9.section1.middleInitial ? validationUtil.validateMiddleName(values.formI9.section1.middleInitial, validationUtil.ERROR_MIDDLE_NAME_VALIDATION) : errors.formI9.section1.middleInitial;
            errors.formI9.section1.familyName = values.formI9.section1.familyName ? validationUtil.validateLastName(values.formI9.section1.familyName, validationUtil.ERROR_LAST_NAME_VALIDATION) : errors.formI9.section1.familyName ;
            errors.formI9.section1.otherFamilyNames = values.formI9.section1.otherFamilyNames ? validationUtil.validateLastName(values.formI9.section1.otherFamilyNames, validationUtil.ERROR_OTHER_LAST_NAME_VALIDATION) : errors.formI9.section1.otherFamilyNames ;
            errors.formI9.section1.email = values.formI9.section1.email ? validationUtil.validateEmail(values.formI9.section1.email, validationUtil.ERROR_EMAIL_VALIDATION) : errors.formI9.section1.email ;
            errors.formI9.section1.ssn = values.formI9.section1.ssn ? validationUtil.validateSSN(values.formI9.section1.ssn, validationUtil.ERROR_SSN_VALIDATION) : errors.formI9.section1.ssn ;
            errors.formI9.section1.phone = values.formI9.section1.phone ? validationUtil.validatePhoneNum(values.formI9.section1.phone, validationUtil.ERROR_PHONE_NUMBER_VALIDATION) : errors.formI9.section1.phone;
            errors.formI9.section1.address.postalCode = ( values.formI9.section1.address && values.formI9.section1.address.postalCode) ? validationUtil.validateZipCode(values.formI9.section1.address.postalCode, validationUtil.ERROR_ZIP_CODE_VALIDATION) : errors.formI9.section1.address.postalCode ;
            errors.formI9.section1.foreignPassportNo = values.formI9.section1.foreignPassportNo ? validationUtil.validateForeignPP(values.formI9.section1.foreignPassportNo, validationUtil.ERROR_FOREIGN_PP_VALIDATION) : errors.formI9.section1.foreignPassportNo;
            errors.formI9.section1.i94Number = values.formI9.section1.i94Number ? validationUtil.validateFormI94(values.formI9.section1.i94Number, validationUtil.ERROR_FORM_I94_VALIDATION) : errors.formI9.section1.i94Number ;
            errors.formI9.section1.alienNumber = values.formI9.section1.alienNumber ? validationUtil.validateAlienId(values.formI9.section1.alienNumber, validationUtil.ERROR_ALIEN_ID_VALIDATION) : errors.formI9.section1.alienNumber ;

            /* -----------   Handling the toggle between eligibilty Type Radio Buttons and clearing up of the conditional fields ----------- */

            if (values.formI9.section1.eligibilityType !== AAW) {
                delete values.formI9.section1.empAuthDoc;
                delete values.formI9.section1.expirationDate;
                errors.formI9.section1.empAuthDoc = '';
                errors.formI9.section1.expirationDate = '';
            }

            if(values.formI9.section1.eligibilityType !== LPR && values.formI9.section1.empAuthDoc !== ALIEN_REG_NUM) {
                delete values.formI9.section1.docType;
                delete values.formI9.section1.alienNumber;
                errors.formI9.section1.docType = '';
                errors.formI9.section1.alienNumber = '';
            }

            if(values.formI9.section1.empAuthDoc !== FORM_I94) {
                delete values.formI9.section1.i94Number;
                errors.formI9.section1.i94Number = '';
            }

            if(values.formI9.section1.empAuthDoc !== FOREIGN_PP) {
                delete values.formI9.section1.foreignPassportNo;
                delete values.formI9.section1.issuingCountry;
                errors.formI9.section1.foreignPassportNo = '';
                errors.formI9.section1.issuingCountry = '';
            }

            /* -----------  Clearing error if NA field is true ----------- */

            errors.formI9.section1.middleInitial = values.formI9.section1.middleInitialNA ? '' : errors.formI9.section1.middleInitial;
            errors.formI9.section1.otherFamilyNames = values.formI9.section1.otherFamilyNamesNA ? '' : errors.formI9.section1.otherFamilyNames;
            errors.formI9.section1.ssn = values.formI9.section1.awaitingSSN ? '' : errors.formI9.section1.ssn;
            errors.formI9.section1.email = values.formI9.section1.emailNA ? '' : errors.formI9.section1.email;
            errors.formI9.section1.phone = values.formI9.section1.phoneNA ? '' : errors.formI9.section1.phone;
            errors.formI9.section1.address.line2 = (values.formI9.section1.address && values.formI9.section1.address.line2NA) ? '' : errors.formI9.section1.address.line2;
            errors.formI9.section1.expirationDate = values.formI9.section1.expirationDateNA ? '' : errors.formI9.section1.expirationDate;
        }
    });

    return errors;
}
