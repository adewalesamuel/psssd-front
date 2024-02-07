import { Components } from "..";
import { Services } from "../../services";

export function ProductForm(props) {
    const abortController = new AbortController();

    const handleFileUpload = async file => {
        props.useProduct.setIsDisabled(true);

        try {
            const formData = new FormData();

            formData.append('img', file);

            const {img_url} = await Services.FileService.store(
                formData, abortController.signal);

            props.useProduct.setFile_url(img_url);
        } catch (error) {
            console.log(error);
        } finally {
            props.useProduct.setIsDisabled(false);
        }

    }
    const handleImageUpload = async file => {
        props.useProduct.setIsDisabled(true);

        try {
            const formData = new FormData();

            formData.append('img', file);

            const {img_url} = await Services.FileService.store(
                formData, abortController.signal);

            props.useProduct.setImg_url(img_url);
        } catch (error) {
            console.log(error);
        } finally {
            props.useProduct.setIsDisabled(false);
        }

    }
    return (
        <form className='form'onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_url'>Image de l&apos;article</label>
                        <Components.ImageFileInput img_url={props.useProduct.img_url} 
                        handleFileChange={handleImageUpload} />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='category_id'>Catégorie</label>
                        <select
                            className='select2 form-control'
                            id='category_id'
                            name='category_id'
                            value={props.useProduct.category_id ?? ''}
                            disabled={props.isDisabled}
                            onChange={(e) => props.useProduct.setCategory_id(e.target.value) ?? null}
                        >
                            <option hidden>Choisissez une catégorie</option>
                            {props.categories.map((category) => {
                                return (
                                    <option key={Math.random()} value={category.id ?? ''}>
                                        {category.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Nom de l&apos;article</label>
                        <input
                            className='form-control'
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Nom'
                            value={props.useProduct.name ?? ''}
                            disabled={props.isDisabled}
                            onChange={(e) => props.useProduct.setName(e.target.value) ?? null}
                            required
                        />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='price'>Prix</label>
                        <input
                            className='form-control'
                            type='number'
                            id='price'
                            name='price'
                            placeholder='Prix'
                            value={props.useProduct.price ?? ''}
                            disabled={props.isDisabled}
                            onChange={(e) => props.useProduct.setPrice(e.target.value) ?? null}
                            required
                        />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <textarea
                            className='form-control'
                            type='text'
                            id='description'
                            name='description'
                            placeholder='Description'
                            rows={3}
                            value={props.useProduct.description ?? ''}
                            disabled={props.isDisabled}
                            onChange={(e) => props.useProduct.setDescription(e.target.value) ?? null}
                            required
                        ></textarea>
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <div className='form-group'>
                        <label htmlFor='initial_stock'>Stock initial</label>
                        <input
                            className='form-control'
                            type='number'
                            id='initial_stock'
                            name='initial_stock'
                            placeholder='Stock initial'
                            value={props.useProduct.initial_stock ?? ''}
                            disabled={props.isDisabled}
                            onChange={(e) => props.useProduct.setInitial_stock(e.target.value) ?? null}
                            required
                        />
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <div className='form-group'>
                        <label htmlFor='current_stock'>Stock actuel</label>
                        <input
                            className='form-control'
                            type='number'
                            id='current_stock'
                            name='current_stock'
                            placeholder='Stock actuel'
                            value={props.useProduct.current_stock ?? ''}
                            disabled={props.isDisabled}
                            onChange={(e) => props.useProduct.setCurrent_stock(e.target.value) ?? null}
                            required
                        />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor="basicInputFile">Fichier</label>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" 
                            role='button' onChange={e => handleFileUpload(e.target.files[0])}
                            accept=".azw,.csv,.doc,.docx,.epub,.html,.htm,.odp,.ods,.odt,.pdf,.xhtml,.xls,.xlsx,.xml"/>
                            <label className="custom-file-label overflow-hidden" htmlFor="inputGroupFile01"
                            style={{whiteSpace: 'nowrap'}}>
                                {(props.useProduct.file_url && props.useProduct.file_url !== "" ) ?
                                props.useProduct.file_url : "Aucun fichier sélectionné"}
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col-12 text-right'>
                    <button
                        disabled={props.isDisabled ?? false}
                        type='submit'
                        className='btn btn-primary'
                        onClick={props.handleFormSubmit}
                    >
                        <span className="text-uppercase">
                            {props.isDisabled ? "Chargement..." : "Enregistrer"}
                        </span>
                    </button>
                </div>
            </div>
        </form>
    );
}
