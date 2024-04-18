import { useState } from "react";

export function DashbaordCard(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`${isActive ? 'col-12' : 'col-6'}`}>
            <div className="card p-0 my-1 text-center rounded"
            onClick={() => setIsActive(!isActive)}>
                <div className="card-content">
                    <div className="card-body p-0">
                        <div className="d-flex justify-content-between">
                            <div className={`widget-card-details d-flex flex-column 
                            justify-content-between p-sm-2 px-O py-1 ${isActive ? 'w-50' : 'w-100'}`}>
                                <div>
                                    {props.iconElement}
                                    <small className="font-weight-bold mb-0 mb-sm-1 text-info 
                                    d-block">
                                        {props.title}
                                    </small>
                                </div>
                            </div>
                            {isActive && 
                                <div className="widget-card-details d-flex flex-column p-sm-2 
                                px-1 py-1 text-left bg-info rounded  w-50 position-relative" 
                                onClick={props.handleClick ?? null}>
                                    <small className="font-weight-bold mb-0 mb-sm-1 text-white 
                                    d-block">
                                        {props.title}
                                    </small>
                                    <h2 className="font-weight-normal text-white">
                                        {props?.value ?? "--"}
                                    </h2>
                                    <small className="position-absolute text-white"
                                    style={{bottom: '0.2rem', right:'0.8rem', fontSize: '0.5rem'}}>
                                        Voir plus
                                    </small>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}