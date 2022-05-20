import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
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

    const handleDelete = email => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} is removed as user`)
                    refetch()
                    console.log(data)
                }
                else {
                    toast.error(`Failed to remove ${name} as user`)
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role === 'admin' ? <button className="btn btn-xs btn-success" disabled="disabled">Is an Admin</button> : <button onClick={makeAdmin} className="btn btn-warning btn-xs">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(email)} className="btn btn-error btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;