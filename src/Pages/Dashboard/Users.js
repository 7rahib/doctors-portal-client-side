import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserDeleteModal from './UserDeleteModal';
import UserRow from './UserRow';

const Users = () => {
    const [deletingUser, setDeletingUser] = useState(null)
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://mysterious-tundra-54205.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="text-2xl text-secondary my-2 text-center">Users</div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                                setDeletingUser={setDeletingUser}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingUser && <UserDeleteModal
                deletingUser={deletingUser}
                refetch={refetch}
                users={users}
                setDeletingUser={setDeletingUser}
            ></UserDeleteModal>}
        </div>
    );
};

export default Users;