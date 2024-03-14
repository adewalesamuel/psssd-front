export function DashbaordCard(props) {
    return (
        <div className="card p-0 my-1 text-center rounded-lg shadow-md" 
        onClick={props.handleClick ?? null}>
            <div className="card-content">
                <div className="card-body p-0">
                    <div className="d-lg-flex justify-content-between">
                        <div className="widget-card-details d-flex flex-column 
                        justify-content-between p-sm-2 p-1 w-100">
                            <div>
                                {props.iconElement}
                                <p className="font-weight-bold">{props.title}</p>
                                <h3 className="font-weight-normal">
                                    {props?.value ?? "--"}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}