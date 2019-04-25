
class MapUtil {

    orderTypes =  [
        {
            value: 'Stand Alone',
        },
        {
            value: 'Paper I9',
        },
        {
            value: 'Everify',
        },
        {
            value: 'Reverify',
        },
        {
            value: 'Rehire',
        }
    ].map(suggestion => ({
        label: suggestion.value,
        value: suggestion.value,
    }));

    countries = [
        { label: 'Afghanistan' },
        { label: 'Aland Islands' },
        { label: 'Albania' },
        { label: 'Algeria' },
        { label: 'American Samoa' },
        { label: 'Andorra' },
        { label: 'Angola' },
        { label: 'Anguilla' },
        { label: 'Antarctica' },
        { label: 'Antigua and Barbuda' },
        { label: 'Argentina' },
        { label: 'Armenia' },
        { label: 'Aruba' },
        { label: 'Australia' },
        { label: 'Austria' },
        { label: 'Azerbaijan' },
        { label: 'Bahamas' },
        { label: 'Bahrain' },
        { label: 'Bangladesh' },
        { label: 'Barbados' },
        { label: 'Belarus' },
        { label: 'Belgium' },
        { label: 'Belize' },
        { label: 'Benin' },
        { label: 'Bermuda' },
        { label: 'Bhutan' },
        { label: 'Bolivia, Plurinational State of' },
        { label: 'Bonaire, Sint Eustatius and Saba' },
        { label: 'Bosnia and Herzegovina' },
        { label: 'Botswana' },
        { label: 'Bouvet Island' },
        { label: 'Brazil' },
        { label: 'British Indian Ocean Territory' },
        { label: 'Brunei Darussalam' },
        { label: 'India' },
        { label: 'United States of America' },
    ].map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label,
    }));

    states = [
       { label: 'Washington' },
       { label: 'New York' },
       { label: 'Texas' },
       { label: 'Ohio' },
    ].map(suggestion => ({
       value: suggestion.label,
       label: suggestion.label,
    }));

    listADocuments = [
        {
            value: 'U.S. Passport',
        },
        {
            value: 'U.S. Passport Card',
        },
        {
            value: 'Perm. Resident Card (Form I-551)',
        },
        {
            value: 'Alien Registration Receipt Card (Form I-551)',
        },
        {
            value: 'Foreign Passport containing a temp. I-551 Stamp',
        },
        {
            value: 'Foreign Passport containing a temp. I-551 MRIV',
        },
        {
            value: 'Employment Authorization Document (Form I-766)',
        },
        {
            value: 'Foreign Passport with Form I-94/I-94A containing an endorsement of the alien\'s non immigrant status',
        },
        {
            value: 'Passport from the Federated States of Micronesia (FSM) with Form I-94/I-94A',
        },
        {
            value: 'Passport from the Republic of the Marshall Islands (RMI) with Form I-94/I-94A',
        },
        {
            value: 'Receipt: The arrival portion of Form I-94/I-94A containing a temp. I-551 stamp and photo',
        },
        {
            value: 'Receipt: Departure portion of a Form I-94/A with an unexpired refugee admission stamp or admission class of "RE"',
        }
    ].map(suggestion => ({
       label: suggestion.value,
       value: suggestion.value,
    }));

    listBDocuments = [
        {
            value: 'Driver\'s license issued by a State or outlying possession of the United States',
        },
        {
            value: 'ID card issued by a State or outlying possession of the United States',
        },
        {
            value: 'Government issued ID with Photo',
        },
        {
            value: 'School ID card with a photograph',
        },
        {
            value: 'Voter\'s registration card',
        },
        {
            value: 'U.S. Military ID',
        },
        {
            value: 'U.S. Military draft record',
        },
        {
            value: 'Military dependent\'s ID Card',
        },
        {
            value: 'U.S. Coast Guard Merchant Mariner Card',
        },
        {
            value: 'Native American tribal document',
        },
        {
            value: 'Driver\'s license issued by a Canadian government authority',
        },
        {
            value: 'School record ore report card (if under 18 and unable to present a document listed above)',
        },
        {
            value: 'Clinic, doctor or hospital record (if under 18 and unable to present a document listed above)',
        },
        {
            value: 'Day-care or nursery school record (if under 18 and unable to present a document listed above)',
        }
    ].map(suggestion => ({
        label: suggestion.value,
        value: suggestion.value,
    }));

    listCDocuments = [
        {
            value: 'Social Security Card without restrictions',
        },
        {
            value: 'Certification of Birth Abroad (Form FS-545)',
        },
        {
            value: 'Certification of Report of Birth (Form DS-1350)',
        },
        {
            value: 'Consular Report of Birth Abroad (FS-240)',
        },
        {
            value: 'Original or certified copy of U.S. birth certificate bearing an official seal',
        },
        {
            value: 'Native American Tribal Document',
        },
        {
            value: 'U.S. Citizen ID Card (Form I-197)',
        },
        {
            value: 'Resident Citizen ID Card (Form I-179)',
        },
        {
            value: 'Employment Auth. Doc. (DHS) List C #7',
        }
    ].map(suggestion => ({
        label: suggestion.value,
        value: suggestion.value,
    }));

    listACDocuments = [
        {
            value: 'U.S. Passport',
        },
        {
            value: 'U.S. Passport Card',
        },
        {
            value: 'Perm. Resident Card (Form I-551)',
        },
        {
            value: 'Alien Registration Receipt Card (Form I-551)',
        },
        {
            value: 'Foreign Passport containing a temp. I-551 Stamp',
        },
        {
            value: 'Foreign Passport containing a temp. I-551 MRIV',
        },
        {
            value: 'Employment Authorization Document (Form I-766)',
        },
        {
            value: 'Foreign Passport with Form I-94/I-94A containing an endorsement of the alien\'s non immigrant status',
        },
        {
            value: 'Passport from the Federated States of Micronesia (FSM) with Form I-94/I-94A',
        },
        {
            value: 'Passport from the Republic of the Marshall Islands (RMI) with Form I-94/I-94A',
        },
        {
            value: 'Receipt: The arrival portion of Form I-94/I-94A containing a temp. I-551 stamp and photo',
        },
        {
            value: 'Receipt: Departure portion of a Form I-94/A with an unexpired refugee admission stamp or admission class of "RE"',
        },
        {
            value: 'I-20',
        },
        {
            value: 'DS-2019',
        },
        {
            value: 'Social Security Card without restrictions',
        },
        {
            value: 'Certification of Birth Abroad (Form FS-545)',
        },
        {
            value: 'Certification of Report of Birth (Form DS-1350)',
        },
        {
            value: 'Consular Report of Birth Abroad (FS-240)',
        },
        {
            value: 'Original or certified copy of U.S. birth certificate bearing an official seal',
        },
        {
            value: 'Native American Tribal Document',
        },
        {
            value: 'U.S. Citizen ID Card (Form I-197)',
        },
        {
            value: 'Resident Citizen ID Card (Form I-179)',
        },
        {
            value: 'Employment Auth. Doc. (DHS) List C #7',
        }
    ].map(suggestion => ({
        label: suggestion.value,
        value: suggestion.value,
    }));

    section1DocumentTypes = [
        {
            value: 'Alien Number',
        },
        {
            value: 'USCIS Number',
        }
    ].map(suggestion => ({
        label: suggestion.value,
        value: suggestion.value,
    }));

    section1EligibilityTypeOptions = [
        {
            value: 'CITIZEN',
            label: 'A citizen of United States',
        },
        {
            value: 'NONCITIZEN',
            label: 'A noncitizen national of United States',
        },
        {
            value: 'LPR',
            label: 'A lawful permanent resident',
        },
        {
            value: 'AAW',
            label: 'An alien authorized to work',
        }
    ];

    section1EmpAuthDocOptions = [
        {
            value: 'alienRegNum',
            label: 'Alien Registration Number/USCIS Number',
        },
        {
            value: 'formI94',
            label: 'Form I-94 Admission Number',
        },
        {
            value: 'foreignpp',
            label: 'Foreign Passport Number',
        }
    ];

}

export default MapUtil;
