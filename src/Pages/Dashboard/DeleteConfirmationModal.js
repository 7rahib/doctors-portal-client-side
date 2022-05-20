import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmationModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;
    const handleDelete = () => {
        fetch(`https://mysterious-tundra-54205.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} is removed as doctor`)
                    setDeletingDoctor(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name} ?</h3>
                    <p class="py-4">If you have any query you can contact him. His email address is {email}</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-error">Remove</button>
                        <label for="delete-confirm-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmationModal;