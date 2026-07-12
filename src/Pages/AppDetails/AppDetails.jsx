import React, { useEffect, useState } from 'react';
import { IoIosStarHalf, IoMdStar } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import Reviews from './Reviews';
import { GrInstallOption } from 'react-icons/gr';
import { RiUninstallLine } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';
// import DetailsCard from './DetailsCard';

const AppDetails = () => {
    const [install, setInstall] = useState(false)
    const { id } = useParams();
    const appsData = useLoaderData();
    const app = appsData.find(app => app.id === id);
    const { reviews, features, banner, name, thumbnail, description, rating, category, developer, downloads } = app

    return (
        <div className="card bg-gray-100 shadow-sm my-4">
            <Helmet>
                <title>AppStore || {name}</title>
            </Helmet>
            <figure className="px-10 pt-6">
                <img
                    src={banner}
                    alt="banner image"
                    className="rounded-xl w-full h-[500px] object-cover" />
            </figure>
            <div className='px-10 my-8'>
                <div className=" flex items-center gap-4">
                    <img className='w-14 h-14 border rounded-full' src={thumbnail} />
                    <div>
                        <div className='flex items-center gap-4'>
                            <h2 className='text-2xl font-semibold'>{name}</h2>
                            <span className='text-sm font-bold text-green-800'>{category}</span>
                        </div>
                        <h1 className='text-xl text-gray-500'>{developer}</h1>
                        <div className='flex gap-10 items-center '>
                            <div className='flex gap-1'> Rating  :
                                <IoMdStar size={22} className='text-amber-300' />
                                <IoMdStar size={22} className='text-amber-300' />
                                <IoMdStar size={22} className='text-amber-300' />
                                <IoIosStarHalf size={20} className='text-amber-300' />
                                <p className='text-blue-400 text-xl'>{rating}</p>
                            </div>
                            <div className='flex gap-2 border-blue-400 border p-1 rounded-2xl bg-blue-100 text-sm '>
                                <MdOutlineFileDownload size={24} /> <h2 >{downloads} M Downloads</h2>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='space-y-4'>
                    <p className='font-semibold text-gray-600 my-4'>{description}</p>
                    <div className='flex items-center gap-4 '>
                        Features :
                        {
                            features.map((feature, index) => <p
                                className='border-amber-400 border p-2 rounded-2xl bg-amber-50 text-sm' key={index}> {feature}</p>)
                        }
                    </div>
                    <div>

                        <button onClick={() => setInstall(!install)} className='btn btn-primary px-10 text-xl'>{install ? <p className='flex items-center gap-2'><RiUninstallLine /> UnInstall</p> : <p className='flex items-center gap-2'> <GrInstallOption /> Install</p>} </button>
                    </div>
                    <div>
                        {
                            reviews.map((review, index) => <Reviews key={index} review={review}></Reviews>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;