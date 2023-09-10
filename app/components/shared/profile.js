import ProfilePic from "./profilePic"

export default function Profile(props) {
  const { children } = props
  return <div className="flex flex-col md:flex-row border border-gray-300 p-4 mx-2 rounded-md">{children}</div>
}

Profile.Title = function ProfileTitle(props) {
  return <span className="font-bold text-center text-2xl my-2">{props.children}</span>
}

Profile.Pic = function Pic(props) {
  return (
    <div className="flex justify-center">
      <ProfilePic {...props} />
    </div>
  )
}

Profile.Section = function Section(props) {
  return (
    <div className="flex flex-col my-2">
      <div className="text-accent font-bold">{props.title}</div>
      {props.children}
    </div>
  )
}

Profile.Body = function Body(props) {
  return <div className="flex flex-col">{props.children}</div>
}

Profile.Header = function Header(props) {
  return <div className="md:mr-4">{props.children}</div>
}
