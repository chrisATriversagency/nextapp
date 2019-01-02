import React from 'react';

export const currentUser = {
    userName: 'Thomas Johnson',
    clinicIds: [4, 5],
    activeClinic: 1,
    updateActiveClinic: id => ({})
}

const UserContext = React.createContext(currentUser);

export default UserContext;
