const ATMDeposit = ({ onChange, isDeposit }) => {
    const choice = ["Deposit", "withdraw"];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input type="number" width="200" onChange={onChange}></input>
        <input type="submit" width="200" value="Submit"></input>
      </label>
    );
  };
  
  const Account = () => {
    let deposit = 0; // state of this transaction
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = event => {
      console.log(`handleChange ${event.target.value}`);
      deposit = Number(event.target.value);
    };
    const handleSubmit = () => {
        event.preventDefault();
        if (!isDeposit && deposit > totalState) {
            alert("Insufficient funds. Cannot withdraw more than the current balance.");
        }else{
            let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
            setTotalState(newTotal);

        }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2 id="total">{status}</h2>
        <button onClick={() => setIsDeposit(true)}>Deposit</button>
        <button onClick={() => setIsDeposit(false)}>withdraw</button>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
      </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById("root"));