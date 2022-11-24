import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Sellers = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <div className='d-flex justify-content-center'>

                <table className="table w-50">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th >Product Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            sellers.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>{item.product_name}</td>
                                <td>{item.seller_name}</td>
                                <td>${item.re_price}</td>
                                <td><button className='btn btn-danger'>Delete</button></td>
                                <td><button className='btn btn-danger'>Advertise</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellers;