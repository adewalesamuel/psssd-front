export function ProdcutItem({product, category, canDownlaod, productImg}) {
    return (
        <div className="col-xl-3 col-md-6 img-top-card">
            <div className="card widget-img-top p-0">
                <div className="card-content">
                    <img className="card-img-top img-fluid mb-1" src={productImg} 
                    alt="Card image cap" style={{height: "200px", objectFit: 'cover'}}/>
                    <div className="heading-elements">
                        <i className="bx bx-dots-vertical-rounded font-medium-3 
                        align-middle text-white"></i>
                    </div>
                    <div className="text-center">
                        <h4>{product.name}</h4>
                        <p>{category.name} {category?.category && 
                        `- ${category.category?.name ?? ""}`}</p>
                        <p className="px-2">{product.download_code}</p>
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