
const Users = ({ users, loading }) => {
    if (loading) {
        return <h2>Fetching...</h2>
    }

    return (
        <div className="row">
            {users.map(user => {
                return (
                    <div key={user.id} className="col-md-3">
                        <div key={user.id} className="card bg-primary ">
                            <div className="single-box">
                                <div className="image-area">
                                    <img className="thumbnail img-responsive m-5 rounded profile__image" src={user.avatar} alt={user.first_name} />
                                </div>
                                <div className='image-text bg-dark p-2 text-white'>
                                    <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                    <p className="card-text">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;
