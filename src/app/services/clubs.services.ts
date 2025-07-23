import * as ClubsRepostory from "../repositories/clubs.repository";
import * as HttpResponse from "../utils/http.helper";

export const  getClubsService = async () => {
    const data = await ClubsRepostory.findAll();
    if(data)
        return await HttpResponse.ok(data);
    else
        return await HttpResponse.noContent();
};