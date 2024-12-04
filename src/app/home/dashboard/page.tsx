"use client"
import Sidebar from './Sidebar';
import Header from './Header';
import TicketOverview from './TicketOverview';
import AgentProductivity from './AgentProductivity';
//import Navbar from '@/components/navbar';
//import HomeLayout from '@/components/layout'; // Asegúrate de importar HomeLayout
import SatisfactionChart from './SatisfactionChart';

export default function HomePage() {
    return (
    //    <HomeLayout>

        <div className="dashboard-container flex">
            
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="main-content flex-1 ">
                <Header />
                
                <div className="content-section p-6 overflow-y-auto max-h-[710px] ">
                    <TicketOverview />
                    <AgentProductivity />
                </div>
            </main>
        </div>
       // </HomeLayout>

    );
    
}