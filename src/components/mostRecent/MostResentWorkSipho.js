import "./MostResentWorkSipho.css";

function MostRecentWorkSipho() {
  let players = [
    {
      img: "mac.jpeg",
      name: "Alexis MacAllister",
      position: "Midfielder",
      number: 10,
      discription:
        "Alexis Mac Allister is an Argentine professional footballer who plays as a midfielder for Premier League club Liverpool and the Argentina national team. Born to a footballing family, Mac Allister started his senior career with Argentinos Juniors in 2016, winning the Argentine second division in his debut season.",
    },
    {
      img: "dom.jpeg",
      name: "Dominik  Szoboszlai ",
      position: "Midfielder",
      number: 8,
      discription:
        "Dominik Szoboszlai is a Hungarian professional footballer who plays as a midfielder for Premier League club Liverpool and captains the Hungary national team. Coming through the youth system, Szoboszlai made his senior debut in 2017 with Austrian club FC Liefering, the reserve team of Red Bull Salzburg.",
    },
    {
      img: "fab1.jpg",
      name: "Fabio Cavalho",
      position: "Midfielder",
      number: 28,
      discription:
        "Fábio Leandro Freitas Gouveia Carvalho is a Portuguese professional footballer who plays as a winger or attacking midfielder for Bundesliga club RB Leipzig, on loan from Premier League club Liverpool. A former youth international for England, Carvalho now represents Portugal internationally at under-21 level.",
    },
  ];

  return (
    <>
      <div className="most-recent" id="mostrecent">

        <h2>Most Recent Players</h2>
        <div className="person">
          {players.map((player) => (
            <div className="play">
              <img src={player.img} alt="" />
              <h2>{player.name}</h2>
              <h3>Position: {player.position}</h3>
              <h5>Kit Number: {player.number}</h5>
              <p>{player.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MostRecentWorkSipho;
