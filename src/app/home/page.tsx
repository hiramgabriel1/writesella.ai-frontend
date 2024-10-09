"use client";
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { LiaThumbtackSolid } from "react-icons/lia";
import { AiOutlineEllipsis } from "react-icons/ai";
import { TfiClip } from "react-icons/tfi";
import { Avatar } from 'primereact/avatar';
import { LiaBullhornSolid } from "react-icons/lia";
import { Paginator } from 'primereact/paginator';
import Table from '../components/Table';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema PrimeReact
import CardTicker from '../components/CardTicket';
import { Card } from 'primereact/card';

export function HomePage() {
    const [dates, setDates] = useState<any | null>(null);

    return (
        <main className='w-full h-full flex bg-white'>

            <aside className='relative flex flex-col p-5 bg-[#f7f9faff] rounded-t-xl gap-5'>
                <section>
                    <header className='flex justify-between items-center '>
                        <h2 className='flex gap-3 items-center text-xl font-bold'>
                            <LiaThumbtackSolid className="size-6" />
                            Fijados
                        </h2>
                        <button>
                            <AiOutlineEllipsis className="size-5" />
                        </button>
                    </header>

                    <article className='p-3'>
                        <section className='flex gap-3 bg-white rounded-xl  px-5 py-3'>
                            <div>
                                <Avatar className='bg-blue-600 text-white ' label='JO' shape="circle" >
                                    {/*}
                                <Badge className='overflow-visible bg-green-50' value="3" severity="danger"/>
                            {*/}
                                </Avatar>
                            </div>
                            <main className='flex flex-col gap-2'>
                                <div className='flex justify-between gap-5'>
                                    <div className=' flex gap-3 items-center text-sm'>
                                        <p >Javier Ortiz</p>
                                        <p className='text-black/50'>Repile to you</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <TfiClip className="size-5" />
                                        <p className='text-black/50'>45s</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center '>
                                    <p className='font-bold'>Hey, how are you doing?</p>
                                    <div className='bg-blue-400 rounded-full size-4' />
                                </div>
                                <p className='text-sm'>Email all sent through but ...</p>
                            </main>
                        </section>
                    </article>
                </section>

                <section>
                    <header className='flex justify-between items-center '>
                        <h2 className='flex gap-3 items-center text-xl font-bold'>
                            <LiaBullhornSolid className="flex size-6" />
                            Recientes
                        </h2>
                        <button>
                            <AiOutlineEllipsis className="size-5" />
                        </button>
                    </header>

                    <article className='p-3'>
                        <section className='flex gap-3 bg-white rounded-xl  px-5 py-3'>
                            <div>
                                <Avatar className='bg-blue-600 text-white ' label='JO' shape="circle" >
                                    {/*}
                                <Badge className='overflow-visible bg-green-50' value="3" severity="danger"/>
                            {*/}
                                </Avatar>
                            </div>
                            <main className='flex flex-col gap-2'>
                                <div className='flex justify-between gap-5'>
                                    <div className=' flex gap-3 items-center text-sm'>
                                        <p >Javier Ortiz</p>
                                        <p className='text-black/50'>Repile to you</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <TfiClip className="size-5" />
                                        <p className='text-black/50'>45s</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center '>
                                    <p className='font-bold'>Hey, how are you doing?</p>
                                    <div className='bg-blue-400 rounded-full size-4' />
                                </div>
                                <p className='text-sm'>Email all sent through but ...</p>
                            </main>
                        </section>
                    </article>
                </section>

            </aside>

            <div className='relative flex-auto flex flex-col max-h-screen  h-max-[700px] '>

                <section className='flex flex-col w-full items-center'>
                   
                    <header className='flex justify-between w-full px-[5%] py-10 items-center'>
                        <h2 className='font-bold text-3xl'>Análisis</h2>
                        <Calendar className="flex items-center text-sm gap-3 py-2 px-3 border rounded-xl" placeholder='jul 13, 2022 - jul 20, 2022' showIcon dateFormat=' M dd, y' value={dates} onChange={(e: any) => setDates(e.value)} selectionMode="range" />
                    </header>


                    <div className='flex gap-5'>
                        <CardTicker title='Total de tickets' total={164} percentage={15} />
                        <CardTicker title='Total de tickets' total={164} percentage={15} />
                        <CardTicker title='Total de tickets' total={164} percentage={15} />
                    </div>
                
                </section>

                <section className='flex flex-col w-full items-center'>
                    <header className='w-full px-[5%] py-20'>
                        <h2 className='font-bold text-3xl'>Enviados</h2>
                    </header>

                    <div className=' flex flex-col flex-1 overflow-y-auto'>
                        <Table />
                    </div>
                </section>
            </div>

        </main>
    );
}

export default HomePage;