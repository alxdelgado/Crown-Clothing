import React from 'react'; 
import { connect } from 'react-redux'; 

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';  

import './collection.styles.scss'; 


const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
); 

// 'ownProps' - property of the component we are wrapping in our connect()
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage); 

