import ValidationUtil from '../validationUtil';
export default function(values) {

    var validationUtil = new ValidationUtil();
    const errors = {'i9' : {
      'section2':{
          'section2Doc':{
              'listADocs':[{

              }],
              'listBDoc':{

              },
              'listCDoc':{

              },
          },
          'employerCert':{
              'orgAddress':{
              },
          }
      }
    }};

    /* ----- CONDITIONAL CONTROL FIELDS CONSTS ------*/
    const LISTA = 'A';
    const LISTBC = 'BC';

    const requiredFields = [
      'i9.section2.section2Doc.docType',
      'i9.section2.section2Doc.listADocs[0].docTitle',
      'i9.section2.section2Doc.listADocs[0].issuingAuthority',
      'i9.section2.section2Doc.listADocs[0].docNumber',
      'i9.section2.section2Doc.listADocs[0].expiryDate',
      'i9.section2.section2Doc.listBDoc.docTitle',
      'i9.section2.section2Doc.listCDoc.docTitle',
      'i9.section2.employerCert.hireDate',
      'i9.section2.employerCert.orgName',
      'i9.section2.employerCert.position',
      'i9.section2.employerCert.givenName',
      'i9.section2.employerCert.familyName',
      'i9.section2.employerCert.orgAddress.line1',
      'i9.section2.employerCert.orgAddress.line2',
      'i9.section2.employerCert.orgAddress.countryCode',
      'i9.section2.employerCert.orgAddress.stateCode',
      'i9.section2.employerCert.orgAddress.regionCode',
      'i9.section2.employerCert.orgAddress.postalCode',
      'i9.section2.acknowledgement',

      /* NA Required Fields */
      'i9.section2.employerCert.orgAddress.line2NA',
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
                case 'i9.section2.section2Doc.docType':
                    errors.i9.section2.section2Doc.docType = validationUtil.ERROR_DOCUMENT_TYPE_REQUIRED;
                    break;
                case 'i9.section2.section2Doc.listADocs[0].docTitle':
                    errors.i9.section2.section2Doc.listADocs[0].docTitle = validationUtil.ERROR_LISTA_DOCUMENT_TYPE_REQUIRED;
                    break;
                case 'i9.section2.section2Doc.listADocs[0].issuingAuthority':
                    errors.i9.section2.section2Doc.listADocs[0].issuingAuthority = validationUtil.ERROR_ISSUING_AUTHORITY_REQUIRED;
                    break;
                case 'i9.section2.section2Doc.listADocs[0].docNumber':
                    errors.i9.section2.section2Doc.listADocs[0].docNumber = validationUtil.ERROR_USPASSPORT_NUMBER_REQUIRED;
                    break;
                case 'i9.section2.section2Doc.listADocs[0].expiryDate':
                    errors.i9.section2.section2Doc.listADocs[0].expiryDate = validationUtil.ERROR_USPASSPORT_EXPIRY_DATE_REQUIRED;
                    break;
                case 'i9.section2.section2Doc.listBDoc.docTitle':
                    errors.i9.section2.section2Doc.listBDoc.docTitle = validationUtil.ERROR_LISTB_DOCUMENT_TYPE_REQUIRED;
                    break;
                case 'i9.section2.section2Doc.listCDoc.docTitle':
                    errors.i9.section2.section2Doc.listCDoc.docTitle = validationUtil.ERROR_LISTC_DOCUMENT_TYPE_REQUIRED;
                    break;
                case 'i9.section2.employerCert.hireDate':
                    errors.i9.section2.employerCert.hireDate = validationUtil.ERROR_HIRE_DATE_REQUIRED;
                    break;
                case 'i9.section2.employerCert.orgName':
                    errors.i9.section2.employerCert.orgName = validationUtil.ERROR_ORG_NAME_REQUIRED;
                    break;
                case 'i9.section2.employerCert.position':
                    errors.i9.section2.employerCert.position = validationUtil.ERROR_POSITION_REQUIRED;
                    break;
                case 'i9.section2.employerCert.givenName':
                    errors.i9.section2.employerCert.givenName = validationUtil.ERROR_GIVEN_NAME_REQUIRED;
                    break;
                case 'i9.section2.employerCert.familyName':
                    errors.i9.section2.employerCert.familyName = validationUtil.ERROR_FAMILY_NAME_REQUIRED;
                    break;
                case 'i9.section2.acknowledgement':
                    errors.i9.section2.acknowledgement = validationUtil.ERROR_ACKNOWLEDGEMENT_REQUIRED;
                    break;

                /* Address fields */
                case 'i9.section2.employerCert.orgAddress.line1':
                    errors.i9.section2.employerCert.orgAddress.line1 = validationUtil.ERROR_ADDRESS_LINE_REQUIRED;
                    break;
                case 'i9.section2.employerCert.orgAddress.countryCode':
                    errors.i9.section2.employerCert.orgAddress.countryCode = validationUtil.ERROR_COUNTRY_REQUIRED;
                    break;
                case 'i9.section2.employerCert.orgAddress.stateCode':
                    errors.i9.section2.employerCert.orgAddress.stateCode = validationUtil.ERROR_STATE_REQUIRED;
                    break;
                case 'i9.section2.employerCert.orgAddress.regionCode':
                    errors.i9.section2.employerCert.orgAddress.regionCode = validationUtil.ERROR_CITY_REQUIRED;
                    break;
                case 'i9.section2.employerCert.orgAddress.postalCode':
                    errors.i9.section2.employerCert.orgAddress.postalCode = validationUtil.ERROR_ZIP_CODE_REQUIRED;
                    break;

                /* TextBox & Checkbox combo fields */
                case 'i9.section2.employerCert.orgAddress.line2':
                    errors.i9.section2.employerCert.orgAddress.line2 = validationUtil.ERROR_UNIT_REQUIRED;
                    break;
                default:
                    break;
            }
        } else {

            /* -----------------------   Required Validation for conditionally rendered fields ----------------------------------------------- */

            /*errors.i9DTO.section1DTO.empAuthDoc = validationUtil.validateRequired(values.i9DTO.section1DTO.empAuthDoc,validationUtil.ERROR_EMP_AUTH_DOC_REQUIRED);
            errors.i9DTO.section1DTO.foreignPassportNum = validationUtil.validateRequired(values.i9DTO.section1DTO.foreignPassportNum,validationUtil.ERROR_FOREIGN_PP_REQUIRED);
            errors.i9DTO.section1DTO.i94AdmissionNum = validationUtil.validateRequired(values.i9DTO.section1DTO.i94AdmissionNum,validationUtil.ERROR_FORM_I94_REQUIRED);
            errors.i9DTO.section1DTO.alienId = validationUtil.validateRequired(values.i9DTO.section1DTO.alienId,validationUtil.ERROR_ALIEN_ID_REQUIRED);
            errors.i9DTO.section1DTO.issuingCountry = validationUtil.validateRequired(values.i9DTO.section1DTO.issuingCountry,validationUtil.ERROR_ISSUING_COUNTRY_REQUIRED);
            errors.i9DTO.section1DTO.docType = validationUtil.validateRequired(values.i9DTO.section1DTO.docType,validationUtil.ERROR_DOC_TYPE_REQUIRED);

            /* -----------------------   Regex Validation -------------------------------------- */

            /* errors.i9DTO.section1DTO.firstName = values.i9DTO.section1DTO.firstName ? validationUtil.validateFirstName(values.i9DTO.section1DTO.firstName, validationUtil.ERROR_FIRST_NAME_VALIDATION) : errors.i9DTO.section1DTO.firstName ;
             errors.i9DTO.section1DTO.middleInitial = values.i9DTO.section1DTO.middleInitial ? validationUtil.validateMiddleName(values.i9DTO.section1DTO.middleInitial, validationUtil.ERROR_MIDDLE_NAME_VALIDATION) : errors.i9DTO.section1DTO.middleInitial;
             errors.i9DTO.section1DTO.lastName = values.i9DTO.section1DTO.lastName ? validationUtil.validateLastName(values.i9DTO.section1DTO.lastName, validationUtil.ERROR_LAST_NAME_VALIDATION) : errors.i9DTO.section1DTO.lastName ;
             errors.i9DTO.section1DTO.otherLastNames = values.i9DTO.section1DTO.otherLastNames ? validationUtil.validateLastName(values.i9DTO.section1DTO.otherLastNames, validationUtil.ERROR_OTHER_LAST_NAME_VALIDATION) : errors.i9DTO.section1DTO.otherLastNames ;
             errors.i9DTO.section1DTO.email = values.i9DTO.section1DTO.email ? validationUtil.validateEmail(values.i9DTO.section1DTO.email, validationUtil.ERROR_EMAIL_VALIDATION) : errors.i9DTO.section1DTO.email ;
             errors.i9DTO.section1DTO.ssn = values.i9DTO.section1DTO.ssn ? validationUtil.validateSSN(values.i9DTO.section1DTO.ssn, validationUtil.ERROR_SSN_VALIDATION) : errors.i9DTO.section1DTO.ssn ;
             errors.i9DTO.section1DTO.phoneNumber = values.i9DTO.section1DTO.phoneNumber ? validationUtil.validatePhoneNum(values.i9DTO.section1DTO.phoneNumber, validationUtil.ERROR_PHONE_NUMBER_VALIDATION) : errors.i9DTO.section1DTO.phoneNumber ;
             errors.i9DTO.section1DTO.addressDTO.zipCode = values.i9DTO.section1DTO.addressDTO.zipCode ? validationUtil.validateZipCode(values.i9DTO.section1DTO.addressDTO.zipCode, validationUtil.ERROR_ZIP_CODE_VALIDATION) : errors.i9DTO.section1DTO.addressDTO.zipCode ;
             errors.i9DTO.section1DTO.foreignPassportNum = values.i9DTO.section1DTO.foreignPassportNum ? validationUtil.validateForeignPP(values.i9DTO.section1DTO.foreignPassportNum, validationUtil.ERROR_FOREIGN_PP_VALIDATION) : errors.i9DTO.section1DTO.foreignPassportNum;
             errors.i9DTO.section1DTO.i94AdmissionNum = values.i9DTO.section1DTO.i94AdmissionNum ? validationUtil.validateFormI94(values.i9DTO.section1DTO.i94AdmissionNum, validationUtil.ERROR_FORM_I94_VALIDATION) : errors.i9DTO.section1DTO.i94AdmissionNum ;
             errors.i9DTO.section1DTO.alienId = values.i9DTO.section1DTO.alienId ? validationUtil.validateAlienId(values.i9DTO.section1DTO.alienId, validationUtil.ERROR_ALIEN_ID_VALIDATION) : errors.i9DTO.section1DTO.alienId ;

             /* -----------   Handling the toggle between eligibilty Type Radio Buttons and clearing up of the conditional fields ----------- */

            if (values.i9.section2.section2Doc && values.i9.section2.section2Doc.docType !== LISTBC) {
                delete values.i9.section2.section2Doc.listBDoc;
                errors.i9.section2.section2Doc.listBDoc.docTitle = '';
                delete values.i9.section2.section2Doc.listCDoc;
                errors.i9.section2.section2Doc.listCDoc.docTitle = '';
            }

            if(values.i9.section2.section2Doc && values.i9.section2.section2Doc.docType !== LISTA) {
                delete values.i9.section2.section2Doc.listADocs;
                errors.i9.section2.section2Doc.listADocs[0].docTitle = '';
                errors.i9.section2.section2Doc.listADocs[0].issuingAuthority = '';
                errors.i9.section2.section2Doc.listADocs[0].docNumber = '';
                errors.i9.section2.section2Doc.listADocs[0].expiryDate = '';
            }

            // Pre-fill specific issuing authority corresponding to specific docTitle
            if (values.i9.section2.section2Doc && values.i9.section2.section2Doc.listADocs  && (values.i9.section2.section2Doc.listADocs[0].docTitle === 'U.S. Passport' || values.i9.section2.section2Doc.listADocs[0].docTitle === 'U.S. Passport Card')) {
                values.i9.section2.section2Doc.listADocs[0].issuingAuthority = 'U.S. Department of State';
            }

            /* -----------  Clearing error if NA field is true ----------- */
            errors.i9.section2.employerCert.orgAddress.line2 = values.i9.section2.employerCert.orgAddress.line2NA ? '' : errors.i9.section2.employerCert.orgAddress.line2;
        }
    });

  return errors;
}
