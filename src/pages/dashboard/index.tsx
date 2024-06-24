import {useUser} from "@clerk/clerk-react"

const Dashboard = () => {
  const {user}=useUser()
  return (
    <div className='dashboard-container'>Wellcome!{user?.firstName} Here Are Your Finances</div>
  )
}

export default Dashboard
