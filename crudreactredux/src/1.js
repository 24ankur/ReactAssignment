class simple extends React.Component{
    work(){
        alert("Hello")
    }

    render(){
        return(
            <button onClick={this.work} >click on me</button>

        )
    }
}


const list=['s','e','r'];
const listitems=()=>{
    const listname=list.map((n)=>
    <li key={n}>
        {n}
    </li>
    );
    return(
        <ul>{listname}</ul>

    )
}


