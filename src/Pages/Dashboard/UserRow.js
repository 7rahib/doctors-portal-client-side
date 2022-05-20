import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch, setDeletingUser }) => {
    const { email, name, role } = user;
    const makeAdmin = () => {
        fetch(`https://mysterious-tundra-54205.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Only an admin make make another admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role === 'admin' ? <button className="btn btn-xs btn-success" disabled="disabled">Is an Admin</button> : <button onClick={makeAdmin} className="btn btn-warning btn-xs">Make Admin</button>}</td>
            <td><label onClick={() => setDeletingUser(user)} for="user-confirm-modal" class="btn btn-error btn-xs">Remove</label></td>
        </tr>
    );
};

export default UserRow;