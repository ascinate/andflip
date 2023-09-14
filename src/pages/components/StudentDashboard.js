import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus, FiUser } from "react-icons/fi";
import { columns, data } from './components/parnterdashboard/ListData';
import DataTable from "react-data-table-component";
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import LoginHeader from "../LoginHeader";
import Breadcrum from "../Breadcrum";
import StudentMenu from "./student/StudentMenu";





function StudentDashboard() {

    document.title="Ai Jumble - Student Dashboard"

    useEffect(() => {

        window.scrollTo(0, 0)
      });

    const tableData = {
        columns,
        data,
      };

      

     return(
        <>
         <LoginHeader/>
         <SubBanner name="Dashboard"/>
         <main className="float-start w-100 body-part-main dsh-page">
              <div className="container mb-5">
                  <Breadcrum indexpage="Home" indexvisit="/" activepage="Listing"/>
              </div>
            <section className="parnten-listing d-inline-block w-100">
               <div className="container">
                    <h2 className="text-center"> Seller Portal </h2>
                    <div className="under-line text-center d-block w-100 mt-0"></div>
                       
                       <StudentMenu/>
                        <div className="body-sectionji d-inline-block w-100">
                                   <Link to="/addproduct" className="btn btn-adprocts ms-auto d-table mt-5"> <FiPlus/>   Add product </Link>

                            <div className="table-lise-div">
                                <DataTableExtensions
                                    {...tableData}
                                    >
                                    <DataTable
                                        noHeader
                                        defaultSortField="id"
                                        defaultSortAsc={false}
                                        pagination
                                        highlightOnHover
                                    />
                                    </DataTableExtensions>
                            </div>
                        </div>

                    </div>

                   
           
            </section>
         </main>
        </>
     )
}
export default StudentDashboard;