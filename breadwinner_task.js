<template>
<lightning-card>
  <h4 class="slds-section-title--divider seccolor" ><b>Summary Information of {accname} Account</b></h4><br>
              <table border="1px" class="slds-table  slds-table_striped">
                <tbody>
                  <tr	>
                    <td colspan="2" style="background:#e0edf5;"><b>Paid</b></td>
                    <td style="background:#e0edf5;">{invPaid.data}</td>
                  </tr>
                  <tr>
                   
                    <td colspan="2" ><b>Current Due</b></td>
                    <td>{invDue.data}</td>
                  </tr>
                  <tr>
                    <td rowspan="5" colspan="1" style="background:#e0edf5;"><b>Overdue</b></td>
                     <td style="background:#e0edf5;">1 - 30
                    </td>
                    <td style="background:#e0edf5;">{invThirty.data}
                    </td>
                  </tr>
                    <tr>
                     <td> 31 - 60
                    </td>
                    <td>{invSixty.data}
                    </td>
                  </tr>
                  <tr>
                    <td style="background:#e0edf5;">61- 90
                   </td>
                   <td style="background:#e0edf5;"> {invNinty.data}
                  </td>
                 </tr>
                 <tr>
                  <td>90 +
                 </td>
                 <td>{invNintyP.data}
                </td>
               </tr>
               <tr>
                <td style="background:#e0edf5;">Total Overdue
               </td>
               <td style="background:#e0edf5;">{invTotalOverdue.data}
              </td>
             </tr>
                  <tr>
                  
                    <td colspan="2"><b>Total Receivables</b></td>
                    <td> {invTotRec.data}</td>
                  </tr>
                </tbody>
              </table>
            </lightning-card>
              <lightning-card >
         
            <h4 class="slds-section-title--divider seccolor" ><b>Related Invoices of {accname} Account</b></h4><br>    
            <div style="height: 350px" class="slds-table_col-bordered slds-table_bordered">
            <lightning-datatable 
            data={invList} 
            columns={Columns} 
            key-field="Id">
            
            </lightning-datatable>
          </div>
  </lightning-card>
</template>
