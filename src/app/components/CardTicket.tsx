export default function CardTicker({title, total, percentage}: {title: string, total: number, percentage: number}) {
    return (
        <div className='flex flex-col bg-[#f0f9ffff] py-2 px-5 rounded-xl'>
            <header className='py-3'>
                <h3 className='font-medium'>{title}</h3>
            </header>
            <main className='flex'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-4xl font-bold'>{total}</h1>
                    <div className='flex gap-2'>
                        <p className='text-green-500'>+{percentage}%</p>
                        <p>de la semana pasada</p>
                    </div>
                </div>
                <div>
                </div>
            </main>
        </div>
    );
}