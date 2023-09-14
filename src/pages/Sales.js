import React,{useEffect} from "react";
import SubBanner from "./components/SubBanner";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { columns, data } from './components/sales/SalesData';
import DataTable from "react-data-table-component";
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import LoginHeader from "../LoginHeader";
import SellerMenu from "./components/parnterdashboard/SellerMenu";


function Sales() {

    document.title="AndFilp - Sales & Billing "

    const tableData = {
        columns,
        data,
      };
      useEffect(() => {

        window.scrollTo(0, 0)
      });

     return(
        <>
        <LoginHeader/>
         <SubBanner indexpage="Home" indexvisit="/" activepage="Sales & Billing"/>
         <main className="float-start w-100 body-part-main dsh-page">
           
            <section className="parnten-listing d-inline-block w-100">
               <div className="container">
                    
                        <SellerMenu/>

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
export default Sales;