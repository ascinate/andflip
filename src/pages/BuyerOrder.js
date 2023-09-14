import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus, FiUser } from "react-icons/fi";
import { columns, data } from './components/buyer/ListData';
import DataTable from "react-data-table-component";
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import LoginHeader from "../LoginHeader";
import Breadcrum from "../Breadcrum";





function BuyerOrder() {

    document.title="AndFilp - Buyer Dashboard"

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
         <SubBanner indexpage="Dashboard" indexvisit="/dashboard" activepage="Order History"/>
         <main className="float-start w-100 body-part-main dsh-page">
             
            <section className="parnten-listing d-inline-block w-100">
               <div className="container">
                  
                       
                        <div className="body-sectionji d-inline-block w-100">
                                 

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
export default BuyerOrder;