import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, img, specialty, email } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>{specialty}</td>
            <th>

                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error btn-xs">Remove</label>
            </th>
        </tr>
    );
};

export default DoctorRow;