import React from 'react'

const User = ({ userData, query }) => {

    const filterData = userData.filter(item => {
        if (query === '') {
            return item;
        } else if (item.name.firstName.toLowerCase().includes(query.toLowerCase())) {
            return item;
        }
    })

    return (
        <>

            <div className='dataholder'>
                {filterData.length <= 0 ?
                    (<p>No data Found</p>) :
                    filterData.map((item) => (
                        <div key={item.id} className='item'>
                            <img src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1659035140~hmac=4ac833683d0839cfcb9834f3ce3e9b63" alt="user" />
                            <div className='user-item'>
                                <p><span>Name:</span> {item.name.firstName} {item.name.lastName}</p>
                                <p><span>Street:</span> {item.location.address}</p>
                                <p><span>City:</span> {item.location.city}</p>
                                {item.location.state && <p><span>State:</span> {item.location.state}</p>}
                            </div>
                        </div>
                    ))

                }
            </div>
        </>
    )

}

export default User
