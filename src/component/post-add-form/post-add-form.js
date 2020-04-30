import React from 'react';


const PostForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="WHAAT?"
                className="from-control new-post-label"
            />
            <button
            type="submit"
            className="btn btn-outline-secondary"
            >Добавить</button>
        </form>
    )
}

export default PostForm;