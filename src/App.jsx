import { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
// import "./index.scss";
import "./App.css";
import "./style.css";
// import Header from "./LayOut/Header";
import Sidebar from "./Layouts/Sidebar";
import Header from "./Layouts/Header";
import Home, { SummaryTab } from "./Component/Home";
import Todo from "./Component/ToDo/todo";
import ToDOKAnban from './Component/ToDo/ToDOKAnban';
import NotesL from "./Component/Notes/NotesL";
import NotesApp from './Component/Notes/NotesApp';
import Calendars from './Component/Calendar/Calendar';
import ProjectDashboard from "./Component/Project/projectdashboard";
import AllProjectCalendar from "./Component/Project/AllProjectCalendar";
import ScheduleTimeline from "./Component/Project/ProjectSchedule";
import SchedulingWorkload from "./Component/Project/SchedulingWorkload";
import HRDashboard from "./Component/HRComponents/dashboard";
import MyProfile from "./Component/HRComponents/MyProfile";
import EmployeeCalendar from "./Component/HRComponents/EmployeeCalendar";
import Orgnization from "./Component/HRComponents/Orgnization";
import Recruitment from "./Component/HRComponents/RecruitmentKanban";
import Performance from './Component/HRComponents/Performance';
import HomeIncoming from "./Component/Finance/Homeincoming";
import Allproducts from './Component/CRMBPAV/Allproducts';
import AccountsPayable from "./Component/Finance/AccountsPayable";
import Companies from "./Component/CRMBPAV/Companies";
import CrmDashboard from "./Component/CRMBPAV/CrmDashboard";

import ContactListHead from "./Component/CRMBPAV/ContactListHead";
import DealsKanban from "./Component/CRMBPAV/DealsKanban";
import Allquots from "./Component/CRMBPAV/Allquots";
import AllQuotes from './Component/CRMBPAV/AllQoutes';
import Analytics from "./Component/CRMBPAV/Analytics";
import Dashboard from "./Component/Supporthub/DashBoard";
import HelpDesk from "./Component/Supporthub/HelpDesk";
import TicketCard from "./Component/Supporthub/TicketCard";
import ProjectKanban from "./Component/Project/ProjectKanban";
import AddTask from "./Component/Project/ProjectAddTask";
import Compensation from "./Component/HRComponents/Compensation";
import Roadmap from "./Component/HRComponents/roadMap";
import PerformanceLayout from "./Component/HRComponents/PerformanceLayout";
import MyGoals from "./Component/HRComponents/MyGoals";
import Documents from "./Component/HRComponents/Documents";
import NewGoal from "./Component/HRComponents/NewGoal";
import PaymentLinkList from './Component/CRMBPAV/PaymentLinkList'
import AllInvoices from "./Component/Finance/AllInvoices";
import CRMInvoiceCard from "./Component/CRMBPAV/CRMInvoiceCard";
import NewInvoice from "./Component/CRMBPAV/NewInvoice";
import PaymentLink1 from './Component/CRMBPAV/PaymentLink1';
import Setting from "./Component/CRMBPAV/Setting";
import CreateQouteStepper from "./Component/CRMBPAV/CreateQouteStepper";
import SupportAnalytics from "./Component/Supporthub/SupportAnalytics";
import HelpDeskSettings from "./Component/Supporthub/HelpDeskSettings";
import KnowledgeBase from "./Component/Supporthub/KnowledgeBase";
import Feedback from "./Component/Supporthub/Feedback";
import InventoryIndex from "./Component/Inventory/InventoryIndex";
import DynamicCalendar from "./Component/Inventory/CalendarView";
import InventoryOrderList from './Component/Inventory/InventoryOrderList';
import CustomersPage from "./Component/Inventory/CustomersList";
import InventoryList from "./Component/Inventory/InventoryList";
import InventoryItemCard from './Component/Inventory/InventoryItemCard';
import AllBills from "./Component/Finance/AllBills";
import NewBill from "./Component/Finance/NewBill";
import AllCreditNote from "./Component/Finance/AllCreditNotes";
import NewCreditNote from "./Component/Finance/NewCreditNote";
import AllRemitance from "./Component/Finance/AllRemitance";
import NewRemittanceSlip from "./Component/Finance/NewRemittanceSlip";
import AllPurchaseBills from "./Component/Finance/AllPurchaseBills";
import NewPurchaseOrder from "./Component/Finance/NewPurchaseOrder";
import Expenses from "./Component/Finance/Expenses";
import NewExpenseClaim from './Component/Finance/NewExpenseClaim'
import NewMileageClaim from "./Component/Finance/NewMileageClaim";
import FileManager from "./Component/FileManager";
import SocialFeed from "./Component/Social/Social";
import OrdersPage from './Component/Inventory/OrdersPage';
import DealsCard from "./Component/CRMBPAV/DealsCard";
import SupportLayout from './Component/Supporthub/SupportLayout';
import SummaryView from "./Component/Supporthub/SummaryView";

// import SocialFeed from "./Component/Social/Newsfeed";

// import Calendars from "./Component/Calendar/Calendar";
// import Todo from "./Component/ToDo/todo";

function AppContent() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setSidebarOpen(!isSidebarOpen);
  
  };

  return (
    <div className="App">
    <Header  toggleSidebar={toggleSidebar}/>

    <div className={`app-container ${isSidebarOpen ? "" : "collapsed"}`}>
     <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`main-content `}>

       
        

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/calendar" element={<Calendars />} />
              
              <Route path="/ToDo" element={<Todo />} />
              <Route path="/todokanban" element={ <ToDOKAnban />} />
              <Route path="/todoaddtask" element={ <AddTask />} />


              <Route path="/notes" element={<NotesL />} />
              <Route path="/noteslist" element={<NotesApp />} />
              {/* Project Routes */}
             <Route path='/projectdashboard' element={ <ProjectDashboard />} />
            < Route path='/projectkanban' element={ <ProjectKanban /> } />
            <Route path='/projectaddtask' element={ <AddTask />} />
             <Route path='/allproject' element={ <AllProjectCalendar />} />
              <Route path='/projectschedule' element={<ScheduleTimeline />} />
              <Route path='/projectworkload' element={<SchedulingWorkload /> } />
              
              {/* HR Routes */}
              <Route path='/hrdashboard' element={ <HRDashboard />} />
             <Route path='/myprofile' element={ <MyProfile />} />
              <Route path='/people' element={<EmployeeCalendar />} />
              <Route path='/performance' element={<Performance /> } />
              <Route path="/compensation" element={<Compensation />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/timeoff" element={<EmployeeCalendar />} />
              <Route path="/mygoals" element={<MyGoals />} />
              <Route path="/newgoal" element={<NewGoal />} />

              {/* <Route path="/performance/*" element={<PerformanceLayout /> }> */}
             {/* Child Routes Rendered in the Outlet */}
             {/* <Route index element={<Performance />} />  */}
              {/* <Route path="performance" element={<PerformanceLayout />}  /> */}
              {/* <Route path="orderlist" element={<InventoryOrderList />} />  */}
             
              {/* </Route> */}
              
              {/* <Route path="" element={<OrdersPage />} /> */}
              {/* <Route path="demo" element={<Demo />} /> */}

              <Route path='/recruitment' element={<Recruitment /> } />
              <Route path='/company' element={<Orgnization /> } />
              <Route path='/hrcompensation' element={<Compensation /> } />
              <Route path="/roadmap" element={ <Roadmap />} />

              <Route path='/accountspayable' element={ <AccountsPayable />} />
             <Route path='/accountsrecievable' element={ <HomeIncoming />} />
              <Route path='/products' element={<Allproducts />} />
              <Route path='/customers' element={<Companies  /> } />
              <Route path='/suppliers' element={<Companies  /> } />
              <Route path="/allpayment" element={<PaymentLinkList />} />
              <Route path="/payment/setting" element={<Setting />} />
              <Route path="/createpayment" element={<PaymentLink1 />} />
              <Route path="/allinvoices" element={<AllInvoices />} />
              <Route path="/newinvoice" element={<NewInvoice />} />
              <Route path="/createqoute" element={ <CreateQouteStepper />} />
              <Route path="/allbills" element={ <AllBills />} />
              <Route path="/createbill" element={ <NewBill />} />
              <Route path="/allcreditnotes" element={ <AllCreditNote />} />
              <Route path="/createcreditnote" element={ <NewCreditNote />} />
              <Route path="/allremitance" element={ <AllRemitance />} />
              <Route path="/createremitance" element={ <NewRemittanceSlip />} />
              <Route path="/allpurchase" element={ <AllPurchaseBills />} />
              <Route path="/createpurchasebill" element={ <NewPurchaseOrder />} />
              <Route path="/expenses" element={ <Expenses />} />
              <Route path="/newexpenseclaim" element={ <NewExpenseClaim />} />
              <Route path="/newmillageclaim" element={ <NewMileageClaim />} />




        {/* CRM Routes */}
              <Route path='/crm/dashboard'  element={<Home />} />
              <Route path="/crm/contacts"   element={<ContactListHead />} />
              <Route path='/crm/companies' element={<Companies />} />
              <Route path='/crm/deals' element={<DealsKanban  /> } />
              <Route path='/crm/quotes' element={<AllQuotes  /> } />
              <Route path='/crm/tasks' element={<Allproducts  /> } />
              <Route path='/crm/analytics' element={<Analytics  /> } />
              <Route path='/crm/crminvoiceCard' element={<CRMInvoiceCard  /> } />
              <Route path='/crm/dealscard' element={<DealsCard  /> } />


                {/* Support */}
                {/* <Route path='/support/dashboard'  element={<HelpDesk />} />
                <Route path='/support/analytics' element={<SupportAnalytics />} />
                <Route path='/support/alltickets' element={<HelpDesk  /> } />
                <Route path='/support/ticketcard' element={<TicketCard  /> } />
                <Route path="/support/setting" element={ < HelpDeskSettings />} />
                // <Route path="/knowledgebase" element={< KnowledgeBase /> } />
                <Route path="/feedback" element={< Feedback /> } /> */}

                <Route path='/support/*' element={<SupportLayout/>}>
                <Route index element={<HelpDesk  />} />
                <Route path='dashboard'  element={<HelpDesk />} />
                <Route path='analytics' element={<Analytics  /> } />
                <Route path='ticketcard' element={<TicketCard  /> } />
                <Route path="setting" element={ < HelpDeskSettings />} />
                <Route path="summaryview" element={<SummaryView /> } />
           
               {/* <Route path='/support/analytics' element={<SupportAnalytics />} /> */}
              <Route path='alltickets' element={<HelpDesk  /> } />
              </Route>
    
                <Route path="/inventory" element={< InventoryIndex /> } />
                <Route path="/inventory/calendar" element={< DynamicCalendar /> } />
                <Route path="/inventory/orders" element={< OrdersPage /> } />
                <Route path="/inventory/customers" element={< CustomersPage /> } />
                <Route path="/inventory/orderlist" element={< InventoryList /> } />
                <Route path="/inventory/itemcard" element={< InventoryItemCard /> } />
                
                <Route path="/files" element={<FileManager /> } />
                <Route path="/social" element={<SocialFeed /> } />


                {/* <Route path='/support/ticketcard' element={<TicketCard />} />
               <Route path='/support/analytics' element={<Allproducts />} />
              <Route path='/support/alltickets' element={<HelpDesk  /> } />
              <Route path='/support/quotes' element={<AllQuotes  /> } />
              <Route path='/support/tasks' element={<Allproducts  /> } />
              <Route path='/support/analytics' element={<Analytics  /> } />
              <Route path="/support/contacts"   element={<ContactListHead />} /> */}
              {/* <Route path='/social' element={<SocialFeed />} /> */}
            
  </Routes>
          
        
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
