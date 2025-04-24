import "./TeachersMember.css"

const TeachersMember = ({ name, title, description, imageUrl })=> {
  return (
    <div className="teacher-member-container">
      <div className="teacher-member-image-container">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="teacher-member-image" />
      </div>
      <h2 className="teacher-member-name">{name}</h2>
      <p className="teacher-member-title">{title}</p>
      <p className="teacher-member-description">{description}</p>
    </div>
  )
}

export default TeachersMember;
