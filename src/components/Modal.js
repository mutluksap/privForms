import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import OutsideClickHandler from 'react-outside-click-handler';
import {openModal} from "../redux/slices/Modal";
import {useForm} from "react-hook-form";
import login from "../pages/Login";
import {useEffect} from "react";

function Modal(){
    const {open} = useSelector(state => state.modal);
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const statePopup = () => {
        dispatch(openModal());
    }

    return(
        open && <div className="fixed top-0 left-0 bg-black/[.2] w-full h-full">
            <OutsideClickHandler  onOutsideClick={statePopup}>
                <form onSubmit={handleSubmit(data => {
                    console.log(data)
                    reset()
                }, data => console.log(data))} className="bg-white p-4 inline-block rounded absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
                    <div className="flex">
                        <div className="mr-2">
                            <label>
                                <div>Name</div>
                                <input {...register('name', {required: true} )} className="border rounded p-1 mb-2" type="text" placeholder="Name..."/>
                            </label>
                            {errors.name && <p>Lütfen bir isim giriniz.</p>}
                            <label>
                                <div>Surname</div>
                                <input {...register('surName')} className="border rounded p-1 mb-2" type="text" placeholder="Surname..."/>
                            </label>
                            <label>
                                <div>Mail</div>
                                <input {...register('mail')} className="border rounded p-1 mb-2" type="email" placeholder="Mail..."/>
                            </label>
                        </div>
                        <div>

                            <label>
                                <div>Birthday</div>
                                <input {...register('birthday')} className="border rounded p-1 mb-2" type="date" placeholder="Birthday..."/>
                            </label>
                            <div className="mt-3">
                                <div>Gender</div>
                                <label className="inline-block mr-2">
                                    <input {...register('gender')} className="mr-2" value="male" type="radio" name="gender"/>Male
                                </label>
                                <label>
                                    <input {...register('gender')} className="mr-2" value="female" type="radio" name="gender"/>Female
                                </label>
                            </div>
                            <label>
                                <div onClick={() => reset({})}>Phone</div>
                                <input {...register('phone')} className="border rounded p-1 mb-2" type="text" placeholder="Phone..."/>
                            </label>
                        </div>
                    </div>
                    <label className="w-full block mb-2">
                        <div>Password</div>
                        <input {...register('password')} type="password" className="border rounded p-1 w-full" placeholder="Password..."/>
                    </label>
                    <button type="submit" className="bg-emerald-600 text-white rounded p-1.5 w-full">Kaydet</button>
                </form>
            </OutsideClickHandler>
            </div>
    )
}

export default Modal;