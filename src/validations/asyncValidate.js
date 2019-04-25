const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

/* This is just a test stub, not being used in the code anywhere */
const asyncValidate = (values /*, dispatch */) => {
    return sleep(1000).then(() => {
        // simulate server latency
        if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
            // eslint-disable-next-line no-throw-literal
            throw { email: 'Email already Exists' }
        }
    })
}