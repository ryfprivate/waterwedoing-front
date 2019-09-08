import axios from 'axios'
const callApi = suburb => {
    let newSuburb, src
    newSuburb = parseValue(suburb)
    console.log(newSuburb)
    src = `https://liveability-qld.herokuapp.com/${newSuburb}`
    return src
    // console.log(src)
    // axios({
    //     method: 'get',
    //     url: src,
    // }).then(function(response) {
    //     return response.data
    // })
}

const parseValue = suburb => {
    return suburb.split(' ').join('%20')
}

export default callApi
