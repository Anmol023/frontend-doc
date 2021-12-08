import "../css/Table.css"
import React, { useState } from 'react'

export default function Table({data}){
    var count = 0
        return (
            <>
                <div className="main">
                    <div className="tablename">
                        <div className="head">
                            Search Result
                        </div>
                        <div className="pageselect">
                            <select className="options" aria-label="Default select example">
                                <option selected>Select Partner</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div>
                            <i class="bi bi-file-earmark-bar-graph"></i>
                        </div>

                    </div>

                    <table className="maintable" style={{border:"1px solid grey"}}>
                        <thead>
                            <tr className="tablehead" style={{border:"1px solid grey"}}>
                                <th style={{border:"1px solid grey"}}>Sr. No.</th>
                                <th style={{border:"1px solid grey"}}>Partner Name</th>
                                <th style={{border:"1px solid grey"}}>Lead ID</th>
                                <th style={{border:"1px solid grey"}}>Po.No./Pr.No./App.No.</th>
                                <th style={{border:"1px solid grey"}}>Issuance Date</th>
                                <th style={{border:"1px solid grey"}}>Doc. Type</th>
                                <th style={{border:"1px solid grey"}}>Doc. Name</th>
                                <th style={{border:"1px solid grey"}}>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row,column) => 
                            <tr key={column}>
                                <td >{count+=1}</td>
                                <td >{row.partnerName}</td>
                                <td >{row.leadId}</td>
                                <td >{row.partnerName}</td>
                                <td >{row.proposalNo}</td>
                                <td >{row.issuanceDate}</td>
                                <td >{row.docType}</td>
                                <td >{row.docName}</td>
                                <td >{row.docName}</td>
                            </tr>)}
                        </tbody>
                    </table>

                    <div>

                    </div>
                </div>

            </>
        )
}

