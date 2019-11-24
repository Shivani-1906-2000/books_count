import React,{Component} from 'react';

class Book extends Component
{
    state={count:0}
  Add=()=>
  {
    this.setState({count:this.state.count+1})
  }
  Lower=()=>
  {
    this.setState({count:this.state.count-1})
  }
  Reset=()=>
  {
    this.setState({count:0})
  }
    render()
    { const {id,img,title,author}=this.props.info
       return( 
       <div className='book'>
       <img src={img} height='150px' width='150px'/> 
       <h2>{title}</h2>
       <h3>by {author}</h3>
       <button onClick={this.Add}>Add Count</button>
       <button onClick={this.Lower}>Lower Count</button>
       <button onClick={this.Reset}>Reset</button>

       <h1> {this.state.count} </h1>
       </div>); 
    }
}


 export default Book;
