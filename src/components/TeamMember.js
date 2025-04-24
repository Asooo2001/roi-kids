import "./TeamMember.css"

function TeamMember({ name, title, description, imageUrl }) {
  return (
    <div className="member-container">
      <div className="member-image-container">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="member-image" />
      </div>
      <h2 className="member-name">{name}</h2>
      <p className="member-title">{title}</p>
      <p className="member-description">{description}</p>
    </div>
  )
}

export default TeamMember
