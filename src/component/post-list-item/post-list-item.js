import React from 'react';

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-beteen">
            <span className="app-list-item-label">
                Hueee
            </span>
            <div className="d-flex justify-content-center aligin-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm">
                    <i className="fa fa-star"/>
                </button>
                <button 
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"/>
                </button>
                <i className="fa fa-heart"/>
            </div>
        </li>
    )
}

export default PostListItem;