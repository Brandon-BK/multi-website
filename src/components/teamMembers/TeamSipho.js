import "./TeamSipho.css";

function TeamSipho() {
  const members = [
    {
      img: "klopp.jpeg",
      name: "Jurgen Klopp",
      role: "Head Coach & Manager",
    },
    {
      img: "ass.jpeg",
      name: "Peter Krawietz",
      role: "Assistant Manager.",
    },
    {
      img: "pep.jpeg",
      name: "Pepijn Lijnders",
      role: "Assistant Manager.",
    },
    {
      img: "gk.jpeg",
      name: "John Achterberg",
      role: "First-Team Goalkeeping Coach.",
    },
  ];

  return (
    <>
      <div className="team" id="team">
        <h2>Team Members</h2>
        <p>This is Liverpool's Team</p>
        <div className="member">
            {members.map((member) => (
                <div className="peep">
                    <img src={member.img} alt=""/>
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>

      </div>
    </>
  );
}

export default TeamSipho;
