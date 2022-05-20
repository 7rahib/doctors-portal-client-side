import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import DeleteConfirmationModal from './DeleteConfirmationModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://mysterious-tundra-54205.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    })
        .then(res => res.json())
    )


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-2xl text-secondary my-2 text-center'>Manage Doctors: {doctors.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirmationModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            ></DeleteConfirmationModal>}
        </div>
    );
};

export default ManageDoctors;