// Core
import React from 'react';
import {Link} from "react-router-dom";

//Style
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

//Utils
import {routes} from "../../_utils/Routes";

export const UserList = ({
    userList,
    handleRemove
}) => {
    return (
        <div>
            {
                userList.map(item => (
                    <div
                        key={item.id}
                        className={
                            'd-flex alert alert-info justify-content-between align-items-center p-3 w-100'
                        }
                    >
                        <div
                            className={'d-flex'}
                        >
                            <p className={'pr-3 mb-0'}>{item.name} {item.surname}</p>
                            <p className={'mb-0'}>{item.desc}</p>
                        </div>
                        <div>
                            <span
                                className={'btn btn-sm float-right'}
                            >
                            <DeleteOutlined
                                className={'text-danger'}
                                onClick={() => handleRemove(item.id)}
                            />
                        </span>
                            <Link
                                to={`${routes.updateUser}/${item.id}`}
                                className={'btn btn-sm float-right mr-3 mt-0'}
                            >
                                <EditOutlined
                                    className={'text-success'}
                                />
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}