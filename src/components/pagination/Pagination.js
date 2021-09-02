import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumber.map(pageNum => {
                    return <li key={pageNum} className='page-item'>
                        <Link to={`/${pageNum}`} onClick={() => paginate(pageNum)} className='page-link'>{pageNum}</Link>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination;
