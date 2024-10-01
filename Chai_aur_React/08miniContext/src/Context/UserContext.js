import React from 'react'

const UserContext = React.createContext()

export default UserContext;


// Provider : now every compoinent can have acess of all states through UserContext
{/* <UserContext>       
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext> */}
