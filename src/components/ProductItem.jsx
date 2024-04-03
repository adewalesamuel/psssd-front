export function ProductItem({product, canDownlaod, productImg}) {
    return (
        <div className="px-1 col-6 col-lg-3 img-top-card productItem">
            <div className="card widget-img-top p-0">
                <div className="card-content">
                    <img className="card-img-top img-fluid mb-md-1" src={productImg} 
                    alt="Card image cap" style={{height: "200px", objectFit: 'cover'}}/>
                    <div className="heading-elements">
                        <i className="bx bx-dots-vertical-rounded font-medium-3 
                        align-middle text-white"></i>
                    </div>
                </div>
                {canDownlaod && 
                    <div className="card-footer text-center d-flex justify-content-between 
                    align-items-center">
                        <a href={product?.file_url} className='btn btn-info btn-block'
                        target='_blank' rel='noreferrer'>
                            <i className='bx bx-download'></i>
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}