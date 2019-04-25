function loadData(i9Section1) {
    var i9 = {};
    return i9 = {
        "givenName": i9Section1.formI9.section1.givenName,
        "familyName": i9Section1.formI9.section1.familyName,
        "middleInitial": i9Section1.formI9.section1.middleInitial,
        "otherFamilyNames": i9Section1.formI9.section1.otherFamilyNames,
        "otherFamilyNamesNA": i9Section1.formI9.section1.otherFamilyNamesNA,
        "dob": i9Section1.formI9.section1.dob,
        "awaitingSSN": i9Section1.formI9.section1.awaitingSSN,
        "ssn": i9Section1.formI9.section1.ssn,
        "email": i9Section1.formI9.section1.email,
        "emailNA": i9Section1.formI9.section1.emailNA,
        "phone": i9Section1.formI9.section1.phone,
        "phoneNA": i9Section1.formI9.section1.phoneNA,
        "eligibilityType": i9Section1.formI9.section1.eligibilityType,
        "alienNumber": i9Section1.formI9.section1.alienNumber,
        "expirationDate": i9Section1.formI9.section1.expirationDate,
        "expirationDateNA": i9Section1.formI9.section1.expirationDateNA,
        "address": {
            "line1": i9Section1.formI9.section1.address.line1,
            "line2": i9Section1.formI9.section1.address.line2,
            "line2NA": i9Section1.formI9.section1.address.line2NA,
            "municipality": i9Section1.formI9.section1.address.municipality,
            "regionCode": i9Section1.formI9.section1.address.regionCode,
            "countryCode": i9Section1.formI9.section1.address.countryCode,
            "postalCode": i9Section1.formI9.section1.address.postalCode
        },
        "i94Number": i9Section1.formI9.section1.i94Number,
        "foreignPassportNo": i9Section1.formI9.section1.foreignPassportNo,
        "issuingCountry": i9Section1.formI9.section1.issuingCountry,
        "acknowledgement": i9Section1.formI9.section1.acknowledgement,
        "empAuthDoc": i9Section1.formI9.section1.empAuthDoc,
        "docType": i9Section1.formI9.section1.docType,
    }
}


export function transformI9Section1ForUi(i9Section1) {
    return loadData(i9Section1)
}

export function transformi9Section1ForService(input) {
    return input;
    // return input.map(i9Section1 => ({
    //   ListEntryId: i9Section1.id,
    //   IsCurrent: true, // TODO.
    //   Country: i9Section1.country,
    //   isUs: i9Section1.country === 'US',
    //   Add1: i9Section1.line1,
    //   Add2: i9Section1.line2,
    //   City: i9Section1.city,
    //   State: i9Section1.country === 'US' ? toAbbrState(i9Section1.region) : '',
    //   Region: i9Section1.country !== 'US' ? i9Section1.region : '',
    //   ZipCode: i9Section1.country === 'US' ? i9Section1.postalCode : '',
    //   PostalCode: i9Section1.country !== 'US' ? i9Section1.postalCode : '',
    //   FromDateMonth: i9Section1.fromDate
    //     ? toAbbrMonth(i9Section1.fromDate.split('-').pop())
    //     : '',
    //   FromDateYear: i9Section1.fromDate ? i9Section1.fromDate.split('-').shift() : '',
    //   ToDateMonth: i9Section1.toDate
    //     ? toAbbrMonth(i9Section1.toDate.split('-').pop())
    //     : '',
    //   ToDateYear: i9Section1.toDate ? i9Section1.toDate.split('-').shift() : '',
    //   RegionList: [], // TODO, everything below this.
    //   TypeName: 'AddressHistory',
    //   HasError: false,
    //   isEdit: false,
    //   ErrorMessages: [],
    //   hasOverlap: false,
    //   hasGap: false,
    //   CountErrorMessage: '',
    //   DataLinks: [],
    //   InviteID: 0, // TODO
    // }));
}

export function transformRegionsResponse(response) {
    const regions = JSON.parse(response) || [];
    regions.forEach(region => {
        /* eslint-disable no-param-reassign */
        region.name = region.name.trim();
        region.value = region.value.trim();
        /* eslint-enable no-param-reassign */
    });
    return regions;
}
