import React from 'react';
import Total from './total';
import Image2 from './image2.png';



class Home extends React.Component {
    constructor(){
        super();
        this.state={
            billList:[],
            billName: "",
            billAmount: null,
            dueDate: "",
            totalAmount: null,
            incomeAmount: null

        }
    } //end of constructor


    handleNameInput=(e)=>{
        this.setState({billName:e.target.value});
    }
    handleAmountInput=(e)=>{
        this.setState({billAmount:e.target.value});
    }
    handleDueDateInput=(e)=>{
        this.setState({dueDate:e.target.value});
    }

    handleIncomeInput=(e)=>{
        this.setState({incomeAmount:e.target.value});
    }

    handleClick=()=>{
        let billObj = {
            billName:this.state.billName,
            billAmount:parseFloat(this.state.billAmount),
            dueDate: this.state.dueDate
        };
        this.setState(
            {billList: [...this.state.billList, billObj], billName: "", billAmount: "", dueDate: "", incomeAmount: ""}
            );
        }

    
    onAdd = () => {
            
            var sumTotal = 0;

            for(var i = 0; i < this.state.billList.length; i++){
                sumTotal = this.state.billList[i].billAmount + sumTotal;
            }

            this.setState({totalAmount: sumTotal})
        }
    
    onSubtract = () => {
        this.setState({
            spendingMoney: parseFloat(this.state.incomeAmount) 
            - parseFloat(this.state.totalAmount)
        });

    }


    render(){
        let billElementArr = this.state.billList.map((addBill, index)=>{
                return(
                    <div key={index}>
                        <div className="billTitle">
                             {addBill.billName}
                        </div>
                        <div className="amtTitle">
                         amount due {addBill.billAmount}
                        </div>
                        <div className="dueTitle">
                        due date {addBill.dueDate}
                        </div>
                    </div>
                )
        })

      return <div>
        <h1 class="title">Expense Tracker</h1>
         
           
                    <div className="img">
                        <img src={Image2} width="347.5"/>
                    </div>
                    
            <div className="tracker">

            <table className="testing">
            <tr>
                <td>BILL NAME</td>
                <td><input 
                        value={this.state.billName} 
                        onChange={this.handleNameInput} /></td>
            </tr>

            <tr>
                <td>AMOUNT DUE</td>
                <td><input 
                value={this.state.billAmount} 
                onChange={this.handleAmountInput} /> </td>
            </tr>

            <tr>
                <td>DUE DATE</td>
                <td>
                <input 
                value={this.state.dueDate} 
                onChange={this.handleDueDateInput} placeholder="mm/dd/yyyy" />
                </td>
            </tr>

            <tr>
                <td colSpan="2">
                    <br/>
                <button onClick={this.handleClick}> Add Bill </button>
                </td>
                
            </tr>

            </table>
        </div>
            


            <div id="wrapper">
            <div id="left">
            <table className="infoResult">
                <tr>
                    <td colspan="2">
                    {billElementArr}
                </td>
             </tr>
            </table>
            </div>
        
        <div id="right"> 
        <table className="tableResult">
            
            <tr>
                <td>
                    {/* {this.state.totalAmount}
                <br/> */}
                {/* <button onClick={this.onAdd}>Total Bill Amount</button> */}
                <Total theCount={this.state.totalAmount}/>
                </td>

            </tr>
            <tr>
                <td colSpan="2">
                    
                    <button onClick={this.onAdd}>Total Expenses</button>
                </td>
            </tr>
            
            <tr>
                <td>
                    <br/>
                {this.state.totalAmount}  - 
                    <input 
                    value={this.state.incomeAmount} 
                    onChange={this.handleIncomeInput} placeholder="income"/> 
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <br/>
                <button onClick={this.onSubtract}> calculate </button>
                </td>
            </tr>

            <tr>
                <td colspan="2">
                    SPENDING MONEY
                    <br/>
                    {this.state.spendingMoney} 
                </td>
            </tr>
            
    
        </table>
    </div>
            
            </div>

      
      </div> //end of return div
    }

    
    
  }



  export default Home;