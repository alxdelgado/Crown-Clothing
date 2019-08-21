import React from 'react';
import { Route } from 'react-router-dom'; 

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; 
import CollectionPage from '../collection/collection.component';


const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> 
    </div>
);

export default ShopPage; 

// Notes:
    // Nested Routing - we want our collection to dynamically pluck off the right category from our reducer, so that it knows which items to display related to the category we are on. 
    // "match.path" - allows us to access 'categoryId' as a parameter on the match object when we are inside of our category page