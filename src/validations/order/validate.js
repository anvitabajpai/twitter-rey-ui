import ValidationUtil from '../validationUtil';

export default function(values) {

    var validationUtil = new ValidationUtil();
    const errors = {};

    const requiredFieldsOrderForm = [
        'firstNameInitiator',
        'lastNameInitiator',
        'middleInitialInitiator',
        'emailInitiator',
        'firstNameCandidate',
        'lastNameCandidate',
        'middleInitialCandidate',
        'emailCandidate',
        'firstNameVerifier',
        'lastNameVerifier',
        'middleInitialVerifier',
        'emailVerifier',
        'hireDate',
        'orderType'
    ];

    requiredFieldsOrderForm.forEach(field => {
        if (!values[field] || values[field] === undefined || values[field] === false) {
            switch(field) {
                case 'firstNameInitiator':
                    errors[field] = validationUtil.ERROR_INITIATOR_FIRST_NAME_REQUIRED;
                    break;
                case 'middleInitialInitiator':
                    errors[field] = validationUtil.ERROR_INITIATOR_MIDDLE_NAME_REQUIRED;
                    break;
                case 'lastNameInitiator':
                    errors[field] = validationUtil.ERROR_INITIATOR_LAST_NAME_REQUIRED;
                    break;
                case 'emailInitiator':
                    errors[field] = validationUtil.ERROR_INITIATOR_EMAIL_REQUIRED;
                    break;

                case 'firstNameCandidate':
                    errors[field] = validationUtil.ERROR_CANDIDATE_FIRST_NAME_REQUIRED;
                    break;
                case 'middleInitialCandidate':
                    errors[field] = validationUtil.ERROR_CANDIDATE_MIDDLE_NAME_REQUIRED;
                    break;
                case 'lastNameCandidate':
                    errors[field] = validationUtil.ERROR_CANDIDATE_LAST_NAME_REQUIRED;
                    break;
                case 'emailCandidate':
                    errors[field] = validationUtil.ERROR_CANDIDATE_EMAIL_REQUIRED;
                    break;

                case 'firstNameVerifier':
                    errors[field] = validationUtil.ERROR_VERIFIER_FIRST_NAME_REQUIRED;
                    break;
                case 'middleInitialVerifier':
                    errors[field] = validationUtil.ERROR_VERIFIER_MIDDLE_NAME_REQUIRED;
                    break;
                case 'lastNameVerifier':
                    errors[field] = validationUtil.ERROR_VERIFIER_LAST_NAME_REQUIRED;
                    break;
                case 'emailVerifier':
                    errors[field] = validationUtil.ERROR_VERIFIER_EMAIL_REQUIRED;
                    break;

                case 'hireDate':
                    errors[field] = validationUtil.ERROR_HIRE_DATE_REQUIRED;
                    break;
                case 'orderType':
                    errors[field] = validationUtil.ERROR_ORDER_TYPE_REQUIRED;
                    break;
                default:
                    break;
            }
        }
    });

    errors.emailInitiator = values.emailInitiator ? validationUtil.validateEmail(values.emailInitiator, validationUtil.ERROR_EMAIL_VALIDATION) : errors.emailInitiator ;
    errors.emailCandidate = values.emailCandidate ? validationUtil.validateEmail(values.emailCandidate, validationUtil.ERROR_EMAIL_VALIDATION) : errors.emailInitiator ;
    errors.emailVerifier =  values.emailVerifier ? validationUtil.validateEmail(values.emailVerifier,  validationUtil.ERROR_EMAIL_VALIDATION) : errors.emailInitiator ;

    errors.middleInitialInitiator = values.middleInitialInitiatorNA ? '' : errors.middleInitialInitiator;
    errors.middleInitialCandidate = values.middleInitialCandidateNA ? '' : errors.middleInitialCandidate;
    errors.middleInitialVerifier = values.middleInitialVerifierNA ? '' : errors.middleInitialVerifier;

    return errors;
}
