import Landing from './Landing/landingpage'
import Collab from './Collaborators/collabPage'
import Research from './Research/researchPage'
import Timeline from './Timeline/timeLinePage'

export default function Home() {
  return (
    <div className='container'>
      <main>
        <h1>Visual Detector Home Page</h1>
        <Landing></Landing>
        <Collab></Collab>
        <Research></Research>
        <Timeline></Timeline>
      </main>
    </div>
  )
}
