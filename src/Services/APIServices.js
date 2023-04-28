const url = "http://localhost:8000/v1/sponsor/sponsorship/idpass"
const urllogin = new URL ("http://localhost:8000/v1/sponsor/sponsorship/idpass")

export const check_user = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fetchParameter = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    // 'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
            let serverResponse = await fetch(urllogin, fetchParameter);
            let response = await serverResponse.json();
            resolve(response);
        }
        catch (error) {
            reject(error);
        }
    })
}

export const reset_password = async (data, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("reset", data, token)
            let fetchParameter = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
            let serverResponse = await fetch(`http://localhost:8000/v1/sponsor/sponsorship/idpass`, fetchParameter);
            let response = await serverResponse.json();
            resolve(response);
        }
        catch (error) {
            reject(error);
        }
    })
}