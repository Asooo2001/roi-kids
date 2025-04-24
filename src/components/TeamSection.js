import "./TeamSection.css"
import TeamMember from "./TeamMember"
import member1 from "../assets/team-members/arb.png"
import member2 from "../assets/team-members/fatbardha.png"
import member3 from "../assets/team-members/venera.png"
import member4 from "../assets/team-members/gentijana.png"
import member5 from "../assets/team-members/erion.png"
import member6 from "../assets/team-members/anisa.png"
import member7 from "../assets/team-members/valon.png"
import member8 from "../assets/team-members/floriant.png"



function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Arb Abdyli",
      title: "Founder & CEO",
      description:
        "Është ndërmarrës i cili ka nën udhëheqje disa biznese të suksesshme në fushën e teknologjisë informative brenda dhe jashtë Kosovës.",
      imageUrl: member1, 
    },
    {
      id: 2,
      name: "Fatbardhë Kiqina",
      title: "Chief Operating Officer",
      description:
        "Është eksperte e komunikimit, me më shumë se 7 vite përvoje pune në PR, Marketing Digjital dhe mësimdhënie në nivel akademik.",
      imageUrl: member2,
    },
    {
      id: 3,
      name: "Venera Zymberi",
      title: "Chief Financial Officer",
      description:
        "Është eksperte në fushën e financave dhe kontabilitetit me mbi 14 vjeçare në pozita dhe institucione të ndryshme vendore dhe ndërkombëtare.",
      imageUrl: member3,
    },
    {
      id: 4,
      name: "Gentijana Berisha",
      title: "Coordinator for Kosovo",
      description:
        "Është pedagoge e diplomuar dhe ka përvojë pune si gazetare. Është e apasionuar pas koordinimit të sistemeve dhe proceseve.",
      imageUrl: member4,
    },
    {
      id: 5,
      name: "Erion Gashi",
      title: "Coordinator for Albania",
      description:
        "Është koordinator i qendrës së ROI Academy në shtetin e Shqipërisë, i apasionuar pas teknologjisë informative, çfarë aktualisht edhe po studion.",
      imageUrl: member5,
    },
    {
      id: 6,
      name: "Anisa Berisha",
      title: "Graphic Designer",
      description:
        "Është dizajnere grafike, e punësuar menjëherë pas përfundimit të trajnimit në ROI Academy. Është e fokusuar edhe në dizajn enterieri.",
      imageUrl: member6,
    },
    {
      id: 7,
      name: "Valon Krasniqi",
      title: "Graphic Designer",
      description:
        "Është dizajner grafik në kompaninë Sharp Group dhe ROI Academy. Po ashtu, është edhe trajner i Dizajnit Grafik në ROI Kids.",
      imageUrl: member7,
    },
    {
      id: 8,
      name: "Floriant Dervishi",
      title: "Graphic Designer",
      description:
        "Është dizajner grafik në kompaninë Sharp Group dhe ROI Academy. Po ashtu, është edhe trajner i Dizajnit Grafik në ROI Kids.",
      imageUrl: member8,
    },
  ]

  return (
    <div id="ekipi-yne" className="team-section">
      <h1 className="team-title">Ekipi ynë</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMember
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

export default TeamSection
