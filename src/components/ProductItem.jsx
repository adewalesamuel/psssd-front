export function ProductItem({product, canDownlaod, productImg}) {
    return (
        <div className="col-3 img-top-card productItem p-xxs position-relative">
            <div className="card widget-img-top p-0 mb-0">
                <a className="card-content" href={product?.file_url} target='_blank'
                rel='noreferer'>
                    <img className="card-img-top mb-md-1 rounded img-fluid" 
                    src={productImg} alt="Card image cap" style={{
                        minHeight: "80px",
                        objectFit: 'cover'
                    }}/>
                </a>
            </div>
            <a className="badge badge-pill text-white bg-primary bx bx-download 
            position-absolute p-xxs" href={product?.file_url} target='_blank'
                rel='noreferer' style={{
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)" 
            }}> </a>
        </div>
    )
}