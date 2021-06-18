// Core
import React, {useEffect, useState} from "react";

//Actions
import {loadingUsers} from '../../_actions'

//ActionTypes
import {IS_LOADING} from "../../_actions/actionType";

//Redux
import {connect, useDispatch} from "react-redux";

//Components
import {UserList} from "../../components/UserList";
import {getUsers, removeUser} from "../../function";

//Paginate
import ReactPaginate from 'react-paginate';

//Style
import {toast} from "react-toastify";

const Home = ({user, loadingUsers}) => {
    const dispatch = useDispatch();
    const perPage = 5;
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState(user.slice(offset, offset + perPage))
    const [pageCount, setPageCount] = useState( Math.ceil(user.length / perPage))
    useEffect(() => {
        setData(user.slice(offset, offset + perPage))
        setPageCount(Math.ceil(user.length / perPage))

    }, [offset, user, pageCount])

    useEffect(() => {
        getUsers()
            .then(res => loadingUsers(res.data))
            .catch(err => console.log(err))
    }, [loadingUsers])

    const handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * perPage);
        setOffset(offset)
    };

    const handleRemove = async id => {
        if(window.confirm("Delete?")){
            dispatch({type: IS_LOADING})
            removeUser(id)
                .then(res => {
                    const remoteUser = user.find(e => e.id === id)
                    toast.error(`${remoteUser.name} ${remoteUser.surname} deleted`)
                    loadingUsers(res.data);
                })
                .catch((err) => {
                    toast.error(err.response.data);
                })
        }
    }

    return (
        <div className={'mt-3'}>
            <UserList userList={data} handleRemove={handleRemove} />
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                activeClassName={`page-item active`}
                pageLinkClassName={'page-link'}
            />
        </div>
    )
}

const mapStateToProps = ({userReducer: {user, pageCount}}) => {
    return {user, pageCount}
}

export default connect(mapStateToProps, {loadingUsers})(Home);