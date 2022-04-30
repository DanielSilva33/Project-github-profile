import { Request, Response } from "express";
import { GetProfileService } from "../service/getProfileService";

const profileService = new GetProfileService();
class GetProfileController {
    async getProfile(request: Request, response: Response) {
        const { user } = request.params;

        if (user) {
            const getProfile = await profileService.getProfile(user);

            return response.json(getProfile);
        } else {
            const user = "danielsilva33";
            const getProfile = await profileService.getProfile(user);

            return response.json(getProfile);
        }
    }
}

export { GetProfileController };
