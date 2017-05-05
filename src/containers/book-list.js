import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} 
				onClick={() => this.props.selectBook(book)}
				className="list-group-item">
				{book.title} 
				</li>
			);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) { // glue to react and redux
	// Whatever is returned will show up as props inside of BookList

	return {
		books: state.books
	};  // object returns will be available to component's props
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all of our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}


// Promote booklist from a component to a container - it needs to know about this new dispatch method, selectBook
// Make it available as a prop.

//connect takes a function and component and produce a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 



