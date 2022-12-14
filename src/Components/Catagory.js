import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Allcat from './Allcat';


const Catagory = () => {
    const { data: catagories = [], isLoading } = useQuery({
        queryKey: ['catagories'],
        queryFn: async () => {
            const res = await fetch("https://buy-lap-server-afk247.vercel.app/catagory");
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h1 className='text-info text-center  mt-5'>Category</h1>
            <div  className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 p-3 container m-auto">
                {
                    catagories.map(catagory => <Allcat key={catagory._id} catagory={catagory} />)
                }
            </div>
        </div>
    );
};

export default Catagory;