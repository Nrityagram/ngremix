const createClient = require("@sanity/client")

const client = createClient({
    projectId: 'zl5w3r2d',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03',
})

module.exports = client;