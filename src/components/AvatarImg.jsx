import avatarPlaceholder from '../app-assets/images/placeholder.jpg';
import { Utils } from '../utils';

export function AvatarImg(props) {
    const user = Utils.Auth.getUser();
    const avatarImg = !user.profile_img_url || user.profile_img_url === "" ?
    avatarPlaceholder : user.profile_img_url;
    
    return (
        <img className="rounded-circle" src={avatarImg} alt="avatar" 
        height={props.size ?? "40"} width={props.size ?? "40"} />
    )
}