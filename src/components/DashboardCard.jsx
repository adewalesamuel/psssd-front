export function DashbaordCard(props) {
    return (
        <div className="card p-0 my-1 text-center rounded" 
        onClick={props.handleClick ?? null}>
            <div className="card-content">
                <div className="card-body p-0">
                    <div className="d-lg-flex justify-content-between">
                        <div className="widget-card-details d-flex flex-column 
                        justify-content-between p-sm-2 px-O py-1 w-100">
                            <div>
                                {props.iconElement}
                                <small className="font-weight-bold mb-0 mb-sm-1 text-info 
                                d-block">
                                    {props.title}
                                </small>
                                {/* <h3 className="font-weight-normal">
                                    {props?.value ?? "--"}
                                </h3> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}