export const httpMethodConstants = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
};

export const apiUrls = {
    GET_ALL_COUNTRIES: () => "https://soccer.sportmonks.com/api/v2.0/countries",
    GET_PLAYERS_FROM_COUNTRY: (countryId) => `https://soccer.sportmonks.com/api/v2.0/countries/${countryId}/players`,
    GET_PLAYER_STATISTICS: (playerId) => `https://soccer.sportmonks.com/api/v2.0/players/${playerId}`
}

export const playerPositions = (positionId) => {
    switch(positionId){
        case 1:
            return "Goalkeeper";
        case 2:
            return "Right Fullback";
        case 3:
            return "Left Fullback";
        case 4:
            return "Center Back";
        case 5:
            return "Sweeper";
        case 6:
            return "Holding Midfielder";
        case 7:
            return "Right Midfielder";
        case 8:
            return "Box-to-Box Midfielder";
        case 9:
            return "Striker";
        case 10:
            return "Attacking Midfielder";
        case 11:
            return "Left Midfielder";
        default:
            return "";
    }
}