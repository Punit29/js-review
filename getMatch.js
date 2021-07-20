async function getMatch(client,yr){
    
    try{
        let matchesQuery = `Select season.year, matches.id , matches.city,
        matches.date, matches.team1, matches.team2, matches.result,
        matches.dl_applied, matches.win_by_wickets, matches.player_of_the_match
                                from season join matches
                                ON matches.season = season.season_id
                                where year= ${yr}`;
    
        let result = await client.query(`${matchesQuery}`);
        
        return result.rows;    
    }catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = getMatch;