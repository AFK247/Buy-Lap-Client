import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import toast from 'react-hot-toast';

const Allbuyers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://buy-lap-server-afk247.vercel.app/user');
            const data = await res.json();
            return data;
        }
    });

    const buyers = users.filter(user => user.role === "buyer");


    const handleDelete = (emailAdd) => {
        console.log("inside handle Allbuyer Delete email ",emailAdd);
        fetch(`https://buy-lap-server-afk247.vercel.app/deleteBuyer/${emailAdd}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.deletedCount > 0) {
                    alert("suceessfully Deleted")
                }
            })
    }



    return (
        <div>
            <h2 className='text-center'>All Buyers</h2>

            <div className='d-flex justify-content-center'>

                <table className="table w-auto">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role}</td>
                                <td><button onClick={() => handleDelete(user.email)} className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Allbuyers;