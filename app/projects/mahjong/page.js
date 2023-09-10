import Profile from "@/app/components/shared/profile"

export default function Mahjong() {
  return (
    <div className="theme-mahjong bg-primary min-w-screen min-h-screen">
      <LastMatch />
    </div>
  )
}

function LastMatch() {
  return (
    <div>
      <Profile>
        <Profile.Header>
          <Profile.Pic src="/profile.jpg" alt="headshot" />
        </Profile.Header>
        <Profile.Body>
          <Profile.Title>David Chen</Profile.Title>
          <Profile.Section title="Last Match">
            <p>yoyo</p>
          </Profile.Section>
        </Profile.Body>
      </Profile>
    </div>
  )
}
