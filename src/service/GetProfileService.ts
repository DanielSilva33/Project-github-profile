import axios from "axios";

class GetProfileService {
    async getProfile(user: any) {
        const baseURL = "https://api.github.com/users";

        const data = await axios({
            method: "get",
            url: `${baseURL}/${user}`,
        }).then(function (response) {
            return response.data;
        });

        return data;
    }
}

export { GetProfileService };
