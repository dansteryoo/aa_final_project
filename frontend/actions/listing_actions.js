import * as ListingsAPIUtil from '../util/listings_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const CLEAR_LISTING_STATE = "CLEAR_LISTING_STATE";
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';


export const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
});

export const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
});

export const clearListingState = () => ({
    type: CLEAR_LISTING_STATE
})

export const updateBounds = (bounds) => ({
    type: UPDATE_BOUNDS,
    bounds
})


export const fetchListings = () => dispatch => (
    ListingsAPIUtil.fetchListings()
        .then(listings => dispatch(receiveListings(listings))
    )  
);

export const fetchListing = (listingId) => dispatch => (
    ListingsAPIUtil.fetchListing(listingId)
        .then(listing => dispatch(receiveListing(listing))
    )
);


export const fetchSearchResult = (keywords, startDate, endDate) => dispatch => (
    ListingsAPIUtil.fetchSearchResult(keywords, startDate, endDate)
        .then(listings => dispatch(receiveListings(listings))
    )
);