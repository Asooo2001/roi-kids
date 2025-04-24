import "./Teachers.css"
import TeachersMember from "./TeachersMember"
import member1 from "../assets/teachers/milot.png"
import member2 from "../assets/teachers/shyhrete.png"
import member3 from "../assets/teachers/anila.png"
import member4 from "../assets/teachers/teuta.png"
import member5 from "../assets/teachers/liri.png"
import member6 from "../assets/teachers/blerta.png"
import member7 from "../assets/team-members/fatbardha.png"




const Teachers=()=> {
  const teamMembers = [
    {
      id: 1,
      name: "Milot Reqica",
      title: "Graphic Design Trainer",
      description:
        "Milot Reqica është dizajner grafik dhe web designer me përvojë 6 vjeçare. Është themelues dhe CEO i kompanisë M Creative.",
      imageUrl: member1, 
    },
    {
      id: 2,
      name: "Shyhrete Buzaku",
      title: "Full Stack & React JS Trainer",
      description:
        "Është inxhiniere e softuerit me përvojë 6 vjeçare në fushën e programimit. Ka themeluar edhe kompaninë e saj të programimit.",
      imageUrl: member2,
    },
    {
      id: 3,
      name: "Anila Kelmendi",
      title: "Digital Marketing Trainer",
      description:
        "Është specialiste e marketingut, me përvojë 5 vjeçare, të fokusuar në Marketing Digjital.",
      imageUrl: member3,
    },
    {
      id: 4,
      name: "Teuta Hoti",
      title: "Python Trainer",
      description:
        "",
      imageUrl: member4,
    },
    {
      id: 5,
      name: "Liri Kosova",
      title: "Video Editing Trainer",
      description:
        "Është video editor me përvojë 10 vjeçare. Aktualisht është video editor dhe operator i kamerës në Top Channel.",
      imageUrl: member5,
    },
    {
      id: 6,
      name: "Blerta Dedinca",
      title: "Java Trainer",
      description:
        "Është programere me përvojë disavjeçare në gjuhën programuese Java dhe ka përfunduar një mori projektesh për kompani.",
      imageUrl: member6,
    },
    {
      id: 7,
      name: "Fatbardhë Kiqina",
      title: "PR & Media Relations Trainer",
      description:
        "Është eksperte e komunikimit më shumë se 8 vite përvojë pune në PR, Marketing Digjital dhe mësimdhënie në nivel akademik.",
      imageUrl: member7,
    },
   
  ]

  return (
    <div id="profesoret-tane" className="teachers-section">
      <h1 className="teachers-title">Ligjëruesit</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeachersMember
            key={member.id}
            name={member.name}
            title={member.title}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Teachers;
