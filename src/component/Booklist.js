import React,{Component} from 'react';
import Book from './Book';
import BookData from './data'
class Booklist extends Component 
{
    
    state={books:BookData}
    render()
    {
        return(
            <div>
            {this.state.books.map((item) => <Book info={item} />)};
                </div>);
    }

}

export default Booklist;