import axios from './ajax'

export function get() {
    let curCity = JSON.parse(localStorage.getItem("curCity"))
    if (!curCity) {
        return new Promise((resolve, reject) => {
            const localCity = new window.BMap.LocalCity();
            localCity.get(async (res) => {
                const data= await getCityInfo(res.name)
                resolve(data)
            });
        })
    } else {
        return Promise.resolve(curCity)
    }
}

async function getCityInfo(name) {
    const [err, res] = await axios.get('/area/info?name=' + name)
    if (err) return
    localStorage.setItem("curCity", JSON.stringify(res.body))
    return res.body
}