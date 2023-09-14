import React,{ useEffect} from "react";
import SubBanner from "./components/SubBanner";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { columns, data } from './components/parnterdashboard/ListData';
import DataTable from "react-data-table-component";
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import LoginHeader from "../LoginHeader";



function PartnerListing() {

    document.title="AndFilp - Listing"

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
            <section className="parnten-listing d-inline-block w-100">
               <div className="container">
                    <h2 className="text-center"> Parnter Portal </h2>
                    <div className="under-line text-center d-block w-100 mt-0"></div>
                        <ul className="d-flex align-items-center mt-5 justify-content-center speicl-menu">
                        <li>
                            <NavLink to="/partnerdashoard" className="btn btn-menu">
                            <span> <FaHome/> </span>
                            Dashboard </NavLink>
                        </li>
                        <li>
                            <NavLink to="/partnerlisting" className="btn btn-menu">
                            <span> <FaThLarge/> </span>
                            Listing </NavLink>
                        </li>
                        <li>
                            <NavLink to="/partnersales" className="btn btn-menu">
                            <span>
                                <FaChartPie/>
                            </span>
                            Sales & Analytics </NavLink>
                        </li>
                        <li>
                            <NavLink to="/billing" className="btn btn-menu">
                            <span>
                                <FaChartPie/>
                            </span>
                            Billing </NavLink>
                        </li>
                        <li>
                            <NavLink to="/support" className="btn btn-menu">
                            <span>
                                <FaComments/>
                            </span>
                            Support </NavLink>
                        </li>
                        </ul>

                        <div className="body-sectionji d-inline-block w-100">
                                   <Link to="/" className="btn btn-adprocts ms-auto d-table mt-5"> <FiPlus/>   Add product </Link>

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
export default PartnerListing;